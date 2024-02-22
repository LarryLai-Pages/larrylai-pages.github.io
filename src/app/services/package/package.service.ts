import { Injectable } from '@angular/core';
import package_json from 'package.json';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  constructor() { }

  get version():string{return package_json.version}
}
