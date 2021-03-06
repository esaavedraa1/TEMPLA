import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../../app.component';

@Component({
    selector: 'page-with-minified-sidebar',
    templateUrl: './app/pages/page-options/page-with-minified-sidebar/page-with-minified-sidebar.html'
})

export class SidebarMinifiedPage implements OnInit {
    
    constructor(private app: AppComponent) {
        app.setPageSidebarMinified(true);
    }
    
    ngOnInit() {
        window.dispatchEvent(new CustomEvent('page-with-minified-sidebar-ready'));
    }
}