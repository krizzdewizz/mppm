"use strict";(self.webpackChunkmppm=self.webpackChunkmppm||[]).push([[8368],{8368:(H,d,a)=>{a.r(d),a.d(d,{TrackPageModule:()=>S});var m=a(9808),f=a(2382),h=a(127),l=a(8161),P=a(5861),e=a(1223),p=a(8920),_=a(2732),y=a(6353),C=a(4863),v=a(8321);let M=(()=>{class r{constructor(){this.mppmClick=new e.vpe,this.mppmClickLong=new e.vpe,this.mppmClickEnd=new e.vpe}touchstart(){return this.event(!0)}touchend(){return this.event(!1)}mousedown(){return this.event(!0)}mouseup(){return this.event(!1)}event(n){return n?(this.hadLong=!1,this.longPressTimer=setTimeout(()=>{this.hadLong=!0,this.mppmClickLong.next()},500)):(clearTimeout(this.longPressTimer),this.hadLong||this.mppmClick.next(),this.mppmClickEnd.next()),!1}}return r.\u0275fac=function(n){return new(n||r)},r.\u0275dir=e.lG2({type:r,selectors:[["","mppmLongClick",""]],hostBindings:function(n,t){1&n&&e.NdJ("touchstart",function(){return t.touchstart()})("touchend",function(){return t.touchend()})("mousedown",function(){return t.mousedown()})("mouseup",function(){return t.mouseup()})},outputs:{mppmClick:"mppmClick",mppmClickLong:"mppmClickLong",mppmClickEnd:"mppmClickEnd"}}),r})(),x=(()=>{class r{constructor(){this.seek=new e.vpe}onChange(n){this.seek.next(n.target.value)}}return r.\u0275fac=function(n){return new(n||r)},r.\u0275cmp=e.Xpm({type:r,selectors:[["mppm-audio"]],inputs:{position:"position",duration:"duration"},outputs:{seek:"seek"},decls:1,vars:2,consts:[["type","range","min","0",1,"slider",3,"max","value","change"]],template:function(n,t){1&n&&(e.TgZ(0,"input",0),e.NdJ("change",function(c){return t.onChange(c)}),e.qZA()),2&n&&e.Q6J("max",t.duration||0)("value",t.position||0)},styles:[".slider[_ngcontent-%COMP%]{width:100%;outline:none;opacity:.7;transition:opacity .15s ease-in-out;-webkit-appearance:none;background:#d3d3d3;height:35px}"]}),r})();const b=["ytplayer"],Z=["header"];function A(r,o){if(1&r){const n=e.EpF();e.TgZ(0,"ion-button",30),e.NdJ("mppmClickLong",function(){const c=e.CHM(n).index;return e.oxw().presentActionSheet(c)})("mppmClick",function(){const c=e.CHM(n).index;return e.oxw().setActiveMarker(c)}),e._uU(1),e.ALo(2,"marker"),e.TgZ(3,"span",31),e._uU(4),e.qZA(),e.TgZ(5,"span",9),e._uU(6),e.qZA()()}if(2&r){const n=o.$implicit,t=o.index,i=e.oxw();e.ekj("marker-active",i.activeMarker===t),e.xp6(1),e.hij(" ",e.lcZ(2,5,n.value)," "),e.xp6(3),e.Oqu(n.title),e.xp6(2),e.Oqu(t+1)}}function L(r,o){if(1&r){const n=e.EpF();e.TgZ(0,"div",32)(1,"div",33)(2,"label",34),e.NdJ("click",function(){return e.CHM(n),e.oxw().resetPitch()}),e._uU(3,"Pitch "),e.TgZ(4,"span"),e._uU(5),e.ALo(6,"number"),e.qZA()(),e.TgZ(7,"ion-button",35),e.NdJ("mppmClickLong",function(){return e.CHM(n),e.oxw().onPitchLong(!0)})("mppmClick",function(){return e.CHM(n),e.oxw().onPitch(!0)})("mppmClickEnd",function(){return e.CHM(n),e.oxw().longClickEnd()}),e._UZ(8,"ion-icon",36),e.qZA(),e.TgZ(9,"ion-button",35),e.NdJ("mppmClickLong",function(){return e.CHM(n),e.oxw().onPitchLong(!1)})("mppmClick",function(){return e.CHM(n),e.oxw().onPitch(!1)})("mppmClickEnd",function(){return e.CHM(n),e.oxw().longClickEnd()}),e._UZ(10,"ion-icon",21),e.qZA()(),e.TgZ(11,"div",33)(12,"label",34),e.NdJ("click",function(){return e.CHM(n),e.oxw().resetTempo()}),e._uU(13,"Tempo "),e.TgZ(14,"span"),e._uU(15),e.ALo(16,"number"),e.qZA()(),e.TgZ(17,"ion-button",35),e.NdJ("mppmClickLong",function(){return e.CHM(n),e.oxw().onTempoLong(!0)})("mppmClick",function(){return e.CHM(n),e.oxw().onTempo(!0)})("mppmClickEnd",function(){return e.CHM(n),e.oxw().longClickEnd()}),e._UZ(18,"ion-icon",36),e.qZA(),e.TgZ(19,"ion-button",35),e.NdJ("mppmClickLong",function(){return e.CHM(n),e.oxw().onTempoLong(!1)})("mppmClick",function(){return e.CHM(n),e.oxw().onTempo(!1)})("mppmClickEnd",function(){return e.CHM(n),e.oxw().longClickEnd()}),e._UZ(20,"ion-icon",21),e.qZA()()()}if(2&r){const n=e.oxw();e.xp6(5),e.Oqu(e.xi3(6,2,n.pitch,"1.2-2")),e.xp6(10),e.Oqu(e.xi3(16,5,n.tempo,"1.2-2"))}}const u=200;let O=(()=>{class r{constructor(n,t,i,c,s,k,g){this.activatedRoute=n,this.tracksService=t,this.playerService=i,this.actionSheetController=c,this.nav=s,this.xlate=k,this.markerPipe=g,this.showHelp=!1,this.showKeyHelp=!1,this.showSettings=!1}ngOnInit(){this.trackIndex=Number(this.activatedRoute.snapshot.paramMap.get("index")),this.track=this.tracksService.tracks[this.trackIndex],this.subscription=this.playerService.playerReady.subscribe(()=>{this.track.file?(this.playerService.openFile(this.track.file),this.playerService.p.pitch=this.track.pitch||1,this.playerService.p.tempo=this.track.tempo||1):this.playerService.open(this.track.videoUrl,this.ytplayer,this.header.nativeElement.offsetWidth)}),this.subscription.add(p.z.marker.subscribe(n=>{switch(n.action){case p.d.ADD:this.addMarker();break;case p.d.MOVE_ACTIVE:this.moveMarker(n.data);break;case p.d.SET_ACTIVE:this.setActiveMarker(n.data);break;case p.d.SEEK_TO_ACTIVE:this.seekToActiveMarker();break;case p.d.TOGGLE_HELP:this.showKeyHelp=!this.showKeyHelp}})),this.playPositionTimer=setInterval(()=>{!this.playPosition&&!this.playerService.isPlaying||(this.playPositionNumber=this.playerService.getCurrentTime(),this.playPosition=this.markerPipe.transform(this.playPositionNumber))},500)}ngOnDestroy(){this.subscription.unsubscribe(),this.playerService.destroy(),clearInterval(this.playPositionTimer)}get playPauseIcon(){return this.playerService.isPlaying?"pause":"play"}get isPlaying(){return this.playerService.isPlaying}get markers(){return this.track.markers}playPause(){this.playerService.playPause()}seekToStart(){this.playerService.seekToStart()}seekTo(n){this.playerService.seekTo(n)}backwardForward(n,t=1){this.playerService.backwardForward(n,t)}backwardForwardLong(n){this.longClickInterval=setInterval(()=>this.backwardForward(n,5),u)}longClickEnd(){clearInterval(this.longClickInterval)}moveMarkerLong(n){this.longClickInterval=setInterval(()=>this.moveMarker(n,5),u)}seekToActiveMarker(){this.noActiveMarker||this.playerService.seekTo(this.track.markers[this.activeMarker].value)}get noActiveMarker(){return void 0===this.activeMarker}get isAtStart(){return 0===this.playerService.getCurrentTime()}addMarker(){const n=this.playerService.getCurrentTime();n&&(this.track.markers.push({value:n}),this.sortMarkers(),this.activeMarker=this.track.markers.findIndex(t=>t.value===n),this.tracksService.saveTracks())}deleteMarker(n){this.track.markers=this.track.markers.filter((t,i)=>i!==n),delete this.activeMarker,this.tracksService.saveTracks()}setActiveMarker(n){n>=0&&n<this.track.markers.length&&(this.activeMarker=n,this.seekToActiveMarker())}moveMarker(n,t=1){const{activeMarker:i,track:c}=this,{markers:s}=c,k=(0,_.y)(s[i].value,n,t);s[i].value=k,this.sortMarkers(),this.activeMarker=s.findIndex(g=>g.value===k),this.seekToActiveMarker(),this.tracksService.saveTracks()}sortMarkers(){this.track.markers.sort((n,t)=>n.value<t.value?-1:n.value>t.value?1:0)}presentActionSheet(n){var t=this;return(0,P.Z)(function*(){yield(yield t.actionSheetController.create({header:`${t.xlate.transform("C_MARKER")} ${t.track.markers[n].title||""}`,buttons:[{text:t.xlate.transform("C_DESCRIPTION"),icon:"create",handler:()=>t.nav.navigateForward(["/marker-detail",t.trackIndex,n])},{text:t.xlate.transform("C_DELETE"),icon:"trash",handler:()=>t.deleteMarker(n)}]})).present()})()}get pitch(){return this.playerService.p?this.playerService.p.pitch:1}get tempo(){return this.playerService.p?this.playerService.p.tempo:1}get duration(){return this.playerService.player&&this.playerService.player.getDuration?this.playerService.player.getDuration():void 0}resetPitch(){this.playerService.p.pitch=1}resetTempo(){this.playerService.p.tempo=1}onPitch(n,t=.01){this.track.pitch=this.playerService.p.pitch=(0,_.y)(this.pitch||1,n,t),this.save()}onPitchLong(n){this.longClickInterval=setInterval(()=>this.onPitch(n,.05),u)}onTempo(n,t=.01){this.track.tempo=this.playerService.p.tempo=(0,_.y)(this.tempo||1,n,t),this.save()}save(){clearTimeout(this.saveTimer),this.saveTimer=setTimeout(()=>this.tracksService.saveTracks(),1e3)}onTempoLong(n){this.longClickInterval=setInterval(()=>this.onTempo(n,.05),u)}}return r.\u0275fac=function(n){return new(n||r)(e.Y36(h.gz),e.Y36(y.X),e.Y36(_.l),e.Y36(l.BX),e.Y36(l.SH),e.Y36(C.j),e.Y36(v.x))},r.\u0275cmp=e.Xpm({type:r,selectors:[["mppm-track"]],viewQuery:function(n,t){if(1&n&&(e.Gf(b,7),e.Gf(Z,7,e.SBq)),2&n){let i;e.iGM(i=e.CRH())&&(t.ytplayer=i.first),e.iGM(i=e.CRH())&&(t.header=i.first)}},decls:79,vars:50,consts:[[1,"header"],["header",""],["name","settings",3,"hidden","click"],["name","help",3,"click"],["scroll-y","false"],[1,"main-content"],[1,"tools"],[1,"play-pause",3,"click"],[3,"name"],[1,"key"],[1,"help"],[1,"play-position"],[1,"seek-to-start",3,"click"],["name","play-skip-back"],["mppmLongClick","",1,"backward",3,"mppmClick","mppmClickLong","mppmClickEnd"],["name","play-back"],["mppmLongClick","",1,"forward",3,"mppmClick","mppmClickLong","mppmClickEnd"],["name","play-forward"],[1,"marker-tools"],[3,"disabled","click"],["mppmLongClick","",3,"disabled","mppmClick","mppmClickLong","mppmClickEnd"],["name","add"],[1,"markers"],["mppmLongClick","",3,"marker-active","mppmClickLong","mppmClick",4,"ngFor","ngForOf"],[1,"spacer"],[1,"audio-player",3,"hidden"],[3,"position","duration","seek"],[3,"hidden"],["ytplayer",""],["class","settings",4,"ngIf"],["mppmLongClick","",3,"mppmClickLong","mppmClick"],[1,"marker-title"],[1,"settings"],[1,"card"],[3,"click"],["mppmLongClick","",3,"mppmClickLong","mppmClick","mppmClickEnd"],["name","remove"]],template:function(n,t){1&n&&(e.TgZ(0,"div",0,1),e._uU(2),e.TgZ(3,"ion-icon",2),e.NdJ("click",function(){return t.showSettings=!t.showSettings}),e.qZA(),e.TgZ(4,"ion-icon",3),e.NdJ("click",function(){return t.showHelp=!t.showHelp}),e.qZA()(),e.TgZ(5,"ion-content",4)(6,"div",5)(7,"div",6)(8,"ion-button",7),e.NdJ("click",function(){return t.playPause()}),e._UZ(9,"ion-icon",8),e.TgZ(10,"span",9),e._uU(11,"space"),e.qZA(),e.TgZ(12,"span",10),e._uU(13),e.ALo(14,"xlate"),e.qZA(),e.TgZ(15,"div",11),e._uU(16),e.qZA()(),e.TgZ(17,"ion-button",12),e.NdJ("click",function(){return t.seekToStart()}),e._UZ(18,"ion-icon",13),e.TgZ(19,"span",9),e._uU(20,"return"),e.qZA(),e.TgZ(21,"span",10),e._uU(22),e.ALo(23,"xlate"),e.qZA()(),e.TgZ(24,"ion-button",14),e.NdJ("mppmClick",function(){return t.backwardForward(!0)})("mppmClickLong",function(){return t.backwardForwardLong(!0)})("mppmClickEnd",function(){return t.longClickEnd()}),e._UZ(25,"ion-icon",15),e.TgZ(26,"span",9),e._uU(27,"left"),e.qZA(),e.TgZ(28,"span",10),e._uU(29),e.ALo(30,"xlate"),e.qZA()(),e.TgZ(31,"ion-button",16),e.NdJ("mppmClick",function(){return t.backwardForward(!1)})("mppmClickLong",function(){return t.backwardForwardLong(!1)})("mppmClickEnd",function(){return t.longClickEnd()}),e._UZ(32,"ion-icon",17),e.TgZ(33,"span",9),e._uU(34,"right"),e.qZA(),e.TgZ(35,"span",10),e._uU(36),e.ALo(37,"xlate"),e.qZA()(),e.TgZ(38,"div",18)(39,"ion-button",19),e.NdJ("click",function(){return t.seekToActiveMarker()}),e._UZ(40,"ion-icon",13),e.TgZ(41,"span",9),e._uU(42,"backspace"),e.qZA(),e.TgZ(43,"span",10),e._uU(44),e.ALo(45,"xlate"),e.qZA()(),e.TgZ(46,"ion-button",20),e.NdJ("mppmClick",function(){return t.moveMarker(!0)})("mppmClickLong",function(){return t.moveMarkerLong(!0)})("mppmClickEnd",function(){return t.longClickEnd()}),e._UZ(47,"ion-icon",15),e.TgZ(48,"span",9),e._uU(49,"up"),e.qZA(),e.TgZ(50,"span",10),e._uU(51),e.ALo(52,"xlate"),e.qZA()(),e.TgZ(53,"ion-button",20),e.NdJ("mppmClick",function(){return t.moveMarker(!1)})("mppmClickLong",function(){return t.moveMarkerLong(!1)})("mppmClickEnd",function(){return t.longClickEnd()}),e._UZ(54,"ion-icon",17),e.TgZ(55,"span",9),e._uU(56,"down"),e.qZA(),e.TgZ(57,"span",10),e._uU(58),e.ALo(59,"xlate"),e.qZA()(),e.TgZ(60,"ion-button",19),e.NdJ("click",function(){return t.addMarker()}),e._UZ(61,"ion-icon",21),e.TgZ(62,"span",9),e._uU(63,"a"),e.qZA(),e.TgZ(64,"span",10),e._uU(65),e.ALo(66,"xlate"),e.qZA()()()(),e.TgZ(67,"div",22),e.YNc(68,A,7,7,"ion-button",23),e.qZA(),e._UZ(69,"div",24),e.TgZ(70,"div",25)(71,"span"),e._uU(72),e.ALo(73,"marker"),e.ALo(74,"marker"),e.qZA(),e.TgZ(75,"mppm-audio",26),e.NdJ("seek",function(c){return t.seekTo(c)}),e.qZA()(),e._UZ(76,"div",27,28),e.YNc(78,L,21,8,"div",29),e.qZA()()),2&n&&(e.xp6(2),e.hij("",null==t.track?null:t.track.name," "),e.xp6(1),e.ekj("settings-visible",t.showSettings),e.Q6J("hidden",!t.track.isFile),e.xp6(2),e.ekj("show-key-help",t.showKeyHelp)("show-help",t.showHelp),e.xp6(4),e.Q6J("name",t.playPauseIcon),e.xp6(4),e.Oqu(e.lcZ(14,30,"C_HELP_PLAY_PAUSE")),e.xp6(3),e.Oqu(t.playPosition),e.xp6(6),e.Oqu(e.lcZ(23,32,"C_HELP_TO_START")),e.xp6(7),e.Oqu(e.lcZ(30,34,"C_HELP_BACKWARD")),e.xp6(7),e.Oqu(e.lcZ(37,36,"C_HELP_FORWARD")),e.xp6(3),e.Q6J("disabled",t.noActiveMarker),e.xp6(5),e.Oqu(e.lcZ(45,38,"C_HELP_TO_MARKER")),e.xp6(2),e.Q6J("disabled",t.noActiveMarker),e.xp6(5),e.Oqu(e.lcZ(52,40,"C_HELP_PLAY_MARKER_BACKWARD")),e.xp6(2),e.Q6J("disabled",t.noActiveMarker),e.xp6(5),e.Oqu(e.lcZ(59,42,"C_HELP_MARKER_FORWARD")),e.xp6(2),e.Q6J("disabled",t.isAtStart),e.xp6(5),e.Oqu(e.lcZ(66,44,"C_HELP_ADD_MARKER")),e.xp6(3),e.Q6J("ngForOf",t.markers),e.xp6(2),e.Q6J("hidden",!t.track.isFile),e.xp6(2),e.AsE("",e.lcZ(73,46,t.playPositionNumber||0)," / ",e.lcZ(74,48,t.duration),""),e.xp6(3),e.Q6J("position",t.playPositionNumber)("duration",t.duration),e.xp6(1),e.Q6J("hidden",t.track.isFile),e.xp6(2),e.Q6J("ngIf",t.showSettings))},directives:[l.gu,l.W2,l.YG,M,m.sg,x,m.O5],pipes:[C.j,v.x,m.JJ],styles:[".header[_ngcontent-%COMP%]{padding:7px;background-color:#fff;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;margin-right:50px;font-size:22px}.header[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{position:absolute;cursor:pointer}.header[_ngcontent-%COMP%]   ion-icon[name=help][_ngcontent-%COMP%]{right:10px}.header[_ngcontent-%COMP%]   ion-icon[name=settings][_ngcontent-%COMP%]{right:40px}.header[_ngcontent-%COMP%]   .settings-visible[_ngcontent-%COMP%]{color:#008b8b}.tools[_ngcontent-%COMP%]{height:40%;display:grid;grid-row-gap:3px;margin:0 2px 2px}.tools[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{height:100%}.play-pause[_ngcontent-%COMP%]{grid-column:1/4;text-align:center}.seek-to-start[_ngcontent-%COMP%], .backward[_ngcontent-%COMP%], .forward[_ngcontent-%COMP%]{grid-row:2}.marker-tools[_ngcontent-%COMP%]{grid-row:3;grid-column:1/4;display:flex;padding-top:1px}.marker-tools[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{height:100%;flex:1;--background: darkcyan}.markers[_ngcontent-%COMP%]{margin:2px}.markers[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{height:50px;margin:2px;--background: darkseagreen}.markers[_ngcontent-%COMP%]   ion-button.marker-active[_ngcontent-%COMP%]{--background: darkcyan}.marker-title[_ngcontent-%COMP%]{font-size:9pt;position:absolute;left:2px;bottom:2px;text-transform:initial}.main-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%}.spacer[_ngcontent-%COMP%]{flex:1}ion-button[_ngcontent-%COMP%]{--padding-start: 5px;--padding-end: 5px;font-size:14pt;margin:2px}.key[_ngcontent-%COMP%], .help[_ngcontent-%COMP%]{font-size:10pt;position:absolute;text-transform:initial;visibility:hidden}.key[_ngcontent-%COMP%]{right:5px;bottom:5px}.help[_ngcontent-%COMP%]{left:5px;top:5px;white-space:initial;text-align:left}.show-help[_ngcontent-%COMP%]   .help[_ngcontent-%COMP%], .show-key-help[_ngcontent-%COMP%]   .key[_ngcontent-%COMP%]{visibility:visible}.play-position[_ngcontent-%COMP%]{font-size:12pt;position:absolute;bottom:5px;left:10px}.audio-player[_ngcontent-%COMP%]{margin-bottom:60px;width:100%;padding:5px}.audio-player[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{letter-spacing:1.2px;font-size:smaller}.settings[_ngcontent-%COMP%]{position:absolute;width:100%;border-radius:5px;display:flex;align-items:center;flex-direction:column;opacity:.95;pointer-events:none}.settings[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{width:70%;background-color:#fff;padding:10px;display:flex;pointer-events:auto}.settings[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:last-child{border-bottom-left-radius:5px;border-bottom-right-radius:5px}.settings[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin-right:10px;width:100%;align-self:center}.settings[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{flex:1;--background: darkcyan}"]}),r})();var w=a(9174);const E=[{path:"",component:O}];let S=(()=>{class r{}return r.\u0275fac=function(n){return new(n||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[m.ez,w.q,f.u5,l.Pc,h.Bz.forChild(E)]]}),r})()}}]);