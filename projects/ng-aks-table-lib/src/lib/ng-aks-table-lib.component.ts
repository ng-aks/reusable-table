import { Component, Input, OnInit } from '@angular/core';
import { TableConfigModel } from './core/ng-aks-table-lib.models';
import { LABELS } from './core/ng-aks-table-lib.constant';

@Component({
  selector: 'ng-aks-table',
  templateUrl: './ng-aks-table-lib.component.html',
  styleUrls: ['./ng-aks-table-lib.component.scss']
})
export class NgAksTableLibComponent implements OnInit {
  @Input() tableConfig!: TableConfigModel;
  noData: string = LABELS.noData;
  noHeaders: string = LABELS.noHeaders;
  noTableDataFlag!: boolean;
  ngOnInit(): void {
    this.initTable();
  }
  initTable() {
    if (this.tableConfig?.tableData.length > 0) {
      this.noTableDataFlag = true;
    } else {
      this.noTableDataFlag = false;
    }
    if (!this.tableConfig) {
      console.error(LABELS.noDataError)
    }
  }
}
