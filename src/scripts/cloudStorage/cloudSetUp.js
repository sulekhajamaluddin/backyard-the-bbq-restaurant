import { firebase } from "../firebase/firebaseSetup";
import { getStorage } from "firebase/storage";

export const cloudStorage = getStorage(firebase);
