import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MyPageComponent } from './my-page/my-page.component';
import { MemberListComponent } from './members-display/member-list/member-list.component';
import { AppRoutingModule }     from './app-routing.module';
import { PerformanceComponent } from './performance/performance.component';
import { AppService } from './app.service';
import { MembersDisplayComponent } from './members-display/members-display.component';
import { PlanDetailComponent } from './plan-detail/plan-detail.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    MyPageComponent,
    MemberListComponent,
    PerformanceComponent,
    MembersDisplayComponent,
    PlanDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
