/*
                            FIREBASE API keys are visible to users but for security,
    AFTER DEPLOYING MY PROJECT I WILL RESTRICT FIREBASE API KEY USAGE REQUESTS TO A SPECIFIED WEBSITE

For more information: https://cloud.google.com/docs/authentication/api-keys?hl=en&visit_id=637618555730645022-772762286&rd=1
*/

// Our web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAA8yPnfxlSnKcWiz2B_DSYouVL8f_P1zc",
    authDomain: "login-signup-3cb70.firebaseapp.com",
    projectId: "login-signup-3cb70",
    storageBucket: "login-signup-3cb70.appspot.com",
    messagingSenderId: "1068464682098",
    appId: "1:1068464682098:web:cf903a5dfcf1b9db2e3eeb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var db = firebase.firestore()