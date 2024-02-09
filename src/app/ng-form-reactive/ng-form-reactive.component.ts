import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-ng-form-reactive',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './ng-form-reactive.component.html',
  styleUrl: './ng-form-reactive.component.css'
})
export class NgFormReactiveComponent {
  /* FORM GROUP*/
  formUserFormGroup = new FormGroup({
    'nombreFormGroup': new FormControl('', Validators.required),
    'correoFormGroup': new FormControl('', [Validators.required, Validators.email]),
  })

  get nombreFormGroup(){
    return this.formUserFormGroup.get('nombreFormGroup') as FormControl;
  }

  get correoFormGroup(){
    return this.formUserFormGroup.get('correoFormGroup') as FormControl;
  }

  enviarFormGroup(){
    console.log(this.formUserFormGroup.value)
  }


  /* FORM BUILDER*/
  constructor(private fb: FormBuilder) {

  }

  formUserFormBuilder = this.fb.group({
    'nombreFormBuilder': ['', Validators.required],
    'correoFormBuilder': ['', [Validators.required, Validators.email]],
  });

  get nombreFormBuilder(){
    return this.formUserFormBuilder.get('nombreFormBuilder') as FormControl;
  }

  get correoFormBuilder(){
    return this.formUserFormBuilder.get('correoFormBuilder') as FormControl;
  }

  enviarFormBuilder(){
    console.log(this.formUserFormBuilder.value)
  }
}
