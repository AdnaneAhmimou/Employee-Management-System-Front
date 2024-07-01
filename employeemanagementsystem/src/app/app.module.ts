import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { TableHeaderComponent } from './table-header/table-header.component';
import { TableBodyComponent } from './table-body/table-body.component';
import { TableFooterComponent } from './table-footer/table-footer.component';
import { TableRowComponent } from './table-row/table-row.component';
import { TableHeadComponent } from './table-head/table-head.component';
import { TableCellComponent } from './table-cell/table-cell.component';
import { TableCaptionComponent } from './table-caption/table-caption.component';
import { InputComponent } from './input/input.component';
import { LabelComponent } from './label/label.component';
import { ButtonComponent } from './button/button.component';
import { AddButtonComponent } from './addbutton/addbutton.component';
import { PlusIconComponent  } from './plusicon/plusicon.component';
import { DeleteButtonComponent  } from './deletebutton/deletebutton.component';
import { TrashIconComponent } from './trashicon/trashicon.component';
import { UpdateButtonComponent } from './updatebutton/updatebutton.component';
import { PenIconComponent  } from './penicon/penicon.component';
import { UpdateModalComponent } from './updatemodal/updatemodal.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TableHeaderComponent,
    TableBodyComponent,
    TableFooterComponent,
    TableRowComponent,
    TableHeadComponent,
    TableCellComponent,
    TableCaptionComponent,
    InputComponent,
    LabelComponent,
    ButtonComponent,
    AddButtonComponent,
    PlusIconComponent,
    DeleteButtonComponent,
    TrashIconComponent,
    UpdateButtonComponent,
    PenIconComponent,
    UpdateModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
