

import * as firebase from 'firebase/app';
import { firebaseConsfig } from '../../config';

import { getFirestore } from 'firebase/firestore';

export const firebaseApp = firebase.initializeApp(firebaseConsfig);
export const db = getFirestore(firebaseApp);
