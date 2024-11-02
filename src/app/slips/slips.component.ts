import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-slips',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './slips.component.html',
  styleUrl: './slips.component.scss'
})
export class SlipsComponent {
  companyName:string='Divison D.R Exports (Pvt) Ltd -'
  basicSalary : number = 27750.000;  
  targetIncetive:number=13320.00
  department:string='Knock Down 1';
  months:string='September 2024';
  slipsNo:number=1;
  employeeNo:number=481;
  employeename:string="Harsha Kumara Chamika M";
  targetInsentive:number=13320.04;
  bra2005:number=1000.00;
  bra2016:number=1000.00;
  interimAllowance2023:number=2500.00;
  productivityincentive:number=2500.00;
  exprServiceL:number=8450.00;
  specialAllowance:number=10911.00
  holidayPay:number=2500.00
  


  
}
