import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';

import {  MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {  MatButtonModule } from '@angular/material/button';
import {  MatIconModule } from '@angular/material/icon';
import {  MatCardModule } from '@angular/material/card';

const MODULES = [
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
];

@NgModule({

    imports: MODULES,
    exports: MODULES

})

export class MaterialModule { }
