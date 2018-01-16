import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdModule } from '../md/md.module';
import { MaterialModule } from '../app.module';


import {ProductsComponent} from "./products.component";
import {ExtendedTableComponent} from "../tables/extendedtable/extendedtable.component";
import {RegularTableComponent} from "../tables/regulartable/regulartable.component";
import {ProductsRoutes} from './products.routing';
import {PremiseDialog} from './products.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ProductsRoutes),
        FormsModule,
        MdModule,
        MaterialModule
    ],
    declarations: [
        ProductsComponent,
        ExtendedTableComponent,
        RegularTableComponent,
        PremiseDialog
    ],
    entryComponents: [PremiseDialog]
})

export class ProductsModule {}
