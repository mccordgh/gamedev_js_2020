!function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t){t.exports={b:["Hey BRO,","I am Thor and you are not.","BOW DOWN.","","Lift,","Thor"],d:["Dear Sir or Madam,","Please pay respects immediately.","","Love,","Odin"],c:["Dear Sir","You are lonely I know you are.","","Check out the site: www.maga.com"],a:["WHat up HOMIE","Prestige Worldwide can help you out.","","Sea Monkeys Dude,","The Crew"]}},function(t,e,n){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}n.r(e);var r=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.managerHandler=e,this.world=n}var e,n,r;return e=t,(n=[{key:"tick",value:function(t){this.world.tick(t)}},{key:"render",value:function(t){this.world.render(t)}},{key:"getManagerHandler",value:function(){return this.managerHandler}},{key:"getWorld",value:function(){return this.world}},{key:"setWorld",value:function(t){this.world=t}}])&&i(e.prototype,n),r&&i(e,r),t}();function o(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var a=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.managerHandler=e,this.initializeEvents()}var e,n,i;return e=t,(n=[{key:"getMouseXFromEvent",value:function(t){return t.offsetX}},{key:"getMouseYFromEvent",value:function(t){return t.offsetY}},{key:"initializeEvents",value:function(){var t=this,e=this.managerHandler.getGraphicsManager().getCanvas();e.onclick=function(e){var n=t.getMouseXFromEvent(e),i=t.getMouseYFromEvent(e);t.managerHandler.event("click",{x:n,y:i})},e.onmousemove=function(e){var n=t.getMouseXFromEvent(e),i=t.getMouseYFromEvent(e);t.managerHandler.event("move",{x:n,y:i})}}}])&&o(e.prototype,n),i&&o(e,i),t}(),s=window.location.href,u={BIG_FONT_SIZE:32,FONT_SIZE:18,EMAIL_ITEM_SIZE:16,APP_NAME_SIZE:16,COLORS:{PURPLE:"#7B538F",CREAM:"#FCEDC3",RED:"#FF2F4C"},FPS:60,SCREEN_WIDTH:512,SCREEN_HEIGHT:384,GAME_WIDTH:1024,GAME_HEIGHT:768,ICON_HEIGHT:64,ICON_WIDTH:64,SPATIAL_GRID_SIZE:64,TYPES:{EMAIL_ITEMS:"email-items",INTERACTIVE:"interactive",COMPUTER:"computer",COMPUTER_APP:"computer-app"},FINGER_WIDTH:16,BASE_PATH:s=s.replace(/index.html/,""),ASSETS_PATH:"".concat(s,"src/resources")};function h(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var c=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.customizeContext(),this.initializeCanvas(),this.initializeGraphics()}var e,n,i;return e=t,(n=[{key:"customizeContext",value:function(){var t=this;CanvasRenderingContext2D.prototype.drawSprite=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3?arguments[3]:void 0,o=arguments.length>4?arguments[4]:void 0;r||(r=e.width),o||(o=e.height),t.graphics.drawImage(e.sheet,e.x,e.y,e.width,e.height,n,i,r,o)},CanvasRenderingContext2D.prototype.drawText=function(e,n,i){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:u.COLORS.CREAM,o=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:u.FONT_SIZE;t.graphics.font="".concat(a,"px Arial"),o&&(t.graphics.fillStyle="black",t.graphics.fillText(e,n-2,i+2)),t.graphics.fillStyle=r,t.graphics.fillText(e,n,i)}}},{key:"initializeCanvas",value:function(){this.canvas=document.querySelector("#canvas"),this.canvas.setAttribute("width",u.GAME_WIDTH),this.canvas.setAttribute("height",u.GAME_HEIGHT)}},{key:"initializeGraphics",value:function(){this.graphics=this.canvas.getContext("2d"),this.graphics.imageSmoothingEnabled=!1,this.graphics.webkitImageSmoothingEnabled=!1}},{key:"getCanvas",value:function(){return this.canvas}},{key:"getGraphics",value:function(){return this.graphics}}])&&h(e.prototype,n),i&&h(e,i),t}();function l(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var f=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.frames=e,this.index=0,this.lastTime=Date.now(),this.timer=0,this.speed=this.frames[this.index].speed}var e,n,i;return e=t,(n=[{key:"tick",value:function(){if(this.timer+=Date.now()-this.lastTime,this.lastTime=Date.now(),!this.speed)throw new Error("SPEED NOT DEFINED FOR",this);this.timer>=this.speed&&(this.index+=1,this.timer=0,this.index>=this.frames.length&&(this.index=0))}},{key:"getCurrentFrame",value:function(){return this.frames[this.index].frame}}])&&l(e.prototype,n),i&&l(e,i),t}();function d(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var y=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n,i;return e=t,i=[{key:"loadImage",value:function(t){var e=new Image;return e.src=t,e}}],(n=null)&&d(e.prototype,n),i&&d(e,i),t}();function p(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var g=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.sheet=e}var e,n,i;return e=t,(n=[{key:"crop",value:function(t,e,n,i){return{sheet:this.sheet,x:t,y:e,width:n,height:i}}}])&&p(e.prototype,n),i&&p(e,i),t}();function v(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var b={},w=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),b[e]=this,this.name=e,this.path="".concat(u.ASSETS_PATH,"/").concat(n),this.sheet=new g(y.loadImage(this.path)),this.animations={}}var e,n,i;return e=t,i=[{key:"getAssets",value:function(t){return b[t]}}],(n=[{key:"addAnimation",value:function(t,e){this.animations[t]=e}}])&&v(e.prototype,n),i&&v(e,i),t}(),m=function(t,e,n){n.frames=[];for(var i=n.col;i<n.length+n.col;i+=1)n.frames.push({frame:t.sheet.crop(n.width*i,n.height*n.row,n.width,n.height),speed:n.speed});t.addAnimation(e,new f(n.frames))},E=new w("cursor","cursor.png");E.pointer=E.sheet.crop(0,0,49,56);var k=new w("cursor2","cursor2.png");k.pointer=k.sheet.crop(0,0,32,32);var T=new w("whiteCursor","white-cursor.png");T.pointer=T.sheet.crop(0,0,32,32);var S=new w("hand","hand.png");S.pointer=S.sheet.crop(0,0,64,64);var O=new w("hand2","hand2.png");O.pointer=O.sheet.crop(0,0,32,32);var _=new w("background","bg.png");_.image=_.sheet.crop(0,0,u.GAME_WIDTH,u.GAME_HEIGHT);var M=new w("email","email.png");M.icon=M.sheet.crop(0,0,u.ICON_WIDTH,u.ICON_HEIGHT),m(M,"loading",{speed:240,row:0,col:0,length:10,width:u.ICON_WIDTH,height:u.ICON_HEIGHT}),m(new w("os","jam-os-bootup.png"),"booting",{speed:300,row:0,col:0,length:10,width:u.SCREEN_WIDTH,height:u.SCREEN_HEIGHT});var I=new w("inbox","inbox-bg.png");function x(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}I.bg=I.sheet.crop(0,0,768,672);var C=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=null,this.y=null,this.handBounds={x:4,y:4,width:24,height:24},this.arrowBounds={x:0,y:0,width:12,height:12},this.assets={hand:w.getAssets("hand2").pointer,arrow:w.getAssets("cursor2").pointer},this.swapToComputer()}var e,n,i;return e=t,(n=[{key:"render",value:function(t){var e=this.cursor===this.assets.hand,n=e?16:0,i=e?64:32;t.drawSprite(this.cursor,this.x-n,this.y-n,i,i)}},{key:"swapToComputer",value:function(){this.cursor=this.assets.arrow,this.bounds=this.arrowBounds}},{key:"swapToHand",value:function(){this.cursor=this.assets.hand,this.bounds=this.handBounds}}])&&x(e.prototype,n),i&&x(e,i),t}();function P(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var A=function(){function t(e,n,i,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=e,this.y=n,this.width=i,this.height=r}var e,n,i;return e=t,(n=[{key:"intersects",value:function(t){return this.x<t.x+t.width&&this.x+this.width>t.x&&this.y<t.y+t.height&&this.y+this.height>t.y}}])&&P(e.prototype,n),i&&P(e,i),t}();function H(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function j(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var G=[u.TYPES.INTERACTIVE,u.TYPES.COMPUTER_APP,u.TYPES.EMAIL_ITEMS],R=[u.TYPES.COMPUTER_APP],D=(u.TYPES.COMPUTER,u.TYPES.COMPUTER_APP,u.TYPES.EMAIL_ITEMS,function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.handler=e,this.lastEntityHovered=null,this.cursor=new C,this.entities=[]}var e,n,i;return e=t,(n=[{key:"tick",value:function(t){for(var e=0;e<this.entities.length;e+=1)this.entities[e].tick(t)}},{key:"render",value:function(t){for(var e=0;e<this.entities.length;e+=1){var n=this.entities[e];R.includes(n.type)||this.entities[e].render(t)}this.cursor.x&&this.cursor.y&&this.cursor.render(t)}},{key:"addEntity",value:function(t){this.entities.push(t);var e=new A(t.x+t.bounds.x,t.y+t.bounds.y,t.bounds.width,t.bounds.height);return this.handler.getWorld().getSpatialGrid().insert(e,t),t}},{key:"removeEntity",value:function(t){var e=this.entities.indexOf(t);this.handler.getWorld().getSpatialGrid().remove(new A(t.x+t.bounds.x,t.y+t.bounds.y,t.bounds.width,t.bounds.height),t),this.entities.splice(e,1),t=void 0}},{key:"findClickableEntityAt",value:function(t,e){var n=new A(this.cursor.x+this.cursor.bounds.x,this.cursor.y+this.cursor.bounds.y,this.cursor.bounds.width,this.cursor.bounds.height);return H(this.entities).reverse().find((function(t){if(!t.bounds)throw new Error("entity type ".concat(t.type," has no bounds"));var e=new A(t.x+t.bounds.x,t.y+t.bounds.y,t.bounds.width,t.bounds.height);return n.intersects(e)&&G.includes(t.type)}))}},{key:"mouseClick",value:function(t){var e=t.x,n=t.y,i=this.findClickableEntityAt(e,n);i&&i.wasClickedAt&&i.wasClickedAt(e,n)}},{key:"mouseMove",value:function(t){var e=t.x,n=t.y;this.cursor.x=e,this.cursor.y=n;var i=this.findClickableEntityAt(e,n);i?i!==this.lastEntityHovered&&(this.lastEntityHovered&&this.lastEntityHovered.wasBlurred&&this.lastEntityHovered.wasBlurred(),i.wasHoveredAt&&i.wasHoveredAt(e,n),this.lastEntityHovered=i):this.lastEntityHovered&&this.lastEntityHovered.wasBlurred&&(this.lastEntityHovered.wasBlurred(),this.lastEntityHovered=null)}},{key:"getEntitiesByType",value:function(t){return this.entities.filter((function(e){return e.type==t}))}}])&&j(e.prototype,n),i&&j(e,i),t}());function W(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var F=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n,i;return e=t,(n=[{key:"construct",value:function(){this.currentState=null}},{key:"getState",value:function(){return this.currentState}},{key:"setState",value:function(t){this.currentState=t}}])&&W(e.prototype,n),i&&W(e,i),t}();function N(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var B=function(){function t(e,n,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.width=parseInt(e/i),this.height=parseInt(n/i),this.size=i,this.grid=[];for(var r=0;r<=this.width;r++){this.grid[r]=[];for(var o=0;o<=this.height;o++)this.grid[r][o]=[]}}var e,n,i;return e=t,(n=[{key:"insert",value:function(t,e){for(var n=Math.max(0,parseInt(t.x/this.size)),i=Math.max(0,parseInt(t.y/this.size)),r=Math.min(this.width,parseInt((t.x+t.width)/this.size)),o=Math.min(this.height,parseInt((t.y+t.height)/this.size)),a=i;a<=o;a++)for(var s=n;s<=r;s++)-1===this.grid[s][a].indexOf(e)&&this.grid[s][a].push(e)}},{key:"retrieve",value:function(t,e){for(var n=Math.max(0,parseInt(t.x/this.size)),i=Math.max(0,parseInt(t.y/this.size)),r=Math.min(this.width,parseInt((t.x+t.width)/this.size)),o=Math.min(this.height,parseInt((t.y+t.height)/this.size)),a=[],s=i;s<=o;s++)for(var u=n;u<=r;u++)this.grid[u][s].forEach((function(t){t!==e&&-1===a.indexOf(t)&&a.push(t)}));return a}},{key:"remove",value:function(t,e){for(var n=Math.max(0,parseInt(t.x/this.size)),i=Math.max(0,parseInt(t.y/this.size)),r=Math.min(this.width,parseInt((t.x+t.width)/this.size)),o=Math.min(this.height,parseInt((t.y+t.height)/this.size)),a=i;a<=o;a++)for(var s=n;s<=r;s++)for(var u=0;u<this.grid[s][a].length;u++)this.grid[s][a][u]===e&&this.grid[s][a].splice(u,1)}},{key:"reset",value:function(){for(var t=0;t<=this.width;t++){this.grid[t]=[];for(var e=0;e<=this.height;e++)this.grid[t][e]=[]}}},{key:"getWidth",value:function(){return this.width}},{key:"getHeight",value:function(){return this.height}},{key:"getSize",value:function(){return this.size}},{key:"render",value:function(t){for(var e=0;e<=this.height;e++)for(var n=0;n<=this.width;n++)this.size,this.size}}])&&N(e.prototype,n),i&&N(e,i),t}();function z(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var Y=[u.TYPES.GARDEN,u.TYPES.PLOT,u.TYPES.LANE];function L(t){return(L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function U(t,e){return!e||"object"!==L(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function Z(t){return(Z=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function X(t,e){return(X=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var V=function(t){function e(t,n,i){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(r=U(this,Z(e).call(this,t,n,i))).handler=t,r.bounds={x:0,y:0,width:0,height:0},r}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&X(t,e)}(e,t),e}(function(){function t(e,n,i,r,o){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.handler=e,this.x=n,this.y=i,this.bounds=new A(0,0,this.width,this.height)}var e,n,i;return e=t,(n=[{key:"tick",value:function(){throw new Error("".concat(this.constructor.name," did not implement tick() method"))}},{key:"getCollisionBounds",value:function(t,e){var n=parseInt(this.x+this.bounds.x+t,10),i=parseInt(this.y+this.bounds.y+e);return new A(n,i,this.bounds.width,this.bounds.height)}},{key:"checkEntityCollisions",value:function(t,e){var n=this.handler.getWorld().getSpatialGrid().retrieve(new A(this.x+this.bounds.x,this.y+this.bounds.y,this.bounds.width,this.bounds.height),this);n=n.filter((function(t){return!Y.includes(t.type)}));for(var i=0;i<n.length;i++){var r=n[i];if(r.getCollisionBounds(0,0).intersects(this.getCollisionBounds(t,e)))return this.checkForCollisionEvents(this,r),!0}return!1}},{key:"takeDamageFrom",value:function(t){this.health-=t.getAttackDamage()}},{key:"checkForCollisionEvents",value:function(t,e){}},{key:"checkCollidingTypes",value:function(t,e,n,i){return t.type===n&&e.type===i||t.type===i&&e.type===n}}])&&z(e.prototype,n),i&&z(e,i),t}());function q(t){return(q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function J(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function K(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function Q(t,e){return!e||"object"!==q(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function $(t){return($=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function tt(t,e){return(tt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var et=function(t){function e(t,n){var i,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return J(this,e),(i=Q(this,$(e).call(this,t,r,o))).handler=t,i.name=n,i.nameWidth=t.getGraphicsManager().getGraphics().measureText(i.name).width,i.x=r,i.y=o,i.width=u.ICON_WIDTH,i.height=u.ICON_HEIGHT,i.type=u.TYPES.COMPUTER_APP,i.yPadding=22,i.hovered=!1,i.state="idle",i}var n,i,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&tt(t,e)}(e,t),n=e,(i=[{key:"tick",value:function(){switch(this.state){case"idle":break;case"loading":var t=this.assets.animations.loading;if(t.index>=9)return this.appLoaded(),t.index=0,void(this.state="idle");t.tick();break;default:throw new Error('Computer App animation state "'.concat(this.state," is not accounted for"))}}},{key:"getCurrentAnimationFrame",value:function(){switch(this.state){case"idle":break;case"loading":return this.assets.animations.loading.getCurrentFrame();default:throw new Error('Computer App animation state "'.concat(this.state," is not accounted for"))}}},{key:"render",value:function(t){switch(this.state){case"idle":t.drawSprite(this.assets.icon,this.x,this.y,this.width,this.height),this.hovered&&(t.globalAlpha=.4,t.fillStyle="black",t.fillRect(this.x+this.bounds.x-6,this.y+this.bounds.y-6,this.bounds.width+12,this.bounds.height+12+u.FONT_SIZE+2),t.globalAlpha=1);break;case"loading":t.drawSprite(this.getCurrentAnimationFrame(),this.x,this.y,this.width,this.height);break;default:throw new Error('Computer App state "'.concat(this.state," is not accounted for"))}}},{key:"wasClickedAt",value:function(t,e){switch(this.state){case"idle":this.state="loading";break;case"loading":break;default:throw new Error('Computer App state "'.concat(this.state," is not accounted for during mouseclicked"))}}},{key:"wasHoveredAt",value:function(t,e){console.log("was hovered"),this.hovered=!0}},{key:"wasBlurred",value:function(){console.log("was blurred"),this.hovered=!1}}])&&K(n.prototype,i),r&&K(n,r),e}(V);function nt(t){return(nt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function it(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function rt(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function ot(t,e){return!e||"object"!==nt(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function at(t){return(at=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function st(t,e){return(st=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var ut=function(t){function e(t,n,i,r){var o,a=arguments.length>4&&void 0!==arguments[4]&&arguments[4];return it(this,e),(o=ot(this,at(e).call(this,t,0,0))).x=0,o.y=0,o.bounds={x:0,y:0,width:u.GAME_WIDTH,height:u.GAME_HEIGHT},o.type=u.TYPES.INTERACTIVE,o.textArray=n,o.isRead=a,o.sender=i,o.subject=r,o}var n,i,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&st(t,e)}(e,t),n=e,(i=[{key:"tick",value:function(){}},{key:"drawFadedBackground",value:function(t){var e=this.bounds,n=e.x,i=e.y,r=e.width,o=e.height;t.globalAlpha=.4,t.fillStyle="black",t.fillRect(n,i,r,o),t.globalAlpha=1}},{key:"render",value:function(t){this.drawFadedBackground(t),this.drawPaperAndText(t)}},{key:"drawPaperAndText",value:function(t){var e=u.GAME_WIDTH/8,n=u.GAME_HEIGHT/16,i=u.GAME_WIDTH-2*e,r=u.GAME_HEIGHT-2*n;t.fillStyle="white",t.fillRect(e,n,i,r);for(var o=e+64,a=n+64,s=0;s<this.textArray.length;s+=1)t.drawText(this.textArray[s],o,a,"black",!1,u.BIG_FONT_SIZE),a+=u.BIG_FONT_SIZE+16}},{key:"wasClickedAt",value:function(){this.setHiddenCallback(!1),this.handler.getEntityManager().removeEntity(this)}}])&&rt(n.prototype,i),r&&rt(n,r),e}(V),ht=n(0);function ct(t){return(ct="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function lt(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function ft(t,e){return!e||"object"!==ct(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function dt(t){return(dt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function yt(t,e){return(yt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var pt=function(t){function e(t,n,i,r,o,a,s,h){var c;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(c=ft(this,dt(e).call(this,t,n,i))).width=r,c.height=o,c.email=a,c.bgColor=s,c.hovered=!1,c.bounds={x:-16,y:-26,width:c.width,height:c.height},c.type=u.TYPES.EMAIL_ITEMS,c.setHiddenCallback=h,c.hidden=!1,c}var n,i,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&yt(t,e)}(e,t),n=e,(i=[{key:"tick",value:function(){}},{key:"render",value:function(t){if(!this.hidden){var e=this.x,n=this.y,i=this.width,r=this.height;t.fillStyle=this.bgColor,t.fillRect(e-16,n-26,i,r),t.fillStyle="black",t.drawText(this.email.sender,this.x,this.y-4,"white",!1,u.EMAIL_ITEM_SIZE),t.drawText(this.email.subject,this.x+224,this.y-4,"white",!1,u.EMAIL_ITEM_SIZE),this.hovered&&(t.fillStyle="black",t.globalAlpha=1,t.fillRect(e-16,n-26,i,r),t.globalAlpha=1)}}},{key:"wasHoveredAt",value:function(t,e){this.hovered=!0}},{key:"wasBlurred",value:function(){this.hovered=!1}},{key:"wasClickedAt",value:function(){this.setHiddenCallback(!0),this.email.isRead=!0,this.email.setHiddenCallback=this.setHiddenCallback,this.handler.getEntityManager().addEntity(this.email)}}])&&lt(n.prototype,i),r&&lt(n,r),e}(V);function gt(t){return(gt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function vt(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function bt(t,e){return!e||"object"!==gt(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function wt(t){return(wt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function mt(t,e){return(mt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var Et=function(t){function e(t,n){var i;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(i=bt(this,wt(e).call(this,t,0,0))).x=0,i.y=0,i.paddingX=u.GAME_WIDTH/8,i.paddingY=u.GAME_HEIGHT/16,i.width=u.GAME_WIDTH-2*i.paddingX,i.height=u.GAME_HEIGHT-2*i.paddingY,i.bounds={x:850,y:52,width:34,height:30},i.type=u.TYPES.EMAIL_ITEMS,i.hidden=!1,i.emails=n,i.emailItems=[],i.assets=w.getAssets("inbox"),i}var n,i,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&mt(t,e)}(e,t),n=e,(i=[{key:"tick",value:function(){}},{key:"drawFadedBackground",value:function(t){t.globalAlpha=.4,t.fillStyle="black",t.fillRect(0,0,u.GAME_WIDTH,u.GAME_HEIGHT),t.globalAlpha=1}},{key:"render",value:function(t){this.hidden||(this.drawFadedBackground(t),this.drawInbox(t))}},{key:"setHidden",value:function(t){this.hidden=t;for(var e=0;e<this.emailItems.length;e+=1)this.emailItems[e].hidden=!0}},{key:"drawEmails",value:function(t){for(var e=this.paddingX+16,n=this.paddingY+64+38,i=0;i<this.emails.length;i+=1){var r=this.emails[i],o=i%2?u.COLORS.PURPLE:u.COLORS.RED,a=new pt(this.handler,e,n,this.width,2*u.FONT_SIZE,r,o,this.setHidden.bind(this));this.handler.getEntityManager().addEntity(a),this.emailItems.push(a),n+=36}}},{key:"drawInbox",value:function(t){t.drawSprite(this.assets.bg,this.paddingX,this.paddingY,this.width,this.height),this.drawEmails(t)}},{key:"wasClickedAt",value:function(){for(var t=this.handler.getEntityManager(),e=0;e<this.emailItems.length;e+=1)t.removeEntity(this.emailItems[e]);t.removeEntity(this)}}])&&vt(n.prototype,i),r&&vt(n,r),e}(V);function kt(t){return(kt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Tt(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function St(t,e){return!e||"object"!==kt(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function Ot(t){return(Ot=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _t(t,e){return(_t=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var Mt=function(t){function e(t){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=St(this,Ot(e).call(this,t,"Email"))).bounds={x:0,y:26,width:n.width,height:36},n.textXOffset=10,n.textYOffset=n.height+18,n.assets=w.getAssets("email"),n.emails=[new ut(n.handler,ht.b,"Thor, Son of Odin","I demand you fix my mistakes because I am great.",!1),new ut(n.handler,ht.d,"Odin, god","Why have you not paid tribute to me recently? :(",!0),new ut(n.handler,ht.c,"Lonely Russian Women","I want to meet you online come to my site",!0),new ut(n.handler,ht.a,"Prestige Worldwide","Grow your own sea monkeys!!@",!0)],n.state="idle",n}var n,i,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_t(t,e)}(e,t),n=e,(i=[{key:"appLoaded",value:function(){this.handler.getEntityManager().addEntity(new Et(this.handler,this.emails))}}])&&Tt(n.prototype,i),r&&Tt(n,r),e}(et);function It(t){return(It="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function xt(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],i=!0,r=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(i=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);i=!0);}catch(t){r=!0,o=t}finally{try{i||null==s.return||s.return()}finally{if(r)throw o}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function Ct(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function Pt(t,e){return!e||"object"!==It(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function At(t){return(At=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function Ht(t,e){return(Ht=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var jt=function(t){function e(t,n,i){var r;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(r=Pt(this,At(e).call(this,t,n,i))).width=u.SCREEN_WIDTH,r.height=u.SCREEN_HEIGHT,r.bounds={x:4,y:4,width:r.width-4,height:r.height-4},r.assets=w.getAssets("os"),r.padding=32,r.iconsPerRow=4,r.bootCounter=0,r.bootWait=120,r.type=u.TYPES.COMPUTER;var o=r.handler.getEntityManager();return r.apps=[o.addEntity(new Mt(t))],r.resetAppPositions(),r.state="idle",r}var n,i,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Ht(t,e)}(e,t),n=e,(i=[{key:"alignIconsTopLeftToBottomRight",value:function(){var t=this.x,e=this.y;e+=this.padding;for(var n=0;n<this.apps.length;n+=1){var i=this.apps[n];t+=this.padding,n%this.iconsPerRow==0&&0!==n&&(e+=i.height+this.padding,t=this.x+this.padding),i.x=t,i.y=e,t+=i.width,t+=this.padding}}},{key:"resetAppPositions",value:function(){if(1===this.apps.length){var t=xt(this.apps,1)[0];t.x=this.x+this.width/2-t.bounds.width/2,t.y=this.y+this.height/2-t.bounds.height}}},{key:"tick",value:function(){switch(this.state){case"idle":break;case"booting":var t=this.assets.animations.booting;if(t.index>=9)return this.bootCounter+=1,void(this.bootCounter===this.bootWait&&(this.bootCounter=0,this.state="idle"));t.tick();break;default:throw new Error('Computer Screen animation state "'.concat(this.state," is not accounted for"))}}},{key:"getCurrentAnimationFrame",value:function(){switch(this.state){case"idle":break;case"booting":return this.assets.animations.booting.getCurrentFrame();default:throw new Error('Computer App animation state "'.concat(this.state," is not accounted for"))}}},{key:"render",value:function(t){switch(t.fillStyle="grey",t.fillRect(this.x-10,this.y-10,this.width+20,this.height+20),t.fillStyle=u.COLORS.PURPLE,t.fillRect(this.x,this.y,this.width,this.height),this.state){case"idle":for(var e=0;e<this.apps.length;e+=1){var n=this.apps[e];t.drawText(n.name,n.x+n.textXOffset,n.y+n.textYOffset),n.render(t)}break;case"booting":this.bootCounter>this.bootWait/4&&(t.globalAlpha-=this.bootCounter/this.bootWait),t.drawSprite(this.getCurrentAnimationFrame(),this.x,this.y,this.width,this.height),t.globalAlpha=1;break;default:throw new Error('Computer App animation state "'.concat(this.state," is not accounted for"))}}}])&&Ct(n.prototype,i),r&&Ct(n,r),e}(V);function Gt(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var Rt=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.handler=e,this.entityManager=e.createEntityManager(),this.assets={background:w.getAssets("background").image},this.spatialGrid=new B(u.GAME_WIDTH,u.GAME_HEIGHT,u.SPATIAL_GRID_SIZE)}var e,n,i;return e=t,(n=[{key:"loadEntities",value:function(){this.entityManager.addEntity(new jt(this.handler,260,150))}},{key:"tick",value:function(t){this.entityManager.tick(t)}},{key:"render",value:function(t){this.drawBackground(t),this.spatialGrid.render(t),this.entityManager.render(t)}},{key:"init",value:function(){this.loadEntities()}},{key:"drawBackground",value:function(t){var e=this.assets.background;t.drawSprite(e)}},{key:"getSpatialGrid",value:function(){return this.spatialGrid}}])&&Gt(e.prototype,n),i&&Gt(e,i),t}();function Dt(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var Wt=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.game=e,this.entityManager=null,this.graphicsManager=null,this.monsterManager=null,this.mouseManager=null,this.seedManager=null,this.stateManager=null,this.uiManager=null,this.world=null}var e,n,i;return e=t,(n=[{key:"getEntityManager",value:function(){return this.entityManager}},{key:"getGame",value:function(){return this.game}},{key:"getGraphicsManager",value:function(){return this.graphicsManager}},{key:"getMouseManager",value:function(){return this.mouseManager}},{key:"getUiManager",value:function(){return this.uiManager}},{key:"getWorld",value:function(){return this.world}},{key:"createEntityManager",value:function(){return this.entityManager=new D(this)}},{key:"createGraphicsManager",value:function(){return this.graphicsManager=new c}},{key:"createMouseManager",value:function(){return this.mouseManager=new a(this)}},{key:"createStateManager",value:function(){return this.stateManager=new F}},{key:"createUiManager",value:function(){return this.uiManager=new UiManager(this)}},{key:"createWorld",value:function(){return this.world=new Rt(this)}},{key:"event",value:function(t,e){"click"===t&&this.entityManager.mouseClick(e),"move"===t&&this.entityManager.mouseMove(e)}}])&&Dt(e.prototype,n),i&&Dt(e,i),t}();function Ft(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var Nt=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n,i;return e=t,(n=[{key:"initialize",value:function(){this.managerHandler=new Wt(this),this.graphicsManager=this.managerHandler.createGraphicsManager(),this.stateManager=this.managerHandler.createStateManager(),this.mouseManager=this.managerHandler.createMouseManager();var t=this.managerHandler.createWorld();t.init();var e=new r(this.managerHandler,t);this.stateManager.setState(e)}},{key:"run",value:function(){var t=this;this.initialize();var e=1e3/u.FPS,n=0,i=a/1e3,r=Date.now(),o=r,a=0;!function s(){r=Date.now(),n=r-o,o=r,(a+=n)>=e&&(i=a/1e3,t.tick(i),t.render(t.graphicsManager.getGraphics()),a=0),window.requestAnimationFrame(s)}()}},{key:"tick",value:function(t){this.stateManager.getState().tick(t)}},{key:"render",value:function(t){t.clearRect(0,0,u.GAME_WIDTH,u.GAME_HEIGHT),this.stateManager.getState().render(t)}}])&&Ft(e.prototype,n),i&&Ft(e,i),t}();document.title="Gamedev.js 2020",(new Nt).run()}]);