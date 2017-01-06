var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
require('../packages/npm/material-design-lite@1.3.0/src/layout/_layout.scss!sass');
require('zone.js');
require('es6-shim');
require('reflect-metadata');
var core_1 = require('angular2/core');
var browser_1 = require('angular2/platform/browser');
var core_2 = require('angular2/core');
var shell_tpl_html_text_1 = require('./shell.tpl.html!text');
var AppComponent = (function () {
    function AppComponent() {
        this.name = 'Angular 2 PWA';
        this.menuExpanded = false;
    }
    AppComponent.prototype.toggleMenu = function () {
        this.menuExpanded = !this.menuExpanded;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: shell_tpl_html_text_1["default"]
        })
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
core_2.enableProdMode();
browser_1.bootstrap(AppComponent);
System.import('./NetworkBanner.ts');
