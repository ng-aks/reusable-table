# Angular Reusable Table

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0.

## How to use reusable table in our project

Run `npm i @ng-aks/table` to install this library in your project. After install add module in app.module file.

```ts
import { NgAksTableLibModule } from 'projects/ng-aks-table-lib/src/public-api';

@NgModule({
  imports: [
    NgAksTableLibModule
  ],
}) 
```

now you have to add html part like this

```html
<ng-aks-table [tableConfig]="tableConfig"></ng-aks-table>
```
After add html part, add `tableConfig` in your `.ts` file like this.
```ts
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
```
the above data, you can use your api data or constant data as per your requirement.
Please make sure, you are using correct data format wit below model
```ts
export interface TableConfigModel {
    title?: string;
    tableHeaders: HeaderDataTableConfigModel[];
    tableData: Array<any>;
}

export interface HeaderDataTableConfigModel {
    label: string;
    value: string;
}
```

## Further help

To get more help on the this , please contact to [Ankit Kumar Sharma](https://www.ankitkumarsharma.com/)

Thanks
