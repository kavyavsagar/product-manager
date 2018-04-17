import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {MatButtonModule, MatInputModule, MatSelectModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSortModule} from '@angular/material/sort';

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
	  FormsModule,
    MatButtonModule, 
    MatInputModule, 
    MatSelectModule,
    MatToolbarModule,
    MatTableModule,
    MatFormFieldModule,
    MatCardModule,
    MatSnackBarModule,
    MatDialogModule,
    MatSortModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    MatButtonModule, 
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    MatTableModule,
    MatFormFieldModule,
    MatCardModule,
    MatSnackBarModule,
    MatDialogModule,
    MatSortModule
  ]
})
export class MaterialModule { }
