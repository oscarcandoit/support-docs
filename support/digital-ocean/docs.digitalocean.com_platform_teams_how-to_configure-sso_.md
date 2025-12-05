---
url: "https://docs.digitalocean.com/platform/teams/how-to/configure-sso/"
title: "How to Configure Single Sign-On for Teams | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/release-notes.5fbb164636ab961df9e08f892a39623e2bf7848be659fb300d6b0bab87a060dd.svg)Release Notes](https://docs.digitalocean.com/release-notes/)
- [![](https://docs.digitalocean.com/images/icons/regional-availability.32459447c00bfdb1c07abebcc0fdd721a4cbd93143cb616b0fbe5c629e4a938c.svg)Regional Availability](https://docs.digitalocean.com/platform/regional-availability/)
- [![](https://docs.digitalocean.com/images/icons/accounts.7c3a46a4e139957c37b1ba530846464f3b7432b7bc00793db0d8e788940ddf69.svg)Accounts](https://docs.digitalocean.com/platform/accounts/)
- [![](https://docs.digitalocean.com/images/icons/teams.d6932e5b476fcbbdf1fecec304776ef06c1a04d23174de1c0e6b349d96add59f.svg)Teams](https://docs.digitalocean.com/platform/teams/)
  - [Roles](https://docs.digitalocean.com/platform/teams/roles/)
  - [Settings](https://docs.digitalocean.com/platform/teams/settings/)
  - [How-Tos](https://docs.digitalocean.com/platform/teams/how-to/)
    - [Create New Teams](https://docs.digitalocean.com/platform/teams/how-to/create/)
    - [Manage Team Membership](https://docs.digitalocean.com/platform/teams/how-to/manage-membership/)
    - [Use Custom Roles](https://docs.digitalocean.com/platform/teams/how-to/use-custom-roles/)
    - [Require Secure Sign-In](https://docs.digitalocean.com/platform/teams/how-to/require-secure-sign-in/)
    - [Manage SSH Keys on Teams](https://docs.digitalocean.com/platform/teams/how-to/upload-ssh-keys/)
    - [Manage SSL Certificates](https://docs.digitalocean.com/platform/teams/how-to/manage-certificates/)
    - [View Security History](https://docs.digitalocean.com/platform/teams/how-to/view-security-history/)
    - [Refer Others to DigitalOcean](https://docs.digitalocean.com/platform/teams/how-to/refer-others/)
    - [Delete Teams](https://docs.digitalocean.com/platform/teams/how-to/delete/)
    - [Configure SSO](https://docs.digitalocean.com/platform/teams/how-to/configure-sso/)
  - [Limits](https://docs.digitalocean.com/platform/teams/limits/)
- [![](https://docs.digitalocean.com/images/icons/organizations.ae95392d02268a2e13ef28b6aabf1b35b6a0a5a9ef64517fedf080075500cefd.svg)Organizations](https://docs.digitalocean.com/platform/organizations/)
- [![](https://docs.digitalocean.com/images/icons/billing.357b31651da85802e1aa1c9f0b19cda7b26d5c971352f7176d1a130b21e088b7.svg)Billing](https://docs.digitalocean.com/platform/billing/)
- [![](https://docs.digitalocean.com/images/icons/support.91273ef64796cbf92aa09b42996c4fd5bae614b3ce3dd81c685d8da10c28f209.svg)Support Plans](https://docs.digitalocean.com/platform/support-plans/)
- [![](https://docs.digitalocean.com/images/icons/ddos.9bd745e00c340f315df5e60a2aef6a3ae3b2a4b9c16e583378f013ce39e94aaf.svg)DDoS Protection](https://docs.digitalocean.com/platform/ddos-protection/)
- [![](https://docs.digitalocean.com/images/icons/product-lifecycle.420c79b20e1d85e7a00a3dbb1734dc5c65ceaac5449c3ed8c34ad37cc88ffd9b.svg)Product Lifecycle Stages](https://docs.digitalocean.com/platform/product-lifecycle/)
- [![](https://docs.digitalocean.com/images/icons/slas.1b124ea38fb251987cabe77aae688f5c00fa72130222aca6073b34a82f26bfe2.svg)Service-Level Agreements](https://www.digitalocean.com/sla)
- [![](https://docs.digitalocean.com/images/icons/digitalocean.f7c2c7a6697e566e0086faaf43a17f7dc3a2da86dcb320bbc588e8dc94f6f8cc.svg)Security on DigitalOcean](https://www.digitalocean.com/security)
- [![](https://docs.digitalocean.com/images/icons/dns.cb34d0653affb99d6826d0a3c70bdb8311ae7f51ca44810ae41cb1deb2e03a71.svg)DigitalOcean IP ranges (CSV)](https://digitalocean.com/geo/google.csv)

- [Teams](https://docs.digitalocean.com/platform/teams/)
- [How-Tos](https://docs.digitalocean.com/platform/teams/how-to/)
- Configure SSO

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Configure Single Sign-On for Teams

Validated on 21 Nov 2025 • Last edited on 21 Nov 2025

Enabling single sign-on (SSO) on your DigitalOcean team lets team members sign in to DigitalOcean with a single set of credentials from an OIDC-compatible identity provider (IdP), like Okta. You can also enforce SSO login and automatically apply roles from your IdP to enable [role-based access control (RBAC)](https://docs.digitalocean.com/platform/teams/roles/).

IdPs must expose their OIDC endpoints over HTTPS using a valid, publicly trusted TLS certificate. This ensures the authentication traffic is encrypted and that the certificate can be verified by the service consuming the IdP (DigitalOcean). For example, if your IdP URL starts with `https://www.example…`, you’ll be able to configure SSO. If your IdP is at a URL that starts with `http://123.45.02.16…`, you won’t be able to configure SSO.

## Enable SSO on a DigitalOcean Team

To enable SSO for a team, you need to configure your OIDC-compatible IdP, then provide the OpenID provider URL, client ID, and client secret to DigitalOcean.

Configuration depends on your IdP. We have instructions for the following IdPs:

Auth0

To configure Auth0 as your IdP, you need to set up an application and Action in Auth0, configure SSO on your DigitalOcean team, and then finalize the configuration in Auth0.

#### Set Up Application and Action in Auth0

In the Auth0 dashboard, complete the following steps:

1. [Create roles](https://auth0.com/docs/manage-users/access-control/configure-core-rbac/roles/create-roles#dashboard) that match the name of the custom or predefined roles that you want to assign to your users in DigitalOcean. For example, Owner, Developer, Viewer, or Billing. Then, [create users](https://auth0.com/docs/manage-users/user-accounts/create-users) and [assign each user the role(s) you created](https://auth0.com/docs/manage-users/access-control/configure-core-rbac/roles/add-permissions-to-roles).

2. [Create an application](https://auth0.com/docs/get-started/auth0-overview/create-applications). Select the **Regular Web Application** option and name your application as `DigitalOcean SSO`.

3. Copy the following [application settings](https://auth0.com/docs/get-started/applications/application-settings#basic-information) about the Auth0 application: **Domain** (for example, `<use-your-tenant>.auth0.com/`), **Client ID**, and **Client Secret**. You use these values later when [configuring SSO on your DigitalOcean team](https://docs.digitalocean.com/platform/teams/how-to/configure-sso/#configure-sso-on-your-digitalocean-team).

4. Write and deploy a [custom Auth0 post-login action](https://auth0.com/docs/customize/actions/write-your-first-action#create-an-action) named `DigitalOcean Role Mapping`. When creating the Action, select `Login/Post Login` as the trigger and use the following code to map the Auth0 roles to the `team_role` custom claim to include in the ID token response for SSO:



```javascript
exports.onExecutePostLogin = async (event, api) => {
api.idToken.setCustomClaim(`team_role`, event.authorization?.roles || []);
};
```



Click **Deploy** to save the action.

5. [Attach the Action to login flow](https://auth0.com/docs/customize/actions/write-your-first-action#attach-the-action-to-a-flow). Drag and drop your Action between **Start** and **Complete** and save the flow.

Your screen should look similar to the following and shows that the Action is now running for real user traffic within your tenant.
![Attach the DigitalOcean Role Mapping action to the login flow in Auth0](https://docs.digitalocean.com/screenshots/teams/auth0-attach-action.f7c1e1d8c69eef2a44074a055cb693d979e3afa1bd143de9adc4a8238302c153.png)

#### Configure SSO on Your DigitalOcean Team

Next, use the credentials from Auth0 to set up the connection in DigitalOcean. For your provider domain, use `<use-your-tenant>.eu.auth0.com/`.

1. Switch to your team in the [control panel](https://cloud.digitalocean.com/).

Click the profile icon in the top right to open the drop-down menu, click **Switch Teams**, then click the name of team you want to update.

2. In the the **Single sign-on (OIDC)** section of the [team settings page](https://cloud.digitalocean.com/account/team), click **Enable** to go to the **Enable single sign-on** page.

3. Provide the values you saved from your IdP:
   - **OpenID provider URL**: Your provider domain.

   - **OpenID client ID**: Client ID from your IdP.

   - **OpenID client secret**: Client secret from your IdP.
4. Click **Test SSO config to continue**.

This tests that your provider URL is a valid OIDC provider before the next configuration page.

5. On the **Secure Settings** page, leave the **Require sign-in via SSO only** setting unchecked for now. This is critical for testing. Then, click **Continue**.

6. On the **Summary** page, copy the **SSO sign-in URL**, which looks similar to `https://cloud.digitalocean.com/sessions/sso/<id>`. You use this URL to initiate an SSO login from your IdP later.

7. Click **Enable SSO** to complete the SSO configuration.


#### Finalize Auth0 Configuration

Go back to Auth0 to add the SSO sign-in URL. This enables the SSO connection to be started from Auth0.

1. In the Auth0 dashboard, navigate to the `DigitalOcean SSO` application.

2. Specify the following application settings:
   - **Application Login URLs**: Enter the DigitalOcean **SSO sign-in URL** you obtained previously.

   - **Allowed Callback URLs**: Enter `https://cloud.digitalocean.com/sessions/sso/callback`.

Click **Save** to save the settings. This enables the SSO connection to be started from the provider.

#### Test the SSO Connection

1. In the browser, enter the DigitalOcean **SSO sign-in URL** you obtained previously.

2. Enter the username and password of the user.


You are redirected to a Welcome page from DigitalOcean, which indicates that you have successfully integrated DigitalOcean SSO with Auth0.

![Auth0 welcome page](https://docs.digitalocean.com/screenshots/teams/auth0-welcome-page.f70a3228bb23a4fb9250011a9141f2fa4b9cf0128e92737ed324b751d91d3b00.png)

Once you’ve successfully tested the SSO connection with one user, you can return to your DigitalOcean Control Panel to enable SSO. In the **Single sign-on (OIDC)** section of the team settings page, click the **…** menu and select **Edit SSO**. Click **Test SSO config to continue** to go to the **Secure Settings** page. Select the **Require sign-in via SSO only** setting to limit logins to SSO only.

authentik

To configure authentik as your IdP, you need to create a scope mapping, application, and provider in authentik, connect the application to the provider, configure the connection to DigitalOcean, and then finalize the application settings in authentik.

#### Create a Scope Mapping In authentik

1. Log in to authentik as an administrator and open the Admin interface.

2. In **Property Mappings** on the **Customization** page, click **Create**.

3. In **Scope Mapping**, enter the following required information:


   - **Name**: Provide an appropriate name.

   - **Scope name**: Enter `profile`.

   - **Expression**: Provide the following expression to map DigitalOcean roles to authentik groups:


     ```
     # Extract the names of all groups the user belongs to group_names = user.ak_groups.values_list("name", flat=True)
     # From the group names, filter out those that start with "do:"
     # Strip off the "do:" prefix so we’re left with just the role name
     do_roles = [n[3:] for n in group_names if n and n[:3].casefold() == "do:"]

     # You can find all predefined roles at: https://docs.digitalocean.com/platform/teams/roles/predefined/
     # You can find documentation for custom roles at: https://docs.digitalocean.com/platform/teams/roles/custom/
     priority = ["Owner", "Admin", "Member"]

     # Pick the first matching role based on priority order
     # (e.g. if user has both "do:Admin" and "do:Member", they'll get "Admin")
     chosen = next((r for p in priority for r in do_roles if r == p), None)

     # Return a dict with the team role if one was chosen, otherwise return an empty dict
     return {"team_role": [chosen]} if chosen else {}
     ```


Then, click **Finish**.

#### Create an Application and Provider and Connect Them in authentik

1. In the authentik Admin interface, [create an application and provider pair](https://docs.goauthentik.io/add-secure-apps/applications/manage_apps/#create-an-application-and-provider-pair). Provide the following information:
   - **Application**: Provide a descriptive name, an optional group for the type of application, the policy engine mode, and optional user interface settings.

   - **Choose a Provider type**: Select **OAuth2/OpenID Connect** as the provider type.

   - **Configure the Provider**: Provide a name (or use the default name), the authorization flow to use for this provider, and the following required configurations:


     - Set a `Strict` redirect URI to `https://cloud.digitalocean.com/sessions/sso/callback`.

     - Select any available signing key.

     - Under **Advanced protocol settings**, add the profile scope created in the previous section. Do not remove authentik’s `authentik default OAuth Mapping: OpenID 'profile'`, as claims such as name are required by DigitalOcean.


Note the **Client ID**, **Client Secret**, and slug values as you will use these values later when [configuring SSO on your DigitalOcean team](https://docs.digitalocean.com/platform/teams/how-to/configure-sso/#configure-sso-on-your-digitalocean-team).

   - **Configure Bindings**: Optionally, you can create a binding such as policy, group, or user, to manage which applications are listed on a user’s **My applications** page.
2. Click **Submit** to save the new application and provider.


Alternatively, you can first [create a provider](https://docs.goauthentik.io/providers/) separately, then create the application and connect it with the provider.

#### Configure SSO on Your DigitalOcean Team

Next, use the credentials from authentik to set up the connection in DigitalOcean. For your provider domain, use `https://authentik.company/application/o/<application_slug>/`.

1. Switch to your team in the [control panel](https://cloud.digitalocean.com/).

Click the profile icon in the top right to open the drop-down menu, click **Switch Teams**, then click the name of team you want to update.

2. In the the **Single sign-on (OIDC)** section of the [team settings page](https://cloud.digitalocean.com/account/team), click **Enable** to go to the **Enable single sign-on** page.

3. Provide the values you saved from your IdP:
   - **OpenID provider URL**: Your provider domain.

   - **OpenID client ID**: Client ID from your IdP.

   - **OpenID client secret**: Client secret from your IdP.
4. Click **Test SSO config to continue**.

This tests that your provider URL is a valid OIDC provider before the next configuration page.

5. On the **Secure Settings** page, leave the **Require sign-in via SSO only** setting unchecked for now. This is critical for testing. Then, click **Continue**.

6. On the **Summary** page, copy the **SSO sign-in URL**, which looks similar to `https://cloud.digitalocean.com/sessions/sso/<id>`. You use this URL to initiate an SSO login from your IdP later.

7. Click **Enable SSO** to complete the SSO configuration.


#### Set the Start URL in authentik

1. In the authentik Admin interface, select your DigitalOcean application.

2. Click **Edit** and expand **UI Settings**. Specify the **Launch URL** to the **SSO sign-in URL** value you copied from the DigitalOcean Control Panel.

3. Click **Update**.


JumpCloud

To configure JumpCloud as your IdP, you need to set up a user group and application in JumpCloud, configure SSO on your DigitalOcean team, and then finalize the configuration in JumpCloud.

#### Set Up User Group and Application in JumpCloud

In the JumpCloud Admin Portal, complete the following steps:

1. [Create user groups](https://jumpcloud.com/support/get-started-user-groups#creating-user-groups) that match the group names with the DigitalOcean permissions you want, such as `Owner`, `Developer`, or `Billing`. Before you start setting up a user group, make sure that you have a test user in the users list.

2. [Assign users to the group](https://jumpcloud.com/support/get-started-user-groups#adding-users-to-a-group).

3. [Create an application](https://jumpcloud.com/support/sso-with-oidc#configuring-the-custom-oidc-connector). When configuring the application, make sure to do the following:


   - Select the **Configure SSO for OIDC** option for the **Manage Single Sign-On SSO** setting.

   - On the **SSO** tab:
     - Select the **Refresh Token** check-box and add the DigitalOcean callback URI, `https://cloud.digitalocean.com/sessions/sso/callback`, in the **Redirect URI** field.

     - In the **Login URL** field, enter a temporary URL, `https://temporary.com`. You replace this URL once the DigitalOcean SSO setup is complete.

     - In the **Attribute Mapping** section, select the **Email and Profile** check boxes. Verify that the attribute list contains the required name and email fields and only appears once in the list.

     - In the **Constant Attributes** section, click **Add Attribute**. Specify `offline_access` and `openid` attributes and set their value to `true`.

     - Select the `include group attribute` checkbox and specify `team_role` in the text box to automatically include whatever groups are assigned to the application.

Click **Activate** to save the application. Copy your client ID and secret to use when [configuring SSO on your DigitalOcean team](https://docs.digitalocean.com/platform/teams/how-to/configure-sso/#configure-sso-on-your-digitalocean-team).

#### Configure SSO on Your DigitalOcean Team

Next, use the credentials from JumpCloud to set up the connection in DigitalOcean. For your provider domain, use `https://oauth.id.jumpcloud.com/`.

1. Switch to your team in the [control panel](https://cloud.digitalocean.com/).

Click the profile icon in the top right to open the drop-down menu, click **Switch Teams**, then click the name of team you want to update.

2. In the the **Single sign-on (OIDC)** section of the [team settings page](https://cloud.digitalocean.com/account/team), click **Enable** to go to the **Enable single sign-on** page.

3. Provide the values you saved from your IdP:
   - **OpenID provider URL**: Your provider domain.

   - **OpenID client ID**: Client ID from your IdP.

   - **OpenID client secret**: Client secret from your IdP.
4. Click **Test SSO config to continue**.

This tests that your provider URL is a valid OIDC provider before the next configuration page.

5. On the **Secure Settings** page, leave the **Require sign-in via SSO only** setting unchecked for now. This is critical for testing. Then, click **Continue**.

6. On the **Summary** page, copy the **SSO sign-in URL**, which looks similar to `https://cloud.digitalocean.com/sessions/sso/<id>`. You use this URL to initiate an SSO login from your IdP later.

7. Click **Enable SSO** to complete the SSO configuration.


#### Finalize JumpCloud Configuration

Go back to JumpCloud to add the SSO sign-in URL. This enables the SSO connection to be started from JumpCloud.

1. In the JumpCloud Admin Panel, select your DigitalOcean application.

2. On the application settings page, navigate to the **SSO** tab and scroll down to the **Login URL** field. Paste the login URL you copied from the DigitalOcean Control Panel into the text box and select **Save**.

3. In the **User Groups** tab, select two User Groups that you want to grant access to the application (for example, `All Users` and `Owner`) and click **Save**.


Each user must belong to two User Groups in order for the `team_role` attribute to be sent to DigitalOcean as an array in the user’s ID Token.

#### Test the SSO Connection

From the **Single sign-on (OIDC)** section of the [team settings page](https://cloud.digitalocean.com/account/team), copy the **SSO Sign-In URL** and paste it in a browser. Test that the SSO login for a user in the user group associated with the SSO application in JumpCloud works correctly.

Once you’ve successfully tested the SSO connection with one user, you can return to your DigitalOcean Control Panel to enable SSO. In the **Single sign-on (OIDC)** section of the team settings page, click the **…** menu and select **Edit SSO**. Click **Test SSO config to continue** to go to the **Secure Settings** page. Select the **Require sign-in via SSO only** setting to limit logins to SSO only.

Keycloak

To configure Keycloak as your IdP, you must create a client application in Keycloak and configure connection settings in DigitalOcean.

#### Create Client Application in Keycloak

In the Keycloak Admin Console, complete the following steps:

1. [Create a new realm](https://www.keycloak.org/docs/latest/server_admin/index.html#proc-creating-a-realm_server_administration_guide) or select your realm for your organization. Do not make any changes to the root realm.

2. [Create a new client](https://www.keycloak.org/docs/latest/server_admin/index.html#proc-creating-oidc-client_server_administration_guide). Provide the following information:


   - For **General settings**:
     - **Client type**: `OpenID Connect`.

     - **Client ID**: `DigitalOceanSSO` (or any other descriptive name)

     - **Name**: `DigitalOcean SSO`

     - **Description**: `SSO connection for DigitalOcean`
   - For **Capability config**, enable the following options:
     - **Client authentication**

     - **Authorization**: Enables users to be logged into DigitalOcean using roles mapped in this provider.

     - **Standard flow**: Enables DigitalOcean to use an authorization code flow for OIDC.

     - **Direct access grants**: Enables usernames and passwords to be exchanged for access tokens.
   - For **Login settings**, enter `https://cloud.digitalocean.com/login/oidc/callback` in the **Valid redirect URIs** text box.


The complete **Root URL** is generated after you enter your client credentials in the DigitalOcean Control Panel.

Click **Save** to create the client application. Once the application creation completes, the **Settings** tab of the DigitalOcean application opens. Click **Save** to confirm the settings.

3. Add users, as described in the [Keycloak documentation](https://www.keycloak.org/docs/latest/server_admin/index.html#assembly-managing-users_server_administration_guide).

4. [Navigate to the **Realm Settings** page](https://www.keycloak.org/docs/latest/server_admin/index.html#using-the-admin-console) and do the following in the **General** tab:
   - Note the URL in the **Frontend URL** field. This is the domain of your login screen (for example, `keycloak.mycompany.me`), where users are directed when they are logging into DigitalOcean from the sign-in URL.

   - Access the IdP issuer URL. Scroll to the bottom of the page. In the **Endpoints** section, click **OpenID Endpoint Configuration** and copy the **Issuer URL**. For example, `https://<frontendURL>/realms/<realm name>` or `https://sso.abc.com/realms/ExampleIdP`.
5. Select your DigitalOcean client application from the **Clients** page and copy the **Client ID** value from the **Settings** tab. Copy the **Client Secret** value from the **Credentials** tab.

You need these values and the issuer URL later when [configuring SSO on your DigitalOcean team](https://docs.digitalocean.com/platform/teams/how-to/configure-sso/#configure-sso-on-your-digitalocean-team).


#### Configure SSO on Your DigitalOcean Team

Next, use the credentials from Keycloak to set up the connection in DigitalOcean. For your provider domain, use `https://<frontendURL>/realms/<realm name>`.

1. Switch to your team in the [control panel](https://cloud.digitalocean.com/).

Click the profile icon in the top right to open the drop-down menu, click **Switch Teams**, then click the name of team you want to update.

2. In the the **Single sign-on (OIDC)** section of the [team settings page](https://cloud.digitalocean.com/account/team), click **Enable** to go to the **Enable single sign-on** page.

3. Provide the values you saved from your IdP:
   - **OpenID provider URL**: Your provider domain.

   - **OpenID client ID**: Client ID from your IdP.

   - **OpenID client secret**: Client secret from your IdP.
4. Click **Test SSO config to continue**.

This tests that your provider URL is a valid OIDC provider before the next configuration page.

5. On the **Secure Settings** page, leave the **Require sign-in via SSO only** setting unchecked for now. This is critical for testing. Then, click **Continue**.

6. On the **Summary** page, copy the **SSO sign-in URL**, which looks similar to `https://cloud.digitalocean.com/sessions/sso/<id>`. You use this URL to initiate an SSO login from your IdP later.

7. Click **Enable SSO** to complete the SSO configuration.


#### Finalize Keycloak Configuration

In the Keycloak Admin Console, complete the following steps:

1. Add the SSO login URL. Navigate to your DigitalOcean app. In the **Settings** tab, set the **Root URL** to the the DigitalOcean **SSO sign-in URL** you obtained previously. Click **Save** to save the settings.

2. [Add an Owner role](https://www.keycloak.org/docs/latest/server_admin/index.html#proc-creating-realm-roles_server_administration_guide).

You can specify any predefined role (Owner, Member, Biller, Billing Viewer, Resource Viewer, etc.) or a custom role. The role is mapped to DigitalOcean based on the name of the role. In the **Role name** field, add a `Owner` role and provide a description. Click **Save** to create the role.

Next, select the role from the list and go to it’s **Attribute** tab. Add an attribute called `team_role` with the value set to `Owner`, and click **Save**.


3. Add the `team_role` scope. Click **Client Scopes** in the left-hand menu and click **Create client scope**. On the **Create Client Scope** page, provide the following information:


   - **Name**: `team_role`

   - **Description**: `team_role`

   - **Type**: `Default`

   - **Protocol**: `OpenID Connect`

   - Toggle the **Include in token scope** setting to **On**.


Click **Save** to add the scope.

In the **Mappers** tab of the new scope, click **Configure a new mapper** and select **By configuration** from the **Add mapper** downdown list. On the **Configure a new mapper** page, select **User Attribute**. Then, specify the following information:

   - **Name**: `team_role`

   - **User Attribute**: `team_role`

   - **Token Claim Name**: `team_role`


Also, toggle **Multivalued** to **On** as DigitalOcean requires this scope to be sent as an array format to be included in the ID token and access token.

Click **Save** to create the mapper.

4. Add `team role` to the client scope. Navigate to your DigitalOcean application and select the **Client Scopes** tab. Then, add a client scope called `team_role` and click **Add**. `team_role` is now added to the OpenID `.well-known` configuration for your realm (for example, `https://<yourcompanyURL>.com/realms/<ExampleIdP>/.well-known/openid-configuration`) as shown:


```
...
"scopes_supported": [\
           "openid",\
           "email",\
           "profile",\
           "team_role"\
       ],
...
```

5. [Create a group](https://www.keycloak.org/docs/latest/server_admin/index.html#proc-managing-groups_server_administration_guide) that matches the value you want to pass to DigitalOcean as the user’s role. Then, add members that you want to access the DigitalOcean Control Panel with the group privileges.

In the **Attributes** tab of the group, add a `team_role` with a value of `Owner` and click **Save**. Next, [assign role mappings](https://www.keycloak.org/docs/latest/server_admin/index.html#proc-assigning-role-mappings_server_administration_guide) such as `Owner`, and click **Assign**.

Once assigned, you see **Owner** in the **Role mapping** tab.

6. Add `team_role` to the client scopes list. Navigate to the **Client Scopes** tab of the DigitalOcean application. In the **Evaluate** tab, enter the user name and select **ID token** from the list to view the ID token.

7. Add a `groups` scope. First, add a new scope named `groups`. In **Client Scopes** tab, select the **Mappers** tab and click **Add Mapper** to create a new mapper. Select **From configuration** in the dropdown list and select **Group Membership**. Also, select **Add to access token**, **Add to ID token**, and **Add to User Info**. Click **Save** to save the new mapper.

Next, in the **Client Scopes** tab, click **Add Client Scope**. Select the `groups` scope to add to the list as a default scope and click **Add**. The new client scope appears in the **Client scopes** list. Also, `groups` gets added to the OpenID `.well-known` configuration for your realm (for example, `https://<yourcompanyURL>.com/realms/<ExampleIdP>/.well-known/openid-configuration`):


```
...
"scopes_supported": [\
           "openid",\
           "email",\
           "profile",\
           "team_role"\
           "groups"\
       ],
...
```


#### Confirm your ID Token Response Attributes

Select your DigitalOcean application from the **Clients** list. In the **Client scopes** tab, select your test SSO login user from the drop-down list. Then, select **Generated ID token** from the right-hand menu to view your ID token response attributes for a user.

Okta

To configure Okta as your IdP, you need to create and configure an OIDC application in Okta, set up role mapping to translate Okta group membership into DigitalOcean roles, configure connection to DigitalOcean, and then finalize the application settings in Okta. You can find more information on [Okta as an IdP for OIDC apps](https://help.okta.com/oie/en-us/content/topics/apps/apps-about-oidc.htm).

#### Create Okta Groups for DigitalOcean Roles

First, create Okta groups that map to your DigitalOcean team roles. To do this, create a group in Okta for each role (predefined or custom) that you use on your DigitalOcean team, then assign the application to each group.

Follow these steps for each role on your DigitalOcean team:

1. In the [Okta Admin Console](https://www.okta.com/okta-administrator-experience/), [create a group](https://help.okta.com/en-us/content/topics/users-groups-profiles/usgp-groups-create.htm). Provide the following information:
   - For **Name**, enter a name for the group. For compatibility with the input expression in the next step, begin the group names with `DO:` followed by the DigitalOcean role name. For example, `DO:Owner`, `DO: My Custom Role`, or `DO: Billing`.

   - Optionally, enter a description for the group.
2. Click **Save** to create the group.


Optionally, you can add test users to these groups.

#### Create an Okta App Integration

1. From the [Okta admin console](https://www.okta.com/okta-administrator-experience/), [create an app integration](https://help.okta.com/oie/en-us/content/topics/apps/apps_app_integration_wizard_oidc.htm) with the following settings:
   - For the **Sign-In method**, choose **OIDC - OpenID Connect**.

   - For the **Application type**, choose **Web Application**.
2. Click **Next** to go to the **New Web App Integration** page:
   - Set **App integration name** to a descriptive name. For example, `DigitalOcean SSO`.

   - Set **Sign-in redirect URIs** to the DigitalOcean callback URL `https://cloud.digitalocean.com/sessions/sso/callback`.

   - Optionally, delete the default `localhost` URI in **Sign-out redirect URIs**.

   - Under **Assignments**, set **Controlled access** to **Skip group assignment for now**.
3. Click **Save** to create the app integration, which takes you to the app’s **General** tab.


#### Configure the `team_role` Claim

Configuring the claim tells Okta to send your `DO:` group names to DigitalOcean as a `team_role`.

1. In the app you created in the previous step, click the **Sign On** tab. In the **OpenID Connect ID Token** section, click **Edit**, and change the following settings:
   - For **Groups claim type**, choose **Expression**

   - For **Groups claim expression**’s **Claim name**, enter `team_role`.

   - For **Groups claim expression**’s **Input expression**, enter the following expression:



     ```java
     Arrays.flatten(String.replace(Arrays.toCsvString(Groups.startsWith("OKTA","DO:",100)),"DO:", ""))
     ```



     This expression removes the `DO:` substring from matching group names and passes what remains as the `team_role`. For more information, see [How to Remove Substring from Group Names in OpenID Connect Claims](https://support.okta.com/help/s/article/How-to-remove-group-prefix-from-OpenID-Connect-claims).
2. Click **Save**.


#### Assign Groups and Get Credentials

1. Navigate to the **Assignments** tab for your `DigitalOcean SSO` app.

2. Click **Assign** and then **Assign to Groups**.

3. Assign the `DO:Owner`, `DO:My Custom Role`, etc., groups you created previously.

4. Navigate to the **General** tab and copy the following three values to use next to finish configuration on DigitalOcean in the next step:
   - **Client ID** of your Okta app.

   - **Client Secret** of your Okta app.

   - **Okta domain**. This is your Issuer URL, such as `https://example-application.okta.com`.

#### Configure SSO on Your DigitalOcean Team

Next, use the credentials from OKta to set up the connection in DigitalOcean. For your provider domain, use `https://<use-your-tenant>.okta.com`.

1. Switch to your team in the [control panel](https://cloud.digitalocean.com/).

Click the profile icon in the top right to open the drop-down menu, click **Switch Teams**, then click the name of team you want to update.

2. In the the **Single sign-on (OIDC)** section of the [team settings page](https://cloud.digitalocean.com/account/team), click **Enable** to go to the **Enable single sign-on** page.

3. Provide the values you saved from your IdP:
   - **OpenID provider URL**: Your provider domain.

   - **OpenID client ID**: Client ID from your IdP.

   - **OpenID client secret**: Client secret from your IdP.
4. Click **Test SSO config to continue**.

This tests that your provider URL is a valid OIDC provider before the next configuration page.

5. On the **Secure Settings** page, leave the **Require sign-in via SSO only** setting unchecked for now. This is critical for testing. Then, click **Continue**.

6. On the **Summary** page, copy the **SSO sign-in URL**, which looks similar to `https://cloud.digitalocean.com/sessions/sso/<id>`. You use this URL to initiate an SSO login from your IdP later.

7. Click **Enable SSO** to complete the SSO configuration.


#### Finalize Okta Configuration

Go back to Okta to add the SSO sign-in URL. This enables the SSO connection to be started from the Okta dashboard.

1. In Okta, navigate to the application settings for your `DigitalOcean SSO` app.

2. From the **General** tab of your application settings, in the **General Settings** section, click **Edit**.
   - In the **Login** subsection, set **Login initiated by** to **Either Okta or App**.

   - Check the **Display application icon to users** checkbox.

   - Set **Initiate login URI** to your **SSO sign-in URL**.
3. Click **Save** to finish.


#### Test the SSO Connection

1. Log in to Okta as a user who is a member of one of your `DO:` groups such as `DO:Owner`.

2. From the Okta dashboard, click the **DigitalOcean SSO** application icon.


You should be redirected and logged into your DigitalOcean team successfully.

Once you’ve successfully tested the SSO connection, you can return to your DigitalOcean Control Panel to enable SSO. In the **Single sign-on (OIDC)** section of the team settings page, click the **…** menu and select **Edit SSO**. Click **Test SSO config to continue** to go to the **Secure Settings** page. Select the **Require sign-in via SSO only** setting to limit logins to SSO only. Once SSO is enabled, this prevents team members from signing in to DigitalOcean with other login methods, like an email and password.

## Disable SSO on a DigitalOcean Team

To disable SSO on a team, switch to the team in the [control panel](https://cloud.digitalocean.com/). Click the profile icon in the top right to open the drop-down menu, click **Switch Teams**, then click the name of team you want to update.

Next, in the left menu of the control panel, click **Settings** to go to the [team settings page](https://cloud.digitalocean.com/account/team). In the **Single sign-on (OIDC)** section, click the **…** menu, then click **Disable**. In the **Disable single sign-on** confirmation window click **Disable SSO** to disable SSO on your team.

Your SSO configuration is saved even when disabled, so you may re-enable it at any time.

## View SSO Activity

To view a log of single sign-on activity, switch to your team in the [control panel](https://cloud.digitalocean.com/). Click the profile icon in the top right to open the drop-down menu, click **Switch Teams**, then click the name of team you want to view.

Next, in the left menu of the control panel, click **Settings** to go to the [team settings page](https://cloud.digitalocean.com/account/team). In the **Single sign-on (OIDC)** section, click **Show more**, then click **View SSO Activity** to go to the [SSO activity page](https://cloud.digitalocean.com/account/team/sso/activity), which has a table with timestamped sign-on history events.

In this article...

- [Enable SSO on a DigitalOcean Team](https://docs.digitalocean.com/platform/teams/how-to/configure-sso/#enable-sso-on-a-digitalocean-team)
- [Disable SSO on a DigitalOcean Team](https://docs.digitalocean.com/platform/teams/how-to/configure-sso/#disable-sso-on-a-digitalocean-team)
- [View SSO Activity](https://docs.digitalocean.com/platform/teams/how-to/configure-sso/#view-sso-activity)

##### Company

- [About](https://www.digitalocean.com/about)
- [Careers](https://www.digitalocean.com/careers)
- [Blog](https://www.digitalocean.com/blog)

##### Docs

- [Docs Home](https://docs.digitalocean.com/)
- [API Reference](https://docs.digitalocean.com/reference/api)
- [CLI Reference](https://docs.digitalocean.com/reference/doctl)
- [Release Notes](https://docs.digitalocean.com/release-notes)
- [Trust Platform](https://www.digitalocean.com/trust)

##### Community

- [Tutorials](https://www.digitalocean.com/community/tutorials)
- [Q&A](https://www.digitalocean.com/community/questions)
- [Write for DOnations](https://www.digitalocean.com/community/pages/write-for-digitalocean)
- [Currents Research](https://www.digitalocean.com/currents)
- [Legal](https://www.digitalocean.com/legal)
- [Code of Conduct](https://www.digitalocean.com/community/pages/code-of-conduct)

##### Support

- [Support Center](https://docs.digitalocean.com/support)
- [Report Abuse](https://www.digitalocean.com/company/contact/abuse)

* * *

Cookie Preferences

© 2025 DigitalOcean, LLC. All rights reserved

### We can't find any results for your search.

Try using different keywords or simplifying your search terms.

Loading...

## Product Docs

### We can't find any results for your search.

Try using different keywords or simplifying your search terms.

## Marketplace

## DigitalOcean Blog

## Community

navigategoexit

GenAI Agent - DigitalOcean

![DigitalOcean Docs Agent](https://product-docs.nyc3.cdn.digitaloceanspaces.com/ai-agent-icon.svg)

This site uses cookies and related technologies, as described in our [privacy policy](https://www.digitalocean.com/legal/privacy-policy/), for purposes that may include site operation, analytics, enhanced user experience, or advertising. You may choose to consent to our use of these technologies, or manage your own preferences. Please visit our [cookie policy](https://www.digitalocean.com/legal/cookie-policy) for more information.

Agree & ProceedDecline AllManage Choices