import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CardsFormComponent } from './cards-form/cards-form.component';
import { NameInputComponent } from './form-input/name-input.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsFormComponent,
    NameInputComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
