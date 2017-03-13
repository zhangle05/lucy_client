import { Component } from '@angular/core';
import { MenuController, NavController } from 'ionic-angular';
import { TranslateService } from 'ng2-translate/ng2-translate';

import { TabsPage } from '../tabs/tabs';
import { Settings } from '../../providers/settings';

export interface Slide {
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html'
})
export class TutorialPage {
  private MULTI_RUN_KEY: string = '_multi_run';
  slides: Slide[];
  showSkip = true;

  constructor(public navCtrl: NavController, public menu: MenuController, translate: TranslateService, public settings: Settings) {
    translate.get(["TUTORIAL_SLIDE1_TITLE",
                   "TUTORIAL_SLIDE1_DESCRIPTION",
                   "TUTORIAL_SLIDE2_TITLE",
                   "TUTORIAL_SLIDE2_DESCRIPTION",
                   "TUTORIAL_SLIDE3_TITLE",
                   "TUTORIAL_SLIDE3_DESCRIPTION",
    ]).subscribe((values) => {
      console.log('Loaded values', values);
      this.slides = [
        {
          title: values.TUTORIAL_SLIDE1_TITLE,
          description: values.TUTORIAL_SLIDE1_DESCRIPTION,
          image: 'assets/img/ica-slidebox-img-1.png',
        },
        {
          title: values.TUTORIAL_SLIDE2_TITLE,
          description: values.TUTORIAL_SLIDE2_DESCRIPTION,
          image: 'assets/img/ica-slidebox-img-2.png',
        },
        {
          title: values.TUTORIAL_SLIDE3_TITLE,
          description: values.TUTORIAL_SLIDE3_DESCRIPTION,
          image: 'assets/img/ica-slidebox-img-3.png',
        }
      ];
    });
    this.settings.load().then(() => {
      var options = this.settings.allSettings;
      var isMultiRun = options[this.MULTI_RUN_KEY];
      console.log('multi run flag in storage is:', isMultiRun);
      if (isMultiRun) {
        this.startApp();
      }
    });
  }

  startApp() {
    this.navCtrl.setRoot(TabsPage, {}, {
      animate: true,
      direction: 'forward'
    });
    this.settings.setValue(this.MULTI_RUN_KEY, true);
  }

  onSlideChangeStart(slider) {
    this.showSkip = !slider.isEnd;
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }

}
