import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { config } from 'src/config';
import { PackageService } from './services/package';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private Title:Title,
    private package_json:PackageService,
  ){
    this.Title.setTitle(this.title)
  }
  get title():string{return config.title}
  get version():string{return this.package_json.version}
}
