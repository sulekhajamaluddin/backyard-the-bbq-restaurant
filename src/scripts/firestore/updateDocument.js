import { doc, updateDoc } from "firebase/firestore";
import { database } from "./databaseSetup";

export async function updateDocument(collectionName, data) {
  const documentId = data.id;
  const documentReference = doc(database, collectionName, documentId);
  await updateDoc(documentReference, data);
}
