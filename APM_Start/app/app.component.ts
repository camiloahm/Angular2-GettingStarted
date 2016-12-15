import { Component } from '@angular/core';

import { ProductListComponent } from './products/product-list.component';

@Component({
    selector: 'pm-app',
    template: `
        <div>
        <h1>Angular2: {{pageTitle}}</h1>
        <pm-products></pm-products>
        </div>
    `
})
@Directives
export class AppComponent {
    pageTitle: string='Camilin Product'
 }
