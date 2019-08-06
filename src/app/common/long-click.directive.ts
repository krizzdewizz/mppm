import {Directive, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
    selector: '[mppmLongClick]'
})
export class LongClickDirective {

    private hadLong: boolean;
    private longPressTimer;

    @Output() mppmClick = new EventEmitter<void>();
    @Output() mppmClickLong = new EventEmitter<void>();
    @Output() mppmClickEnd = new EventEmitter<void>();

    @HostListener('touchstart') touchstart() {
        return this.event(true);
    }

    @HostListener('touchend') touchend() {
        return this.event(false);
    }

    @HostListener('mousedown') mousedown() {
        return this.event(true);
    }

    @HostListener('mouseup') mouseup() {
        return this.event(false);
    }

    private event(down: boolean) {
        if (down) {
            this.hadLong = false;
            this.longPressTimer = setTimeout((() => {
                this.hadLong = true;
                this.mppmClickLong.next();
            }), 500);
        } else {
            clearTimeout(this.longPressTimer);
            if (!this.hadLong) {
                this.mppmClick.next();
            }
            this.mppmClickEnd.next();
        }

        return false;
    }
}
