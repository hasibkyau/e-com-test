import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { BannerComponent } from './banner/banner.component';
import { PrpdictListComponent } from './prpdict-list/prpdict-list.component';


@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    PrpdictListComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
