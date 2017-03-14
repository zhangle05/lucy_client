import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { TranslateService } from 'ng2-translate/ng2-translate';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { TabsPage } from '../pages/tabs/tabs';

import { Settings } from '../providers/settings';


@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  rootPage : any;
  constructor(platform: Platform, translate: TranslateService, public settings: Settings) {
	  translate.setDefaultLang('zh-CN');
	  translate.use('zh-CN')
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();

      this.settings.load().then(() => {
        var isMultiRun = this.settings.getMultiRun();
        console.log('multi run flag in storage is:', isMultiRun);
        if (isMultiRun) {
          this.rootPage = TabsPage;
        } else {
          this.rootPage = TutorialPage;
        }
      });
    });
  }
}

