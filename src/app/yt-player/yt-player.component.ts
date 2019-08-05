import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'mpp-yt-player',
  template: '<div id="mpp-player"></div>'
})
export class YtPlayerComponent implements OnInit {

  @Output() load = new EventEmitter();

  ngOnInit() {

    const tag = document.createElement('script');

    // tag.onload = () => this.load.next();

    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    const ytCheck = setInterval(() => {
      if (window[`YT`]) {
        this.load.next();
        clearInterval(ytCheck);
      }
    }, 500);

    // (window as any).onYouTubeIframeAPIReady = function () {
    //   console.log('player API ready')
    // }
  }
}
