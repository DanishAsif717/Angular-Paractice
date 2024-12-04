import { Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TableComponent } from './table/table.component';

export const routes: Routes = [
{
  path :'contact',
  component :ContactUsComponent


},
{
    path:'table',
    component:TableComponent
}





];
