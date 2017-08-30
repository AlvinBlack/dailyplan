import { Component, OnInit } from '@angular/core';

import { MemberService } from '../../member.service';

@Component({
  selector: 'member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss'],
  providers:[MemberService]
})
export class MemberListComponent implements OnInit {
  members;
  constructor(private memberService: MemberService) { }
  
  ngOnInit() {
    this.members = this.memberService.getMembers();
  }

}
