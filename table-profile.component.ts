import { Component } from '@angular/core';

@Component({
  selector: 'app-table-profile',
  templateUrl: './table-profile.component.html',
  styleUrls: ['./table-profile.component.scss']
})
export class TableProfileComponent {
  name: string = "";
  surname: string = "";
  birthDate: string = "";
  phoneNumber: number|null = null;


}
