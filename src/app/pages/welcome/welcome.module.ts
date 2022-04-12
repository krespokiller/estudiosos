import { NgModule } from '@angular/core';
import { NgZorroAntdModuleModule } from 'src/app/ng-zorro-antd-module/ng-zorro-antd-module.module';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';


@NgModule({
  imports: [WelcomeRoutingModule,NgZorroAntdModuleModule],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
