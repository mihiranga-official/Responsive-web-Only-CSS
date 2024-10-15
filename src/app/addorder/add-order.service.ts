import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddOrderService {

  private getting: string = "assets/mockdata/foods.json";
   
  private gettingOne:string="assets/mockdata/foodName.json"

  constructor(private http: HttpClient) {}

  getAllOrderCompData(): Observable<any[]> {
    return this.http.get<any[]>(this.getting).pipe(
      tap(dataSets => console.log("Janith New", dataSets))
    );
  }
  gettAllFoodName():Observable<any[]>{
    return this.http.get<any[]>(this.gettingOne).pipe(
      tap(dataSetsOne=>console.log("Janith Two",dataSetsOne))
    );
  }
}
