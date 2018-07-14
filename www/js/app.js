// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.controller("home",function($scope,$rootScope,$cordovaSms) {
  var self = this;
  var phonenumber = "+16147875430";
  var smsContent = "Hello Krish";
  var options = {};
  self.sendSms = function() {
      $cordovaSms
        .send(phonenumber, smsContent, options)
        .then(function(response) {
          console.log(response);
          // Success! SMS was sent
        }, function(error) {
          console.log(error);
          // An error occurred
        });
  }
});