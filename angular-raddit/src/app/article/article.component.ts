import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() article:Article;
  // title: string; //원래 있던 변수들은 article class의 변수들로 대체
  // link: string;
  // votes: number;

  constructor() {
    // 게시물은 Input 행에 위치
    this.article = new Article(
      'Angular 2', 
      'http://angular.io', 
      10);
    // this.title = 'Angular 2';  //article class로 값을 전송
    // this.link = 'http://angular.io';
    // this.votes = 10;
  }

  voteUp(): boolean {
    this.article.voteUp();
    // this.votes += 1; //여기서 직접 함수를 수정하지않고 캡슐화하였다.
    return false; //재랜더링을 막음
  }

  voteDown(): boolean {
    this.article.voteDown();
    // this.votes -= 1;
    return false; //재랜더링을 막음
  }

  ngOnInit() {}
}
