import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { config } from 'src/config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private Title:Title
  ){
    this.Title.setTitle(this.title)
  }
  get title():string{return config.title}

}
