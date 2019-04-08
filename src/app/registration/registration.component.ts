import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators, FormBuilder } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Ng6NotifyPopupService } from 'ng6-notify-popup';
import { MatAutocomplete } from '@angular/material/autocomplete';




export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  matcher = new MyErrorStateMatcher();
  usaStates: String[] = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
    'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
    'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
    'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina',
    'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina',
    'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia','Wisconsin', 'Wyoming'];


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private notify: Ng6NotifyPopupService
    ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      physicalAddress: ['', [Validators.required]],
      mailingAddress: ['', [Validators.required, Validators.minLength(6)]],
      city: ['', [Validators.required, Validators.maxLength(100)]],
      //usaStatesIs: ['', Validators.required],
      zipCode: ['', [Validators.required,Validators.minLength(5), Validators.maxLength(9)]]
    });
  }

  showSucess(text: string, type: string): void {
    this.notify.show(text, { position:'top', duration:'3000', type: 'success' });
  }
  get f() { return this.registerForm.controls;}

  formValue(key){
     return this.registerForm.get(key).value;
  }

  onRegistration() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      console.log('validation working ----');
      return;
    }
    console.log("On registration call");
    this.showSucess("Detail Submited Successfully.","success");
    this.router.navigate(['/fuelquote']);
  }

}
