import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrl: './persons.component.css'
})
export class PersonsComponent {
  @Input() personList: string[]; // @Input: This property can be bound from outside

  constructor() {
    this.personList= [];
  }
}
