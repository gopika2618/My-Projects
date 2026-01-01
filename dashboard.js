// SAME Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyDqMInTE0MudKfObCNIoBHK6rhxGXRJ89U",
    authDomain: "login-page-app-e5994.firebaseapp.com",
    projectId: "login-page-app-e5994",
    storageBucket: "login-page-app-e5994.appspot.com",
    messagingSenderId: "1009872547170",
    appId: "1:1009872547170:web:44e9e0ec200d74ac03103b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// AUTH CHECK
auth.onAuthStateChanged(user => {
    if (user) {
    document.getElementById("userEmail").innerText =
        "Logged in as: " + user.email;
    } else {
    window.location.href = "index.html";
    }
});

// LOGOUT
function logout() {
    auth.signOut().then(() => {
    window.location.href = "index.html";
    });
}