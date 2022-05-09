import { RequestCollection } from "./class-collection";

const requestCollection = new RequestCollection();

export function requestCollectionReducer(state: any, action: any) {
  switch(action.type) {
    case 'CREATE':
      if (localStorage.getItem('hasSaveResquestNumber')) {
        return;
      }
      requestCollection.create();
      localStorage.setItem('hasSaveResquestNumber', 'true');
      return state;
    case 'UPDATE':
      const docId = localStorage.getItem('docId');
      if(docId) {
        requestCollection.setDocumentReference(docId);
      }
      requestCollection.update(action.payload);
      return state;
    case 'SET_STEP':
      requestCollection.setStep(action.payload);
      return state;
    case 'DONE':      
      return { ...state, requestNumber: requestCollection.done() };
    default:
      throw new Error(`Option "${action.type}" don't exists.`);
  }
}