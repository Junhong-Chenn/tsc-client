import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringVillageComponent } from './spring-village.component';

describe('SpringVillageComponent', () => {
  let component: SpringVillageComponent;
  let fixture: ComponentFixture<SpringVillageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpringVillageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringVillageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
