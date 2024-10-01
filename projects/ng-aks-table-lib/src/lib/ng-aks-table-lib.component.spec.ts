import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgAksTableLibComponent } from './ng-aks-table-lib.component';

describe('NgAksTableLibComponent', () => {
  let component: NgAksTableLibComponent;
  let fixture: ComponentFixture<NgAksTableLibComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgAksTableLibComponent]
    });
    fixture = TestBed.createComponent(NgAksTableLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
