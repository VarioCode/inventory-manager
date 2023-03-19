import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextConfirmDialogComponent } from './text-confirm-dialog.component';

describe('TextConfirmDialogComponent', () => {
  let component: TextConfirmDialogComponent;
  let fixture: ComponentFixture<TextConfirmDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextConfirmDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
