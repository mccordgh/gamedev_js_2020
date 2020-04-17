!function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}n.r(e);var r=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.managerHandler=e,this.world=n}var e,n,r;return e=t,(n=[{key:"tick",value:function(t){this.world.tick(t)}},{key:"render",value:function(t){this.world.render(t)}},{key:"getManagerHandler",value:function(){return this.managerHandler}},{key:"getWorld",value:function(){return this.world}},{key:"setWorld",value:function(t){this.world=t}}])&&i(e.prototype,n),r&&i(e,r),t}();function a(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var o=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.managerHandler=e,this.initializeEvents()}var e,n,i;return e=t,(n=[{key:"getMouseXFromEvent",value:function(t){return t.offsetX}},{key:"getMouseYFromEvent",value:function(t){return t.offsetY}},{key:"initializeEvents",value:function(){var t=this,e=this.managerHandler.getGraphicsManager().getCanvas();e.onclick=function(e){var n=t.getMouseXFromEvent(e),i=t.getMouseYFromEvent(e);t.managerHandler.event("click",{x:n,y:i})},e.onmousemove=function(e){var n=t.getMouseXFromEvent(e),i=t.getMouseYFromEvent(e);t.managerHandler.event("move",{x:n,y:i})}}}])&&a(e.prototype,n),i&&a(e,i),t}(),s=window.location.href;s=s.replace(/index.html/,""),console.log("".concat(s,"src/resources"));var u={FONT_SIZE:32,FPS:60,SCREEN_WIDTH:512,SCREEN_HEIGHT:384,GAME_WIDTH:1024,GAME_HEIGHT:768,ICON_HEIGHT:64,ICON_WIDTH:64,SPATIAL_GRID_SIZE:64,TYPES:{COMPUTER:"computer",COMPUTER_APP:"computer-app"},FINGER_WIDTH:16,BASE_PATH:s,ASSETS_PATH:"".concat(s,"src/resources")};function h(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var c=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.customizeContext(),this.initializeCanvas(),this.initializeGraphics()}var e,n,i;return e=t,(n=[{key:"customizeContext",value:function(){var t=this;CanvasRenderingContext2D.prototype.drawSprite=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3?arguments[3]:void 0,a=arguments.length>4?arguments[4]:void 0;r||(r=e.width),a||(a=e.height),t.graphics.drawImage(e.sheet,e.x,e.y,e.width,e.height,n,i,r,a)},CanvasRenderingContext2D.prototype.drawText=function(e,n,i){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"white",a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:u.FONT_SIZE;t.graphics.font="".concat(a,"px Arial"),t.graphics.fillStyle=r,t.graphics.fillText(e,n,i)}}},{key:"initializeCanvas",value:function(){this.canvas=document.querySelector("#canvas"),this.canvas.setAttribute("width",u.GAME_WIDTH),this.canvas.setAttribute("height",u.GAME_HEIGHT)}},{key:"initializeGraphics",value:function(){this.graphics=this.canvas.getContext("2d"),this.graphics.imageSmoothingEnabled=!1,this.graphics.webkitImageSmoothingEnabled=!1}},{key:"getCanvas",value:function(){return this.canvas}},{key:"getGraphics",value:function(){return this.graphics}}])&&h(e.prototype,n),i&&h(e,i),t}();function l(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var f=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.frames=e,this.index=0,this.lastTime=Date.now(),this.timer=0,this.speed=this.frames[this.index].speed}var e,n,i;return e=t,(n=[{key:"tick",value:function(){if(this.timer+=Date.now()-this.lastTime,this.lastTime=Date.now(),!this.speed)throw new Error("SPEED NOT DEFINED FOR",this);this.timer>=this.speed&&(this.index+=1,this.timer=0,this.index>=this.frames.length&&(this.index=0))}},{key:"getCurrentFrame",value:function(){return this.frames[this.index].frame}}])&&l(e.prototype,n),i&&l(e,i),t}();function d(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var p=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n,i;return e=t,i=[{key:"loadImage",value:function(t){var e=new Image;return console.log({path:t}),e.src=t,e}}],(n=null)&&d(e.prototype,n),i&&d(e,i),t}();function y(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var g=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.sheet=e}var e,n,i;return e=t,(n=[{key:"crop",value:function(t,e,n,i){return{sheet:this.sheet,x:t,y:e,width:n,height:i}}}])&&y(e.prototype,n),i&&y(e,i),t}();function v(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var b={},w=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),b[e]=this,this.name=e,this.path="".concat(u.ASSETS_PATH,"/").concat(n),this.sheet=new g(p.loadImage(this.path)),this.animations={}}var e,n,i;return e=t,i=[{key:"getAssets",value:function(t){return b[t]}}],(n=[{key:"addAnimation",value:function(t,e){this.animations[t]=e}}])&&v(e.prototype,n),i&&v(e,i),t}(),m=function(t,e,n){n.frames=[];for(var i=n.col;i<n.length+n.col;i+=1)n.frames.push({frame:t.sheet.crop(n.width*i,n.height*n.row,n.width,n.height),speed:n.speed});t.addAnimation(e,new f(n.frames))},k=new w("cursor","cursor.png");k.pointer=k.sheet.crop(0,0,49,56);var E=new w("cursor2","cursor2.png");E.pointer=E.sheet.crop(0,0,32,32);var T=new w("whiteCursor","white-cursor.png");T.pointer=T.sheet.crop(0,0,32,32);var S=new w("hand","hand.png");S.pointer=S.sheet.crop(0,0,64,64);var M=new w("hand2","hand2.png");M.pointer=M.sheet.crop(0,0,32,32);var O=new w("background","bg.png");O.image=O.sheet.crop(0,0,u.GAME_WIDTH,u.GAME_HEIGHT);var C=new w("email","email.png");function x(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}C.icon=C.sheet.crop(0,0,u.ICON_WIDTH,u.ICON_HEIGHT),m(C,"loading",{speed:240,row:0,col:0,length:10,width:u.ICON_WIDTH,height:u.ICON_HEIGHT}),m(new w("os","jam-os-bootup.png"),"booting",{speed:300,row:0,col:0,length:10,width:u.SCREEN_WIDTH,height:u.SCREEN_HEIGHT});var P=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=null,this.y=null,this.handBounds={x:4,y:4,width:24,height:24},this.arrowBounds={x:6,y:6,width:24,height:24},this.assets={hand:w.getAssets("hand2").pointer,arrow:w.getAssets("cursor2").pointer},this.swapToHand()}var e,n,i;return e=t,(n=[{key:"render",value:function(t){var e=this.cursor===this.assets.hand,n=e?16:0,i=e?64:32;t.drawSprite(this.cursor,this.x-n,this.y-n,i,i)}},{key:"swapToComputer",value:function(){this.cursor=this.assets.arrow,this.bounds=this.arrowBounds}},{key:"swapToHand",value:function(){this.cursor=this.assets.hand,this.bounds=this.handBounds}}])&&x(e.prototype,n),i&&x(e,i),t}();function _(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var H=function(){function t(e,n,i,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=e,this.y=n,this.width=i,this.height=r}var e,n,i;return e=t,(n=[{key:"intersects",value:function(t){return this.x<t.x+t.width&&this.x+this.width>t.x&&this.y<t.y+t.height&&this.y+this.height>t.y}}])&&_(e.prototype,n),i&&_(e,i),t}();function I(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var A=[u.TYPES.COMPUTER,u.TYPES.COMPUTER_APP],j=[u.TYPES.COMPUTER_APP],G=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.handler=e,this.lastEntityHovered=null,this.cursor=new P,this.entities=[]}var e,n,i;return e=t,(n=[{key:"tick",value:function(t){for(var e=0;e<this.entities.length;e+=1)this.entities[e].tick(t)}},{key:"render",value:function(t){for(var e=0;e<this.entities.length;e+=1){var n=this.entities[e];j.includes(n.type)||this.entities[e].render(t)}this.cursor.x&&this.cursor.y&&this.cursor.render(t)}},{key:"addEntity",value:function(t){this.entities.push(t);var e=new H(t.x+t.bounds.x,t.y+t.bounds.y,t.bounds.width,t.bounds.height);return this.handler.getWorld().getSpatialGrid().insert(e,t),t}},{key:"removeEntity",value:function(t){var e=this.entities.indexOf(t);this.handler.getWorld().getSpatialGrid().remove(new H(t.x+t.bounds.x,t.y+t.bounds.y,t.bounds.width,t.bounds.height),t),this.entities.splice(e,1),t=void 0}},{key:"findClickableEntityAt",value:function(t,e){var n=new H(this.cursor.x+this.cursor.bounds.x,this.cursor.y+this.cursor.bounds.y,this.cursor.bounds.width,this.cursor.bounds.height);return this.entities.find((function(t){if(!t.bounds)throw new Error("entity type ".concat(t.type," has no bounds"));var e=new H(t.x+t.bounds.x,t.y+t.bounds.y,t.bounds.width,t.bounds.height);return n.intersects(e)&&A.includes(t.type)}))}},{key:"mouseClick",value:function(t){var e=t.x,n=t.y,i=this.findClickableEntityAt(e,n);i&&i.wasClickedAt&&i.wasClickedAt(e,n)}},{key:"mouseMove",value:function(t){var e=t.x,n=t.y;this.cursor.x=e,this.cursor.y=n;var i=this.findClickableEntityAt(e,n);if(!i)return this.cursor.swapToHand(),void(this.lastEntityHovered&&this.lastEntityHovered.wasBlurred&&(this.lastEntityHovered.wasBlurred(),this.lastEntity=null));i.type===u.TYPES.COMPUTER||i.type===u.TYPES.COMPUTER_APP?this.cursor.swapToComputer():this.cursor.swapToHand(),i!==this.lastEntityHovered&&(this.lastEntityHovered&&this.lastEntityHovered.wasBlurred&&this.lastEntityHovered.wasBlurred(),i.wasHoveredAt&&i.wasHoveredAt(e,n),this.lastEntityHovered=i)}},{key:"getEntitiesByType",value:function(t){return this.entities.filter((function(e){return e.type==t}))}}])&&I(e.prototype,n),i&&I(e,i),t}();function R(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var D=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n,i;return e=t,(n=[{key:"construct",value:function(){this.currentState=null}},{key:"getState",value:function(){return this.currentState}},{key:"setState",value:function(t){this.currentState=t}}])&&R(e.prototype,n),i&&R(e,i),t}();function W(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var z=function(){function t(e,n,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.width=parseInt(e/i),this.height=parseInt(n/i),this.size=i,this.grid=[];for(var r=0;r<=this.width;r++){this.grid[r]=[];for(var a=0;a<=this.height;a++)this.grid[r][a]=[]}}var e,n,i;return e=t,(n=[{key:"insert",value:function(t,e){for(var n=Math.max(0,parseInt(t.x/this.size)),i=Math.max(0,parseInt(t.y/this.size)),r=Math.min(this.width,parseInt((t.x+t.width)/this.size)),a=Math.min(this.height,parseInt((t.y+t.height)/this.size)),o=i;o<=a;o++)for(var s=n;s<=r;s++)-1===this.grid[s][o].indexOf(e)&&this.grid[s][o].push(e)}},{key:"retrieve",value:function(t,e){for(var n=Math.max(0,parseInt(t.x/this.size)),i=Math.max(0,parseInt(t.y/this.size)),r=Math.min(this.width,parseInt((t.x+t.width)/this.size)),a=Math.min(this.height,parseInt((t.y+t.height)/this.size)),o=[],s=i;s<=a;s++)for(var u=n;u<=r;u++)this.grid[u][s].forEach((function(t){t!==e&&-1===o.indexOf(t)&&o.push(t)}));return o}},{key:"remove",value:function(t,e){for(var n=Math.max(0,parseInt(t.x/this.size)),i=Math.max(0,parseInt(t.y/this.size)),r=Math.min(this.width,parseInt((t.x+t.width)/this.size)),a=Math.min(this.height,parseInt((t.y+t.height)/this.size)),o=i;o<=a;o++)for(var s=n;s<=r;s++)for(var u=0;u<this.grid[s][o].length;u++)this.grid[s][o][u]===e&&this.grid[s][o].splice(u,1)}},{key:"reset",value:function(){for(var t=0;t<=this.width;t++){this.grid[t]=[];for(var e=0;e<=this.height;e++)this.grid[t][e]=[]}}},{key:"getWidth",value:function(){return this.width}},{key:"getHeight",value:function(){return this.height}},{key:"getSize",value:function(){return this.size}},{key:"render",value:function(t){for(var e=0;e<=this.height;e++)for(var n=0;n<=this.width;n++)this.size,this.size}}])&&W(e.prototype,n),i&&W(e,i),t}();function F(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var N=[u.TYPES.GARDEN,u.TYPES.PLOT,u.TYPES.LANE];function B(t){return(B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Y(t,e){return!e||"object"!==B(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function U(t){return(U=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function Z(t,e){return(Z=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var L=function(t){function e(t,n,i){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(r=Y(this,U(e).call(this,t,n,i))).handler=t,r.bounds={x:0,y:0,width:0,height:0},r}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Z(t,e)}(e,t),e}(function(){function t(e,n,i,r,a){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.handler=e,this.x=n,this.y=i,this.bounds=new H(0,0,this.width,this.height)}var e,n,i;return e=t,(n=[{key:"getCollisionBounds",value:function(t,e){var n=parseInt(this.x+this.bounds.x+t,10),i=parseInt(this.y+this.bounds.y+e);return new H(n,i,this.bounds.width,this.bounds.height)}},{key:"checkEntityCollisions",value:function(t,e){var n=this.handler.getWorld().getSpatialGrid().retrieve(new H(this.x+this.bounds.x,this.y+this.bounds.y,this.bounds.width,this.bounds.height),this);n=n.filter((function(t){return!N.includes(t.type)}));for(var i=0;i<n.length;i++){var r=n[i];if(r.getCollisionBounds(0,0).intersects(this.getCollisionBounds(t,e)))return this.checkForCollisionEvents(this,r),!0}return!1}},{key:"takeDamageFrom",value:function(t){this.health-=t.getAttackDamage()}},{key:"checkForCollisionEvents",value:function(t,e){}},{key:"checkCollidingTypes",value:function(t,e,n,i){return t.type===n&&e.type===i||t.type===i&&e.type===n}}])&&F(e.prototype,n),i&&F(e,i),t}());function X(t){return(X="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function q(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function J(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function K(t,e){return!e||"object"!==X(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function Q(t){return(Q=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function V(t,e){return(V=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function $(t){return($="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function tt(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function et(t,e){return!e||"object"!==$(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function nt(t,e,n){return(nt="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var i=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=it(t)););return t}(t,e);if(i){var r=Object.getOwnPropertyDescriptor(i,e);return r.get?r.get.call(n):r.value}})(t,e,n||t)}function it(t){return(it=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function rt(t,e){return(rt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var at=function(t){function e(t){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=et(this,it(e).call(this,t,"Email"))).bounds={x:0,y:26,width:n.width,height:36},n.assets=w.getAssets("email"),n}var n,i,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&rt(t,e)}(e,t),n=e,(i=[{key:"appLoaded",value:function(){this.showEmail=!0}},{key:"render",value:function(t){if(nt(it(e.prototype),"render",this).call(this,t),this.showEmail){var n=u.GAME_WIDTH/8,i=u.GAME_HEIGHT/16,r=u.GAME_WIDTH-2*n,a=u.GAME_HEIGHT-2*i;t.fillStyle="white",t.fillRect(n,i,r,a),t.drawText("Dear Sir or Madam,",n+64,i+64,"black"),t.drawText("Something something plot plot plot plotplot",n+64,i+64+u.FONT_SIZE+16,"black"),t.drawText("Something Something email event or what not.",n+64,i+64+u.FONT_SIZE+16+u.FONT_SIZE+16,"black")}}}])&&tt(n.prototype,i),r&&tt(n,r),e}(function(t){function e(t,n){var i,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return q(this,e),(i=K(this,Q(e).call(this,t,r,a))).handler=t,i.name=n,i.nameWidth=t.getGraphicsManager().getGraphics().measureText(i.name).width,i.x=r,i.y=a,i.width=u.ICON_WIDTH,i.height=u.ICON_HEIGHT,i.type=u.TYPES.COMPUTER_APP,i.yPadding=22,i.hovered=!1,i.state="idle",i}var n,i,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&V(t,e)}(e,t),n=e,(i=[{key:"tick",value:function(){switch(this.state){case"idle":break;case"loading":var t=this.assets.animations.loading;if(t.index>=9)return this.appLoaded(),void(this.state="idle");t.tick();break;default:throw new Error('Computer App animation state "'.concat(this.state," is not accounted for"))}}},{key:"getCurrentAnimationFrame",value:function(){switch(this.state){case"idle":break;case"loading":return this.assets.animations.loading.getCurrentFrame();default:throw new Error('Computer App animation state "'.concat(this.state," is not accounted for"))}}},{key:"render",value:function(t){switch(this.state){case"idle":t.drawSprite(this.assets.icon,this.x,this.y,this.width,this.height),this.hovered&&(t.globalAlpha=.4,t.fillStyle="black",t.fillRect(this.x+this.bounds.x-6,this.y+this.bounds.y-6,this.bounds.width+12,this.bounds.height+12),t.globalAlpha=1);break;case"loading":t.drawSprite(this.getCurrentAnimationFrame(),this.x,this.y,this.width,this.height);break;default:throw new Error('Computer App state "'.concat(this.state," is not accounted for"))}}},{key:"wasClickedAt",value:function(t,e){switch(this.state){case"idle":this.state="loading";break;case"loading":break;default:throw new Error('Computer App state "'.concat(this.state," is not accounted for during mouseclicked"))}}},{key:"wasHoveredAt",value:function(t,e){this.hovered=!0}},{key:"wasBlurred",value:function(){this.hovered=!1}}])&&J(n.prototype,i),r&&J(n,r),e}(L));function ot(t){return(ot="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function st(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function ut(t,e){return!e||"object"!==ot(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function ht(t){return(ht=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function ct(t,e){return(ct=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var lt=function(t){function e(t,n,i){var r;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(r=ut(this,ht(e).call(this,t,n,i))).width=u.SCREEN_WIDTH,r.height=u.SCREEN_HEIGHT,r.bounds={x:4,y:4,width:r.width-4,height:r.height-4},r.assets=w.getAssets("os"),r.padding=32,r.iconsPerRow=4,r.bootCounter=0,r.bootWait=120,r.type=u.TYPES.COMPUTER;var a=r.handler.getEntityManager();return r.apps=[a.addEntity(new at(t))],r.resetAppPositions(),r.state="idle",r}var n,i,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&ct(t,e)}(e,t),n=e,(i=[{key:"resetAppPositions",value:function(){var t=this.x,e=this.y;e+=this.padding;for(var n=0;n<this.apps.length;n+=1){var i=this.apps[n];t+=this.padding,n%this.iconsPerRow==0&&0!==n&&(e+=i.height+this.padding,t=this.x+this.padding),i.x=t,i.y=e,t+=i.width,t+=this.padding}}},{key:"tick",value:function(){switch(this.state){case"idle":break;case"booting":var t=this.assets.animations.booting;if(t.index>=9)return this.bootCounter+=1,void(this.bootCounter===this.bootWait&&(this.bootCounter=0,this.state="idle"));t.tick();break;default:throw new Error('Computer Screen animation state "'.concat(this.state," is not accounted for"))}}},{key:"getCurrentAnimationFrame",value:function(){switch(this.state){case"idle":break;case"booting":return this.assets.animations.booting.getCurrentFrame();default:throw new Error('Computer App animation state "'.concat(this.state," is not accounted for"))}}},{key:"render",value:function(t){switch(t.fillStyle="grey",t.fillRect(this.x-10,this.y-10,this.width+20,this.height+20),t.fillStyle="#7b538f",t.fillRect(this.x,this.y,this.width,this.height),this.state){case"idle":for(var e=0;e<this.apps.length;e+=1)this.apps[e].render(t);break;case"booting":this.bootCounter>this.bootWait/4&&(t.globalAlpha-=this.bootCounter/this.bootWait),t.drawSprite(this.getCurrentAnimationFrame(),this.x,this.y,this.width,this.height),t.globalAlpha=1;break;default:throw new Error('Computer App animation state "'.concat(this.state," is not accounted for"))}}}])&&st(n.prototype,i),r&&st(n,r),e}(L);function ft(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var dt=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.handler=e,this.entityManager=e.createEntityManager(),this.assets={background:w.getAssets("background").image},this.spatialGrid=new z(u.GAME_WIDTH,u.GAME_HEIGHT,u.SPATIAL_GRID_SIZE)}var e,n,i;return e=t,(n=[{key:"loadEntities",value:function(){this.entityManager.addEntity(new lt(this.handler,260,150))}},{key:"tick",value:function(t){this.entityManager.tick(t)}},{key:"render",value:function(t){this.drawBackground(t),this.spatialGrid.render(t),this.entityManager.render(t)}},{key:"init",value:function(){this.loadEntities()}},{key:"drawBackground",value:function(t){var e=this.assets.background;t.drawSprite(e)}},{key:"getSpatialGrid",value:function(){return this.spatialGrid}}])&&ft(e.prototype,n),i&&ft(e,i),t}();function pt(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var yt=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.game=e,this.entityManager=null,this.graphicsManager=null,this.monsterManager=null,this.mouseManager=null,this.seedManager=null,this.stateManager=null,this.uiManager=null,this.world=null}var e,n,i;return e=t,(n=[{key:"getEntityManager",value:function(){return this.entityManager}},{key:"getGame",value:function(){return this.game}},{key:"getGraphicsManager",value:function(){return this.graphicsManager}},{key:"getMouseManager",value:function(){return this.mouseManager}},{key:"getUiManager",value:function(){return this.uiManager}},{key:"getWorld",value:function(){return this.world}},{key:"createEntityManager",value:function(){return this.entityManager=new G(this)}},{key:"createGraphicsManager",value:function(){return this.graphicsManager=new c}},{key:"createMouseManager",value:function(){return this.mouseManager=new o(this)}},{key:"createStateManager",value:function(){return this.stateManager=new D}},{key:"createUiManager",value:function(){return this.uiManager=new UiManager(this)}},{key:"createWorld",value:function(){return this.world=new dt(this)}},{key:"event",value:function(t,e){"click"===t&&this.entityManager.mouseClick(e),"move"===t&&this.entityManager.mouseMove(e)}}])&&pt(e.prototype,n),i&&pt(e,i),t}();function gt(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var vt=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n,i;return e=t,(n=[{key:"initialize",value:function(){this.managerHandler=new yt(this),this.graphicsManager=this.managerHandler.createGraphicsManager(),this.stateManager=this.managerHandler.createStateManager(),this.mouseManager=this.managerHandler.createMouseManager();var t=this.managerHandler.createWorld();t.init();var e=new r(this.managerHandler,t);this.stateManager.setState(e)}},{key:"run",value:function(){var t=this;this.initialize();var e=1e3/u.FPS,n=0,i=o/1e3,r=Date.now(),a=r,o=0;!function s(){r=Date.now(),n=r-a,a=r,(o+=n)>=e&&(i=o/1e3,t.tick(i),t.render(t.graphicsManager.getGraphics()),o=0),window.requestAnimationFrame(s)}()}},{key:"tick",value:function(t){this.stateManager.getState().tick(t)}},{key:"render",value:function(t){t.clearRect(0,0,u.GAME_WIDTH,u.GAME_HEIGHT),this.stateManager.getState().render(t)}}])&&gt(e.prototype,n),i&&gt(e,i),t}();document.title="Gamedev.js 2020",(new vt).run()}]);