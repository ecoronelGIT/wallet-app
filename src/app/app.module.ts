import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CardCarouselComponent } from './home/card-carousel/card-carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ActionsComponent } from './home/actions/actions.component';
import { BottomNavigationComponent } from './bottom-navigation/bottom-navigation.component';
import { TransactionsComponent } from './home/transactions/view/transactions.component';
import { TransactionsService } from './home/transactions/service/transactions.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardCarouselComponent,
    ActionsComponent,
    BottomNavigationComponent,
    TransactionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    TransactionsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
