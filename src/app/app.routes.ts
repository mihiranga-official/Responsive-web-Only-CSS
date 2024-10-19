import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ResponsiveComponent } from './responsive/responsive.component';
import { ViewPurchaseComponent } from './view-purchase/view-purchase.component';
import { DeleteOrderComponent } from './delete-order/delete-order.component';
import { AddorderComponent } from './addorder/addorder.component';
import { AddsupplierComponent } from './addsupplier/addsupplier.component';
import { PrintReciptComponent } from './addorder/print-recipt/print-recipt.component';


export const routes: Routes = [
    {path:'',component:AddsupplierComponent},
    {path:'purchase',component:ViewPurchaseComponent},
    {path:'deletePurchase',component:DeleteOrderComponent},
    {path:'addOrder',component:AddorderComponent},
    {path:'addSuppliers',component:AddsupplierComponent},
    {path:'reciptPrint',component:PrintReciptComponent}
    
];
