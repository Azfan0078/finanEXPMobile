export class FinForm<T>{
  public addControl(formControlName:string, formControl:FinFormControl){
    this.formValue = {
      ...this.formValue,
      [formControlName]: formControl
    }
  }

  public get(formControlName):any {
    return this.formValue[formControlName]
  }

  public getRawValue() {
    return this.formValue
  }

  private formValue = {

  }
}

export class FinFormControl {
  validators: Array<FinValidator> = []
  value: string;
}
export class FinValidator {

}