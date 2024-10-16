import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { addDoc, collection } from 'firebase/firestore';
import { Observable } from 'rxjs';

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
    console.log();
    console.log();
    console.log();
    console.log();

  }
  
  async addSupplier() {
    if (this.addSuppliers.valid) {
      
      const supplierData = this.addSuppliers.value;
      
      try {
        await addDoc(collection(this.firestore, 'suppliers'), supplierData);
        console.log("HIIIII",supplierData);
        this.addSuppliers.reset();
        
      }
      catch (error) {
        console.log('Error adding supplier: ', error);

      }
    }
  }

}
