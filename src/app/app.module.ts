import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DataCaptureComponent } from './data-capture/data-capture.component';
import { PetListComponent } from './pet-list/pet-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DataCaptureComponent,
    PetListComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
