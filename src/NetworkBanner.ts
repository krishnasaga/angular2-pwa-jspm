import template from './network-banner.tpl.html!text';
import { Component } from 'angular2/core';
import { bootstrap }    from 'angular2/platform/browser';


@Component {
  selector: 'network-banner',
  template: template
}
export class NetworkBanner {
  online = true;
  window.addEventListener('online',function(){
    online = true;
  });
  window.addEventListener('offline',function(){
    online = false;
  });
};
bootstrap(NetworkBanner);
