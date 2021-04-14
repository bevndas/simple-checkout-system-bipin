import {NgModule} from '@angular/core';
import {NopageComponent} from 'src/app/shared/components';
import {ToPound} from 'src/app/shared/pipes';



@NgModule({
  declarations: [NopageComponent, ToPound, ToPound],
  imports: [],
  exports: [
    ToPound,
    NopageComponent,
    ToPound
  ],
  providers: [ToPound]
})
export class SharedModule {}
