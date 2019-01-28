import { Component, OnInit, OnDestroy } from '@angular/core';
import { DeliveryService } from './services/delivery.service';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss']
})
export class DeliveryComponent implements OnInit, OnDestroy {
  bannerData: any;
  bannerSubscription: Subscription;

  constructor(private deliveryService: DeliveryService) { }

  async ngOnInit() {
    this.bannerSubscription = await(this.deliveryService.getBannerData())
      .subscribe(bannerData => {
        this.bannerData = bannerData;
      });
  }

  ngOnDestroy() {
    this.bannerSubscription.unsubscribe();
  }

}
