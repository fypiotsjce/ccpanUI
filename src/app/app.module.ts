import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetStartedComponent } from './components/get-started/get-started/get-started.component';
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { AdminAuthService } from './services/auth/admin-auth/admin-auth.service';
import { AdminAuthComponent } from './components/auth/admin-auth/admin-auth.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//material imports
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MynetworksComponent } from './components/mynetworks/mynetworks.component';
import { DevicesComponent } from './components/devices/devices.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { UserloginComponent } from './components/auth/userlogin/userlogin.component';
import { CardsComponent } from './components/common/cards/cards.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AppComponent,
    //MainPageComponent,
    GetStartedComponent,
    HeaderComponent,
    FooterComponent,
    AdminAuthComponent,
    MynetworksComponent,
    DevicesComponent,
    AboutusComponent,
    UserloginComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
