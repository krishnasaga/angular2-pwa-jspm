import 'es6-shim';
import 'zone.js';
import 'reflect-metadata';
import '../packages/npm/material-design-lite@1.3.0/src/layout/_layout.scss!sass';
import {
    Component
    ,enableProdMode
  } from "angular2/core";
import template from './shell.tpl.html!text';
import { bootstrap } from 'angular2/platform/browser';
@Component({
   selector: 'my-app',
   template: template
})
export class AppShell {
  name = "Angular 2 PWA";
  menuExpanded = false;
  toggleMenu(){
    this.menuExpanded = !this.menuExpanded;
  }
}
enableProdMode();
bootstrap(AppShell);
