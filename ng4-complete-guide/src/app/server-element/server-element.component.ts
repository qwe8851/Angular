import {
  Component,
  Input,
  OnChanges,
  OnInit,
  // ngDoCheck,
  // ngAfterContentInit,
  // ngAfterContentChecked,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated, //None, ShadowDom
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges
{
  @Input('srvElement') element: { type: string; name: string; content: string };
  @Input() name: string;

  constructor() {
    console.log('constructor called!');
  }

  ngOnInit(): void {
    console.log('ngOnInit called!');
  }

  ngOnChanges(changes: SimpleChanges) {
    // 변경사항에 반응
    // 얘가 더 먼저 실행
    console.log('ngOnChange called!');
    console.log(changes);
  }

  ngDoCheck() {
    console.log('ngDoCheck called!');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called!');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentInit called!');
  }
}
