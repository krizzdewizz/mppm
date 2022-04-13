"use strict";(self.webpackChunkmppm=self.webpackChunkmppm||[]).push([[1781],{1781:(y,s,a)=>{a.r(s),a.d(s,{AddTrackPageModule:()=>A});var k=a(9808),l=a(2382),g=a(127),o=a(8161),u=a(5861),p=a(9481),m=a(1824),t=a(1223),v=a(6353),h=a(4863),f=a(1036);let C=(()=>{class i{constructor(e,n,r,c,M,O){this.activatedRoute=e,this.tracksService=n,this.nav=r,this.toastController=c,this.xlate=M,this.ytDownloadService=O}ngOnInit(){if(this.trackIndex=Number(this.activatedRoute.snapshot.paramMap.get("index")),this.track={name:"",videoUrl:"",markers:[]},-1!==this.trackIndex){const e=this.tracksService.tracks[this.trackIndex];this.track.name=e.name,this.track.videoUrl=e.videoUrl}}ionViewWillEnter(){const e=(0,p.h)();e&&(this.track.videoUrl=e.id.videoId,this.track.name||(this.track.name=e.snippet.title),(0,p.F)(void 0))}addTrack(){let e=!1;if(this.file)this.tracksService.addFileTrack(this.file,this.track.name),e=!0;else{if(-1!==this.trackIndex){const n=this.tracksService.tracks[this.trackIndex];n.name=this.track.name,n.videoUrl=this.track.videoUrl}else e=!0,this.tracksService.tracks.push(Object.assign({},this.track));this.tracksService.saveTracks()}setTimeout(()=>{const n=this.nav.pop();e&&n.then(()=>this.nav.navigateRoot(["/track",this.tracksService.tracks.length-1]))})}ytSearch(){this.nav.navigateForward("/yt-search")}onFileChanged(e){this.file=e.target.files[0],this.track.name=this.file.name}ytDownload(e){var n=this;return(0,u.Z)(function*(){n.downloading||(n.downloading=!0,(yield n.ytDownloadService.initiateDownload((0,m.J)(e),n.track.name))||(yield n.toastController.create({message:n.xlate.transform("C_YT_DOWNLOAD_ERROR"),duration:4e3})).present(),n.downloading=!1)})()}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(g.gz),t.Y36(v.X),t.Y36(o.SH),t.Y36(o.yF),t.Y36(h.j),t.Y36(f.Q))},i.\u0275cmp=t.Xpm({type:i,selectors:[["mppm-add-track"]],decls:22,vars:22,consts:[["scroll-y","false"],[1,"add-track-content"],["clear-input","",3,"placeholder","ngModel","ngModelChange"],["name","search",3,"click"],["name","download",3,"click"],["type","indeterminate",1,"progress"],[1,"add",3,"disabled","click"],[1,"local-audio-file"],["type","file","accept","audio/*",3,"change"]],template:function(e,n){1&e&&(t.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),t._uU(3),t.ALo(4,"xlate"),t.qZA()()(),t.TgZ(5,"ion-content",0)(6,"div",1)(7,"ion-input",2),t.NdJ("ngModelChange",function(c){return n.track.name=c}),t.ALo(8,"xlate"),t.qZA(),t.TgZ(9,"ion-input",2),t.NdJ("ngModelChange",function(c){return n.track.videoUrl=c}),t.ALo(10,"xlate"),t.qZA(),t.TgZ(11,"ion-icon",3),t.NdJ("click",function(){return n.ytSearch()}),t.qZA(),t.TgZ(12,"ion-icon",4),t.NdJ("click",function(){return n.ytDownload(n.track.videoUrl)}),t.qZA(),t._UZ(13,"ion-progress-bar",5),t.TgZ(14,"ion-button",6),t.NdJ("click",function(){return n.addTrack()}),t._uU(15),t.ALo(16,"xlate"),t.qZA(),t.TgZ(17,"div",7)(18,"label"),t._uU(19),t.ALo(20,"xlate"),t.qZA(),t.TgZ(21,"input",8),t.NdJ("change",function(c){return n.onFileChanged(c)}),t.qZA()()()()),2&e&&(t.xp6(3),t.Oqu(t.lcZ(4,12,n.trackIndex<0?"C_ADD_TRACK":"C_EDIT_TRACK")),t.xp6(4),t.Q6J("placeholder",t.lcZ(8,14,"C_NAME"))("ngModel",n.track.name),t.xp6(2),t.Q6J("placeholder",t.lcZ(10,16,"C_YT_OR_VIDEO_ID"))("ngModel",n.track.videoUrl),t.xp6(3),t.ekj("hidden",!n.track.videoUrl),t.xp6(1),t.ekj("hidden",!n.downloading),t.xp6(1),t.Q6J("disabled",!n.track.name||!n.track.videoUrl&&!n.file),t.xp6(1),t.hij(" ",t.lcZ(16,18,n.trackIndex<0?"C_ADD":"C_SAVE"),""),t.xp6(4),t.Oqu(t.lcZ(20,20,"C_LOCAL_AUDIO_FILE")))},directives:[o.Gu,o.sr,o.wd,o.W2,o.pK,o.j9,l.JJ,l.On,o.gu,o.X7,o.YG],pipes:[h.j],styles:[".add-track-content[_ngcontent-%COMP%]{padding:16px;display:grid;grid-template-columns:auto 35px}.add-track-content[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{grid-column:1}.add-track-content[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]:nth-child(2){color:#aaa}.add-track-content[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{grid-column:2;justify-self:end;font-size:25pt;position:relative;top:-35px;cursor:pointer}.add-track-content[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%]{grid-column:2;justify-self:end;position:relative;top:-35px}.add-track-content[_ngcontent-%COMP%]   .progress.hidden[_ngcontent-%COMP%]{visibility:hidden}.add-track-content[_ngcontent-%COMP%]   ion-icon[name=search][_ngcontent-%COMP%]{color:#aaa}.add-track-content[_ngcontent-%COMP%]   ion-icon[name=download][_ngcontent-%COMP%]{position:relative;top:-37px;color:var(--ion-color-primary);cursor:pointer}.add-track-content[_ngcontent-%COMP%]   ion-icon[name=download].hidden[_ngcontent-%COMP%]{visibility:hidden}.add-track-content[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{grid-column:1/3}.add[_ngcontent-%COMP%]{margin-top:20px}.local-audio-file[_ngcontent-%COMP%]{margin-top:35px;font-size:smaller}.local-audio-file[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:block;padding-bottom:4px}"]}),i})();var T=a(9174);const P=[{path:"",component:C}];let A=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[k.ez,T.q,l.u5,o.Pc,g.Bz.forChild(P)]]}),i})()}}]);