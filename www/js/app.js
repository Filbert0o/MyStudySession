// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var myApp = angular.module('mystudy', ['ionic'])

myApp.run(function($ionicPlatform) {
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

myApp.controller('timerCtrl', function($scope, $timeout){
  $scope.myTimer = timerInput;

  var myTimerVariable;

  $scope.myCustomTimer = function() {
    $scope.myTimer--;

    if($scope.myTimer == 0) {
      $timeout.cancel(myTimerVariable);
      complete(false);
      return false;
    }

    //set timeout to stop after the 1000 seconds(usually infinitity)
    myTimerVariable = $timeout($scope.myCustomTimer, 1000);
  }

  $scope.start = function(){
    myTimerVariable = $timeout($scope.myCustomTimer, 1000);  
  }

  $scope.stop = function(){
    myTimerVariable = $timeout.cancel(myTimerVariable);
    complete(true);
    return false;
  }
  $scope.clear = function(){
    $scope.myTimer = 10;
  }
  var complete = function(forceFulAbort){
    if(forceFulAbort) {
      alert('You Killed the Timer!')
    }else {
      alert('Timer has stop, study Finished')
    }
  }


});