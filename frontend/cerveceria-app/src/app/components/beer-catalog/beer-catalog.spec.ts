import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerCatalog } from './beer-catalog';

describe('BeerCatalog', () => {
  let component: BeerCatalog;
  let fixture: ComponentFixture<BeerCatalog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeerCatalog],
    }).compileComponents();

    fixture = TestBed.createComponent(BeerCatalog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
