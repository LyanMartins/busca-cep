import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CepProvider } from '../providers/cep/cep';
import { HttpClientModule } from '@angular/common/http';
import { MostraCepPage } from '../pages/mostra-cep/mostra-cep';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MostraCepPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    //IonicPageModule.forChild(MostraCepPage),
    HttpModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MostraCepPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CepProvider
  ]
})
export class AppModule {}
