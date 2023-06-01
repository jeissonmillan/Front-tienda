import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './Tienda/listar/listar.component';
import { AgregarComponent } from './Tienda/agregar/agregar.component';
import { EditarComponent } from './Tienda/editar/editar.component';

const routes: Routes = [
  {path:"listar" , component:ListarComponent},
  {path:"agregar" , component:AgregarComponent},
  {path:"editar" , component:EditarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
