import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-shared-rating',
    templateUrl: 'rating.component.html'
})

export class RatingComponent implements OnChanges {

    startWidth = 2;
    @Input() rating;
    @Output() RatingClick: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {
        this.startWidth = this.rating / 5;
    }

    onClick(): void {
        this.RatingClick.emit('The rating: ' + (this.rating));
    }
}
