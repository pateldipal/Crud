import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  products = [];
  private data: any;
  update: boolean = false;
  constructor(private fb: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      id: [],
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      gender: ['', Validators.required],
      address: ['', [Validators.required]],
      city: ['', Validators.required]
    });
  }

  // tslint:disable-next-line:typedef
  get f() {
    return this.registerForm.controls;
  }
  // tslint:disable-next-line:typedef
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.products.push(this.registerForm.value);
    console.log(this.products);
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }
  // tslint:disable-next-line:typedef
  onReset(){
    this.submitted = false;
    this.registerForm.reset();
  }
  // tslint:disable-next-line:typedef
  childe(data) {
    this.update = true;
    const data1 = data.data;
    this.registerForm.patchValue({
      fname: data1.fname,
      lname: data1.lname,
      email: data1.email,
      password: data1.password,
      gender: data1.gender,
      address: data1.address,
      city: data1.city
    });
  }
  // tslint:disable-next-line:typedef
  onUpdate(data){
    this.submitted = true;
    this.data.put(this.registerForm.value);
  }
}
