import { Directive } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS, ValidatorFn, FormGroup } from '@angular/forms';

export const identityValueValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const password = control.get('password');
  const reenterPassword = control.get('reenterPassword');

  return password && reenterPassword && password.value !== reenterPassword.value ? { 'identityValue': true } : null;
};

@Directive({
  selector: '[appIdentityValue]',
  providers: [{ provide: NG_VALIDATORS, useExisting: IdentityValueDirective, multi: true }]
})
export class IdentityValueDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors {
    return identityValueValidator(control);
  }
}
