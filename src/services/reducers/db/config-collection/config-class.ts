
import { Generic } from "../../../firebase/generic";

// TODO: criar um formulário que define as configurações iniciais do aplicativo
// const dataForm = {

// };

export class ConfigModel {
  count!: number;
}

export class ConfigCollection extends Generic<ConfigModel>{
  constructor() {
    super('config');
  }
  generateRequestId() {}
}