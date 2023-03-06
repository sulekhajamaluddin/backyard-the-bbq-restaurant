import { initializeApp } from "firebase/app";

//Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyBj_bz4_--WN-q2z_O_cgxRqN6YJZC5Sqs",
  authDomain: "backyard-the-bbq-restaurant.firebaseapp.com",
  projectId: "backyard-the-bbq-restaurant",
  storageBucket: "backyard-the-bbq-restaurant.appspot.com",
  messagingSenderId: "429858797188",
  appId: "1:429858797188:web:569f76022358904d52b4d1",
};

const firebase = initializeApp(firebaseConfig);

export { firebase };
