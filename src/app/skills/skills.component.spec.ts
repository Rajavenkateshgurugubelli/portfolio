import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SkillsComponent } from './skills.component';

describe('SkillsComponent', () => {
  let fixture: ComponentFixture<SkillsComponent>;
  let component: SkillsComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should select skill on card click and render detail section', () => {
    const cards = fixture.debugElement.queryAll(By.css('.skill-card'));
    cards[0].nativeElement.click();
    fixture.detectChanges();

    expect(component.selectedSkill).toEqual(component.skills[0]);
    const detail = fixture.nativeElement.querySelector('.skill-detail');
    expect(detail).toBeTruthy();
  });

  it('should clear selected skill when close button clicked', () => {
    const cards = fixture.debugElement.queryAll(By.css('.skill-card'));
    cards[0].nativeElement.click();
    fixture.detectChanges();

    const closeBtn = fixture.nativeElement.querySelector('.close-btn');
    closeBtn.click();
    fixture.detectChanges();

    expect(component.selectedSkill).toBeNull();
    const detail = fixture.nativeElement.querySelector('.skill-detail');
    expect(detail).toBeNull();
  });
});

