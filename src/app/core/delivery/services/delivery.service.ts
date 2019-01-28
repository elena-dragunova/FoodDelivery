import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database/database";

@Injectable()
export class DeliveryService {

  constructor(private db: AngularFireDatabase) { }

  getBannerData() {
    return this.db.object('/delivery/banner');
  }

}
