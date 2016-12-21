import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `
  <h1>Hello {{name}}</h1>
  <p><strong>Email:</strong> {{email}}</p>
  <p><strong>Address:</strong> {{address.street}} {{address.city}}, {{address.state}}</p>
  <h3>Hobbies</h3>
  <ul>
    <li *ngFor="let hobby of hobbies">
      {{hobby}}
    </li>
  </ul>
  `,
})
export class UserComponent  {
  name: string;
  email: string;
  address: address; // address property is of type address
  hobbies: string[];

  constructor() {
    this.name = 'John Doe';
    this.email = 'john@gmail.com';
    this.address = {
      street: '12 Main St',
      city: 'Boston',
      state: 'MA'
    };
    this.hobbies = ['Music', 'Movies', 'Sports'];
  }
}

interface address {
  street: string;
  city: string;
  state: string;
}
