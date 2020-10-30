import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { MinhacarteiraComponent } from './minhacarteira/minhacarteira.component';
import { MinhacarteiraService } from './minhacarteira/minhacarteira.service';
import { BitcoinComponent } from './bitcoin/bitcoin.component';
import { BitcoinService } from './bitcoin/bitcoin.service';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    
   

   
       
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'bitcoin', component: BitcoinComponent},
      {path: 'minhacarteira', component: MinhacarteiraComponent},
      
            
    ])
  ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, BitcoinComponent, MinhacarteiraComponent ],
  bootstrap:    [ AppComponent ],
  providers: [BitcoinService, MinhacarteiraService],
 
})
export class AppModule { }
