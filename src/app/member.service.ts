import { Injectable } from '@angular/core';

import { MEMBERS } from './members'
import { Member } from './member'
import { MockData} from './mock-data'
import { DayItems} from './dayItems' 

@Injectable()
export class MemberService {
  getMembers(): Member[] {
  return MEMBERS;
  }
  getItems(num):DayItems{
    return MockData[num-1]
  }
  constructor() { }
 
}
