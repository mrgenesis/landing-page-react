import { RequestCollection } from "./class-collection";

const requestCollection = new RequestCollection();

export function requestCollectionReducer(state: any, action: any) {
  const docId = localStorage.getItem('docId');
  switch(action.type) {
    case 'CREATE':
      if (docId) { 
        requestCollection.setDocumentReference(docId);
        return;
      }
      requestCollection.create().then(() => {
        localStorage.setItem('docId', requestCollection.docId);
      });
      return state;
    case 'UPDATE':
      if(docId) {
        requestCollection.setDocumentReference(docId);
      }
      requestCollection.update(action.payload);
      return state;
    case 'DONE':      
      return { ...state, requestNumber: requestCollection.done() };
    default:
      throw new Error(`Option "${action.type}" don't exists.`);
  }
}