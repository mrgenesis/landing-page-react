
export enum Steps { 
  created = 'created', 
  address = 'address', 
  personalData = 'personalData', 
  invoice = 'invoice', 
  done = 'done' 
}

export enum AdressPropertiesNames { 
  zipCode = 'zipCode' ,
  streetName = 'streetName' ,
  streetNumber = 'streetNumber' ,
  neighborhood = 'neighborhood' ,
  city = 'city' ,
  state = 'state' ,
}
export enum PersonalDataPropertiesNames { 
  name = 'name',
  cpf = 'cpf',
  email = 'email',
  phone1 = 'phone1',
  phone2 = 'phone2',
  occupation = 'occupation',
  education = 'education',
}

export interface AllPropertyNames {
  [Steps.address]: AdressPropertiesNames;
  [Steps.personalData]: PersonalDataPropertiesNames;
}

export interface AdressProperties { 
  [AdressPropertiesNames.zipCode]: string;
  [AdressPropertiesNames.streetName]: string;
  [AdressPropertiesNames.streetNumber]: string;
  [AdressPropertiesNames.neighborhood]: string;
  [AdressPropertiesNames.city]: string;
  [AdressPropertiesNames.state]: string;
}

export interface PersonalDataProperties { 
  [PersonalDataPropertiesNames.name]: string;
  [PersonalDataPropertiesNames.cpf]: string;
  [PersonalDataPropertiesNames.email]: string;
  [PersonalDataPropertiesNames.phone1]: string;
  [PersonalDataPropertiesNames.phone2]: string;
  [PersonalDataPropertiesNames.occupation]: string;
  [PersonalDataPropertiesNames.education]: string;
}

export interface CheckoutState {
  /**
   * A propriedade `data` é onde os dados do formulário serão armazenados
   */
  data: {
    [Steps.created]?: any,
    [Steps.address]: AdressProperties,
    [Steps.personalData]?: PersonalDataProperties,
    [Steps.invoice]:  { 
      dueDate: string; 
      paymentMethod: 'Boleto' | 'Débito em conta'; 
      dataBanck?: { 
        name: string; 
        agency: string;
        account: string;
      }
    },
    [Steps.created]?: any,
    [Steps.created]?: any,
    [Steps.done]?: any,
  };

  /**
   * A propriedade `validations` contém as funções que validam os campos do formulário
   */
  validations: any;

  /**
   * determina se 
   */
  isValidatedAll: any;

  currentFocus: string;

  step: Steps;

  dataOfValidation: any;

  errorView: (field: string) => boolean;

  displayHelperText: (field: string) => string | undefined;

  validateAll: () => boolean;
};
export interface CheckoutAction {
  type: string;
  payload?: any
}

export type GenericFun = (v: string) => void;
export interface IAddressValidations {
  [AdressPropertiesNames.zipCode]: GenericFun;
  [AdressPropertiesNames.streetName]: GenericFun;
  [AdressPropertiesNames.neighborhood]: GenericFun;
}
export interface IPersonalDataValidations {
  [PersonalDataPropertiesNames.name]: GenericFun;
  [PersonalDataPropertiesNames.cpf]: GenericFun;
  [PersonalDataPropertiesNames.email]: GenericFun;
  [PersonalDataPropertiesNames.phone1]: GenericFun;
}

export interface IValidationFormat {
  value: string;
  status: boolean;
  helperText: string;
}

export interface IValidations {
  [Steps.address]: IAddressValidations;
  [Steps.personalData]: IPersonalDataValidations;
}
