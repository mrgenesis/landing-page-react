

import * as firebase from 'firebase/app';
import { firebaseConsfig } from '../../config';

import { getFirestore } from 'firebase/firestore';
import { getStorage, ref, StorageReference } from "firebase/storage";

export const firebaseApp = firebase.initializeApp(firebaseConsfig);
export const db = getFirestore(firebaseApp);

export const storageReference: StorageReference = ref(getStorage(), `net-claro/${localStorage.getItem('docId')}`);