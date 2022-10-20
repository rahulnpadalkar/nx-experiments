import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HttpClientModule } from '@angular/common/http';
import { CryptoPriceListComponent } from './crypto-price-list/crypto-price-list.component';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { TodosComponent } from './todos/todos.component';
import { ButtonModule } from 'primeng/button';
import { TodosService } from './todos.service';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    CryptoPriceListComponent,
    TodosComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    CardModule,
  ],
  providers: [TodosService],
  bootstrap: [AppComponent],
})
export class AppModule {}
