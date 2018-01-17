// IMPORTANT: this is a plugin which requires jQuery for initialisation and data manipulation

import {Component, OnInit, AfterViewInit, Inject} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute, Router} from "@angular/router";
import {HomeService} from "../home/home.service";
import {ErrorStateMatcher, MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material";
import {NgForm, FormControl, Validators, FormGroupDirective} from "@angular/forms";
import {SimpleGlobal} from 'ng2-simple-global';
import { DataService } from '../data.service';
declare interface DataTable {
    headerRow: string[];
    footerRow: string[];
    dataRows: string[][];
}

declare const $: any;

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
    selector: 'app-data-table-cmp',
    templateUrl: 'products.component.html'
})

export class ProductsComponent implements OnInit, AfterViewInit {
    public dataTable: DataTable;
    private sub: Subscription;
    private zip: any;
    public products: any;

    constructor (private route:ActivatedRoute,private sg: SimpleGlobal, private obj: HomeService, private router: Router, private dialog: MatDialog,private data:DataService) {}

    ngOnInit() {
        this.data.currentProducts.subscribe(products => this.sg['products']  = products)

       // alert("i am here")
        this.sub = this.route.params.subscribe(params => {
            this.zip = +params['zipCode'];
            this.sg['product_zipcode']=this.zip;
            
            this.obj.searchProducts(this.zip).subscribe(response => {
                localStorage.setItem('products',response['Results']);
                
                this.sg['products'] = response['Results'];
                console.log(this.sg['products']);
                
                    this.data.changeProducts(this.sg['products']);
                    console.log(this.sg['products']);
                }
            );
        });

        this.dataTable = {
            headerRow: [ 'Name', 'Position', 'Office', 'Age', 'Date', 'Actions' ],
            footerRow: [ 'Name', 'Position', 'Office', 'Age', 'Start Date', 'Actions' ],

            dataRows: [
                ['Airi Satou', 'Andrew Mike', 'Develop', '2013', '99,225', ''],
                ['Angelica Ramos', 'John Doe', 'Design', '2012', '89,241', 'btn-round'],
                ['Ashton Cox', 'Alex Mike', 'Design', '2010', '92,144', 'btn-simple'],
                ['Bradley Greer', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Brenden Wagner', 'Paul Dickens', 'Communication', '2015', '69,201', ''],
                ['Brielle Williamson', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Caesar Vance', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Cedric Kelly', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Charde Marshall', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Colleen Hurst', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Dai Rios', 'Andrew Mike', 'Develop', '2013', '99,225', ''],
                ['Doris Wilder', 'John Doe', 'Design', '2012', '89,241', 'btn-round'],
                ['Fiona Green', 'Alex Mike', 'Design', '2010', '92,144', 'btn-simple'],
                ['Garrett Winters', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Gavin Cortez', 'Paul Dickens', 'Communication', '2015', '69,201', ''],
                ['Gavin Joyce', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Gloria Little', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Haley Kennedy', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Herrod Chandler', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Hope Fuentes', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Howard Hatfield', 'Andrew Mike', 'Develop', '2013', '99,225', ''],
                ['Jena Gaines', 'John Doe', 'Design', '2012', '89,241', 'btn-round'],
                ['Jenette Caldwell', 'Alex Mike', 'Design', '2010', '92,144', 'btn-simple'],
                ['Jennifer Chang', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Martena Mccray', 'Paul Dickens', 'Communication', '2015', '69,201', ''],
                ['Michael Silva', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Michelle House', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Paul Byrd', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Prescott Bartlett', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Quinn Flynn', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Rhona Davidson', 'Andrew Mike', 'Develop', '2013', '99,225', ''],
                ['Shou Itou', 'John Doe', 'Design', '2012', '89,241', 'btn-round'],
                ['Sonya Frost', 'Alex Mike', 'Design', '2010', '92,144', 'btn-simple'],
                ['Suki Burks', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Tatyana Fitzpatrick', 'Paul Dickens', 'Communication', '2015', '69,201', ''],
                ['Tiger Nixon', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Timothy Mooney', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Unity Butler', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Vivian Harrell', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Yuri Berry', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round']
            ]
        };

    }

    ngAfterViewInit() {
        $('#datatables').DataTable({
            'pagingType': 'full_numbers',
            'lengthMenu': [[10, 25, 50, -1], [10, 25, 50, 'All']],
            responsive: true,
            language: {
                search: '_INPUT_',
                searchPlaceholder: 'Search records',
            }

        });

        const table = $('#datatables').DataTable();

        // Edit record
        table.on( 'click', '.edit', function () {
            const $tr = $(this).closest('tr');

            const data = table.row($tr).data();
            alert( 'You press on Row: ' + data[0] + ' ' + data[1] + ' ' + data[2] + '\'s row.' );
        } );

        // Delete a record
        table.on( 'click', '.remove', function (e: any) {
            const $tr = $(this).closest('tr');
            table.row($tr).remove().draw();
            e.preventDefault();
        } );

        // Like record
        table.on( 'click', '.like', function () {
            alert('You clicked on Like button');
        });
    }

    openDialog(pID): void {
        let dialogRef = this.dialog.open(PremiseDialog, {
            // width: '300px',
            data: { productID: pID, zip: this.zip }
        });

        dialogRef.afterClosed().subscribe(result => {
        });
    }

}

@Component({
    selector: 'premise-dialog',
    templateUrl: 'premise-dialog.html',
})

export class PremiseDialog {
    product_id;
    premiseID;
   // premise_id ='';
    //zipCode;
    digitsOnly = '^[0-9,-]+$';

    constructor(
        public dialogRef: MatDialogRef<PremiseDialog>,
        @Inject(MAT_DIALOG_DATA) public data: any, private router: Router)
    {
        this.product_id = data.productID;
        //this.zipCode = data.zip;
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    signUp(f: NgForm) {
        this.router.navigate(['/signup/'+this.product_id]);
        this.dialogRef.close();
    }

}
