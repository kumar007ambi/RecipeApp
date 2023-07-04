import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesDetailsComponent } from './recipes-details.component';

describe('RecipesDetailsComponent', () => {
  let component: RecipesDetailsComponent;
  let fixture: ComponentFixture<RecipesDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipesDetailsComponent]
    });
    fixture = TestBed.createComponent(RecipesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
