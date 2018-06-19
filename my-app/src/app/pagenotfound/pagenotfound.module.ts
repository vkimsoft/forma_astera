import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { PagenotfoundRoutingModule } from './pagenotfound-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PagenotfoundRoutingModule
  ],
  declarations: [PagenotfoundComponent],
  exports: [PagenotfoundComponent]
})
export class PagenotfoundModule { }
