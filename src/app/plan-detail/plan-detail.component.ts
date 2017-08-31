import { Component, OnInit,Input,OnChanges } from '@angular/core';

import { MemberService } from '../member.service';
import { DayItems } from '../dayItems';

@Component({
  selector: 'plan-detail',
  templateUrl: './plan-detail.component.html',
  styleUrls: ['./plan-detail.component.scss']
})
export class PlanDetailComponent implements OnChanges {
  @Input()
  id:number;
  private dayItems:DayItems;
  constructor(private memberService: MemberService) { }
  ngOnChanges(changes) {
    this.dayItems = this.memberService.getItems(this.id)
    console.log(this.dayItems)
  }

}
