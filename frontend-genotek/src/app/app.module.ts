import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponentComponent } from './components/table-component/table-component.component';
import {FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table'
@NgModule({
  declarations: [
    AppComponent,
    TableComponentComponent
  ],
  imports: [HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    MatTableModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
