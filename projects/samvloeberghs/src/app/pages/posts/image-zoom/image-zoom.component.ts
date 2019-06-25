import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'sv-image-zoom',
  templateUrl: './image-zoom.component.html',
  styleUrls: ['./image-zoom.component.scss'],
})
export class ImageZoomComponent implements OnInit {

  @Input() imgLink: string;
  @Input() imgTitle: string;

  @Output() close: EventEmitter<void> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    console.log(this.imgLink);
  }

  closeZoom($event) {
    $event.preventDefault();
    this.close.emit();
  }

}
