import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoesComponent } from './shoes/shoes.component';

const routes: Routes = [
  { path : 'shoes', component : ShoesComponent },
  { path : '', redirectTo : '/shoes', pathMatch : 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
