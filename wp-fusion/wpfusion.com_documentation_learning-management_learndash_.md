---
url: "https://wpfusion.com/documentation/learning-management/learndash/"
title: "Connect LearnDash to your CRM"
---

[Skip to content](https://wpfusion.com/documentation/learning-management/learndash/#content)

[![WP Fusion Logo](https://wpfusion.com/wp-content/uploads/2019/08/logo-top-svg.svg)](https://wpfusion.com/)

- [Features](https://wpfusion.com/features/)
  - [Features](https://wpfusion.com/features/)
  - [About Us](https://wpfusion.com/about-us/)
  - [Plugin Integrations](https://wpfusion.com/documentation/#integrations)
  - [Addons](https://wpfusion.com/documentation/#addons)
  - [Enhanced Ecommerce](https://wpfusion.com/features/enhanced-ecommerce/)
  - [Event Tracking](https://wpfusion.com/features/event-tracking/)
  - [Recipes and Ideas](https://wpfusion.com/recipes-and-ideas/)
- [Pricing](https://wpfusion.com/pricing/)
  - [Pricing](https://wpfusion.com/pricing/)
  - [Lifetime Pricing](https://wpfusion.com/pricing-lifetime/)
  - [Free Download](https://wpfusion.com/free-download/)
- [Get Help](https://wpfusion.com/documentation/)
  - [Documentation](https://wpfusion.com/documentation/)
  - [Free Consultation](https://wpfusion.com/free-consultation/)
  - [Recommended Tools](https://wpfusion.com/recommends/)
  - [Videos and Demos](https://wpfusion.com/videos/)
  - [Feature Requests](https://wpfusion.com/feature-requests/)
  - [Roadmap](https://wpfusion.com/roadmap/)
  - [Contact Us](https://wpfusion.com/contact/)
  - [Find an Expert](https://wpfusion.com/experts/)
- [Blog](https://wpfusion.com/blog/)
- [Account](https://wpfusion.com/login/)

- [Features](https://wpfusion.com/features/)
  - [Features](https://wpfusion.com/features/)
  - [About Us](https://wpfusion.com/about-us/)
  - [Plugin Integrations](https://wpfusion.com/documentation/#integrations)
  - [Addons](https://wpfusion.com/documentation/#addons)
  - [Enhanced Ecommerce](https://wpfusion.com/features/enhanced-ecommerce/)
  - [Event Tracking](https://wpfusion.com/features/event-tracking/)
  - [Recipes and Ideas](https://wpfusion.com/recipes-and-ideas/)
- [Pricing](https://wpfusion.com/pricing/)
  - [Pricing](https://wpfusion.com/pricing/)
  - [Lifetime Pricing](https://wpfusion.com/pricing-lifetime/)
  - [Free Download](https://wpfusion.com/free-download/)
- [Get Help](https://wpfusion.com/documentation/)
  - [Documentation](https://wpfusion.com/documentation/)
  - [Free Consultation](https://wpfusion.com/free-consultation/)
  - [Recommended Tools](https://wpfusion.com/recommends/)
  - [Videos and Demos](https://wpfusion.com/videos/)
  - [Feature Requests](https://wpfusion.com/feature-requests/)
  - [Roadmap](https://wpfusion.com/roadmap/)
  - [Contact Us](https://wpfusion.com/contact/)
  - [Find an Expert](https://wpfusion.com/experts/)
- [Blog](https://wpfusion.com/blog/)
- [Account](https://wpfusion.com/login/)

# LearnDash

- Published onFebruary 12, 2016
- Last updated on September 8, 2025

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Learning Management](https://wpfusion.com/documentation/#learning-management)
- /
- LearnDash

### [\#](https://wpfusion.com/documentation/learning-management/learndash/\#overview) Overview

Using WP Fusion and [LearnDash](https://wpfusion.com/go/learndash), you can automatically add students to [your CRM of choice](https://wpfusion.com/documentation/faq/crm-compatibility-table/) when they register on your site.

You also can restrict access to course content using tags in your CRM, apply tags based on progress, and use tags as automated triggers for course and group enrollments.

### [\#](https://wpfusion.com/documentation/learning-management/learndash/\#restricting-access-to-content) Restricting access to content

You can restrict access to Courses, Lessons, and Topics based on a user’s CRM tags, and redirect them to another page (like a sales page) if they don’t have the required tags.

You can also apply tags to a user when they’ve begun a course, lesson, or topic, and likewise when it has been marked complete.

See the screenshot below for an example of the options WP Fusion offers you when configuring a LearnDash lesson or topic:

[![](https://wpfusion.com/wp-content/uploads/2016/02/learndash-course-side-metabox-358x1024.jpg)](https://wpfusion.com/wp-content/uploads/2016/02/learndash-course-side-metabox-scaled.jpg)

For more information on restricting access to content and the main WP Fusion meta box, [see the documentation here](https://wpfusion.com/documentation/getting-started/meta-box/).

#### [\#](https://wpfusion.com/documentation/learning-management/learndash/\#lesson-topic-and-quiz-access-rules) Lesson, topic, and quiz access rules

By default, if a course is protected by WP Fusion, then every lesson, quiz, and topic in that course will inherit the same access rules.

If needed you can override this by configuring the WP Fusion meta box on any lesson (or quiz or topic) individually. If access rules have been specified on any lesson, quiz, or topic, then those rules will take priority over the course settings.

### [\#](https://wpfusion.com/documentation/learning-management/learndash/\#course-settings-and-auto-enrollment) Course settings and auto-enrollment

WP Fusion also adds some options specific to LearnDash courses. You can find these on the WP Fusion settings panel when editing any course.

[![a screenshot of wp fusion course settings in a wordpress dashboard, showing options to apply and remove tags, control course navigation, and set custom fields for enrollment date and expiration date.](https://wpfusion.com/wp-content/uploads/2016/02/learndash-course-settings-new-1008x1024.jpg)](https://wpfusion.com/wp-content/uploads/2016/02/learndash-course-settings-new.jpg)

There are nine settings here:

- **Apply tags – Marked Complete:** These tags will be applied in your CRM when a user fully completes the course.
- **Apply tags – Enrolled:** These tags will be applied to a user when they are enrolled in the course, either manually, via a free signup, or another plugin integration. They will not be removed if the student is removed from the course, and they do not affect automated enrollments. They will not be applied if the user is given access to the course as part of a group.
- **Remove Tags:** When this is checked, the tags applied at enrollment will be automatically removed if the user is unenrolled from the course.
- **Link with tag:** Using this setting you can “link” a tag in your CRM with a LearnDash course. When this tag is applied, the user will automatically be enrolled in the course. If the tag is removed, the user will be un-enrolled. Likewise if the user is enrolled in the course (either manually or via a purchase) the linked tag will be applied, and if a user is removed from the course the linked tag will be removed.
- **Unenroll from Course when Linked Tag is Removed:** By default, WP Fusion will unenroll a user from a course when their linked tag is removed. However, if you are using [drip-released content](https://www.learndash.com/blog/why-you-should-use-drip-content-for-your-courses/), this could cause a payment failure to remove the user from the course, and when they re-enroll the content drip will start over from the beginning. Disabling this setting will leave the user enrolled in the course when the linked tag is removed. In this case, it’s recommended to also [protect access to the course with a tag](https://wpfusion.com/documentation/learning-management/learndash/#restricting-access-to-content), so users can’t access the course until they’ve reactivated their subscription.
- **Course Navigation:** This setting controls how WP Fusion handles the display of restricted lessons and other content in the course navigation. The options are:

  - **Default:** The course navigation will show all content, regardless of the user’s CRM tags.
  - **Lock lessons:** Lessons the user cannot access will show as disabled. You can optionally specify a message to be displayed as a badge on any locked lessons. [See below](https://wpfusion.com/documentation/learning-management/learndash/#lock-lessons) for more info.
  - **Filter Course Steps:** Lessons the user cannot access will be completely removed from the course navigation and progression. This can be used to create personalized courses based on a user’s tags in your CRM (aka “Adaptive Learning”). [See below](https://wpfusion.com/documentation/learning-management/learndash/#filter-course-steps) for more info.
- **Field – Course Progress:** You can optionally select a custom field in your CRM to be used for course progress tracking. When a user’s course progress is updated, their course completion percentage will be synced to the selected custom field.
- **Field – Course Enrollment Date:** The selected field in your CRM will be updated with the student’s course enrollment date.
- **Field – Course Enrollment Expiration Date:** If your courses are [set to exipre](https://www.learndash.com/support/docs/core/courses/course-access/#course-access-expiration), this field will be updated with the student’s course access expiration date (at the time they enroll in the course).

**Note:** If you use an auto-enrollment tag, you should set the course price type to “Closed” to prevent users from getting automatically enrolled when they register. It’s also not necessary to use “Restrict access to this course” if the course type is Closed.

**Note:** Auto-enrollments are triggered when a user’s tags are modified or loaded from your CRM. Just setting a linked tag on a course will not automatically enroll everyone who has that tag. To trigger a refresh of your users’ tags (and any automated enrollments) you can run a _Resync Tags_ operation from Settings » WP Fusion » Advanced » Batch Operations.

**Note:** WP Fusion only allows you to use a single linked tag for auto-enrollment into courses. For more info on this [see the FAQ](https://wpfusion.com/documentation/faq/misc-faq/#why-cant-i-use-multiple-tags-for-auto-enrollments--link-with-tag)

#### [\#](https://wpfusion.com/documentation/learning-management/learndash/\#lock-lessons) Lock lessons

If you’ve protected lessons and topics using CRM tags, you can optionally enable the **Lock Lessons** setting on the course (see [Course Settings](https://wpfusion.com/documentation/learning-management/learndash/#course-specific-settings), below) to display those lessons as locked in the course navigation.

[![](https://wpfusion.com/wp-content/uploads/2016/02/learndash-lock-lessons-buddyboss-theme-1024x659.jpg)](https://wpfusion.com/wp-content/uploads/2016/02/learndash-lock-lessons-buddyboss-theme.jpg) Lessons and topics can be shown as disabled in the course navigation using the **Lock Lessons** setting.[![](https://wpfusion.com/wp-content/uploads/2016/02/learndash-lesson-locked-1024x671.jpg)](https://wpfusion.com/wp-content/uploads/2016/02/learndash-lesson-locked.jpg) In this screenshot, the second lesson is locked by WP Fusion. This is using the default LearnDash theme.[![](https://wpfusion.com/wp-content/uploads/2016/02/learndash-steps-locked-in-focus-mode-1024x605.jpg)](https://wpfusion.com/wp-content/uploads/2016/02/learndash-steps-locked-in-focus-mode.jpg) Locked lessons and topics are also disabled in focus mode (using the default LearnDash theme).

The default locked lesson text is “Not Available”. You can override this globally at Settings » WP Fusion » Integrations » LearnDash, or on individual courses by editing the Locked Lesson Text option.

The Locked Lessons feature also works with the [BuddyBoss app](https://wpfusion.com/documentation/membership/buddyboss/). In that case, the lesson will be displayed as disabled.

[![](https://wpfusion.com/wp-content/uploads/2016/02/buddyboss-app-locked-lesson-1024x941.jpg)](https://wpfusion.com/wp-content/uploads/2016/02/buddyboss-app-locked-lesson.jpg) Lessons locked by WP Fusion’s “Lock Lessons” setting are displayed as disabled in the BuddyBoss app.

If someone tries to open it, the Locked Lesson Text will be displayed in a popup.

#### [\#](https://wpfusion.com/documentation/learning-management/learndash/\#filter-course-steps) Filter Course Steps

This feature (available in LearnDash v3.4.0+) applies WP Fusion’s [access rules](https://wpfusion.com/documentation/getting-started/access-control/) to each step in the course, (such as lessons, topics, or quizzes). This is the same as enabling [Filter Queries](https://wpfusion.com/documentation/getting-started/access-control/#filter-queries), but it can be enabled for individual courses.

When a user doesn’t have access to the step, based on their CRM tags, the step will be hidden from the course navigation, and won’t be required for course completion.

You can use this to create personalized course experiences and objectives for different users based on their CRM tags. For more info [see this blog post](https://wpfusion.com/plugin-updates/adaptive-learning-with-wp-fusion-and-learndash-3-4/).

**Note:** For best compatibility, it’s recommended to enable [Shared Course Steps](https://www.learndash.com/support/docs/core/courses/shared-course-steps/) in the LearnDash course settings.

With Shared Course Steps disabled, restricted lessons will be hidden, but the course progress tracker and step count may be inaccurate.

#### [\#](https://wpfusion.com/documentation/learning-management/learndash/\#strategies-for-managing-course-access) Strategies for managing course access

There are two common ways to manage LearnDash course access with WP Fusion:

**1\. (Recommended) Use LearnDash to manage access to the course content, and WP Fusion to trigger enrollments into the course based on tags in your CRM.**

This is our recommended setup since it has the best compatibility with LearnDash. With this setup you would:

- Leave _Users must be logged in to view this course_ un-checked in the WP Fusion meta box
- Set the course access type to Closed
- Set an auto-enrollment tag on the course

With this method, LearnDash handles the display of the course overview page based on whether or not a user is enrolled in the course.

This also works properly with Sample Lessons in LearnDash, and drip-feeding course content.

[![](https://wpfusion.com/wp-content/uploads/2016/02/learndash-ld-course-access-1024x679.jpg)](https://wpfusion.com/wp-content/uploads/2016/02/learndash-ld-course-access.jpg) In this screenshot you can see a simple course that the user isn’t currently enrolled in. LearnDash shows a course overview, the price, and links to either purchase the course or log in.

By applying a tag in your CRM, a user can automatically be enrolled in the course (see Auto-enrollment above), and the course overview page will update accordingly.

When a user is enrolled in the course it will also properly update the [LearnDash Course Grid](https://www.learndash.com/support/docs/add-ons/course-grid/), the BuddyBoss enrolled courses list, and any other plugins that work with LearnDash.

**For handling course bundles or “all access passes”,** you can also use auto-enrollment tags [with LearnDash groups](https://wpfusion.com/documentation/learning-management/learndash/#groups). This lets you create different collections of courses that are managed by a single auto-enrollment tag.

**2\. (Not recommended) Use WP Fusion to manage access to the course content, bypassing LearnDash’s access rules.**

WP Fusion [adds a meta box](https://wpfusion.com/documentation/getting-started/access-control/) to every post and page on your site that allows you to protect your content using tags in your CRM, and redirect the user to another page if they don’t have the required tags.

Using this meta box you can also protect your LearnDash courses and course content based on CRM tags. With this setup you would:

- Select _Users must be logged in to view this course_ in the WP Fusion meta box, and choose some required tags to view the course
- Either select a redirect in the meta box, or leave the redirect blank to display [the restricted content message](https://wpfusion.com/documentation/getting-started/general-settings/#default-restricted-content-message)
- Set the course access type to Open
- Do not set an auto-enrollment tag on the course

With this method, every user on the site is automatically enrolled in the course, but they can only _view_ the course content if they have the right tags.

[![](https://wpfusion.com/wp-content/uploads/2016/02/learndash-wpf-access-control-1024x432.jpg)](https://wpfusion.com/wp-content/uploads/2016/02/learndash-wpf-access-control-scaled.jpg) In this screenshot you can see a course page that is protected by WP Fusion, using a CRM tag.

The problem with protecting the visibility of the course with a tag is that you lose all of the LearnDash options for customizing the page appearance when people aren’t enrolled. As well, the user will see themselves as enrolled in all courses, even if they don’t have access— which could be confusing for your students.

For that reason it’s recommended to let LearnDash handle protecting your course content by setting the course access type to Closed, and then using an auto-enrollment tag so that WP Fusion can update student enrollments.

### [\#](https://wpfusion.com/documentation/learning-management/learndash/\#quizzes) Quizzes

WP Fusion includes a few settings specific to LearnDash quizzes. These will appear in the WP Fusion tab when editing any quiz in the admin.

[![](https://wpfusion.com/wp-content/uploads/2016/02/learndash-quiz-settings-1024x713.jpg)](https://wpfusion.com/wp-content/uploads/2016/02/learndash-quiz-settings.jpg)

In addition to the [standard access control options](https://wpfusion.com/documentation/getting-started/access-control/), the available quiz options are:

- **Apply these tags when essay submitted:** These tags will be applied in your CRM when a student has submitted an essay. They can be used to trigger an email to the student, or (for example) to create a task for the instructor to grade the essay.
- **Apply these tags when quiz passed:** These tags will be applied in your CRM when a quiz is submitted and the user has a passing score.
- **Apply these tags when quiz failed:** These tags will be applied in your CRM when a quiz is submitted and the user has a failing score.
- **Field – Final Score:** This option allows you to sync a student’s final quiz score (as a percentage) to a custom field in your CRM. It will be updated each time the quiz is submitted.
- **Field – Final Points:** This is the same as the **Sync final score** setting except instead of the quiz score, the total _points_ earned by the user will be synced to the selected custom field.
- **Field – Category Scores:** If your quiz has [question categories](https://www.learndash.com/support/docs/core/quizzes/questions/#question_categories), you can sync the score for each question category to a separate custom field in your CRM.

### [\#](https://wpfusion.com/documentation/learning-management/learndash/\#quiz-questions) Quiz questions

[![](https://wpfusion.com/wp-content/uploads/2016/02/learndash-quiz-questions-1024x256.jpg)](https://wpfusion.com/wp-content/uploads/2016/02/learndash-quiz-questions.jpg)

Using WP Fusion you can sync the answers to individual quiz questions to custom fields in your CRM. This can be configured within the WP Fusion meta box when editing any single quiz question.

### [\#](https://wpfusion.com/documentation/learning-management/learndash/\#groups) Groups

WP Fusion’s settings for LearnDash groups can be found under Settings » Group Access Settings when editing any group.

[![](https://wpfusion.com/wp-content/uploads/2016/02/ld-group-settings-1024x738.jpg)](https://wpfusion.com/wp-content/uploads/2016/02/ld-group-settings.jpg)

Similar to Courses, the are four settings here:

- **Apply tags – Enrolled:** These tags will be applied to a user when they are enrolled in the group, either manually, via a free signup, or another plugin integration. They will not be removed if the student is removed from the group, and they do not affect automated enrollments.
- **Remove Tags:** When this is checked, the tags applied at enrollment will be automatically removed if the user is unenrolled from the group.
- **Link with Tag:** Using this setting you can “link” a tag in your CRM with a LearnDash group. When this tag is applied, the user will automatically be enrolled in the group. If the tag is removed, the user will be un-enrolled. Likewise if the user is enrolled in the group (either manually or via a purchase) the linked tag will be applied, and if a user is removed from the group the linked tag will be removed.
- **Link with Tag – Group Leader:** This setting works similarly to Link with Tag, except for group leaders instead of group members. When this tag is applied, the user will automatically be set as the leader of the group. If the tag is removed, the user will be un-enrolled from the group leader position.

### [\#](https://wpfusion.com/documentation/learning-management/learndash/\#assignments) Assignments

WP Fusion allows you to automatically tag students in your CRM when they upload an assignment to a LearnDash lesson.

[![](https://wpfusion.com/wp-content/uploads/2016/02/learndash-assignment-uploads-1024x318.jpg)](https://wpfusion.com/wp-content/uploads/2016/02/learndash-assignment-uploads-scaled.jpg)

This setting appears when editing any lesson where assignment uploads are enabled.

### [\#](https://wpfusion.com/documentation/learning-management/learndash/\#syncing-course-progress) Syncing course progress

In addition to [syncing course progress on individual courses](https://wpfusion.com/documentation/learning-management/learndash/#course-settings-and-auto-enrollment), WP Fusion adds several “pseudo” fields that enable syncing a student’s overall LearnDash progress to custom fields in your CRM. This can be configured under Settings » WP Fusion » Contact Fields.

[![](https://wpfusion.com/wp-content/uploads/2016/02/learndash-last-lesson-course-fields-1-1024x317.jpg)](https://wpfusion.com/wp-content/uploads/2016/02/learndash-last-lesson-course-fields-1.jpg)

The fields are:

- **Last Course Enrolled:** When a student is enrolled in a course, the name of the course will be synced.
- **Last Lesson Completed:** When a lesson is marked complete, the name of the lesson will be synced.
- **Last Lesson Completed Date:** When a lesson is marked complete, the date and time will be synced.
- **Last Topic Completed:** When a topic is marked complete, the name of the topic will be synced.
- **Last Course Progressed:** Whenever a student completes any content in a course (lesson, topic, quiz, etc.) the name of the course will be synced.
- **Last Course Completed:** When a course is marked complete, the name of the course will be synced.
- **Last Course Completed Date:** When a course is marked complete, the date and time will be synced.

You can use these fields to track progress in your CRM and potentially reduce the number of tags that need to be applied to a contact.

### [\#](https://wpfusion.com/documentation/learning-management/learndash/\#thrivecart) ThriveCart

Using the [LearnDash + ThriveCart extension](https://www.learndash.com/add-on/thrivecart/) you can automatically enroll new students into LearnDash courses after a successful ThriveCart purchase.

With LearnDash 3.4.0 and higher, WP Fusion can automatically detect new users imported from ThriveCart, and sync their randomly generated password back to your CRM for sending in a welcome email. To enable this, simply turn on the [Return Password setting](https://wpfusion.com/documentation/getting-started/general-settings/#imported-users) from the Webhooks section in the WP Fusion settings.

### [\#](https://wpfusion.com/documentation/learning-management/learndash/\#event-tracking) Event Tracking

Using the [Event Tracking addon](https://wpfusion.com/documentation/event-tracking/event-tracking-overview/), you can track LearnDash course progress as events in supported CRMs.

Events can be configured in two places. On an individual course, in the Settings panel, on the WP Fusion metabox:

[![](https://wpfusion.com/wp-content/uploads/2016/02/event-tracking-learndash-1024x415.jpeg)](https://wpfusion.com/wp-content/uploads/2016/02/event-tracking-learndash.jpeg) Event tracking can be configured in the Settings panel when editing any course on the WP Fusion metabox.

Or in the Event Tracking global settings:

[![](https://wpfusion.com/wp-content/uploads/2016/02/event-tracking-learndash-global-settings-1-1024x738.jpeg%22)](https://wpfusion.com/wp-content/uploads/2016/02/event-tracking-learndash-global-settings-1.jpeg) Event tracking can also be configured globally at Settings » Event Tracking.

If your CRM [supports multi-key events](https://wpfusion.com/documentation/event-tracking/event-tracking-overview/#multi-key-events), you will see additional options for syncing event data.

[![](https://wpfusion.com/wp-content/uploads/2024/01/event-tracking-learndashuser-957x1024.jpg)](https://wpfusion.com/wp-content/uploads/2024/01/event-tracking-learndashuser-scaled.jpg) WP Fusion’s event tracking with LearnDash supports course progress and quiz attempts.

The available triggers and merge fields for event tracking with LearnDash are:

- **Course Started:** Triggered when a user enrolls in a course.

  - `{id}`: The course ID.
  - `{title}`: The course title.
  - `{last_completed_step}`: The title of the last lesson, topic, or quiz completed in the course.
  - `{course_progress}`: The student’s percentage progress in the course.
- **Course Progress:** Triggered whenever a lesson, topic, or quiz is completed within the course, as well as when the course itself is completed.

  - `{id}`: The course ID.
  - `{title}`: The course title.
  - `{last_completed_step}`: The title of the last lesson, topic, or quiz completed in the course.
  - `{course_progress}`: The student’s percentage progress in the course.
- **Quiz Completed:** Triggered whenever a quiz in this course is marked complete.

  - `{id}`: The quiz ID.
  - `{title}`: The quiz title.
  - `{percentage}`: The student’s quiz score as a percent.
  - `{points}`: The student’s total quiz points.

### [\#](https://wpfusion.com/documentation/learning-management/learndash/\#batch-operations) Batch operations

WP Fusion includes two batch processing tools to retroactively apply tags in your CRM based on each user’s current course and/or group enrollments in LearnDash.

These are found at Settings » WP Fusion » Advanced » Batch Tools.

[![](https://wpfusion.com/wp-content/uploads/2016/02/learndash-batch-operation-1024x480.jpg)](https://wpfusion.com/wp-content/uploads/2016/02/learndash-batch-operation.jpg)

#### [\#](https://wpfusion.com/documentation/learning-management/learndash/\#course-enrollment-statuses) Course enrollment statuses

When you run the **LearnDash course enrollment statuses** operation, WP Fusion will check the current course enrollments for each user on your site, and apply any tags configured for that course.

This will not apply any tags if the user is enrolled in a course as part of a LearnDash Group.

This will not update any course or group enrollments (via linked tags), it only applies tags in your CRM.

#### [\#](https://wpfusion.com/documentation/learning-management/learndash/\#course-progress) Course progress

The **LearnDash course progress** batch operation will check the course progress for each user on your site, and retroactively apply any tags configured in the _Apply tags when marked complete_ setting for every course, lesson, topic, and quiz the user has already completed.

#### [\#](https://wpfusion.com/documentation/learning-management/learndash/\#enrollment-date-expiration) Enrollment Date & Expiration

When you have enabled **Course access expiration** to a course, WP Fusion will sync the data a user has enrolled in the course with your CRM when they are added to a course, as well as the date that that user’s enrollment expires.

#### [\#](https://wpfusion.com/documentation/learning-management/learndash/\#group-enrollment-statuses) Group enrollment statuses

When you run the **LearnDash group enrollment statuses** operation, WP Fusion will check the current group enrollments for each user on your site, and apply any tags configured for that group (the _Apply Tags – Enrolled_ and _Link With Tag_ settings).

This will not update any course or group enrollments (via linked tags), it only applies tags in your CRM.

#### [\#](https://wpfusion.com/documentation/learning-management/learndash/\#course-progress-meta) Course progress meta

The **LearnDash course progress meta** batch operation syncs any enabled progress [meta fields](https://wpfusion.com/documentation/learning-management/learndash/#meta-fields) (Last course enrolled, last course completed, last course completed date, course completion percentages, etc.) to the selected custom fields in your CRM. It does not apply any tags or affect enrollments.

#### [\#](https://wpfusion.com/documentation/learning-management/learndash/\#quiz-results) Quiz results

The **LearnDash quiz results** batch operation syncs any enabled quiz result fields (quiz scores, points, category scores) to your CRM based on each user’s quiz progress. Does not apply any tags or affect enrollments.

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

- [Connect LearnDash to ActiveCampaign](https://wpfusion.com/connect/connect-learndash-to-activecampaign/)  \|
- [Connect LearnDash to AgileCRM](https://wpfusion.com/connect/connect-learndash-to-agilecrm/)  \|
- [Connect LearnDash to Autopilot](https://wpfusion.com/connect/connect-learndash-to-autopilot/)  \|
- [Connect LearnDash to Bento](https://wpfusion.com/connect/connect-learndash-to-bento/)  \|
- [Connect LearnDash to BirdSend](https://wpfusion.com/connect/connect-learndash-to-birdsend/)  \|
- [Connect LearnDash to Brevo](https://wpfusion.com/connect/connect-learndash-to-brevo/)  \|
- [Connect LearnDash to Capsule](https://wpfusion.com/connect/connect-learndash-to-capsule/)  \|
- [Connect LearnDash to Constant Contact](https://wpfusion.com/connect/connect-learndash-to-constant-contact/)  \|
- [Connect LearnDash to ConvertKit](https://wpfusion.com/connect/connect-learndash-to-convertkit/)  \|
- [Connect LearnDash to ConvesioConvert](https://wpfusion.com/connect/connect-learndash-to-convesioconvert/)  \|
- [Connect LearnDash to Copper](https://wpfusion.com/connect/connect-learndash-to-copper/)  \|
- [Connect LearnDash to Customer.io](https://wpfusion.com/connect/connect-learndash-to-customer-io/)  \|
- [Connect LearnDash to Customerly](https://wpfusion.com/connect/connect-learndash-to-customerly/)  \|
- [Connect LearnDash to Drip](https://wpfusion.com/connect/connect-learndash-to-drip/)  \|
- [Connect LearnDash to Dynamics 365 Marketing](https://wpfusion.com/connect/connect-learndash-to-dynamics-365-marketing/)  \|
- [Connect LearnDash to EmailOctopus](https://wpfusion.com/connect/connect-learndash-to-emailoctopus/)  \|
- [Connect LearnDash to EngageBay](https://wpfusion.com/connect/connect-learndash-to-engagebay/)  \|
- [Connect LearnDash to Flexie](https://wpfusion.com/connect/connect-learndash-to-flexie/)  \|
- [Connect LearnDash to FluentCRM](https://wpfusion.com/connect/connect-learndash-to-fluentcrm/)  \|
- [Connect LearnDash to FunnelKit](https://wpfusion.com/connect/connect-learndash-to-funnelkit/)  \|
- [Connect LearnDash to Gist](https://wpfusion.com/connect/connect-learndash-to-gist/)  \|
- [Connect LearnDash to Groundhogg](https://wpfusion.com/connect/connect-learndash-to-groundhogg/)  \|
- [Connect LearnDash to HighLevel](https://wpfusion.com/connect/connect-learndash-to-highlevel/)  \|
- [Connect LearnDash to HubSpot](https://wpfusion.com/connect/connect-learndash-to-hubspot/)  \|
- [Connect LearnDash to Infusionsoft](https://wpfusion.com/connect/connect-learndash-to-infusionsoft/)  \|
- [Connect LearnDash to Intercom](https://wpfusion.com/connect/connect-learndash-to-intercom/)  \|
- [Connect LearnDash to Jetpack CRM](https://wpfusion.com/connect/connect-learndash-to-jetpack-crm/)  \|
- [Connect LearnDash to Kartra](https://wpfusion.com/connect/connect-learndash-to-kartra/)  \|
- [Connect LearnDash to Keap](https://wpfusion.com/connect/connect-learndash-to-keap/)  \|
- [Connect LearnDash to Klaviyo](https://wpfusion.com/connect/connect-learndash-to-klaviyo/)  \|
- [Connect LearnDash to KlickTipp](https://wpfusion.com/connect/connect-learndash-to-klicktipp/)  \|
- [Connect LearnDash to Loopify](https://wpfusion.com/connect/connect-learndash-to-loopify/)  \|
- [Connect LearnDash to MailChimp](https://wpfusion.com/connect/connect-learndash-to-mailchimp/)  \|
- [Connect LearnDash to MailerLite](https://wpfusion.com/connect/connect-learndash-to-mailerlite/)  \|
- [Connect LearnDash to Mailjet](https://wpfusion.com/connect/connect-learndash-to-mailjet/)  \|
- [Connect LearnDash to MailPoet](https://wpfusion.com/connect/connect-learndash-to-mailpoet/)  \|
- [Connect LearnDash to Maropost](https://wpfusion.com/connect/connect-learndash-to-maropost/)  \|
- [Connect LearnDash to Mautic](https://wpfusion.com/connect/connect-learndash-to-mautic/)  \|
- [Connect LearnDash to NationBuilder](https://wpfusion.com/connect/connect-learndash-to-nationbuilder/)  \|
- [Connect LearnDash to Omnisend](https://wpfusion.com/connect/connect-learndash-to-omnisend/)  \|
- [Connect LearnDash to Ontraport](https://wpfusion.com/connect/connect-learndash-to-ontraport/)  \|
- [Connect LearnDash to Ortto](https://wpfusion.com/connect/connect-learndash-to-ortto/)  \|
- [Connect LearnDash to Pipedrive](https://wpfusion.com/connect/connect-learndash-to-pipedrive/)  \|
- [Connect LearnDash to Platformly](https://wpfusion.com/connect/connect-learndash-to-platformly/)  \|
- [Connect LearnDash to Quentn](https://wpfusion.com/connect/connect-learndash-to-quentn/)  \|
- [Connect LearnDash to Salesflare](https://wpfusion.com/connect/connect-learndash-to-salesflare/)  \|
- [Connect LearnDash to Salesforce](https://wpfusion.com/connect/connect-learndash-to-salesforce/)  \|
- [Connect LearnDash to Sender](https://wpfusion.com/connect/connect-learndash-to-sender/)  \|
- [Connect LearnDash to SendFox](https://wpfusion.com/connect/connect-learndash-to-sendfox/)  \|
- [Connect LearnDash to Tubular](https://wpfusion.com/connect/connect-learndash-to-tubular/)  \|
- [Connect LearnDash to User.com](https://wpfusion.com/connect/connect-learndash-to-user-com/)  \|
- [Connect LearnDash to WP ERP](https://wpfusion.com/connect/connect-learndash-to-wp-erp/)  \|
- [Connect LearnDash to Zoho](https://wpfusion.com/connect/connect-learndash-to-zoho/)  \|

These features require a

### Personal

license of WP Fusion

[View Pricing](https://wpfusion.com/pricing/)

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/learning-management/learndash/#overview)
- [Restricting access to content](https://wpfusion.com/documentation/learning-management/learndash/#restricting-access-to-content)
- [Lesson, topic, and quiz access rules](https://wpfusion.com/documentation/learning-management/learndash/#lesson-topic-and-quiz-access-rules)
- [Course settings and auto-enrollment](https://wpfusion.com/documentation/learning-management/learndash/#course-settings-and-auto-enrollment)
- [Lock lessons](https://wpfusion.com/documentation/learning-management/learndash/#lock-lessons)
- [Filter Course Steps](https://wpfusion.com/documentation/learning-management/learndash/#filter-course-steps)
- [Strategies for managing course access](https://wpfusion.com/documentation/learning-management/learndash/#strategies-for-managing-course-access)
- [Quizzes](https://wpfusion.com/documentation/learning-management/learndash/#quizzes)
- [Quiz questions](https://wpfusion.com/documentation/learning-management/learndash/#quiz-questions)
- [Groups](https://wpfusion.com/documentation/learning-management/learndash/#groups)
- [Assignments](https://wpfusion.com/documentation/learning-management/learndash/#assignments)
- [Syncing course progress](https://wpfusion.com/documentation/learning-management/learndash/#syncing-course-progress)
- [ThriveCart](https://wpfusion.com/documentation/learning-management/learndash/#thrivecart)
- [Event Tracking](https://wpfusion.com/documentation/learning-management/learndash/#event-tracking)
- [Batch operations](https://wpfusion.com/documentation/learning-management/learndash/#batch-operations)
- [Course enrollment statuses](https://wpfusion.com/documentation/learning-management/learndash/#course-enrollment-statuses)
- [Course progress](https://wpfusion.com/documentation/learning-management/learndash/#course-progress)
- [Enrollment Date & Expiration](https://wpfusion.com/documentation/learning-management/learndash/#enrollment-date-expiration)
- [Group enrollment statuses](https://wpfusion.com/documentation/learning-management/learndash/#group-enrollment-statuses)
- [Course progress meta](https://wpfusion.com/documentation/learning-management/learndash/#course-progress-meta)
- [Quiz results](https://wpfusion.com/documentation/learning-management/learndash/#quiz-results)

### You may also like

[![2516825 freemium account blog image v2 121724](https://wpfusion.com/wp-content/uploads/2024/12/2516825_Freemium-Account-Blog-Image_v2_121724-300x158.jpg)](https://wpfusion.com/tutorials/offering-freemium-paywall-content-wp-fusion/)

Tutorials

![Sufia Banu](https://secure.gravatar.com/avatar/af5ebcfaf10e901d9ce4cc1618bd1872d659863634a2dca9964dbf3c0405c756?s=128&d=mm&r=g)

#### [How to Offer Freemium or Paywall Content/Courses in WordPress (Complete Guide)](https://wpfusion.com/tutorials/offering-freemium-paywall-content-wp-fusion/)

In this tutorial, we look at ways WP Fusion can be used to offer a mix of free and premium blog content or courses, by restricting access based on tags in your CRM to create a secure and personalized user experience.

[![2474279 howtoconnectlearndashwithhubspot 093024](https://wpfusion.com/wp-content/uploads/2024/09/2474279_HowtoConnectLearnDashWithHubSpot_093024-300x158.jpg)](https://wpfusion.com/tutorials/how-to-connect-learndash-with-hubspot/)

Tutorials

![Sufia Banu](https://secure.gravatar.com/avatar/af5ebcfaf10e901d9ce4cc1618bd1872d659863634a2dca9964dbf3c0405c756?s=128&d=mm&r=g)

#### [How to Connect LearnDash With HubSpot (Step-by-Step Integration Guide)](https://wpfusion.com/tutorials/how-to-connect-learndash-with-hubspot/)

LearnDash helps you create course content and apply access restriction, but it doesn’t include a ton of marketing or segmentation features. With WP Fusion, you can connect LearnDash to HubSpot to create targeted segments and better optimize your marketing efforts.

[![a person wearing a red wp fusion shirt points to the text learndash email crm integration on a blue background. the person has long hair and dark lipstick.](https://wpfusion.com/wp-content/uploads/2025/02/maxresdefault-5-300x169.jpg)](https://wpfusion.com/videos/tutorials/connect-learndash-to-your-favorite-crm-email-list-tools-with-wp-fusion/)

![Emily Middleton](https://wpfusion.com/wp-content/uploads/2025/01/emily-middleton_avatar-128x128.png)

#### [Connect LearnDash to your Favorite CRM Email List Tools with WP Fusion](https://wpfusion.com/videos/tutorials/connect-learndash-to-your-favorite-crm-email-list-tools-with-wp-fusion/)

Would you like to learn how to connect your CRM to your favorite CRM? Emily shows us how to do this using LearnDash, but the same process can be applied to all CRMs.

[![2485101 adaptive learning with wp fusion and learndash 3.4 v2 102224](https://wpfusion.com/wp-content/uploads/2021/03/2485101_Adaptive-Learning-with-WP-Fusion-and-LearnDash-3.4_v2_102224-300x158.jpg)](https://wpfusion.com/plugin-updates/adaptive-learning-with-wp-fusion-and-learndash-3-4/)

Plugin Updates

![Jack Arturo](https://secure.gravatar.com/avatar/684f089f623c6e008dec48b6e7bda186b448dc9668090c83d2a81b60a263bdc7?s=128&d=mm&r=g)

#### [Adaptive Learning with WP Fusion and LearnDash 3.4](https://wpfusion.com/plugin-updates/adaptive-learning-with-wp-fusion-and-learndash-3-4/)

With LearnDash 3.4 WP Fusion includes a new feature called Filter Course Steps, which lets you personalize course content based on a user’s tags in your CRM. By using tags in your CRM or marketing automation platform, we can create more granular access rules than would be possible with traditional

### In this chapter

- [AccessAlly](https://wpfusion.com/documentation/membership/accessally/ "AccessAlly")
- [CoursePress](https://wpfusion.com/documentation/learning-management/coursepress/ "CoursePress")
- [eLearnCommerce](https://wpfusion.com/documentation/learning-management/wpep/ "eLearnCommerce")
- [LearnDash](https://wpfusion.com/documentation/learning-management/learndash/ "LearnDash")
- [LearnPress](https://wpfusion.com/documentation/learning-management/learnpress/ "LearnPress")
- [LifterLMS](https://wpfusion.com/documentation/learning-management/lifterlms/ "LifterLMS")
- [MasterStudy](https://wpfusion.com/documentation/learning-management/masterstudy/ "MasterStudy")
- [Memberoni](https://wpfusion.com/documentation/learning-management/memberoni/ "Memberoni")
- [Parent and Student Access For LearnDash](https://wpfusion.com/documentation/learning-management/parent-student-access-for-learndash/ "Parent and Student Access For LearnDash")
- [Sensei](https://wpfusion.com/documentation/learning-management/sensei/ "Sensei")
- [Thrive Apprentice](https://wpfusion.com/documentation/learning-management/thrive-apprentice/ "Thrive Apprentice")
- [Tutor LMS](https://wpfusion.com/documentation/learning-management/tutor-lms/ "Tutor LMS")
- [Uncanny LearnDash Groups](https://wpfusion.com/documentation/learning-management/uncanny-learndash-groups/ "Uncanny LearnDash Groups")
- [WISDM Group Registration for LearnDash](https://wpfusion.com/documentation/learning-management/wisdm-group-registration-learndash/ "WISDM Group Registration for LearnDash")
- [WP Courseware](https://wpfusion.com/documentation/learning-management/wp-courseware/ "WP Courseware")
- [WPComplete](https://wpfusion.com/documentation/learning-management/wpcomplete/ "WPComplete")
- [WPLMS](https://wpfusion.com/documentation/learning-management/wplms/ "WPLMS")

MarkCreated with Sketch.

#### WP Fusion

[Home](https://wpfusion.com/)

[Features](https://wpfusion.com/features/)

[Pricing](https://wpfusion.com/pricing/)

[Testimonials](https://wpfusion.com/testimonials/)

[Affiliates](https://wpfusion.com/affiliate-registration/)

[Try Demo](https://wpfusion.com/demo-signup/)

#### Learn

[Blog](https://wpfusion.com/blog/)

[Getting Started](https://wpfusion.com/documentation/)

[Shortcodes](https://wpfusion.com/documentation/getting-started/shortcodes/)

[Videos and Demos](https://wpfusion.com/videos/)

[Supported CRMs](https://wpfusion.com/documentation/faq/crm-compatibility-table/)

[Plugin Integrations](https://wpfusion.com/documentation/#integrations)

#### Support

[Contact Support](https://wpfusion.com/contact/)

[Documentation](https://wpfusion.com/documentation/)

[Frequently Asked Questions](https://wpfusion.com/documentation/)

[Developers](https://wpfusion.com/documentation/#developer-guides)

[Changelog](https://wpfusion.com/documentation/faq/changelog/)

#### Company

[About Us](https://wpfusion.com/about-us/)

[Contact](https://wpfusion.com/contact/)

[Brand Assets](https://wpfusion.com/brand-assets/)

[Terms and Conditions](https://wpfusion.com/terms-conditions/)

[Privacy Policy](https://wpfusion.com/privacy-policy/)

[Information Security Policy](https://wpfusion.com/information-security-policy/)

[![Very Good Plugins LLC Logo](https://wpfusion.com/wp-content/uploads/2019/08/vgp-logo.png)](https://verygoodplugins.com/)

Copyright © 2025 Very Good Plugins

[Facebook-f](https://www.facebook.com/groups/wpfusion/)[Twitter](https://twitter.com/wpfusion)