import {
  collection,
  collectionGroup,
  getDocs,
  rootRef,
  FieldPath,
} from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
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
    const parentId = doc.ref.parent.parent.id;
    const dataItem = { id: doc.id, parent_id: parentId, ...doc.data() };
    result.push(dataItem);
  });

  return result;
}

export async function filterAllSubcollections() {
  const collectionRef = collection(database, "categories");
  const productDocRef = collectionRef.document("1n77Pp3zushaqXFBy1Ts");
  const products = collectionGroup("products")
    .orderBy(FieldPath.documentId())
    .startAt(productDocRef.path)
    .get();
}

export async function readDocument(collectionName, docId) {
  const documentReference = doc(database, collectionName, docId);
  const document = await getDoc(documentReference);
  if (document.exists()) {
    return document.data();
  } else {
    console.log("No such document!");
  }
}
