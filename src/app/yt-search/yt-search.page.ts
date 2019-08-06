import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-yt-search',
    templateUrl: './yt-search.page.html',
    styleUrls: ['./yt-search.page.scss'],
})
export class YtSearchPage implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

    onFilterChange(e) {
        const val = e.target.value;
        console.log('xxxx', val);
    }
}
