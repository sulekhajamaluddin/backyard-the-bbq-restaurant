import { collection, collectionGroup, getDocs } from "firebase/firestore";
import { database } from "./databaseSetup";

export async function readDocuments(collectionName) {
  const documentReference = collection(database, collectionName);
  const documents = await getDocs(documentReference);
  const result = [];

  documents.forEach((doc) => {
    const dataItem = { id: doc.id, ...doc.data() };
    result.push(dataItem);
  });

  return result;
}

export async function readAllSubcollections(subcollectionName) {
  const documentReference = collectionGroup(database, subcollectionName);
  const documents = await getDocs(documentReference);
  const result = [];

  documents.forEach((doc) => {
    const dataItem = { id: doc.id, ...doc.data() };
    result.push(dataItem);
  });

  return result;
}
