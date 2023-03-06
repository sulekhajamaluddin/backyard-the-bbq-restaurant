import { firebase } from "../firebase/firebaseSetup";
import { getFirestore } from "firebase/firestore";

export const database = getFirestore(firebase);
