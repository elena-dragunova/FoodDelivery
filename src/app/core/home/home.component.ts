import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomeService } from '../services/home.service';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  promoItems: any;
  newItems: any;
  bannerInfo: any;
  advItems: any;
  galleryItems: any;
  promoSubscription: Subscription;
  newSubscription: Subscription;
  bannerSubscription: Subscription;
  advSubscription: Subscription;
  gallerySubscription: Subscription;

  constructor(private homeService: HomeService) { }

  async ngOnInit() {
    this.promoSubscription = await(this.homeService.getPromoItems())
      .subscribe(promoItems => {
        this.promoItems = promoItems;
      });
    this.newSubscription = await(this.homeService.getNewItems())
      .subscribe(newItems => {
        this.newItems = newItems;
      });
    this.bannerSubscription = await(this.homeService.getBannerInfo())
      .subscribe(bannerInfo => {
        this.bannerInfo = bannerInfo;
      });
    this.advSubscription = await(this.homeService.getAdvantages())
      .subscribe(advItems => {
        this.advItems = advItems;
      });
    this.gallerySubscription = await(this.homeService.getGallery())
      .subscribe(galleryItems => {
        this.galleryItems = galleryItems;
      });
  }

  ngOnDestroy() {
    this.promoSubscription.unsubscribe();
    this.newSubscription.unsubscribe();
    this.bannerSubscription.unsubscribe();
    this.advSubscription.unsubscribe();
    this.gallerySubscription.unsubscribe();
  }
}
