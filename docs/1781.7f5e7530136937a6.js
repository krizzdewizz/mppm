"use strict";(self.webpackChunkmppm=self.webpackChunkmppm||[]).push([[1781],{1781:(y,s,i)=>{i.r(s),i.d(s,{AddTrackPageModule:()=>M});var p=i(1048),l=i(9508),g=i(3957),a=i(1412),k=i(8239),h=i(9481),m=i(9077),t=i(257),v=i(1038),u=i(4863),f=i(8322);const C=["nameInput"];let T=(()=>{class c{constructor(e,n,o,r,O,_){this.activatedRoute=e,this.tracksService=n,this.nav=o,this.toastController=r,this.xlate=O,this.ytDownloadService=_}ngOnInit(){if(this.trackIndex=Number(this.activatedRoute.snapshot.paramMap.get("index")),this.track={name:"",videoUrl:"",markers:[]},-1!==this.trackIndex){const e=this.tracksService.tracks[this.trackIndex];this.track.name=e.name,this.track.videoUrl=e.videoUrl}}ionViewWillEnter(){const e=(0,h.h)();e&&(this.track.videoUrl=e.id.videoId,this.track.name||(this.track.name=e.snippet.title),(0,h.F)(void 0)),setTimeout(()=>{var n,o;0===(null===(o=null===(n=this.track)||void 0===n?void 0:n.name)||void 0===o?void 0:o.length)&&this.ionInput.setFocus()},1e3)}addTrack(){let e=!1;if(this.file)this.tracksService.addFileTrack(this.file,this.track.name),e=!0;else{if(-1!==this.trackIndex){const n=this.tracksService.tracks[this.trackIndex];n.name=this.track.name,n.videoUrl=this.track.videoUrl}else e=!0,this.tracksService.tracks.push(Object.assign({},this.track));this.tracksService.saveTracks()}setTimeout(()=>{const n=this.nav.pop();e&&n.then(()=>this.nav.navigateRoot(["/home"],{animated:!1})).then(()=>this.nav.navigateForward(["/track",this.tracksService.tracks.length-1],{animated:!1}))})}ytSearch(){this.nav.navigateForward("/yt-search")}onFileChanged(e){this.file=e.target.files[0],this.track.name=this.file.name}ytDownload(e){var n=this;return(0,k.Z)(function*(){n.downloading||(n.downloading=!0,(yield n.ytDownloadService.initiateDownload((0,m.J)(e),n.track.name))||(yield n.toastController.create({message:n.xlate.transform("C_YT_DOWNLOAD_ERROR"),duration:4e3})).present(),n.downloading=!1)})()}}return c.\u0275fac=function(e){return new(e||c)(t.Y36(g.gz),t.Y36(v.X),t.Y36(a.SH),t.Y36(a.yF),t.Y36(u.j),t.Y36(f.Q))},c.\u0275cmp=t.Xpm({type:c,selectors:[["mppm-add-track"]],viewQuery:function(e,n){if(1&e&&t.Gf(C,5),2&e){let o;t.iGM(o=t.CRH())&&(n.ionInput=o.first)}},decls:25,vars:22,consts:[["scroll-y","false"],[1,"add-track-content"],["clear-input","",3,"placeholder","ngModel","ngModelChange"],["nameInput",""],["name","search",3,"click"],["name","download",3,"click"],["type","indeterminate",1,"progress"],[1,"add",3,"disabled","click"],[1,"local-audio-file"],["type","file","accept","audio/*",3,"change"]],template:function(e,n){1&e&&(t.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons"),t._UZ(3,"ion-back-button"),t.qZA(),t.TgZ(4,"ion-title"),t._uU(5),t.ALo(6,"xlate"),t.qZA()()(),t.TgZ(7,"ion-content",0)(8,"div",1)(9,"ion-input",2,3),t.NdJ("ngModelChange",function(r){return n.track.name=r}),t.ALo(11,"xlate"),t.qZA(),t.TgZ(12,"ion-input",2),t.NdJ("ngModelChange",function(r){return n.track.videoUrl=r}),t.ALo(13,"xlate"),t.qZA(),t.TgZ(14,"ion-icon",4),t.NdJ("click",function(){return n.ytSearch()}),t.qZA(),t.TgZ(15,"ion-icon",5),t.NdJ("click",function(){return n.ytDownload(n.track.videoUrl)}),t.qZA(),t._UZ(16,"ion-progress-bar",6),t.TgZ(17,"ion-button",7),t.NdJ("click",function(){return n.addTrack()}),t._uU(18),t.ALo(19,"xlate"),t.qZA(),t.TgZ(20,"div",8)(21,"label"),t._uU(22),t.ALo(23,"xlate"),t.qZA(),t.TgZ(24,"input",9),t.NdJ("change",function(r){return n.onFileChanged(r)}),t.qZA()()()()),2&e&&(t.xp6(5),t.Oqu(t.lcZ(6,12,n.trackIndex<0?"C_ADD_TRACK":"C_EDIT_TRACK")),t.xp6(4),t.Q6J("placeholder",t.lcZ(11,14,"C_NAME"))("ngModel",n.track.name),t.xp6(3),t.Q6J("placeholder",t.lcZ(13,16,"C_YT_OR_VIDEO_ID"))("ngModel",n.track.videoUrl),t.xp6(3),t.ekj("hidden",!n.track.videoUrl),t.xp6(1),t.ekj("hidden",!n.downloading),t.xp6(1),t.Q6J("disabled",!n.track.name||!n.track.videoUrl&&!n.file),t.xp6(1),t.hij(" ",t.lcZ(19,18,n.trackIndex<0?"C_ADD":"C_SAVE"),""),t.xp6(4),t.Oqu(t.lcZ(23,20,"C_LOCAL_AUDIO_FILE")))},directives:[a.Gu,a.sr,a.Sm,a.oU,a.cs,a.wd,a.W2,a.pK,a.j9,l.JJ,l.On,a.gu,a.X7,a.YG],pipes:[u.j],styles:[".add-track-content[_ngcontent-%COMP%]{padding:16px;display:grid;grid-template-columns:auto 35px}.add-track-content[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{grid-column:1}.add-track-content[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]:nth-child(2){color:#aaa}.add-track-content[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{grid-column:2;justify-self:end;font-size:25pt;position:relative;top:-35px;cursor:pointer}.add-track-content[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%]{grid-column:2;justify-self:end;position:relative;top:-35px}.add-track-content[_ngcontent-%COMP%]   .progress.hidden[_ngcontent-%COMP%]{visibility:hidden}.add-track-content[_ngcontent-%COMP%]   ion-icon[name=search][_ngcontent-%COMP%]{color:#aaa}.add-track-content[_ngcontent-%COMP%]   ion-icon[name=download][_ngcontent-%COMP%]{position:relative;top:-37px;color:var(--ion-color-primary);cursor:pointer}.add-track-content[_ngcontent-%COMP%]   ion-icon[name=download].hidden[_ngcontent-%COMP%]{visibility:hidden}.add-track-content[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{grid-column:1/3}.add[_ngcontent-%COMP%]{margin-top:20px}.local-audio-file[_ngcontent-%COMP%]{margin-top:35px}.local-audio-file[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:block;padding-bottom:4px}"]}),c})();var A=i(9174);const P=[{path:"",component:T}];let M=(()=>{class c{}return c.\u0275fac=function(e){return new(e||c)},c.\u0275mod=t.oAB({type:c}),c.\u0275inj=t.cJS({imports:[[p.ez,A.q,l.u5,a.Pc,g.Bz.forChild(P)]]}),c})()}}]);