import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './components/nav/nav.component';
import { StateDirective } from './directives/state.directive';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { OrderPipe } from './pipes/order.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    NgbModule
  ],
  declarations: [NavComponent,StateDirective, FormComponent, FilterPipe, OrderPipe],
  exports: [NavComponent,StateDirective,FormComponent,FilterPipe,OrderPipe]
})
export class SharedModule { }
