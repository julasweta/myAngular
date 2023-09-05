import {FormControl} from '@angular/forms'

export class EmailValidators {

  static checkEmail(control: FormControl): {[key: string]: boolean}|null {
    if (['v@ukr.net', 'test@ukr.net'].includes(control.value)) {
      return {checkEmail: true}
    }
    return null
  }

}
