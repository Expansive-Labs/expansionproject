import { collection, firestore } from "firebase/firestore";

const COLLECTION_NAME = "visitorUsers";

export const counterReference = collection(firestore, "visitorUsers");

const visitorRef = () => doc(firestore, COLLECTION_NAME, "visitorUsers");
