import { Injectable } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { Platform } from 'ionic-angular';

@Injectable()
export class PushnotificationProvider {

  constructor(private oneSignal: OneSignal,
              public platform: Platform) {
    console.log('Hello PushnotificationProvider Provider');
  }

  init_notification(){

    if (this.platform.is('cordova')){

      this.oneSignal.startInit('a939a0be-6497-41fa-b8b8-9ae9a7aece94', '23025875886');

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

    this.oneSignal.handleNotificationReceived().subscribe(() => {
     // do something when notification is received
    });

    this.oneSignal.handleNotificationOpened().subscribe(() => {
      // do something when a notification is opened
    });

    this.oneSignal.endInit();

  }else{

  console.log('no estamos en el movil');
      }
  }


}
