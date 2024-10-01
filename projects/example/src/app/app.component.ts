import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'example';
  tableConfig = DUMMY_DATA_TABLE_CONFIG;
}
export const DUMMY_DATA_TABLE_CONFIG = {
  title: 'Reusable Table',
  tableHeaders: [
      {
          label:'Name',
          value:'name'
      },
      {
          label:'City',
          value:'city'
      },
      {
          label:'Country',
          value:'country'
      }
  ],
  tableData: [
      {
          name: 'Ankit',
          city: 'Delhi',
          country: 'India'
      },
      {
          name: 'Manish',
          city: 'Gurgaon',
          country: 'India'
      },
      {
          name: 'Rahul',
          city: 'Bangalore',
          country: 'India'
      }
  ]
}
