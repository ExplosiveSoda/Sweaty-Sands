import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { SidenavComponent } from './container/sidenav/sidenav.component';
import { MapComponent } from './container/map/map.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './container/header/header.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { DonateComponent } from './container/donate/donate.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminContainerComponent } from './admin-container/admin-container.component';
import { TestContainerComponent } from './test-container/test-container.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    SidenavComponent,
    MapComponent,
    HeaderComponent,
    DonateComponent,
    AdminContainerComponent,
    TestContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LeafletModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    CollapseModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
