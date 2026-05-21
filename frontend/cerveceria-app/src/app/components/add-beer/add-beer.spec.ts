import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBeer } from './add-beer';

describe('AddBeer', () => {
  let component: AddBeer;
  let fixture: ComponentFixture<AddBeer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddBeer],
    }).compileComponents();

    fixture = TestBed.createComponent(AddBeer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
