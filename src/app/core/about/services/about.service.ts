import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database/database";

@Injectable()
export class AboutService {

  constructor(private db: AngularFireDatabase) { }

  getBannerData() {
    return this.db.object('/about/banner');
  }

  getSectionsData() {
    return this.db.list('/about/sections');
  }

}

