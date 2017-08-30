import { Component, OnInit,Input } from '@angular/core';

import { MemberService } from '../member.service';
import { DayItems } from '../dayItems';

@Component({
  selector: 'plan-detail',
  templateUrl: './plan-detail.component.html',
  styleUrls: ['./plan-detail.component.scss']
})
export class PlanDetailComponent implements OnInit {
  // @Input
  // id:number;
  // private dayItems:DayItems;
  // constructor(privete memberService: MemberService) { }
  ngOnInit() {
    // this.dayItems = this.memberService.getItems(id)
  }

}
