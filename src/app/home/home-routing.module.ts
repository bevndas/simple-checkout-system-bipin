import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.component';
import {ProductResolverService} from 'src/app/home/services';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: {
      products: ProductResolverService
    }
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
