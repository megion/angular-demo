import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { AdminComponent } from './admin/admin.component';

const routes = [
  { path: 'admin', component: AdminComponent },
];

@NgModule({
  declarations: [AdminComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AdminModule {}
