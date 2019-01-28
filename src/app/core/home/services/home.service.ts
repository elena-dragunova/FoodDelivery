import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database/database";

@Injectable()
export class HomeService {

  constructor(private db: AngularFireDatabase) { }

  getPromoItems() {
    return this.db.list('/home-promo');
  }

  getNewItems() {
    return this.db.list('/home-new');
  }

  getBannerInfo() {
    return this.db.object('/home-banner');
  }

  getAdvantages() {
    return this.db.list('/home-advantage');
  }

  getGallery() {
    return this.db.list('/home-gallery');
  }

}
