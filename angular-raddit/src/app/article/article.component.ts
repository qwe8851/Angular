import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Article } from './article.model'; 


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
@HostBinding('attr.class') cssClass = 'row';
  @Input()
  article!: Article; 

  constructor() {
    // 게시물은 Input 행에 위치함
    // 따라서 따로 할 일은 없다.
  }

  voteUp(): boolean {
      this.article.voteUp();
    return false; //재랜더링을 막음
  }

  voteDown(): boolean {
      this.article.voteDown();
    return false; //재랜더링을 막음
  }

  ngOnInit() {}
}
