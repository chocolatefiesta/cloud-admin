import {
    FirebaseAuthProvider,
    FirebaseDataProvider,
} from 'react-admin-firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDsEXIV0OTzWuRX4XBiVB4a-3w4bP_fnCs",
    authDomain: "chocolate-fiesta-cloud.firebaseapp.com",
    databaseURL: "https://chocolate-fiesta-cloud-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "chocolate-fiesta-cloud",
    storageBucket: "chocolate-fiesta-cloud.appspot.com",
    messagingSenderId: "419100703725",
    appId: "1:419100703725:web:42a642a456befea15045e4",
    measurementId: "G-FRZNRK641V"
};

const reactAdminFirebaseOptions = {
    logging: true,
    useFileNamesInStorage: true
};


export const firebaseDataProvider = FirebaseDataProvider(firebaseConfig, reactAdminFirebaseOptions);
export const firebaseAuthProvider = FirebaseAuthProvider(firebaseConfig, reactAdminFirebaseOptions);
