import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  
  articles: Article[];

  constructor() {
    this.articles = [
      new Article('Angular 2', 'http://angular.io', 3),
      new Article('Fullstack', 'http://fullstack.io', 2),
      new Article('Angular Homepage', 'http://angular.io', 1),
    ];
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title : ${title.value}, link : ${link.value}`);

    this.articles.push(new Article(title.value, link.value, 0)); //제출된 제목과 URL로 새 Article 인스턴스 생성 → 이 인스턴스를 Article 배열에 추가
    title.value = ''; //input필드의 값 지우기
    link.value = '';
    return false;
  }

  sortArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }
}
