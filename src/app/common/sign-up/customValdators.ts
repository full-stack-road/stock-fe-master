
import { FormControl, Validators } from '@angular/forms';

export class CustomValidators extends Validators {

    // Phone must have only 10 numbers
    static invalidPhone(control: FormControl): any {
        if (control.value && !control.value.match(/^\d{10}$/)) {
            return { 'invalidPhone': true };
        }
        return null;
    }

    // Emails must be unique
    static duplicateEmail(control: FormControl): any {
        //console.log('duplicateEmail');
        if (control.value) {
            //const lookupService = new LookupService();
            //return lookupService.emailExist(control.value);
        }
    }
}