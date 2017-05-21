import {Component} from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';


@Component({
  selector: 'document_add',
  templateUrl: './document_add.html',
})
export class DocumentAddButton {
  selectedOption: string;

  constructor(public dialog: MdDialog) {}

  openDialog() {
    let dialogRef = this.dialog.open(DocumentAddDialog);
    dialogRef.afterClosed().subscribe(result => {
      this.selectedOption = result;
    });
  }
}


@Component({
  selector: 'document_add_content',
  templateUrl: './document_add_content.html',
  styleUrls: ['./document_add.css']
})
export class DocumentAddDialog {
  constructor(public dialogRef: MdDialogRef<DocumentAddDialog>) {}
}
