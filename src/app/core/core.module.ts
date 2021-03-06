import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeService } from './home/services/home.service';
import { AboutService } from './about/services/about.service';
import { DeliveryService } from './delivery/services/delivery.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([])
  ],
  declarations: [HomeComponent, NavbarComponent, FooterComponent, AboutComponent, DeliveryComponent, ContactsComponent],
  exports: [
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    DeliveryComponent,
    ContactsComponent
  ],
  providers: [
    HomeService,
    AboutService,
    DeliveryService
  ]
})
export class CoreModule { }
