import { collection, addDoc } from "firebase/firestore";
import { database } from "./databaseSetup";

export async function createDocument(collectionName, data) {
  const documentReference = collection(database, collectionName);
  const document = await addDoc(documentReference, data);
  console.log("Document written with ID: ", document.id);
  return document.id;
}
