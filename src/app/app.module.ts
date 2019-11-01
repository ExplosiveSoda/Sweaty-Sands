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
import { AdminComponent } from './admin/admin.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AdminSidenavComponent } from './admin/admin-container/admin-sidenav/admin-sidenav.component';
import { AdminMapComponent } from './admin/admin-container/admin-map/admin-map.component';
import { AdminContainerComponent } from './admin/admin-container/admin-container.component';
import { LtmsComponent } from './container/sidenav/ltms/ltms.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    SidenavComponent,
    MapComponent,
    HeaderComponent,
    DonateComponent,
    AdminComponent,
    AdminSidenavComponent,
    AdminMapComponent,
    AdminComponent,
    AdminContainerComponent,
    LtmsComponent
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
