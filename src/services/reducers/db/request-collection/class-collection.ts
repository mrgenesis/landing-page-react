import { Generic } from "../../../firebase/generic";

export class RequestModel {}

export class RequestCollection extends Generic<RequestModel>{
  requestNumber?: number;
  step!: string;
  constructor() {
    super('requests');
    const localRequestNumber = localStorage.getItem('requestNumber');
    const hasRequestNumber = !!localRequestNumber;
    if (hasRequestNumber) {
      this.requestNumber = Number(localRequestNumber);
      return this;
    }
    const requestNumber: number = this.generateRandomIntegerInRange(50000, 99999);
    localStorage.setItem('requestNumber', String(requestNumber));

    this.requestNumber = requestNumber;
  }
  setStep(stepName: string) {
    this.step = stepName;
  }
  async create() {
    this.step = 'created';
    await super.create({ requestNumber: this.requestNumber, step: this.step });
    localStorage.setItem('docId', this.documentReference.id);
  }
  async update(data: any) {
    super.update({ step: this.step, ...data });
  }
  done() {
    const requestNumber = localStorage.getItem('requestNumber');
    localStorage.removeItem('requestNumber');
    localStorage.removeItem('docId');
    localStorage.removeItem('hasSaveResquestNumber');
    delete this.requestNumber;
    return requestNumber;
  }
  
  generateRandomIntegerInRange(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
