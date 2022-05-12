import { IValidations, PersonalDataPropertiesNames, Steps } from "./interfaces";

export interface IValidationFormat {
  value: string;
  status: boolean;
  helperText: string;
}

export class ValidationResult implements IValidationFormat {
  value: string;
  status: boolean;
  helperText: string;
  constructor(value: string, status: boolean = true, helperText: string = '') {
    this.value = value;
    this.status = status;
    this.helperText = helperText;
  } 
}

export const validations: IValidations = {
  [Steps.address]: {
    zipCode: (zipCode: string): IValidationFormat => {
      const clearedData = zipCode.replace(/\D/g, '');
      let status: boolean = clearedData.length === 8;
      return new ValidationResult(clearedData, status, `O CEP deve ter 8 números, mas só tem ${clearedData.length}.`);
    },
    streetName: (streetName: string) => {
      let status: boolean = streetName.length > 0;
      return new ValidationResult(streetName, status, 'Este campo não pode ficar vazio.');
    },
    neighborhood: (neighborhood: string) => {
      let status: boolean = neighborhood.length > 0;
      return new ValidationResult(neighborhood, status, 'Este campo não pode ficar vazio.');
    },
  },
  [Steps.personalData]: {
    [PersonalDataPropertiesNames.name]: (name: string): IValidationFormat => {
      let status: boolean = name.length > 4 && (/\w+\s\w+/g).test(name);
      return new ValidationResult(name, status, 'Digite seu nome completo.');
    },
    [PersonalDataPropertiesNames.cpf]: (cpf: string): IValidationFormat => {
      const helper = 'Digite um CPF válido com 11 dígitos.';
      const value = cpf.replace(/\D/g, '');
      var Soma;
      var Resto;
      Soma = 0;
      if (value === "00000000000") return new ValidationResult(value, false, helper);
    
      for (let i = 1; i <= 9 ; i++) Soma = Soma + parseInt(value.substring(i - 1, i)) * (11 - i);
      Resto = (Soma * 10) % 11;
    
        if ((Resto === 10) || (Resto === 11))  Resto = 0;
        if (Resto !== parseInt(value.substring(9, 10)) ) return new ValidationResult(value, false, helper);
    
      Soma = 0;
        for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(value.substring(i - 1, i)) * (12 - i);
        Resto = (Soma * 10) % 11;
    
        if ((Resto === 10) || (Resto === 11))  Resto = 0;
        if (Resto !== parseInt(value.substring(10, 11) ) ) return new ValidationResult(value, false, helper);
      return new ValidationResult(value, true, helper);
    },
    [PersonalDataPropertiesNames.email]: (name: string): IValidationFormat => {
      let status: boolean = (/\w+@\w+\.\w+/g).test(name);
      return new ValidationResult(name, status, 'Digite um e-mail válido.');
    },
    [PersonalDataPropertiesNames.phone1]: (phone1: string): IValidationFormat => {
      const value = phone1.replace(/\D/g, '');
      let status: boolean = value.length === 10 || value.length === 11;
      return new ValidationResult(value, status, `Digite seu seu telefone com DDD. Exemplo: 44911113333.`);
    },
  }
}