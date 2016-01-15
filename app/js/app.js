//Modules
require('angular');
require('angular-messages');
require('angular-animate');

var app = angular.module('app', ['ngMessages','ngAnimate']);

//controllers
var MainController = require('./controllers/MainController');
var EditContactController = require('./controllers/EditContactController');
var AddContactController = require('./controllers/AddContactController');

app.controller('MainController', ['$scope', MainController]);
app.controller('EditContactController', ['$scope', EditContactController]);
app.controller('AddContactController', ['$scope', AddContactController]);

//directives
app.directive('abTextField', require('./directives/ab-text-field'));
