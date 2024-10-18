import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { Database, ref, set, push, getDatabase, onValue } from '@angular/fire/database';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-addsupplier',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, ReactiveFormsModule],
  templateUrl: './addsupplier.component.html',
  styleUrls: ['./addsupplier.component.scss']
})
export class AddsupplierComponent implements OnInit {
  suppliers$!: Observable<any[]>;
  addSuppliers!: FormGroup;
  supplierList: any[] = [];

  constructor(private fb: FormBuilder, private db: Database) {
    const suppliersRef = ref(this.db, 'suppliers');
    onValue(suppliersRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        this.supplierList = Object.values(data);
      }
    });
  }

  ngOnInit(): void {
    this.addSuppliers = this.fb.group({
      supplierName: ['', Validators.required],
      supplierCompany: ['', Validators.required],
      supplierContact: ['', Validators.required],
      supplierArea: ['', Validators.required],
    });
  }

  onSubmit() {
    this.addSupplier();
  }

  async addSupplier() {
    if (this.addSuppliers.valid) {
      const supplierData = this.addSuppliers.value;
      try {
        const db = getDatabase();
        const supplierRef = ref(db, 'suppliers');
        const newSupplierRef = push(supplierRef);
        await set(newSupplierRef, supplierData);
        console.log('Supplier added successfully:', supplierData);
        this.addSuppliers.reset();
      } catch (error) {
        console.error('Error adding supplier:', error);
      }
    }
  }
}
