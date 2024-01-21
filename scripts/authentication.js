// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());

// ui.start('#firebaseui-auth-container', {
//     signInOptions: [
//         firebase.auth.EmailAuthProvider.PROVIDER_ID
//     ],
//     // Other config options...
// });


// print('Ran start')

// var uiConfig = {
//     callbacks: {
//         signInSuccessWithAuthResult: function (authResult, redirectUrl) {
//             // User successfully signed in.
//             // Return type determines whether we continue the redirect automatically
//             // or whether we leave that to developer to handle.
//             print('Ran signIn')
//             return true;
//         },
//         uiShown: function () {
//             // The widget is rendered.
//             // Hide the loader.
//             document.getElementById('loader').style.display = 'none';
//         }
//     },
//     // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
//     signInFlow: 'popup',
//     signInSuccessUrl: 'templates/home.html',
//     signInOptions: [
//         // Leave the lines as is for the providers you want to offer your users.
//         firebase.auth.EmailAuthProvider.PROVIDER_ID,
//     ],
//     // Terms of service url.
//     tosUrl: '<your-tos-url>',
//     // Privacy policy url.
//     privacyPolicyUrl: '<your-privacy-policy-url>'
// };


// ui.start('#firebaseui-auth-container', uiConfig);

var uiConfig = {
    callbacks: {
        signInSuccessWithAuthResult: function (authResult, redirectUrl) {
            // User successfully signed in.
            // Return type determines whether we continue the redirect automatically
            // or whether we leave that to developer to handle.
            //------------------------------------------------------------------------------------------
            // The code below is modified from default snippet provided by the FB documentation.
            //
            // If the user is a "brand new" user, then create a new "user" in your own database.
            // Assign this user with the name and email provided.
            //------------------------------------------------------------------------------------------
            var user = authResult.user; // get the user object from the Firebase authentication database
            if (authResult.additionalUserInfo.isNewUser) { //if new user
                db.collection("users").doc(user.uid).set({ //write to firestore. We are using the UID for the ID in users collection
                        name: user.displayName, //"users" collection
                        email: user.email, //with authenticated user's ID (user.uid)
                    }).then(function () {
                        console.log("New user added to firestore");
                        window.location.assign("index.html"); //re-direct to index.html after signup
                    })
                    .catch(function (error) {
                        console.log("Error adding new user: " + error);
                    });
                //creates a new subcollection for the user's emotions
                db.collection("users").doc(user.uid).collection(user.displayName + "Moods").doc("2023-01-19").set({
                    date: "2023-01-19",
                    mood: "Happy",
                });
                //sets userUid and userDisplayName as a local storage variable
                localStorage.setItem('userUid', user.uid)
                localStorage.setItem('userDisplayName', user.displayName)
                console.log(user.uid);
                console.log(user.displayName)
            } else {
                localStorage.setItem('userUid', user.uid)
                localStorage.setItem('userDisplayName', user.displayName)
                console.log(user.uid);
                console.log(user.displayName)
                return true;
            }
            return false;
        },
        uiShown: function () {
            // The widget is rendered.
            // Hide the loader.
            document.getElementById('loader').style.display = 'none';
        }
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInSuccessUrl: 'HTML/index.html',
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    // Terms of service url.
    tosUrl: '<your-tos-url>',
    // Privacy policy url.
    privacyPolicyUrl: '<your-privacy-policy-url>'
};

ui.start('#firebaseui-auth-container', {
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    // Other config options...
});