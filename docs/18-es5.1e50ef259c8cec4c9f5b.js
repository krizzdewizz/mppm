(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"J9w/":function(n,l,t){"use strict";t.r(l);var e=t("CcnG"),u=t("mrSG"),r=t("OZIg"),o=t("SSuX"),i=t("ZZ/e"),a=t("DHcw"),c=t("jGYT"),s=t("3dv3"),p=function(){function n(n,l,t,e,u,r,o){this.activatedRoute=n,this.tracksService=l,this.playerService=t,this.actionSheetController=e,this.nav=u,this.xlate=r,this.markerPipe=o,this.showHelp=!1}return n.prototype.ngOnInit=function(){var n=this;this.trackIndex=Number(this.activatedRoute.snapshot.paramMap.get("index")),this.track=this.tracksService.tracks[this.trackIndex],this.subscription=this.playerService.playerReady.subscribe(function(){n.track.file?n.playerService.openFile(n.track.file):n.playerService.open(n.track.videoUrl,n.ytplayer,n.header.nativeElement.offsetWidth)}),this.subscription.add(c.a.marker.subscribe(function(l){switch(l.action){case c.b.ADD:n.addMarker();break;case c.b.MOVE_ACTIVE:n.moveMarker(l.data);break;case c.b.SET_ACTIVE:n.setActiveMarker(l.data);break;case c.b.SEEK_TO_ACTIVE:n.seekToActiveMarker();break;case c.b.TOGGLE_HELP:n.showHelp=!n.showHelp}})),this.playPositionTimer=setInterval(function(){(n.playPosition||n.playerService.isPlaying)&&(n.playPosition=n.markerPipe.transform(n.playerService.getCurrentTime()))},500)},n.prototype.ngOnDestroy=function(){this.subscription.unsubscribe(),this.playerService.destroy(),clearInterval(this.playPositionTimer)},Object.defineProperty(n.prototype,"playPauseIcon",{get:function(){return this.playerService.isPlaying?"pause":"play"},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"markers",{get:function(){return this.track.markers},enumerable:!0,configurable:!0}),n.prototype.playPause=function(){this.playerService.playPause()},n.prototype.seekToStart=function(){this.playerService.seekToStart()},n.prototype.backwardForward=function(n,l){void 0===l&&(l=1),this.playerService.backwardForward(n,l)},n.prototype.backwardForwardLong=function(n){var l=this;this.longClickInterval=setInterval(function(){return l.backwardForward(n,5)},200)},n.prototype.longClickEnd=function(){clearInterval(this.longClickInterval)},n.prototype.moveMarkerLong=function(n){var l=this;this.longClickInterval=setInterval(function(){return l.moveMarker(n,5)},200)},n.prototype.seekToActiveMarker=function(){this.playerService.seekTo(this.track.markers[this.activeMarker].value,!0)},Object.defineProperty(n.prototype,"noActiveMarker",{get:function(){return void 0===this.activeMarker},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"isAtStart",{get:function(){return 0===this.playerService.getCurrentTime()},enumerable:!0,configurable:!0}),n.prototype.addMarker=function(){var n=this.playerService.getCurrentTime();n&&(this.track.markers.push({value:n}),this.sortMarkers(),this.activeMarker=this.track.markers.findIndex(function(l){return l.value===n}),this.tracksService.saveTracks())},n.prototype.deleteMarker=function(n){this.track.markers=this.track.markers.filter(function(l,t){return t!==n}),delete this.activeMarker,this.tracksService.saveTracks()},n.prototype.setActiveMarker=function(n){n>=0&&n<this.track.markers.length&&(this.activeMarker=n,this.seekToActiveMarker())},n.prototype.moveMarker=function(n,l){void 0===l&&(l=1);var t=this.activeMarker,e=this.track.markers,u=Object(o.b)(e[t].value,n,l);e[t].value=u,this.sortMarkers(),this.activeMarker=e.findIndex(function(n){return n.value===u}),this.seekToActiveMarker(),this.tracksService.saveTracks()},n.prototype.sortMarkers=function(){this.track.markers.sort(function(n,l){return n.value<l.value?-1:n.value>l.value?1:0})},n.prototype.presentActionSheet=function(n){return u.b(this,void 0,void 0,function(){var l=this;return u.d(this,function(t){switch(t.label){case 0:return[4,this.actionSheetController.create({header:this.xlate.transform("C_MARKER")+" "+(this.track.markers[n].title||""),buttons:[{text:this.xlate.transform("C_DESCRIPTION"),icon:"create",handler:function(){return l.nav.navigateForward(["/marker-detail",l.trackIndex,n])}},{text:this.xlate.transform("C_DELETE"),icon:"trash",handler:function(){return l.deleteMarker(n)}}]})];case 1:return[4,t.sent().present()];case 2:return t.sent(),[2]}})})},n}(),m=function(){return function(){}}(),k=t("pMnS"),b=t("oBZk"),d=function(){function n(){this.mppmClick=new e.m,this.mppmClickLong=new e.m,this.mppmClickEnd=new e.m}return n.prototype.touchstart=function(){return this.event(!0)},n.prototype.touchend=function(){return this.event(!1)},n.prototype.mousedown=function(){return this.event(!0)},n.prototype.mouseup=function(){return this.event(!1)},n.prototype.event=function(n){var l=this;return n?(this.hadLong=!1,this.longPressTimer=setTimeout(function(){l.hadLong=!0,l.mppmClickLong.next()},500)):(clearTimeout(this.longPressTimer),this.hadLong||this.mppmClick.next(),this.mppmClickEnd.next()),!1},n}(),h=t("Ip0R"),g=t("ZYCi"),v=e.qb({encapsulation:0,styles:[[".header[_ngcontent-%COMP%]{padding:7px 7px 3px;background-color:#fff;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.tools[_ngcontent-%COMP%]{height:40%;display:grid;grid-row-gap:3px;margin:0 2px 2px}.tools[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{height:100%}.play-pause[_ngcontent-%COMP%]{grid-column:1/4;text-align:center}.backward[_ngcontent-%COMP%], .forward[_ngcontent-%COMP%], .seek-to-start[_ngcontent-%COMP%]{grid-row:2}.marker-tools[_ngcontent-%COMP%]{grid-row:3;grid-column:1/4;display:flex;padding-top:1px}.marker-tools[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{height:100%;flex:1}.marker-active[_ngcontent-%COMP%]{--background:green}.markers[_ngcontent-%COMP%]{margin:2px}.markers[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{height:50px;margin:2px}.marker-title[_ngcontent-%COMP%]{font-size:9pt;position:absolute;left:2px;bottom:2px;text-transform:initial}.main-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%}.spacer[_ngcontent-%COMP%]{flex:1}ion-button[_ngcontent-%COMP%]{font-size:14pt;margin:2px}.key[_ngcontent-%COMP%]{color:wheat;font-size:10pt;right:5px;top:5px;position:absolute;text-transform:initial;visibility:hidden}.show-help[_ngcontent-%COMP%]   .key[_ngcontent-%COMP%]{visibility:visible}.play-position[_ngcontent-%COMP%]{font-size:12pt;position:absolute;bottom:5px;left:10px}"]],data:{}});function f(n){return e.Lb(0,[(n()(),e.sb(0,0,null,null,8,"ion-button",[["mppmLongClick",""]],[[2,"marker-active",null]],[[null,"mppmClickLong"],[null,"mppmClick"],[null,"touchstart"],[null,"touchend"],[null,"mousedown"],[null,"mouseup"]],function(n,l,t){var u=!0,r=n.component;return"touchstart"===l&&(u=!1!==e.Db(n,1).touchstart()&&u),"touchend"===l&&(u=!1!==e.Db(n,1).touchend()&&u),"mousedown"===l&&(u=!1!==e.Db(n,1).mousedown()&&u),"mouseup"===l&&(u=!1!==e.Db(n,1).mouseup()&&u),"mppmClickLong"===l&&(u=!1!==r.presentActionSheet(n.context.index)&&u),"mppmClick"===l&&(u=!1!==r.setActiveMarker(n.context.index)&&u),u},b.s,b.b)),e.rb(1,16384,null,0,d,[],null,{mppmClick:"mppmClick",mppmClickLong:"mppmClickLong"}),e.rb(2,49152,null,0,i.i,[e.h,e.k,e.z],{color:[0,"color"]},null),(n()(),e.Jb(3,0,[" "," "])),e.Fb(4,1),(n()(),e.sb(5,0,null,0,1,"span",[["class","marker-title"]],null,null,null,null,null)),(n()(),e.Jb(6,null,["",""])),(n()(),e.sb(7,0,null,0,1,"span",[["class","key"]],null,null,null,null,null)),(n()(),e.Jb(8,null,["",""]))],function(n,l){n(l,2,0,l.component.activeMarker===l.context.index?void 0:"success")},function(n,l){n(l,0,0,l.component.activeMarker===l.context.index);var t=e.Kb(l,3,0,n(l,4,0,e.Db(l.parent,0),l.context.$implicit.value));n(l,3,0,t),n(l,6,0,l.context.$implicit.title),n(l,8,0,l.context.index+1)})}function C(n){return e.Lb(0,[e.Eb(0,s.a,[]),e.Hb(402653184,1,{ytplayer:0}),e.Hb(402653184,2,{header:0}),(n()(),e.sb(3,0,[[2,0],["header",1]],null,1,"div",[["class","header"]],null,null,null,null,null)),(n()(),e.Jb(4,null,["",""])),(n()(),e.sb(5,0,null,null,63,"ion-content",[],[[2,"show-help",null]],null,null,b.t,b.c)),e.rb(6,49152,null,0,i.s,[e.h,e.k,e.z],null,null),(n()(),e.sb(7,0,null,0,61,"div",[["class","main-content"]],null,null,null,null,null)),(n()(),e.sb(8,0,null,null,55,"div",[["class","tools"]],null,null,null,null,null)),(n()(),e.sb(9,0,null,null,7,"ion-button",[["class","play-pause"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.playPause()&&e),e},b.s,b.b)),e.rb(10,49152,null,0,i.i,[e.h,e.k,e.z],null,null),(n()(),e.sb(11,0,null,0,1,"ion-icon",[],null,null,null,b.x,b.g)),e.rb(12,49152,null,0,i.A,[e.h,e.k,e.z],{name:[0,"name"]},null),(n()(),e.sb(13,0,null,0,1,"span",[["class","key"]],null,null,null,null,null)),(n()(),e.Jb(-1,null,["space"])),(n()(),e.sb(15,0,null,0,1,"div",[["class","play-position"]],null,null,null,null,null)),(n()(),e.Jb(16,null,["",""])),(n()(),e.sb(17,0,null,null,5,"ion-button",[["class","seek-to-start"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.seekToStart()&&e),e},b.s,b.b)),e.rb(18,49152,null,0,i.i,[e.h,e.k,e.z],null,null),(n()(),e.sb(19,0,null,0,1,"ion-icon",[["name","skip-backward"]],null,null,null,b.x,b.g)),e.rb(20,49152,null,0,i.A,[e.h,e.k,e.z],{name:[0,"name"]},null),(n()(),e.sb(21,0,null,0,1,"span",[["class","key"]],null,null,null,null,null)),(n()(),e.Jb(-1,null,["return"])),(n()(),e.sb(23,0,null,null,6,"ion-button",[["class","backward"],["mppmLongClick",""]],null,[[null,"mppmClick"],[null,"mppmClickLong"],[null,"mppmClickEnd"],[null,"touchstart"],[null,"touchend"],[null,"mousedown"],[null,"mouseup"]],function(n,l,t){var u=!0,r=n.component;return"touchstart"===l&&(u=!1!==e.Db(n,24).touchstart()&&u),"touchend"===l&&(u=!1!==e.Db(n,24).touchend()&&u),"mousedown"===l&&(u=!1!==e.Db(n,24).mousedown()&&u),"mouseup"===l&&(u=!1!==e.Db(n,24).mouseup()&&u),"mppmClick"===l&&(u=!1!==r.backwardForward(!0)&&u),"mppmClickLong"===l&&(u=!1!==r.backwardForwardLong(!0)&&u),"mppmClickEnd"===l&&(u=!1!==r.longClickEnd()&&u),u},b.s,b.b)),e.rb(24,16384,null,0,d,[],null,{mppmClick:"mppmClick",mppmClickLong:"mppmClickLong",mppmClickEnd:"mppmClickEnd"}),e.rb(25,49152,null,0,i.i,[e.h,e.k,e.z],null,null),(n()(),e.sb(26,0,null,0,1,"ion-icon",[["name","rewind"]],null,null,null,b.x,b.g)),e.rb(27,49152,null,0,i.A,[e.h,e.k,e.z],{name:[0,"name"]},null),(n()(),e.sb(28,0,null,0,1,"span",[["class","key"]],null,null,null,null,null)),(n()(),e.Jb(-1,null,["left"])),(n()(),e.sb(30,0,null,null,6,"ion-button",[["class","forward"],["mppmLongClick",""]],null,[[null,"mppmClick"],[null,"mppmClickLong"],[null,"mppmClickEnd"],[null,"touchstart"],[null,"touchend"],[null,"mousedown"],[null,"mouseup"]],function(n,l,t){var u=!0,r=n.component;return"touchstart"===l&&(u=!1!==e.Db(n,31).touchstart()&&u),"touchend"===l&&(u=!1!==e.Db(n,31).touchend()&&u),"mousedown"===l&&(u=!1!==e.Db(n,31).mousedown()&&u),"mouseup"===l&&(u=!1!==e.Db(n,31).mouseup()&&u),"mppmClick"===l&&(u=!1!==r.backwardForward(!1)&&u),"mppmClickLong"===l&&(u=!1!==r.backwardForwardLong(!1)&&u),"mppmClickEnd"===l&&(u=!1!==r.longClickEnd()&&u),u},b.s,b.b)),e.rb(31,16384,null,0,d,[],null,{mppmClick:"mppmClick",mppmClickLong:"mppmClickLong",mppmClickEnd:"mppmClickEnd"}),e.rb(32,49152,null,0,i.i,[e.h,e.k,e.z],null,null),(n()(),e.sb(33,0,null,0,1,"ion-icon",[["name","fastforward"]],null,null,null,b.x,b.g)),e.rb(34,49152,null,0,i.A,[e.h,e.k,e.z],{name:[0,"name"]},null),(n()(),e.sb(35,0,null,0,1,"span",[["class","key"]],null,null,null,null,null)),(n()(),e.Jb(-1,null,["right"])),(n()(),e.sb(37,0,null,null,26,"div",[["class","marker-tools"]],null,null,null,null,null)),(n()(),e.sb(38,0,null,null,5,"ion-button",[["color","success"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.seekToActiveMarker()&&e),e},b.s,b.b)),e.rb(39,49152,null,0,i.i,[e.h,e.k,e.z],{color:[0,"color"],disabled:[1,"disabled"]},null),(n()(),e.sb(40,0,null,0,1,"ion-icon",[["name","skip-backward"]],null,null,null,b.x,b.g)),e.rb(41,49152,null,0,i.A,[e.h,e.k,e.z],{name:[0,"name"]},null),(n()(),e.sb(42,0,null,0,1,"span",[["class","key"]],null,null,null,null,null)),(n()(),e.Jb(-1,null,["backspace"])),(n()(),e.sb(44,0,null,null,6,"ion-button",[["color","success"],["mppmLongClick",""]],null,[[null,"mppmClick"],[null,"mppmClickLong"],[null,"mppmClickEnd"],[null,"touchstart"],[null,"touchend"],[null,"mousedown"],[null,"mouseup"]],function(n,l,t){var u=!0,r=n.component;return"touchstart"===l&&(u=!1!==e.Db(n,45).touchstart()&&u),"touchend"===l&&(u=!1!==e.Db(n,45).touchend()&&u),"mousedown"===l&&(u=!1!==e.Db(n,45).mousedown()&&u),"mouseup"===l&&(u=!1!==e.Db(n,45).mouseup()&&u),"mppmClick"===l&&(u=!1!==r.moveMarker(!0)&&u),"mppmClickLong"===l&&(u=!1!==r.moveMarkerLong(!0)&&u),"mppmClickEnd"===l&&(u=!1!==r.longClickEnd()&&u),u},b.s,b.b)),e.rb(45,16384,null,0,d,[],null,{mppmClick:"mppmClick",mppmClickLong:"mppmClickLong",mppmClickEnd:"mppmClickEnd"}),e.rb(46,49152,null,0,i.i,[e.h,e.k,e.z],{color:[0,"color"],disabled:[1,"disabled"]},null),(n()(),e.sb(47,0,null,0,1,"ion-icon",[["name","rewind"]],null,null,null,b.x,b.g)),e.rb(48,49152,null,0,i.A,[e.h,e.k,e.z],{name:[0,"name"]},null),(n()(),e.sb(49,0,null,0,1,"span",[["class","key"]],null,null,null,null,null)),(n()(),e.Jb(-1,null,["up"])),(n()(),e.sb(51,0,null,null,6,"ion-button",[["color","success"],["mppmLongClick",""]],null,[[null,"mppmClick"],[null,"mppmClickLong"],[null,"mppmClickEnd"],[null,"touchstart"],[null,"touchend"],[null,"mousedown"],[null,"mouseup"]],function(n,l,t){var u=!0,r=n.component;return"touchstart"===l&&(u=!1!==e.Db(n,52).touchstart()&&u),"touchend"===l&&(u=!1!==e.Db(n,52).touchend()&&u),"mousedown"===l&&(u=!1!==e.Db(n,52).mousedown()&&u),"mouseup"===l&&(u=!1!==e.Db(n,52).mouseup()&&u),"mppmClick"===l&&(u=!1!==r.moveMarker(!1)&&u),"mppmClickLong"===l&&(u=!1!==r.moveMarkerLong(!1)&&u),"mppmClickEnd"===l&&(u=!1!==r.longClickEnd()&&u),u},b.s,b.b)),e.rb(52,16384,null,0,d,[],null,{mppmClick:"mppmClick",mppmClickLong:"mppmClickLong",mppmClickEnd:"mppmClickEnd"}),e.rb(53,49152,null,0,i.i,[e.h,e.k,e.z],{color:[0,"color"],disabled:[1,"disabled"]},null),(n()(),e.sb(54,0,null,0,1,"ion-icon",[["name","fastforward"]],null,null,null,b.x,b.g)),e.rb(55,49152,null,0,i.A,[e.h,e.k,e.z],{name:[0,"name"]},null),(n()(),e.sb(56,0,null,0,1,"span",[["class","key"]],null,null,null,null,null)),(n()(),e.Jb(-1,null,["down"])),(n()(),e.sb(58,0,null,null,5,"ion-button",[["color","success"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.addMarker()&&e),e},b.s,b.b)),e.rb(59,49152,null,0,i.i,[e.h,e.k,e.z],{color:[0,"color"],disabled:[1,"disabled"]},null),(n()(),e.sb(60,0,null,0,1,"ion-icon",[["name","add"]],null,null,null,b.x,b.g)),e.rb(61,49152,null,0,i.A,[e.h,e.k,e.z],{name:[0,"name"]},null),(n()(),e.sb(62,0,null,0,1,"span",[["class","key"]],null,null,null,null,null)),(n()(),e.Jb(-1,null,["a"])),(n()(),e.sb(64,0,null,null,2,"div",[["class","markers"]],null,null,null,null,null)),(n()(),e.hb(16777216,null,null,1,null,f)),e.rb(66,278528,null,0,h.h,[e.N,e.K,e.s],{ngForOf:[0,"ngForOf"]},null),(n()(),e.sb(67,0,null,null,0,"div",[["class","spacer"]],null,null,null,null,null)),(n()(),e.sb(68,0,[[1,0],["ytplayer",1]],null,0,"div",[],null,null,null,null,null))],function(n,l){var t=l.component;n(l,12,0,t.playPauseIcon),n(l,20,0,"skip-backward"),n(l,27,0,"rewind"),n(l,34,0,"fastforward"),n(l,39,0,"success",t.noActiveMarker),n(l,41,0,"skip-backward"),n(l,46,0,"success",t.noActiveMarker),n(l,48,0,"rewind"),n(l,53,0,"success",t.noActiveMarker),n(l,55,0,"fastforward"),n(l,59,0,"success",t.isAtStart),n(l,61,0,"add"),n(l,66,0,t.markers)},function(n,l){var t=l.component;n(l,4,0,null==t.track?null:t.track.name),n(l,5,0,t.showHelp),n(l,16,0,t.playPosition)})}function y(n){return e.Lb(0,[(n()(),e.sb(0,0,null,null,1,"app-track",[],null,null,null,C,v)),e.rb(1,245760,null,0,p,[g.a,r.a,o.a,i.a,i.Eb,a.a,s.a],null,null)],function(n,l){n(l,1,0)},null)}var w=e.ob("app-track",p,y,{},{},[]),M=t("gIcY"),x=t("a6Df");t.d(l,"TrackPageModuleNgFactory",function(){return P});var P=e.pb(m,[],function(n){return e.Ab([e.Bb(512,e.j,e.ab,[[8,[k.a,w]],[3,e.j],e.x]),e.Bb(4608,h.k,h.j,[e.u,[2,h.q]]),e.Bb(4608,M.g,M.g,[]),e.Bb(4608,i.b,i.b,[e.z,e.g]),e.Bb(4608,i.Db,i.Db,[i.b,e.j,e.q]),e.Bb(4608,i.Gb,i.Gb,[i.b,e.j,e.q]),e.Bb(1073742336,h.b,h.b,[]),e.Bb(1073742336,x.a,x.a,[]),e.Bb(1073742336,M.f,M.f,[]),e.Bb(1073742336,M.a,M.a,[]),e.Bb(1073742336,i.Bb,i.Bb,[]),e.Bb(1073742336,g.n,g.n,[[2,g.s],[2,g.m]]),e.Bb(1073742336,m,m,[]),e.Bb(1024,g.k,function(){return[[{path:"",component:p}]]},[])])})}}]);