// import { Component, ReflectiveInjector } from '@angular/core';

// @Component({
//   selector: 'app-user-demo',
//   templateUrl: './user-demo.component.html',
//   styleUrls: ['./user-demo.component.css'],
// })
// export class UserDemoInjectirtComponent {
//   userName!: string;
//   userService: UserService;

//   constructor() {
//     const injector: any = ReflectiveInjector.resolveAndCreate([UserService]);

//     this.userService = injector.get(UserService);
//   }

//   singIn(): void {
//     this.userService.setUser({
//       name: 'Nate Murray',
//     });

//     this.userName = this.userService.getUser().name;
//     console.log('User name is: ', this.userName);
//   }
// }