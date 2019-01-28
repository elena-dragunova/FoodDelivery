import { Component, OnInit, OnDestroy } from '@angular/core';
import { AboutService } from './services/about.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {
  bannerData: any;
  sectionsData: any;
  bannerSubscription: Subscription;
  sectionsSubscription: Subscription;

  constructor(private aboutService: AboutService) { }

  async ngOnInit() {
    this.bannerSubscription = await(this.aboutService.getBannerData())
      .subscribe(bannerData => {
        this.bannerData = bannerData;
      });
    this.sectionsSubscription = await(this.aboutService.getSectionsData())
      .subscribe(sectionsData => {
        this.sectionsData = sectionsData;
      });
  }

  ngOnDestroy() {
    this.bannerSubscription.unsubscribe();
    this.sectionsSubscription.unsubscribe();
  }
}

