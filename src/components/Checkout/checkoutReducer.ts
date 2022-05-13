import { CheckoutState } from "./interfaces";
import { IValidationFormat, ValidationResult } from "./validations";

export default function checkoutReducer(state: CheckoutState, action: any) {
  
  switch(action.type) {
    case 'UPDATE_FIELD':      
      let validated = new ValidationResult(action.payload[state.currentFocus]);
      if (typeof state.validations?.[state.step]?.[state.currentFocus] === 'function') {
        validated = state.validations[state.step][state.currentFocus](action.payload[state.currentFocus]) as IValidationFormat;
      }
      
      return { 
        ...state,
        dataOfValidation: { 
          ...state.dataOfValidation,
          [state.step]: { 
            ...state.dataOfValidation[state.step],
            [state.currentFocus]: { 
              ...state.dataOfValidation?.[state.step]?.[state.currentFocus], 
              ...validated 
            } 
          }          
        }, 
        data: { 
          ...state?.data,
          [state.step]: {
            ...state.data[state.step], 
            [state.currentFocus]: validated.value
          }
        }
      };
    case 'VALIDATE':
      return {
        ...state,
        isValidatedAll: {
          ...state?.isValidatedAll,
          [state.step]: action.payload,
        }
      };
    case 'SET_STEP':
      return { ...state, step: action?.payload?.step || 'error' };
    case 'CURRENT_FOCUS':
      return { ...state, currentFocus: action.payload };
    default:
      throw new Error(`[checkoutReducer diz]: Opção "${action.type}" desconhecida.`);
  }
}
