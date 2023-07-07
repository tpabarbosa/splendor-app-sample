import $ from 'dom7';
import Framework7, { getDevice } from 'framework7/bundle';
// Import F7 Styles
import 'framework7/css/bundle';

// Import Icons and App Custom Styles
import '../css/icons.css';
import '../css/app.css';
import '../css/fonts.css';
// Import Cordova APIs
import cordovaApp from './cordova-app.js';

// Import Routes
import routes from './routes.js';
// Import Store
import store from './store.js';

import CircleDecoration from '../components/circle-decoration.f7'

Framework7.registerComponent('circle-decoration', CircleDecoration)

// Import main app component
import App from '../app.f7';

var device = getDevice();

var app = new Framework7({
  name: 'Splendor App Sample', // App name
  theme: 'auto', // Automatic theme detection
  colors: {
    primary: '#3DA9FC',
  },

  el: '#app', // App root element
  component: App, // App main component
  // App store
  store: store,
  // App routes
  routes: routes,



  // Input settings
  input: {
    scrollIntoViewOnFocus: device.cordova,
    scrollIntoViewCentered: device.cordova,
  },
  // Cordova Statusbar settings
  statusbar: {
    iosOverlaysWebView: true,
    androidOverlaysWebView: false,
  },
  on: {
    init: function () {
      var f7 = this;
      if (f7.device.cordova) {
        // Init cordova APIs (see cordova-app.js)
        cordovaApp.init(f7);
      }
    },
  },
});
