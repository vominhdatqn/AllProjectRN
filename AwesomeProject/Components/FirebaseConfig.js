import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCft_XQiPuwLgjToW81Ez5x74nhGSAnFDk",
    authDomain: "managertoroom-6f733.firebaseapp.com",
    databaseURL: "https://managertoroom-6f733.firebaseio.com",
    projectId: "managertoroom-6f733",
    storageBucket: "managertoroom-6f733.appspot.com",
    messagingSenderId: "964235450795"
  };
export const firebaseApp  =  firebase.initializeApp(config);