
import React, { createContext } from 'react';
import { CheckoutState, Steps, AdressProperties, AdressPropertiesNames, PersonalDataProperties, PersonalDataPropertiesNames } from './interfaces';
import { validations } from './validations';

type CheckoutAction = any;

const emptyAdressProperties: AdressProperties = {
  zipCode: '',
  streetName: '',
  streetNumber: '',
  neighborhood: '',
  city: '',
  state: '',
}
const emptyPersonalDataProperties: PersonalDataProperties = {
  name: '',
  cpf: '',
  email: '',
  phone1: '',
  phone2: '',
  occupation: '',
  education: '',
}

const initState: CheckoutState = {
  data: {
    [Steps.created]: Steps.created,
    [Steps.address]: emptyAdressProperties,
    [Steps.personalData]: emptyPersonalDataProperties,
    [Steps.invoice]: {
      dueDate: '',
      paymentMethod: 'Boleto'
    },
    [Steps.done]: 'any',
  },
  currentFocus: '',
  isValidatedAll: {},
  step: Steps.created,
  validations,
  dataOfValidation: {
    [Steps.address]: {
      [AdressPropertiesNames.zipCode]: {
        required: true,
      },
      [AdressPropertiesNames.streetName]: {
        required: true,
      },
      [AdressPropertiesNames.neighborhood]: {
        required: true,
      }
    },
    [Steps.personalData]: {
      [PersonalDataPropertiesNames.name]: {
        required: true
      },
      [PersonalDataPropertiesNames.cpf]: {
        required: true
      },
      [PersonalDataPropertiesNames.email]: {
        required: true
      },
      [PersonalDataPropertiesNames.phone1]: {
        required: true
      },
    }
  },

  errorView(fieldName: string): boolean { 
    const isNotInFocus: boolean  = this.currentFocus !== fieldName;
    const isValidationRunned: boolean  = this.dataOfValidation?.[this.step]?.[fieldName]?.status !== undefined;
    const isNotValidData: boolean  = !this.dataOfValidation?.[this.step]?.[fieldName]?.status;
    return isNotInFocus && isValidationRunned && isNotValidData;
  },  
  displayHelperText (fieldName: string): string | undefined {
    if(!this.dataOfValidation?.[this.step]?.[fieldName]?.status || (!this.dataOfValidation?.[this.step]?.[fieldName]?.status && this.currentFocus === fieldName)) {
      return this.dataOfValidation?.[this.step]?.[fieldName]?.helperText;
    }
  },
  validateAll(): boolean {
    if (this.step === 'done') {
      return true;
    }
    const stepPropertyNames = Object.keys(this?.data?.[this.step]);
    const isLastFieldValid = this.dataOfValidation?.[this.step]?.[this.currentFocus]?.status;
    let isValidated: boolean | null = null;
    if (isLastFieldValid) {
      stepPropertyNames.forEach(fieldName => {        
        const isValidStatus = this?.dataOfValidation?.[this.step]?.[fieldName]?.status;
        const isNotRequired = !this?.dataOfValidation?.[this.step]?.[fieldName]?.required;
        const isAllValid = isValidStatus || isNotRequired;
        if(isAllValid) {
          return;
        }
        isValidated = false;
      });
      if (isValidated === null)  {
        return true;
      }
    }
    return false;
  }
};
const temporaryFunc = (action: CheckoutAction) => void {}; // esta funcção deve ser substituida pela retornada em useReducer

export const checkoutContext = createContext<[state: CheckoutState, dipatch: React.Dispatch<CheckoutAction>]>([initState, temporaryFunc]);
