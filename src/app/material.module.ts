import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatListModule, MatFormFieldModule, MatInputModule, MatTabsModule} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule, 
    MatCheckboxModule, 
    MatListModule, 
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule],
  exports: [
    MatButtonModule, 
    MatCheckboxModule, 
    MatListModule, 
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule],
})
export class MaterialModule { }