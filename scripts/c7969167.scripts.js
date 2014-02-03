"use strict";angular.module("gdgilSiteApp",["ngResource","ngRoute","ui.bootstrap","truncate"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/events",{templateUrl:"views/events.html",controller:"EventsCtrl"}).when("/videos",{templateUrl:"views/videos.html",controller:"VideosCtrl"}).when("/articles",{templateUrl:"views/articles.html",controller:"ArticlesCtrl"}).when("/contents",{templateUrl:"views/under.html",controller:"MainCtrl"}).when("/item/:id",{templateUrl:"views/content.html",controller:"ContentItemCtrl"}).when("/experts",{templateUrl:"views/experts.html",controller:"ExpertsCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("gdgilSiteApp").controller("MainCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("gdgilSiteApp").controller("VideosCtrl",["$scope","parse",function(a,b){a.videos=b.getContentItems()}]),angular.module("gdgilSiteApp").controller("ExpertsCtrl",["$scope","$resource",function(a,b){a.experts=b("/mock/experts.json").query()}]),angular.module("gdgilSiteApp").controller("EventsCtrl",["$scope","$resource",function(a,b){a.events=b("/mock/events.json").query(),a.$watch("ownerSearch",function(){a.locationSearch=null})}]),angular.module("gdgilSiteApp").controller("ArticlesCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("gdgilSiteApp").controller("SidebarCtrl",["$scope","$location",function(a,b){a.items=[{title:"GDG Israel",link:"/",icon:"home"},{title:"About",link:"/about",icon:"beer"},{title:"Videos",link:"/videos",icon:"facetime_video"},{title:"Events",link:"/events",icon:"calendar"},{title:"Contents",link:"/contents",icon:"notes"},{title:"Team",link:"/experts",icon:"parents"}],a.isSelected=function(a){return a.link===b.path()}}]),angular.module("gdgilSiteApp").controller("ContentItemCtrl",["$scope","$routeParams","$sce","parse",function(a,b,c,d){a.item=d.getContentItem(b.id),a.$watch("item.youtube",function(b){a.youtubeUrl=c.trustAsResourceUrl("https://www.youtube.com/embed/"+b+"?rel=0")})}]),angular.module("gdgilSiteApp").filter("splitToColumns",function(){return _.memoize(function(a,b){if(!a)return a;for(var c=[],d=0;d<a.length;d++){var e=d%b;angular.isUndefined(c[e])&&(c[e]=[]),c[e].push(a[d])}return c})}),angular.module("gdgilSiteApp").filter("unique",function(){return function(a,b){for(var c={},d=[],e=0;e<a.length;e++)"undefined"==typeof c[a[e][b]]&&(c[a[e][b]]="",d.push(a[e]));return d}}),angular.module("gdgilSiteApp").service("contentProvider",["$http","$resource",function(a,b){this.getItem=function(b){var c={};return a.get("/mock/videos.json").success(function(a){angular.forEach(a,function(a){a.id===b&&angular.extend(c,a)})}),c},this.getItems=function(){return b("/mock/videos.json").query()}}]),angular.module("gdgilSiteApp").service("parse",["$window","$q",function(a,b){function c(a,b){var c=angular.copy(a.attributes,b);return c.id=a.id,c}var d=a.Parse;d.initialize("sgFDoWiQFc7pnN4LtOJoogLj50b8RUBFY4Bx1lm8","3HcyI8fgzisvpNHGBo73ti7zXGsyNH4zd2XfC0EX");var e=d.Object.extend("Content");this.getContentItems=function(){var a=new d.Query(e),f=[];return b.when(a.find()).then(function(a){angular.forEach(a,function(a){f.push(c(a))})}),f},this.getContentItem=function(a){var f=new d.Query(e),g={};return b.when(f.get(a)).then(function(a){c(a,g)}),g}}]);