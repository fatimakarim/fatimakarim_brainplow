import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {ResidentialDialog2Component} from "./residential-dialog2/residential-dialog2.component";


/**
 * @title Dialog Overview
 */
@Component({
    selector: 'dialog-overview-example',
    templateUrl: 'residential.component.html'
})

export class DialogOverviewExample {

    name: string;

    constructor(public dialog: MatDialog) {}

    openDialog(): void {
        let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
            // width: '300px',
            //data: { name: this.name, animal: this.animal }
        });

        dialogRef.afterClosed().subscribe(result => {
            //console.log('The dialog was closed');
            //this.animal = result;
        });
    }
    openDialog2(): void {
        let dialogRef = this.dialog.open(ResidentialDialog2Component, {
           //width: '400px',
            //data: { name: this.name, animal: this.animal }
        });

        dialogRef.afterClosed().subscribe(result => {
            //console.log('The dialog was closed');
            //this.animal = result;
        });
    }

}

@Component({
    selector: 'dialog-overview-example-dialog',
    templateUrl: 'residential-dialog.html',
})

export class DialogOverviewExampleDialog {

    constructor(
        public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }

    onNoClick(): void {
        this.dialogRef.close();
    }

}
