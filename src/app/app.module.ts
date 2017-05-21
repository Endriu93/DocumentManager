import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MdButtonModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '@angular/material';
import {MdInputModule} from '@angular/material';
import {MdCardModule} from '@angular/material';
import {MdGridListModule} from '@angular/material';
import {MdDialogModule} from '@angular/material';
import {MdCheckboxModule} from '@angular/material';
import {MdSelectModule} from '@angular/material';
import { FormsModule } from '@angular/forms';

// import {hammerjs} from 'hammerjs';

import { AppComponent }  from './main/app.component';
import { SideNavComponent }  from './side-nav/app.side-nav.component';
import {DocumentsComponent} from './documents/documents.component';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {DocumentsSearchComponent} from './documents-search/documents-search.component';
import {ActivitiesComponent} from './activities/activities.component';
import {DocumentAddButton, DocumentAddDialog} from './add_document/document_add.component';
import {SelectCategoryComponent} from './add_document/select_category/select_category.component';

@NgModule({
  imports:      [ BrowserModule, MdButtonModule, BrowserAnimationsModule , MaterialModule, MdInputModule, MdCardModule, MdGridListModule,
    MdDialogModule, MdCheckboxModule, MdSelectModule, FormsModule ],
  declarations: [ AppComponent, SideNavComponent, DocumentsComponent, ToolbarComponent, DocumentsSearchComponent, ActivitiesComponent
    , DocumentAddButton, DocumentAddDialog, SelectCategoryComponent],
  bootstrap:    [ AppComponent, SideNavComponent ],
  entryComponents: [DocumentAddDialog]
})
export class AppModule { }
