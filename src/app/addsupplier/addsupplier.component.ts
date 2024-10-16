import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-addsupplier',
  standalone: true,
  imports: [CommonModule,
    RouterOutlet, 
    FormsModule,
    ReactiveFormsModule],
  templateUrl: './addsupplier.component.html',
  styleUrl: './addsupplier.component.scss'
})
export class AddsupplierComponent implements OnInit{
  
  addSuppliers!: FormGroup;

  constructor(private fb:FormBuilder){

  }

  ngOnInit():void  {
   this.addSuppliers =this.fb.group({
    supplierName:['',Validators.required],
    supplierCompany:['',[Validators.required,Validators.minLength(10)]],
    supplierContact:['',Validators.required,Validators.maxLength(10)], 
    supplierArea:['',Validators.required,Validators.minLength(50)],
   })
  }
onSubmit(){
  console.log();
  console.log();
  console.log();
  console.log();
  
}


}
