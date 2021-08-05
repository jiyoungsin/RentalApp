# How to access User Data After Login

```js
Step 1. import React, {useContext} from 'react';
Step 2. import {userSessionContext} from "../../contextFile";
Step 3. const {user, setUser} = useContext(userSessionContext)
Step 4. const role = user.userName;
```

1. Import useContext function
2. Import contextFile file.
3. Using useContext function get the user.
4. Using the User object access the current users Data.

# Social Media Email and Passwords

Gmail ---
Email - rentvroom@gmail.com
Pass - vroom123!

Instagram ---
Username - rentvroom
Pass - vroom123

Twitter ---
Username - Vroomrent
Pass - vroom123

Facebook page ---
Link - https://www.facebook.com/Vroom-104576231830894

# DocuSign Functionality

DocuSign Powerforms are used to obtain DocuSign functionality. The link to powerform is added to the rental page.

```js
<a
    target="blank"
    rel="noopener noreferrer"
    variant="primary"
    href="https://demo.docusign.net/Member/PowerFormSigning.aspx?PowerFormId=6c7e010f-6c7c-4de4-9679-4388aa581d47&env=demo&acct=14c96305-310a-40e4-9925-66f8abc7c383&v=2"
    className="btn btn-primary mr-1"
>
    DocuSign
</a>
```
