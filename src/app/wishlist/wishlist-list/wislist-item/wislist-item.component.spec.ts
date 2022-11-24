import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WislistItemComponent } from './wislist-item.component';

describe('WislistItemComponent', () => {
  let component: WislistItemComponent;
  let fixture: ComponentFixture<WislistItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WislistItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WislistItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
