import  firebase from "@react-native-firebase/app";
import '@react-native-firebase/auth';

const firebaseConfig = {
    clientId: 'gs-mobile-watteco',
    appId: 'gs-mobile-watteco',
    apiKey: 'AIzaSyAFv54EkI9B5M5qtLFEQEx93qpYt_SysUw',
    databaseURL: 'https://gs-mobile-watteco-default-rtdb.firebaseio.com/',
    storageBucket: 'gs-mobile-watteco.firebasestorage.app',
    messagingSenderId: '',
    projectId: 'gs-mobile-watteco'
}

firebase.initializeApp(firebaseConfig)

const apps = firebase.apps

apps.forEach(app => console.log(app.name))

const auth = firebase.app().auth()
export {firebase, auth}