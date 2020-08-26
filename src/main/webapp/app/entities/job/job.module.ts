import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Myapp2020SharedModule } from 'app/shared/shared.module';
import { JobComponent } from './job.component';
import { JobDetailComponent } from './job-detail.component';
import { JobUpdateComponent } from './job-update.component';
import { JobDeleteDialogComponent } from './job-delete-dialog.component';
import { jobRoute } from './job.route';

@NgModule({
  imports: [Myapp2020SharedModule, RouterModule.forChild(jobRoute)],
  declarations: [JobComponent, JobDetailComponent, JobUpdateComponent, JobDeleteDialogComponent],
  entryComponents: [JobDeleteDialogComponent],
})
export class Myapp2020JobModule {}