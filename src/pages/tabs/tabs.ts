import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { FoundPage } from '../found/found';
import { SpacePage } from '../space/space';
import { MyPage } from '../my/my';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = FoundPage;
  tab3Root: any = SpacePage;
  tab4Root: any = MyPage;

  constructor(public navCtrl: NavController) {
  }
}
