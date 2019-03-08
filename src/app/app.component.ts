import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyCI3wopb2vraAOnuk4xYz1SJEVCIzC9fjc",
      authDomain: "ng-propertyadmin.firebaseapp.com"
    });
  }

}
