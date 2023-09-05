import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailValidators } from './email.validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form: FormGroup;
  allSkills: [any] = [''];

  //створення форми і полів, валідація
  // EmailValidators.checkEmail -  власний валідатор
  constructor() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required, EmailValidators.checkEmail]),
      password: new FormControl('', [Validators.minLength(6)]),
      address: new FormGroup({
        country: new FormControl('ua'),
        city: new FormControl(''),
      }),
      skills: new FormArray([]),
    });
  }

  get skillsArray(): FormArray {
    return this.form.get('skills') as FormArray;
  }

  //автозаповненя данних в input в залежності від вибраної країни
  chooseCity(): void {
    const coun = this.form.get('address')?.get('country')?.value;
    const cityArr: Record<string, string> = {
      ua: 'Lviv',
      it: 'Roma',
      pl: 'WARSAW'
    };

    const city = cityArr[coun];
    this.form.patchValue({ address: { city } });
  }

  //додавання нових полів
  addSkill(): void {
    const control = new FormControl('', Validators.minLength(6));
    this.skillsArray.push(control);
  }

  submit(event: any): void {
    console.log(this.form.value.address.country);
    console.log(this.form.errors);
    console.log(this.form.value.skills);
    this.allSkills = [''];
    for (const skill of this.form.value.skills) {
      this.allSkills.push(skill);
    }
    this.form.reset();
  }

  ngOnInit(): void {
    this.chooseCity();
  }
}

