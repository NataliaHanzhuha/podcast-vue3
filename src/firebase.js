import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const config = {
  apiKey: "AIzaSyDizEz7mCnAJucPd5aXeyV1Uwmp69Q7O2s",
  authDomain: "podcast-therapy-api.firebaseapp.com",
  projectId: "podcast-therapy-api",
  storageBucket: "podcast-therapy-api.appspot.com",
  messagingSenderId: "1033825996310",
  appId: "1:1033825996310:web:272d385ea371f7e8ed6f37",
  measurementId: "G-4LX67WGT46",
};

export const firebaseApp = initializeApp(config);

export const db = getFirestore(firebaseApp);

export const videosRef = collection(db, "videos");
