import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent1Component } from './test-component1/test-component1.component';
import { routes as DemoRoutes} from './demo-component/demo-component.component';
import { LifehooksComponent } from './test-component1/lifehooks/lifehooks.component';
export const routes: Routes = [
  { path: '', redirectTo: 'components', pathMatch: 'full' },
 
  { path: 'components', component: TestComponent1Component, children: DemoRoutes },  
   { path: 'lifecycle', component: LifehooksComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


