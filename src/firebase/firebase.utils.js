import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyBV9w6GhTM101Zb7VWUMVWmCyeBSr44uXE",
    authDomain: "gamersden-52edd.firebaseapp.com",
    databaseURL: "https://gamersden-52edd.firebaseio.com",
    projectId: "gamersden-52edd",
    storageBucket: "gamersden-52edd.appspot.com",
    messagingSenderId: "1002634731639",
    appId: "1:1002634731639:web:7694593ce5831149e1a672"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) =>{
  	if(!userAuth) return;

  	const userRef = firestore.doc(`users/${userAuth.uid}`);
  	const snapshot = await userRef.get();

  	if(!snapshot.exists){
  		const {displayName, email} = userAuth;
  		const createdAt = new Date();
  		try{
  			await userRef.set({
  				displayName,
  				email,
  				createdAt,
  				...additionalData
  			});}
  			 catch(error){
  				console.log('error creating user',error.message);
  			}
  		
  	} 
  	return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;