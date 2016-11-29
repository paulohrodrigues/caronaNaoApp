import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen,SQLite} from 'ionic-native';
import { HomePage } from '../pages/home/home';


@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage = HomePage;
  public db:SQLite;

  constructor(platform: Platform) {
    platform.ready().then(() => {

      
      this.db= new SQLite();
      this.db.openDatabase({
              name: "data.db",
              location: "default"
          }).then(() => {
              this.db.executeSql("CREATE TABLE IF NOT EXISTS passageiro (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT,celular TEXT,divida REAL)", {}).then((data) => {
                  alert("TABLE CREATED");
                  console.log("TABLE CREATED: ", data);
                  
            }, (error) => {
                  alert("erro");
                  console.error("Unable to execute sql", error);
                  
            })
          }, (error) => {
              console.error("Unable to open database", error);
              alert("erro");
     });



      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
