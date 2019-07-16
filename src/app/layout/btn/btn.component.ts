import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BtnComponent implements OnInit {
  @Input()
  text: string;

  @Input()
  disabled = false;

  @Output()
  click$: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
