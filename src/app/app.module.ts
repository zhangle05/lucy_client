import { NgModule, ErrorHandler } from '@angular/core';
import { Http } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { MyApp } from './app.component';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { FoundPage } from '../pages/found/found';
import { SpacePage } from '../pages/space/space';

import { MyPage } from '../pages/my/my';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';

import { User } from '../providers/user';
import { Api } from '../providers/api';
import { Settings } from '../providers/settings';


import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate/ng2-translate';


// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

export function provideSettings(storage: Storage) {
  /**
   * The Settings provider takes a set of default settings for your app.
   *
   * You can add new settings options at any time. Once the settings are saved,
   * these values will not overwrite the saved values (this can be done manually if desired).
   */
  return new Settings(storage, {
    option1: true,
    option2: 'Ionitron J. Framework',
    option3: '3',
    option4: 'Hello'
  });
}

let pages = [
  MyApp,
	TutorialPage,
	TabsPage,
  HomePage,
	FoundPage,
	SpacePage,
	MyPage,
	LoginPage,
	SignupPage
];

export function declarations() {
  return pages;
}

export function entryComponents() {
  return pages;
}

export function provideStorage() {
 return new Storage();
}

export function providers() {
  return [
    User,
    Api,
	{ provide: ErrorHandler, useClass: IonicErrorHandler },
	{ provide: Storage, useFactory: provideStorage },
  { provide: Settings, useFactory: provideSettings, deps: [ Storage ] },
  ];
}

@NgModule({
  declarations: declarations(),
  imports: [
    IonicModule.forRoot(MyApp),
	TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: entryComponents(),
  providers: providers()
})
export class AppModule {}
