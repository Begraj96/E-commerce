import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { ChildUserComponent } from './components/child-user/child-user.component';
import { DesignutilityService } from './appService/designutility.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ChildUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DesignutilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
