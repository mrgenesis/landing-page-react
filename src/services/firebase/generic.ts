import { collection, CollectionReference, getDoc, DocumentReference, doc, DocumentSnapshot, addDoc, updateDoc } from "firebase/firestore";
import { db } from ".";

export class Generic<T> {

  collectionReference: CollectionReference;
  documentReference!: DocumentReference;
  documentSnapshot!: DocumentSnapshot;

  constructor(private readonly collectionName: string) {
    this.collectionReference = collection(db, collectionName);
  }
  async create(data: T) {
    this.documentReference = await addDoc(this.collectionReference, data);
  }

  setDocumentReference(docId: string) {
    this.documentReference = doc(db, this.collectionName, docId);
  }
  async fetchDoc() {
    this.documentSnapshot = await getDoc(this.documentReference);
  }
  extractData(): T | null {
    if (this.documentSnapshot.exists()) {
      return this.documentSnapshot.data() as T;
    }
    return null;
  }
  update(data: any) {
    updateDoc(this.documentReference, data);
  }
}
