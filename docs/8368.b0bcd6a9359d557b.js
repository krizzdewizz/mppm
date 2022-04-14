"use strict";(self.webpackChunkmppm=self.webpackChunkmppm||[]).push([[8368],{8368:(J,d,a)=>{a.r(d),a.d(d,{TrackPageModule:()=>q});var u=a(1048),P=a(9508),h=a(3957),s=a(1412),f=a(8239),e=a(257),b=a(4813),p=a(8920),m=a(3850),M=a(6353),C=a(4863),T=a(8321);let Z=(()=>{class o{constructor(){this.mppmClick=new e.vpe,this.mppmClickLong=new e.vpe,this.mppmClickEnd=new e.vpe}touchstart(){return this.event(!0)}touchend(){return this.event(!1)}mousedown(){return this.event(!0)}mouseup(){return this.event(!1)}event(n){return n?(this.hadLong=!1,this.longPressTimer=setTimeout(()=>{this.hadLong=!0,this.mppmClickLong.next()},500)):(clearTimeout(this.longPressTimer),this.hadLong||this.mppmClick.next(),this.mppmClickEnd.next()),!1}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275dir=e.lG2({type:o,selectors:[["","mppmLongClick",""]],hostBindings:function(n,t){1&n&&e.NdJ("touchstart",function(){return t.touchstart()})("touchend",function(){return t.touchend()})("mousedown",function(){return t.mousedown()})("mouseup",function(){return t.mouseup()})},outputs:{mppmClick:"mppmClick",mppmClickLong:"mppmClickLong",mppmClickEnd:"mppmClickEnd"}}),o})(),y=(()=>{class o{constructor(){this.seek=new e.vpe}onChange(n){this.seek.next(n.target.value)}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["mppm-audio"]],inputs:{position:"position",duration:"duration"},outputs:{seek:"seek"},decls:1,vars:2,consts:[["type","range","min","0",1,"slider",3,"max","value","change"]],template:function(n,t){1&n&&(e.TgZ(0,"input",0),e.NdJ("change",function(c){return t.onChange(c)}),e.qZA()),2&n&&e.Q6J("max",t.duration||0)("value",t.position||0)},styles:[".slider[_ngcontent-%COMP%]{width:100%;outline:none;opacity:.7;transition:opacity .15s ease-in-out;-webkit-appearance:none;background:#d3d3d3;height:35px}"]}),o})();const x=["ytplayer"],A=["contentElement"],L=["settingsElement"];function E(o,r){if(1&o){const n=e.EpF();e.TgZ(0,"ion-button",37),e.NdJ("mppmClickLong",function(){const c=e.CHM(n).index;return e.oxw().presentActionSheet(c)})("mppmClick",function(){const c=e.CHM(n).index;return e.oxw().setActiveMarker(c)}),e._uU(1),e.ALo(2,"marker"),e.TgZ(3,"span",38),e._uU(4),e.qZA(),e.TgZ(5,"span",9),e._uU(6),e.qZA()()}if(2&o){const n=r.$implicit,t=r.index,i=e.oxw();e.ekj("marker-active",i.activeMarker===t),e.xp6(1),e.hij(" ",e.lcZ(2,5,n.value)," "),e.xp6(3),e.Oqu(n.title),e.xp6(2),e.Oqu(t+1)}}function O(o,r){if(1&o){const n=e.EpF();e.TgZ(0,"div",32)(1,"label",33),e.NdJ("click",function(){return e.CHM(n),e.oxw().resetPitch()}),e._uU(2,"Pitch"),e.qZA(),e.TgZ(3,"span"),e._uU(4),e.ALo(5,"number"),e.qZA(),e.TgZ(6,"ion-button",34),e.NdJ("mppmClickLong",function(){return e.CHM(n),e.oxw().onPitchLong(!0)})("mppmClick",function(){return e.CHM(n),e.oxw().onPitch(!0)})("mppmClickEnd",function(){return e.CHM(n),e.oxw().longClickEnd()}),e._UZ(7,"ion-icon",35),e.qZA(),e.TgZ(8,"ion-button",34),e.NdJ("mppmClickLong",function(){return e.CHM(n),e.oxw().onPitchLong(!1)})("mppmClick",function(){return e.CHM(n),e.oxw().onPitch(!1)})("mppmClickEnd",function(){return e.CHM(n),e.oxw().longClickEnd()}),e._UZ(9,"ion-icon",21),e.qZA()()}if(2&o){const n=e.oxw();e.xp6(4),e.Oqu(e.xi3(5,1,n.pitch,"1.2-2"))}}function w(o,r){if(1&o){const n=e.EpF();e.TgZ(0,"div",32)(1,"label",33),e.NdJ("click",function(){return e.CHM(n),e.oxw().resetTempo()}),e._uU(2,"Tempo"),e.qZA(),e.TgZ(3,"span"),e._uU(4),e.ALo(5,"number"),e.qZA(),e.TgZ(6,"ion-button",34),e.NdJ("mppmClickLong",function(){return e.CHM(n),e.oxw().onTempoLong(!0)})("mppmClick",function(){return e.CHM(n),e.oxw().onTempo(!0)})("mppmClickEnd",function(){return e.CHM(n),e.oxw().longClickEnd()}),e._UZ(7,"ion-icon",35),e.qZA(),e.TgZ(8,"ion-button",34),e.NdJ("mppmClickLong",function(){return e.CHM(n),e.oxw().onTempoLong(!1)})("mppmClick",function(){return e.CHM(n),e.oxw().onTempo(!1)})("mppmClickEnd",function(){return e.CHM(n),e.oxw().longClickEnd()}),e._UZ(9,"ion-icon",21),e.qZA()()}if(2&o){const n=e.oxw();e.xp6(4),e.Oqu(e.xi3(5,1,n.tempo,"1.2-2"))}}const _=200;let S=(()=>{class o{constructor(n,t,i,c,l,k,g){this.activatedRoute=n,this.tracksService=t,this.playerService=i,this.actionSheetController=c,this.nav=l,this.xlate=k,this.markerPipe=g,this.showHelp=!1,this.showKeyHelp=!1,this.showSettings=!1,this.subscription=new b.w0}ngOnInit(){this.trackIndex=Number(this.activatedRoute.snapshot.paramMap.get("index")),this.track=this.tracksService.tracks[this.trackIndex],this.setPlayerPropsFromTrack(),this.subscription.add(this.playerService.playerReady.subscribe(()=>{this.track.file?(this.playerService.openFile(this.track.file),this.setPlayerPropsFromTrack()):this.playerService.open(this.track.videoUrl,this.ytplayer,this.contentEl.nativeElement.offsetWidth)})),this.subscription.add(this.playerService.volumeChange.subscribe(n=>{this.track.volume=n,this.save()})),this.subscription.add(p.z.marker.subscribe(n=>{switch(n.action){case p.d.ADD:this.addMarker();break;case p.d.MOVE_ACTIVE:this.moveMarker(n.data);break;case p.d.SET_ACTIVE:this.setActiveMarker(n.data);break;case p.d.SEEK_TO_ACTIVE:this.seekToActiveMarker();break;case p.d.TOGGLE_HELP:this.showKeyHelp=!this.showKeyHelp}})),this.playPositionTimer=setInterval(()=>{!this.playPosition&&!this.playerService.isPlaying||(this.playPositionNumber=this.playerService.getCurrentTime(),this.playPosition=this.markerPipe.transform(this.playPositionNumber))},500)}ngOnDestroy(){this.subscription.unsubscribe(),this.playerService.destroy(),clearInterval(this.playPositionTimer)}get playPauseIcon(){return this.playerService.isPlaying?"pause":"play"}get markers(){return this.track.markers}playPause(){this.playerService.playPause()}seekToStart(){this.playerService.seekToStart()}seekTo(n){this.playerService.seekTo(n)}backwardForward(n,t=1){this.playerService.backwardForward(n,t)}backwardForwardLong(n){this.longClickInterval=setInterval(()=>this.backwardForward(n,5),_)}longClickEnd(){clearInterval(this.longClickInterval)}moveMarkerLong(n){this.longClickInterval=setInterval(()=>this.moveMarker(n,5),_)}seekToActiveMarker(){this.noActiveMarker||this.playerService.seekTo(this.track.markers[this.activeMarker].value)}get noActiveMarker(){return void 0===this.activeMarker}get isAtStart(){return 0===this.playerService.getCurrentTime()}addMarker(){const n=this.playerService.getCurrentTime();n&&(this.track.markers.push({value:n}),this.sortMarkers(),this.activeMarker=this.track.markers.findIndex(t=>t.value===n),this.tracksService.saveTracks())}deleteMarker(n){this.track.markers=this.track.markers.filter((t,i)=>i!==n),delete this.activeMarker,this.tracksService.saveTracks()}setActiveMarker(n){n>=0&&n<this.track.markers.length&&(this.activeMarker=n,this.seekToActiveMarker())}moveMarker(n,t=1){const{activeMarker:i,track:c}=this,{markers:l}=c,k=(0,m.D)(l[i].value,n,t);l[i].value=k,this.sortMarkers(),this.activeMarker=l.findIndex(g=>g.value===k),this.seekToActiveMarker(),this.tracksService.saveTracks()}sortMarkers(){this.track.markers.sort((n,t)=>n.value<t.value?-1:n.value>t.value?1:0)}presentActionSheet(n){var t=this;return(0,f.Z)(function*(){yield(yield t.actionSheetController.create({header:`${t.xlate.transform("C_MARKER")} ${t.track.markers[n].title||""}`,buttons:[{text:t.xlate.transform("C_DESCRIPTION"),icon:"create",handler:()=>t.nav.navigateForward(["/marker-detail",t.trackIndex,n])},{text:t.xlate.transform("C_DELETE"),icon:"trash",handler:()=>t.deleteMarker(n)}]})).present()})()}get volume(){return this.playerService.getVolume()}get pitch(){return this.playerService.getPitch()}get tempo(){return this.playerService.getTempo()}get duration(){return this.playerService.getDuration()}resetVolume(){this.playerService.setVolume(1,{emitChangeEvent:!1}),this.track.volume=1,this.save()}resetPitch(){this.playerService.setPitch(this.track.pitch=1),this.save()}resetTempo(){this.playerService.setTempo(this.track.tempo=1),this.save()}onVolume(n,t=.05){const i=(0,m.D)(this.volume||1,n,t);this.playerService.setVolume(i,{emitChangeEvent:!1}),this.track.volume=this.playerService.getVolume(),this.save()}onVolumeLong(n){this.longClickInterval=setInterval(()=>this.onVolume(n,.1),_)}onPitch(n,t=.01){this.playerService.setPitch(this.track.pitch=(0,m.D)(this.pitch||1,n,t)),this.save()}onPitchLong(n){this.longClickInterval=setInterval(()=>this.onPitch(n,.05),_)}onTempo(n,t=.01){this.playerService.setTempo(this.track.tempo=(0,m.D)(this.tempo||1,n,t)),this.save()}onTempoLong(n){this.longClickInterval=setInterval(()=>this.onTempo(n,.05),_)}save(){clearTimeout(this.saveTimer),this.saveTimer=setTimeout(()=>this.tracksService.saveTracks(),1e3)}setPlayerPropsFromTrack(){this.playerService.setVolume(this.track.volume||1,{emitChangeEvent:!1}),this.playerService.setPitch(this.track.pitch||1),this.playerService.setTempo(this.track.tempo||1)}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(h.gz),e.Y36(M.X),e.Y36(m.l),e.Y36(s.BX),e.Y36(s.SH),e.Y36(C.j),e.Y36(T.x))},o.\u0275cmp=e.Xpm({type:o,selectors:[["mppm-track"]],viewQuery:function(n,t){if(1&n&&(e.Gf(x,7),e.Gf(A,7,e.SBq),e.Gf(L,7,e.SBq)),2&n){let i;e.iGM(i=e.CRH())&&(t.ytplayer=i.first),e.iGM(i=e.CRH())&&(t.contentEl=i.first),e.iGM(i=e.CRH())&&(t.settingsEl=i.first)}},decls:98,vars:56,consts:[["slot","end"],["name","settings",3,"click"],["name","help",3,"click"],["scroll-y","false"],["contentElement",""],[1,"main-content"],[1,"tools"],[1,"play-pause",3,"click"],[3,"name"],[1,"key"],[1,"help"],[1,"play-position"],[1,"seek-to-start",3,"click"],["name","play-skip-back"],["mppmLongClick","",1,"backward",3,"mppmClick","mppmClickLong","mppmClickEnd"],["name","play-back"],["mppmLongClick","",1,"forward",3,"mppmClick","mppmClickLong","mppmClickEnd"],["name","play-forward"],[1,"marker-tools"],[3,"disabled","click"],["mppmLongClick","",3,"disabled","mppmClick","mppmClickLong","mppmClickEnd"],["name","add"],[1,"markers"],["mppmLongClick","",3,"marker-active","mppmClickLong","mppmClick",4,"ngFor","ngForOf"],[1,"spacer"],[1,"audio-player",3,"hidden"],[3,"position","duration","seek"],[3,"hidden"],["ytplayer",""],[1,"settings-backdrop",3,"hidden","click"],[1,"settings",3,"hidden"],["settingsElement",""],[1,"card"],[3,"click"],["mppmLongClick","",3,"mppmClickLong","mppmClick","mppmClickEnd"],["name","remove"],["class","card",4,"ngIf"],["mppmLongClick","",3,"mppmClickLong","mppmClick"],[1,"marker-title"]],template:function(n,t){1&n&&(e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons"),e._UZ(3,"ion-back-button"),e.qZA(),e.TgZ(4,"ion-title"),e._uU(5),e.qZA(),e.TgZ(6,"ion-buttons",0)(7,"ion-icon",1),e.NdJ("click",function(c){return t.showSettings=!t.showSettings,c.cancelBubble=!0}),e.qZA(),e.TgZ(8,"ion-icon",2),e.NdJ("click",function(){return t.showHelp=!t.showHelp}),e.qZA()()()(),e.TgZ(9,"ion-content",3,4)(11,"div",5)(12,"div",6)(13,"ion-button",7),e.NdJ("click",function(){return t.playPause()}),e._UZ(14,"ion-icon",8),e.TgZ(15,"span",9),e._uU(16,"space"),e.qZA(),e.TgZ(17,"span",10),e._uU(18),e.ALo(19,"xlate"),e.qZA(),e.TgZ(20,"div",11),e._uU(21),e.qZA()(),e.TgZ(22,"ion-button",12),e.NdJ("click",function(){return t.seekToStart()}),e._UZ(23,"ion-icon",13),e.TgZ(24,"span",9),e._uU(25,"return"),e.qZA(),e.TgZ(26,"span",10),e._uU(27),e.ALo(28,"xlate"),e.qZA()(),e.TgZ(29,"ion-button",14),e.NdJ("mppmClick",function(){return t.backwardForward(!0)})("mppmClickLong",function(){return t.backwardForwardLong(!0)})("mppmClickEnd",function(){return t.longClickEnd()}),e._UZ(30,"ion-icon",15),e.TgZ(31,"span",9),e._uU(32,"left"),e.qZA(),e.TgZ(33,"span",10),e._uU(34),e.ALo(35,"xlate"),e.qZA()(),e.TgZ(36,"ion-button",16),e.NdJ("mppmClick",function(){return t.backwardForward(!1)})("mppmClickLong",function(){return t.backwardForwardLong(!1)})("mppmClickEnd",function(){return t.longClickEnd()}),e._UZ(37,"ion-icon",17),e.TgZ(38,"span",9),e._uU(39,"right"),e.qZA(),e.TgZ(40,"span",10),e._uU(41),e.ALo(42,"xlate"),e.qZA()(),e.TgZ(43,"div",18)(44,"ion-button",19),e.NdJ("click",function(){return t.seekToActiveMarker()}),e._UZ(45,"ion-icon",13),e.TgZ(46,"span",9),e._uU(47,"backspace"),e.qZA(),e.TgZ(48,"span",10),e._uU(49),e.ALo(50,"xlate"),e.qZA()(),e.TgZ(51,"ion-button",20),e.NdJ("mppmClick",function(){return t.moveMarker(!0)})("mppmClickLong",function(){return t.moveMarkerLong(!0)})("mppmClickEnd",function(){return t.longClickEnd()}),e._UZ(52,"ion-icon",15),e.TgZ(53,"span",9),e._uU(54,"up"),e.qZA(),e.TgZ(55,"span",10),e._uU(56),e.ALo(57,"xlate"),e.qZA()(),e.TgZ(58,"ion-button",20),e.NdJ("mppmClick",function(){return t.moveMarker(!1)})("mppmClickLong",function(){return t.moveMarkerLong(!1)})("mppmClickEnd",function(){return t.longClickEnd()}),e._UZ(59,"ion-icon",17),e.TgZ(60,"span",9),e._uU(61,"down"),e.qZA(),e.TgZ(62,"span",10),e._uU(63),e.ALo(64,"xlate"),e.qZA()(),e.TgZ(65,"ion-button",19),e.NdJ("click",function(){return t.addMarker()}),e._UZ(66,"ion-icon",21),e.TgZ(67,"span",9),e._uU(68,"a"),e.qZA(),e.TgZ(69,"span",10),e._uU(70),e.ALo(71,"xlate"),e.qZA()()()(),e.TgZ(72,"div",22),e.YNc(73,E,7,7,"ion-button",23),e.qZA(),e._UZ(74,"div",24),e.TgZ(75,"div",25)(76,"span"),e._uU(77),e.ALo(78,"marker"),e.ALo(79,"marker"),e.qZA(),e.TgZ(80,"mppm-audio",26),e.NdJ("seek",function(c){return t.seekTo(c)}),e.qZA()(),e._UZ(81,"div",27,28),e.TgZ(83,"div",29),e.NdJ("click",function(){return t.showSettings=!1}),e.qZA(),e.TgZ(84,"div",30,31)(86,"div",32)(87,"label",33),e.NdJ("click",function(){return t.resetVolume()}),e._uU(88,"Volume"),e.qZA(),e.TgZ(89,"span"),e._uU(90),e.ALo(91,"number"),e.qZA(),e.TgZ(92,"ion-button",34),e.NdJ("mppmClickLong",function(){return t.onVolumeLong(!0)})("mppmClick",function(){return t.onVolume(!0)})("mppmClickEnd",function(){return t.longClickEnd()}),e._UZ(93,"ion-icon",35),e.qZA(),e.TgZ(94,"ion-button",34),e.NdJ("mppmClickLong",function(){return t.onVolumeLong(!1)})("mppmClick",function(){return t.onVolume(!1)})("mppmClickEnd",function(){return t.longClickEnd()}),e._UZ(95,"ion-icon",21),e.qZA()(),e.YNc(96,O,10,4,"div",36),e.YNc(97,w,10,4,"div",36),e.qZA()()()),2&n&&(e.xp6(5),e.Oqu(null==t.track?null:t.track.name),e.xp6(2),e.ekj("settings-visible",t.showSettings),e.xp6(2),e.ekj("show-key-help",t.showKeyHelp)("show-help",t.showHelp),e.xp6(5),e.Q6J("name",t.playPauseIcon),e.xp6(4),e.Oqu(e.lcZ(19,33,"C_HELP_PLAY_PAUSE")),e.xp6(3),e.Oqu(t.playPosition),e.xp6(6),e.Oqu(e.lcZ(28,35,"C_HELP_TO_START")),e.xp6(7),e.Oqu(e.lcZ(35,37,"C_HELP_BACKWARD")),e.xp6(7),e.Oqu(e.lcZ(42,39,"C_HELP_FORWARD")),e.xp6(3),e.Q6J("disabled",t.noActiveMarker),e.xp6(5),e.Oqu(e.lcZ(50,41,"C_HELP_TO_MARKER")),e.xp6(2),e.Q6J("disabled",t.noActiveMarker),e.xp6(5),e.Oqu(e.lcZ(57,43,"C_HELP_PLAY_MARKER_BACKWARD")),e.xp6(2),e.Q6J("disabled",t.noActiveMarker),e.xp6(5),e.Oqu(e.lcZ(64,45,"C_HELP_MARKER_FORWARD")),e.xp6(2),e.Q6J("disabled",t.isAtStart),e.xp6(5),e.Oqu(e.lcZ(71,47,"C_HELP_ADD_MARKER")),e.xp6(3),e.Q6J("ngForOf",t.markers),e.xp6(2),e.Q6J("hidden",!t.track.isFile),e.xp6(2),e.AsE("",e.lcZ(78,49,t.playPositionNumber||0)," / ",e.lcZ(79,51,t.duration),""),e.xp6(3),e.Q6J("position",t.playPositionNumber)("duration",t.duration),e.xp6(1),e.Q6J("hidden",t.track.isFile),e.xp6(2),e.Q6J("hidden",!t.showSettings),e.xp6(1),e.Q6J("hidden",!t.showSettings),e.xp6(6),e.Oqu(e.xi3(91,53,t.volume,"1.2-2")),e.xp6(6),e.Q6J("ngIf",t.track.isFile),e.xp6(1),e.Q6J("ngIf",t.track.isFile))},directives:[s.Gu,s.sr,s.Sm,s.oU,s.cs,s.wd,s.gu,s.W2,s.YG,Z,u.sg,y,u.O5],pipes:[C.j,T.x,u.JJ],styles:["ion-header[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]{width:80%}ion-header[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:25px;margin:10px}ion-header[_ngcontent-%COMP%]   .settings-visible[_ngcontent-%COMP%]{color:#008b8b}.tools[_ngcontent-%COMP%]{height:40%;display:grid;grid-row-gap:3px;margin:0 2px 2px}.tools[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{height:100%}.play-pause[_ngcontent-%COMP%]{grid-column:1/4;text-align:center}.seek-to-start[_ngcontent-%COMP%], .backward[_ngcontent-%COMP%], .forward[_ngcontent-%COMP%]{grid-row:2}.marker-tools[_ngcontent-%COMP%]{grid-row:3;grid-column:1/4;display:flex;padding-top:1px}.marker-tools[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{height:100%;flex:1;--background: darkcyan}.markers[_ngcontent-%COMP%]{margin:2px}.markers[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{height:50px;margin:2px;--background: darkseagreen}.markers[_ngcontent-%COMP%]   ion-button.marker-active[_ngcontent-%COMP%]{--background: darkcyan}.marker-title[_ngcontent-%COMP%]{font-size:9pt;position:absolute;left:2px;bottom:2px;text-transform:initial}.main-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%}.spacer[_ngcontent-%COMP%]{flex:1}ion-button[_ngcontent-%COMP%]{--padding-start: 5px;--padding-end: 5px;font-size:14pt;margin:2px}.key[_ngcontent-%COMP%], .help[_ngcontent-%COMP%]{font-size:10pt;position:absolute;text-transform:initial;visibility:hidden}.key[_ngcontent-%COMP%]{right:5px;bottom:5px}.help[_ngcontent-%COMP%]{left:5px;top:5px;white-space:initial;text-align:left}.show-help[_ngcontent-%COMP%]   .help[_ngcontent-%COMP%], .show-key-help[_ngcontent-%COMP%]   .key[_ngcontent-%COMP%]{visibility:visible}.play-position[_ngcontent-%COMP%]{font-size:12pt;position:absolute;bottom:5px;left:10px}.audio-player[_ngcontent-%COMP%]{margin-bottom:60px;width:100%;padding:5px}.audio-player[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{letter-spacing:1.2px;font-size:smaller}.settings-backdrop[_ngcontent-%COMP%]{background-color:#000;opacity:.4;width:100%;height:100%;position:absolute}.settings[_ngcontent-%COMP%]{position:absolute;width:100%;border-radius:5px;display:flex;align-items:center;flex-direction:column;opacity:.95;pointer-events:none}.settings[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{width:70%;background-color:#fff;padding:10px;display:grid;grid-template-columns:30% auto 50px 50px;align-items:center;pointer-events:auto}.settings[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]{position:relative;width:180px}.settings[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:last-child{border-bottom-left-radius:5px;border-bottom-right-radius:5px}.settings[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin-right:10px;width:100%;align-self:center}.settings[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{flex:1;--background: darkcyan}"]}),o})();var U=a(9174);const H=[{path:"",component:S}];let q=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[u.ez,U.q,P.u5,s.Pc,h.Bz.forChild(H)]]}),o})()}}]);