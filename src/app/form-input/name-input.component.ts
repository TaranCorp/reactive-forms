import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  templateUrl: './name-input.component.html',
  styleUrls: ['./name-input.component.css']
})
export class NameInputComponent {
  @Input() control: FormControl;
  @Input() label: string;

  isNameValid(): boolean {
    const {dirty, touched, errors} = this.control;
    return touched && dirty && !!errors;
  }
}
