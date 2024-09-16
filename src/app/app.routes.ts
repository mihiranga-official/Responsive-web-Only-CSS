import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ResponsiveComponent } from './responsive/responsive.component';
import { ViewPurchaseComponent } from './view-purchase/view-purchase.component';
import { DeleteOrderComponent } from './delete-order/delete-order.component';
import { AddorderComponent } from './addorder/addorder.component';

export const routes: Routes = [
    {path:'',component:AddorderComponent},
    {path:'purchase',component:ViewPurchaseComponent},
    {path:'deletePurchase',component:DeleteOrderComponent},
    {path:'addOrder',component:AddorderComponent}
    
];
