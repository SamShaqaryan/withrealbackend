import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoPrimeModule } from './shared/prime.module';
import { DemoMaterialModule } from './shared/mat.module';
import { TableComponent } from './table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { DeletedialogComponent } from './deletedialog/deletedialog.component';
import { CreatedialogComponent } from './createdialog/createdialog.component';
import { EditdialogComponent } from './editdialog/editdialog.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    DeletedialogComponent,
    CreatedialogComponent,
    EditdialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DemoPrimeModule,
    DemoMaterialModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
