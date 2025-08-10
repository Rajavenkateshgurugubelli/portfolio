import { ComponentFixture, TestBed } from '@angular/core/testing';
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

  it('should render a card for each skill', () => {
    const cards = fixture.nativeElement.querySelectorAll('.skill-card');
    const totalSkills = component.skillSections.reduce((sum, s) => sum + s.skills.length, 0);
    expect(cards.length).toBe(totalSkills);
  });
});

