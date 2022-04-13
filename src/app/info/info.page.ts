import { Component } from '@angular/core';
import packageInfo from '../../../package.json';

@Component({
    selector: 'mppm-info',
    templateUrl: './info.page.html',
    styleUrls: ['./info.page.scss'],
})
export class InfoPage {
    version = packageInfo.version;
}
