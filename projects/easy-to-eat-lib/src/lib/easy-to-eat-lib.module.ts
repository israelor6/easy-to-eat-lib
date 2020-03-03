import {ModuleWithProviders, NgModule} from '@angular/core';
import { EasyToEatLibComponent } from './easy-to-eat-lib.component';
import {EasyToEatLibService} from './easy-to-eat-lib.service';
import {DecimalPipe} from '@angular/common';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {TokenInterceptor} from './interceptors/token.interceptor';

@NgModule({
  declarations: [EasyToEatLibComponent],
  imports: [
  ],
  providers: [DecimalPipe, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  exports: [EasyToEatLibComponent]
})
export class EasyToEatLibModule {
  static forRoot(configuration): ModuleWithProviders {
    console.log(configuration);
    return {
      ngModule: EasyToEatLibModule,
      providers: [EasyToEatLibService, {provide: 'config', useValue: configuration}]
    };
  }
}
