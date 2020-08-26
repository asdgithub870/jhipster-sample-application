import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'region',
        loadChildren: () => import('./region/region.module').then(m => m.Myapp2020RegionModule),
      },
      {
        path: 'country',
        loadChildren: () => import('./country/country.module').then(m => m.Myapp2020CountryModule),
      },
      {
        path: 'location',
        loadChildren: () => import('./location/location.module').then(m => m.Myapp2020LocationModule),
      },
      {
        path: 'department',
        loadChildren: () => import('./department/department.module').then(m => m.Myapp2020DepartmentModule),
      },
      {
        path: 'task',
        loadChildren: () => import('./task/task.module').then(m => m.Myapp2020TaskModule),
      },
      {
        path: 'employee',
        loadChildren: () => import('./employee/employee.module').then(m => m.Myapp2020EmployeeModule),
      },
      {
        path: 'job',
        loadChildren: () => import('./job/job.module').then(m => m.Myapp2020JobModule),
      },
      {
        path: 'job-history',
        loadChildren: () => import('./job-history/job-history.module').then(m => m.Myapp2020JobHistoryModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class Myapp2020EntityModule {}
