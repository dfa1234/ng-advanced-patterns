import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app.routing.module';
import {AboutComponent} from './about/about.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {CoreModule} from './core.module';
import {DesktopFrontpageComponent} from './frontpage/desktop/desktop-frontpage.component';
import {MobileFrontpageComponent} from './frontpage/mobile/mobile-frontpage.component';
import {AppHeaderComponent} from './app-header/app-header.component';
import {ProductComponentMobile} from './product/product.component.mobile';
import {ProductComponentDesktop} from './product/product.component.desktop';
import {UserProfileComponentDesktop} from './user-profile/user-profile.component.desktop';
import {UserProfileComponentMobile} from './user-profile/user-profile.component.mobile';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    UserProfileComponent,
    UserProfileComponentDesktop,
    UserProfileComponentMobile,
    ProductComponentDesktop,
    ProductComponentMobile,
    DesktopFrontpageComponent,
    MobileFrontpageComponent,
    AppHeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    AppRoutingModule
  ],
  entryComponents: [
    UserProfileComponent,
    MobileFrontpageComponent,
    ProductComponentMobile
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
