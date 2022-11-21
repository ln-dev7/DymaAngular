import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.scss']
})
export class FruitComponent implements OnInit {

  @Input() public fruit: string = '';
  @Output() eventDeleteFruit: EventEmitter<string> = new EventEmitter<string>();
  deleteFruit(): void {
    this.eventDeleteFruit.emit(this.fruit);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
