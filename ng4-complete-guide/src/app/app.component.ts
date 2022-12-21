import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // 프로퍼티 정의
  @Input() serverElements = [
    { type: 'server', name: 'TestServer', content: 'Just a test!' },
  ];
  oddNumbers: number[];
  evenNumbers: number[];
  loadedFeature = 'recipe';

  constructor() {
    // 프로퍼티 초기화
    // this.serverElements = [
    //   { type: 'server', name: 'TestServer', content: 'Just a test!' },
    // ];
    this.oddNumbers = [];
    this.evenNumbers = [];
  }

  // 메소드 정의
  onServerAdded(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }

  onBlueprintAdded(blueprintData: {
    serverName: string;
    serverContent: string;
  }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent,
    });
  }

  onChangeFirst() {
    this.serverElements[0].name = 'Changed!';
  }

  intervalFired(firedNumber: number) {
    // console.log(firedNumber);
    if (firedNumber % 2 === 0) {
      this.evenNumbers.push(firedNumber);
    } else {
      this.oddNumbers.push(firedNumber);
    }
  }

  onNavigate(feature: string){
    this.loadedFeature = feature;
  }
}
