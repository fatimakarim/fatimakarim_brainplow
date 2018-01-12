import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';
import { RouterModule} from '@angular/router';
import { AppComponent } from './app.component';


import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactUsComponent,
    AboutUsComponent,
    

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'about-us',
        component:AboutUsComponent

      },
     
      {
        path: 'contact-us',
        component:ContactUsComponent
      },
     
      {
        path: 'home',
        component:HomeComponent
      },
      {
        path: '',
        component:HomeComponent
      },
    ])
  ],
  
  providers: [ ],
  bootstrap : [AppComponent]
})

export class AppModule{}

