import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyDIyu_a9WtyuJ2mhjyhUs8fJqLLv3KzBsI",
    authDomain: "sonpring-c6d53.firebaseapp.com",
    projectId: "sonpring-c6d53",
    storageBucket: "sonpring-c6d53.appspot.com",
    messagingSenderId: "917817463209",
    appId: "1:917817463209:web:782ce605fef9191ddb74b8",
    measurementId: "G-H34XVNEYC9"
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);