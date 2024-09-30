import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddOrderService {

  private baseUrls:string="assets/mockdata/foods.json"
  private https:HttpClient=inject(HttpClient)
  constructor() { }
}
