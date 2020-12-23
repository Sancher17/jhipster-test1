import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { JhipsterTest1SharedModule } from 'app/shared/shared.module';
import { JhipsterTest1CoreModule } from 'app/core/core.module';
import { JhipsterTest1AppRoutingModule } from './app-routing.module';
import { JhipsterTest1HomeModule } from './home/home.module';
import { JhipsterTest1EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    JhipsterTest1SharedModule,
    JhipsterTest1CoreModule,
    JhipsterTest1HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    JhipsterTest1EntityModule,
    JhipsterTest1AppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class JhipsterTest1AppModule {}
