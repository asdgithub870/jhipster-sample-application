import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Myapp2020SharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [Myapp2020SharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent],
})
export class Myapp2020HomeModule {}
