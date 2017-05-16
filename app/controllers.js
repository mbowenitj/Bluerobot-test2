
var app = angular.module("blueRobot", []);
app.controller("myCtrl", function($scope) {
  $scope.records = [
    "Alfreds Futterkiste",
    "Berglunds snabbköp",
    "Centro comercial Moctezuma",
    "Ernst Handel",
  ]
});
// angular.module('blueRobot')
  .controller('CartCtrl', ['$scope','$state', function($scope,$state) {

  $scope.products = [
          {product: "Alice",
           color: "Black",
           size: "S",
           price: "$485",
           amount: "",
           cost: ""
         },
         {jacket: "Alice",
          color: "Blue",
          size: "S",
          price: "$76",
          amount: "",
          cost: ""
        },
        {product: "Alice",
         color: "red",
         size: "S",
         price: "$485",
         amount: "",
         cost: ""
       },
       {product: "Alice",
        color: "white",
        size: "S",
        price: "$485",
        amount: "",
        cost: ""
      }]

      // .then(function successCallback(response) {
      //         // this callback will be called asynchronously
      //         // when the response is available
      //           console.log("success, ",response);
      //          //  $scope.projects = response.data;
      //           // $scope.task = response.data;
      //
      //       }, function errorCallback(response) {
      //
      //         console.log("failure, ",response);
      //         // called asynchronously if an error occurs
      //         // or server returns response with an error status.
      //       });
});
