import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { collectionData } from '@angular/fire/firestore';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

import { Observable } from 'rxjs';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

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
export class AddsupplierComponent implements OnInit {
  suppliers$: Observable<any[]>
  addSuppliers!: FormGroup;

  constructor(private fb: FormBuilder, private firestore: Firestore) {
    const suppliersCollection = collection(this.firestore, 'suppliers')
    this.suppliers$ = collectionData(suppliersCollection, { idField: 'id' })
  }




  ngOnInit(): void {
    this.addSuppliers = this.fb.group({
      supplierName: [''],
      supplierCompany: ['' ],
      supplierContact: [''],
      supplierArea: [''],
    })
  }
  onSubmit() {
    this.addSupplier();

  }
  
  async addSupplier() {
    if (this.addSuppliers.valid) {
      const supplierData = this.addSuppliers.value;
      try {
        await addDoc(collection(this.firestore, 'suppliers'), supplierData);
        console.log("Supplier added successfully:", supplierData);
        this.addSuppliers.reset();
      } catch (error) {
        console.log('Error adding supplier:', error);
      }
    }
  }

}
