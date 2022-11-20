import { DomSanitizer } from '@angular/platform-browser';

export class Article {
  title: string;
  link: string;
  votes: number;

  constructor(title: string, link: string, votes?: number) {
    this.title = title;
    this.link = link;
    this.votes = votes || 0;
  }

  voteUp(): void {
    this.votes += 1;
  }

  voteDown(): void {
    this.votes -= 1;
  }

  //   domain()은 URL에서 도메인을 추출해내는 유틸리티 함수임
  domain(): string|null {
    try {
      // ex: http://foo.com/path.bar
      const domainAndPath: string = this.link.split('//')[1];
      // ex: foo.com/path.bar
      return domainAndPath.split('/')[0];
    } catch (err) {
      return null;
    }
  }
}
