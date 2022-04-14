"use strict";(self.webpackChunkmppm=self.webpackChunkmppm||[]).push([[4902],{4902:(S,h,s)=>{s.r(h),s.d(h,{HomePageModule:()=>H});var g=s(1048),r=s(1412),v=s(9508),k=s(3957),m=s(8239),T=s(9535),t=s(257),x=s(1038),_=s(4863),C=s(7627);function P(i,c){1&i&&(t.TgZ(0,"h3",11),t._uU(1,"Musician's Practicing Player"),t.qZA())}function y(i,c){if(1&i){const e=t.EpF();t.TgZ(0,"ion-item-option",8),t.NdJ("click",function(){t.CHM(e);const o=t.oxw().$implicit,a=t.MAs(1);return t.oxw().editTrack(o,a)}),t._UZ(1,"ion-icon",17),t.qZA()}}function Z(i,c){if(1&i){const e=t.EpF();t.TgZ(0,"ion-item-sliding",null,12)(2,"ion-item-options",13)(3,"ion-item-option",14),t.NdJ("click",function(){const a=t.CHM(e).$implicit;return t.oxw().deleteTrack(a)}),t._UZ(4,"ion-icon",15),t.qZA(),t.YNc(5,y,2,0,"ion-item-option",16),t.qZA(),t.TgZ(6,"ion-item",8),t.NdJ("click",function(){const a=t.CHM(e).$implicit;return t.oxw().openTrack(a)}),t.TgZ(7,"ion-label"),t._uU(8),t.qZA()()()}if(2&i){const e=c.$implicit;t.xp6(5),t.Q6J("ngIf",!e.isFile),t.xp6(2),t.ekj("file-lost",e.fileLost),t.xp6(1),t.Oqu(e.name)}}function O(i,c){1&i&&(t.TgZ(0,"div",18),t._uU(1),t.ALo(2,"xlate"),t.qZA()),2&i&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"C_ADD_TRACK")))}let M=(()=>{class i{constructor(e,n,o,a,l,f,p){this.tracksService=e,this.nav=n,this.actionSheetController=o,this.xlate=a,this.storeService=l,this.toastController=f,this.alertController=p,this.tracks=[],this.filter="",this.onDragOver=d=>d.preventDefault(),this.onDrop=d=>{d.preventDefault();const u=d.dataTransfer;if(!u.files)return;const F=u.files[0],{track:I,index:L}=this.tracksService.addFileTrack(F);this.openTrack(Object.assign(Object.assign({},I),{index:L,fileLost:!1}))}}get noTracks(){return 0===this.tracks.length}ionViewWillEnter(){this.updateTracks(),document.body.addEventListener("dragover",this.onDragOver),document.body.addEventListener("drop",this.onDrop)}ionViewWillLeave(){document.body.removeEventListener("dragover",this.onDragOver),document.body.removeEventListener("drop",this.onDrop)}updateTracks(){const e=this.tracksService.tracks.map((o,a)=>Object.assign(Object.assign({},o),{index:a,fileLost:this.isFileLost(o)})),n=this.filter.toLowerCase().trim();this.tracks=n?e.filter(o=>o.name.toLowerCase().includes(n)):e,this.tracks.sort((o,a)=>o.name.localeCompare(a.name))}onFilterChange(e){this.filter=e.target.value,this.updateTracks()}deleteTrack(e){this.tracksService.deleteTrack(e.index),this.updateTracks()}editTrack(e,n){n.close(),this.nav.navigateForward(["/add-track",e.index])}addTrack(){var e=this;return(0,m.Z)(function*(){yield e.nav.navigateForward(["/add-track",-1],{animated:!1}),yield e.nav.navigateForward("/yt-search")})()}presentMenu(){var e=this;return(0,m.Z)(function*(){yield(yield e.actionSheetController.create({buttons:[e.noTracks?void 0:{text:e.xlate.transform("C_EXPORT"),handler:()=>{setTimeout(()=>e.storeService.export())}},{text:e.xlate.transform("C_IMPORT"),handler:()=>{setTimeout((0,m.Z)(function*(){const o=yield e.import();void 0!==o&&(o?e.updateTracks():(yield e.toastController.create({message:e.xlate.transform("C_IMPORT_ERROR"),duration:4e3})).present())}))}},e.noTracks?void 0:{text:e.xlate.transform("C_REMOVE_ALL_TRACKS"),handler:()=>{e.tracksService.removeAll(),e.updateTracks()}},{text:e.xlate.transform("C_INFO"),handler:()=>e.presentInfo()}].filter(Boolean)})).present()})()}import(){var e=this;return(0,m.Z)(function*(){return e.storeService.import(o=>new Promise(function(){var a=(0,m.Z)(function*(l){let f,p;const d=u=>()=>{f=u,p.dismiss()};p=yield e.alertController.create({header:e.xlate.transform("C_IMPORT_TRACKS",{countTracks:o}),buttons:[{text:e.xlate.transform("C_REPLACE"),handler:d(!0)},{text:e.xlate.transform("C_APPEND"),handler:d(!1)}]}),p.onDidDismiss().then(()=>l(f)),yield p.present()});return function(l){return a.apply(this,arguments)}}()))})()}openTrack(e){var n=this;return(0,m.Z)(function*(){if(e.fileLost){const o=yield(0,T.Rs)({accept:"audio/*"});n.tracksService.tracks[e.index].file=o[0]}n.nav.navigateForward(["/track",e.index])})()}presentInfo(){this.nav.navigateForward("/info")}isFileLost({isFile:e,file:n}){return e&&n&&"function"!=typeof n.slice}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(x.X),t.Y36(r.SH),t.Y36(r.BX),t.Y36(_.j),t.Y36(C.d),t.Y36(r.yF),t.Y36(r.Br))},i.\u0275cmp=t.Xpm({type:i,selectors:[["mppm-home"]],decls:14,vars:13,consts:[[3,"hidden"],[3,"placeholder","ionInput"],["scroll-y","false"],["class","title",4,"ngIf"],[4,"ngFor","ngForOf"],["slot","fixed",3,"vertical","horizontal"],[1,"menu-container",3,"click"],["name","menu"],[3,"click"],["name","add"],["class","add-track-info pulse",4,"ngIf"],[1,"title"],["it",""],["side","end"],["color","danger",3,"click"],["name","trash"],[3,"click",4,"ngIf"],["name","create"],[1,"add-track-info","pulse"]],template:function(e,n){1&e&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-searchbar",1),t.NdJ("ionInput",function(a){return n.onFilterChange(a)}),t.ALo(3,"xlate"),t.qZA()()(),t.TgZ(4,"ion-content",2),t.YNc(5,P,2,0,"h3",3),t.TgZ(6,"ion-list"),t.YNc(7,Z,9,4,"ion-item-sliding",4),t.qZA(),t.TgZ(8,"ion-fab",5)(9,"div",6),t.NdJ("click",function(){return n.presentMenu()}),t._UZ(10,"ion-icon",7),t.qZA(),t.TgZ(11,"ion-fab-button",8),t.NdJ("click",function(){return n.addTrack()}),t._UZ(12,"ion-icon",9),t.qZA(),t.YNc(13,O,3,3,"div",10),t.qZA()()),2&e&&(t.Q6J("hidden",n.noTracks),t.xp6(2),t.Q6J("placeholder",t.lcZ(3,11,"C_SEARCH")),t.xp6(3),t.Q6J("ngIf",n.noTracks),t.xp6(2),t.Q6J("ngForOf",n.tracks),t.xp6(1),t.ekj("with-tracks",!n.noTracks),t.Q6J("vertical",n.noTracks?"center":"bottom")("horizontal",n.noTracks?"center":"end"),t.xp6(3),t.ekj("pulse",n.noTracks),t.xp6(2),t.Q6J("ngIf",n.noTracks))},directives:[r.Gu,r.sr,r.VI,r.j9,r.W2,g.O5,r.q_,g.sg,r.td,r.IK,r.u8,r.gu,r.Ie,r.Q$,r.IJ,r.W4],pipes:[_.j],styles:["ion-item-option[_ngcontent-%COMP%]{font-size:15pt}ion-fab[_ngcontent-%COMP%]   .menu-container[_ngcontent-%COMP%]{cursor:pointer;height:56px;display:flex;position:relative;top:-20px;left:-10px}ion-fab[_ngcontent-%COMP%]   ion-fab-button[_ngcontent-%COMP%]{position:relative;left:-10px}ion-icon[name=menu][_ngcontent-%COMP%]{background-color:#fff;font-size:24pt;flex:1;position:relative;top:10px}@keyframes pulse-animation{0%{opacity:1}30%{opacity:1}40%{opacity:.6}50%{opacity:1}60%{opacity:1}70%{opacity:.6}80%{opacity:1}to{opacity:1}}.file-lost[_ngcontent-%COMP%]{color:#d3d3d3}.pulse[_ngcontent-%COMP%]{animation-name:pulse-animation;animation-duration:4s;transform-origin:70% 70%;animation-iteration-count:infinite;animation-timing-function:linear}.title[_ngcontent-%COMP%]{margin-top:120px;text-align:center}.add-track-info[_ngcontent-%COMP%]{margin-left:60px;margin-top:-35px;position:absolute;white-space:nowrap}.with-tracks[_ngcontent-%COMP%]{bottom:50px}"]}),i})();var A=s(9174);let H=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[g.ez,A.q,v.u5,r.Pc,k.Bz.forChild([{path:"",component:M}])]]}),i})()}}]);