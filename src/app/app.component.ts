import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { TranslateService } from 'ng2-translate/ng2-translate';
import { TutorialPage } from '../pages/tutorial/tutorial';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
  rootPage = TutorialPage;
  constructor(platform: Platform, translate: TranslateService) {
	  /*
	if (window.localStorage['ONCE_RUNNED'] == true) {
	  this.rootPage = TabsPage;
  } else {
	  this.rootPage = TutorialPage;
  };
  */
	translate.setDefaultLang('zh-CN');
	translate.use('zh-CN')
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
