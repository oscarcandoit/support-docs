---
url: https://developers.elementor.com/query-control-autocomplete-refactoring
scraped_at: 2025-10-20T01:12:41.779Z
---

# Query Control Autocomplete Refactoring

- Ohad Raz
- [August 12, 2019](https://developers.elementor.com/2019/08/12/)
- 0 Comments
- [Features](https://developers.elementor.com/category/features/)
- Elementor 2.6

![Cover image](https://developers.elementor.com/wp-content/uploads/2021/12/cover-1-1024x538.png)

### Purpose:

Standardize the way the various widgets access the Query-Control Module’s **autocomplete** & **show-title** functionality.

**Audience**: widgets developers.

This change was introduced in Elementor Pro 2.6.0.

The old API is deprecated and will be declared “end of life” in Elementor Pro 2.10.0 or 3.0.0 (whichever is earlier).

### Method:

Each widget using the _`ElementorPro\Modules\QueryControl\Module::QUERY_CONTROL_ID`_ control, should specify an **_autocomplete_** array, according to the following syntax:

```php rainbow rainbow-show
$this->add_control(
	'my_unique_control_id',
	[\
		//...\
		'type' => ElementorPro\Modules\QueryControl\Module::QUERY_CONTROL_ID,\
		'autocomplete' => [\
			'object' => ElementorPro\Modules\QueryControl\Module::QUERY_OBJECT_TAX,\
			'display' => 'detailed',\
			'by_field' => 'term_taxonomy_id',\
			'query' => [],\
		],\
	]
);

```

## “autocomplete” Properties:

`object` (required)(string) : The object to query, accepts:

- **_post_**: will use `WP_Query()`, if query\[‘post\_type’\] is empty or missing, will default to ‘any’.
- **_tax_**: will use `get_terms()`. When \` _post\_type_ \` is provided, `get_object_taxonomies()` is used to build that \` _taxonomy_ \` args that are passed to `get_terms()`. When both \` _taxonomy_ \` and \` _post\_type_ \` are provided, ‘post\_type’ is ignored.
- **_user_:** will use `WP_User_Query()` with the args defined in ‘ _query_‘, if none are provided, will default to search fields: \` _ID_ \` and \` _display\_name_ \` and search columns: \` _user\_login\`_ and \` _user\_nicename\`_.
- **_author_:** will use `WP_User_Query()`. The following pre-defined args are always added to the query args:
  - $query\[‘who’\] = ‘authors’
  - _$query\[‘has\_published\_posts’\] = true_
- **_library\_template_:** will use `WP_Query()` with add the following to the query args:
  - _$query\[‘post\_type’\] = Elementor\\TemplateLibrary\\Source\_Local::CPT_ **_;_**
  - _$query\[‘orderby’\] = ‘meta\_value’_ **_;_**
  - _$query\[‘order’\] = ‘ASC’_ **_;_**
- **_attachment_:** will use `WP_Query()` with _post\_type = attachment._ The following pre-defined args are always added to the query args:
  - _$query\[‘post\_type’\] = ‘attachment’_ **_;_**
  - _$query\[‘post\_status’\] = ‘inherit’_ **_;_**

`display` (string) : Output formating, accepts :

- **_minimal_**: (default) name only.
- **_detailed_**: name and context, according to one of the following patterns:
  - Post & Taxonomies: _\`<Taxonomy name\|Post-Type name> : \[parent\] … \[parent\] > name\`_
  - Users & Authors: _\`name <email>\`_
- **_user defined_** _:_ representing a user-defined hook, note that each \`object\` value requires a different hook string:

|     |     |
| --- | --- |
| **\`** **_object_** **\` value** | **Hook name** |
| _tax_ | _“elementor/query/get\_autocomplete/tax/{user defined value}”_ |
| _post \| attachment_ | _“elementor/query/get\_autocomplete/custom/{user defined value}”_ |
| _user \| author_ | _“elementor/query/get\_autocomplete/user/{user defined value}”_ |

`by_field` (string) : The Id field that is used for the term query, relevant only if \` **_object_** \` is set to either **_‘tax’_** or **_’cpt\_tax’_**.

`query` (array) : Array of args, as defined in WordPress, to be passed “as-is” to the relevant WordPress query object or function, see \` **_object\`_**.

##### Example:

**Before:**

```php rainbow rainbow-show
// In your Widget you would have
$this->add_control(
	'template_id',
	[\
		'label' => __( 'Choose Template', 'elementor-pro' ),\
		'type' => ElementorPro\Modules\QueryControl\Module::QUERY_CONTROL_ID,\
		'filter_type' => 'library_widget_templates',\
		'label_block' => ,\
	]
);

```

```php rainbow rainbow-show
// And to support it you whould also have

add_filter( 'elementor_pro/query_control/get_autocomplete/library_widget_templates', function ( array $results, array $data ) {
	$document_types = ElementorPro\Plugin::elementor()->documents->get_document_types( [\
		'show_in_library' => ,\
	] );
	$query_params = [\
		'post_type' => \Elementor\TemplateLibrary\Source_Local::CPT,\
		'posts_per_page' => -1,\
		'meta_query' => [\
			[\
				'key' => Elementor\Core\Base\Document::TYPE_META_KEY,\
				'value' => array_keys( $document_types ),\
				'compare' => 'IN',\
			],\
		],\
	];

	$query = new \WP_Query( $query_params );

	foreach ( $query->posts as $post ) {
		$document = \Elementor\Plugin::instance()->documents->get( $post->ID );

		if ( $document ) {
			$results[] = [\
				'id' => $post->ID,\
				'text' => $post->post_title,\
			];
		}
	}
	return $results;
}, 10, 2 );

add_filter( 'elementor_pro/query_control/get_value_titles/library_widget_templates', function ( $results, $data ) {
	$document = \Elementor\Plugin::instance()->documents->get( $data['id'] );

	if ( $document ) {
		$results[ $data['id'] ] = $document->get_post()->post_title;
	}

	return $results;
}, 10, 2 );

```

**After:**

```php rainbow rainbow-show
// In your widget
$document_types = ElementorPro\Plugin::elementor()->documents->get_document_types( [\
		'show_in_library' => ,\
	] );
$this->add_control(
	'template_id',
	[\
		'label' => __( 'Choose Template', 'elementor-pro' ),\
		'type' => ElementorPro\Modules\QueryControl\Module::QUERY_CONTROL_ID,\
		'label_block' => ,\
		'autocomplete' => [\
			'object' => ElementorPro\Modules\QueryControl\Module::QUERY_OBJECT_LIBRARY_TEMPLATE,\
			'query' => [\
				'meta_query' => [\
					[\
						'key' => Elementor\Core\Base\Document::TYPE_META_KEY,\
						'value' => array_keys( $document_types ),\
						'compare' => 'IN',\
					],\
				],\
			],\
		],\
	]
);

```

As you can see the control already accepts the query arguments so there is no need to add supporting filters.

[Sign Up](https://elementor.com/pages/addon-developers-corner/)

#### Developer Newsletter

Stay up to date on the latest developer news, product updates, and best practices.

## Author

![Picture of Ohad Raz](https://secure.gravatar.com/avatar/4457665d392755ad51548d0bb0b6e22a5c4fcefaf7b10d581189314ce6b0ea89?s=300&d=mm&r=g)

Ohad Raz

[Hosted with](https://elementor.com/hosting/)

Text

Bigger text

Line height

Text align

Readable font

Visual

Contrast

Grayscale

Hide images

Pause animations

Orientation

Screen reader

Highlight links

Reading mask

Outline focus

Sitemap

Page structure