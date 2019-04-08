import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators, FormBuilder } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Ng6NotifyPopupService } from 'ng6-notify-popup';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-fuel-quote-form',
  templateUrl: './fuel-quote-form.component.html',
  styleUrls: ['./fuel-quote-form.component.css']
})
export class FuelQuoteFormComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  matcher = new MyErrorStateMatcher();
  totalAmount = 'Total Amount Due *';


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private notify: Ng6NotifyPopupService
    ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      numberOfGallons: ['', Validators.required],
      deliveryAddress: ['', Validators.required],
      deliveryDate: ['', [Validators.required]],
      // suggestedPrice: ['', [Validators.required]]
    });
  }

  showSucess(text: string, type: string): void {
    this.notify.show(text, { position:'top', duration:'3000', type: 'success' });
  }
  get f() { return this.registerForm.controls;}

  getFormValue(key){
     return this.registerForm.get(key).value;
  }

  setFormValue(key,v){
     this.registerForm.get(key).value == v;
 }

  onRegistration() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      console.log('validation working ----');
      return;
    }
    this.showSucess("Fuel quate added Successfully.","success");
    //this.registerForm.reset();
    console.log("On registration call")
    this.router.navigate(['/registration']);
  }
  gotToRegestration(){
    this.router.navigate(['/registration']);
  }
  priceAndGallonsFocusOut(){
    console.log("navleennnnnnn.......")
    if(this.getFormValue('numberOfGallons') && this.getFormValue('suggestedPrice')){

      this.totalAmount = (this.getFormValue('numberOfGallons') * this.getFormValue('suggestedPrice')) + '';
      console.log("totalAmount", this.totalAmount);

    } else {
      this.totalAmount = 'Total Amount Due *';
    }
  
  }

}
