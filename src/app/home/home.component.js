"use strict";var __decorate=this&&this.__decorate||function(e,o,t,n){var r,l=arguments.length,s=l<3?o:null===n?n=Object.getOwnPropertyDescriptor(o,t):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,o,t,n);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(s=(l<3?r(s):l>3?r(o,t,s):r(o,t))||s);return l>3&&s&&Object.defineProperty(o,t,s),s};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),HomeComponent=function(){function e(){}return e.prototype.ngOnInit=function(){this.carouselOne={grid:{xs:1,sm:1,md:1,lg:1,all:0},slide:1,speed:1e3,interval:4500,point:{visible:!1},load:2,touch:!0,loop:!0,custom:"banner",easing:"ease"},this.carouselTwo={grid:{xs:1,sm:2,md:2,lg:3,all:0},slide:1,speed:400,interval:2e3,point:{visible:!1},load:2,touch:!0,loop:!0,custom:"banner",easing:"ease"},this.carouselThree={grid:{xs:2,sm:4,md:5,lg:7,all:0},slide:1,speed:400,interval:3e3,point:{visible:!1},load:2,touch:!0,loop:!1,custom:"banner",easing:"ease"},this.carouselFour={grid:{xs:1,sm:1,md:1,lg:1,all:0},slide:1,speed:400,interval:3e3,point:{visible:!1},load:2,touch:!0,loop:!0,custom:"banner",easing:"ease"}},e.prototype.myfunc=function(e){},e=__decorate([core_1.Component({selector:"app-home",templateUrl:"./home.component.html"})],e)}();exports.HomeComponent=HomeComponent;