import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../../app.component';

@Component({
    selector: 'page-with-light-sidebar',
    templateUrl: './app/pages/page-options/page-with-light-sidebar/page-with-light-sidebar.html'
})

export class LightSidebarPage implements OnInit {
    
    constructor(private app: AppComponent) {
        app.setPageLightSidebar(true);
    }
    
    ngOnInit() {
        window.dispatchEvent(new CustomEvent('page-with-light-sidebar-ready'));
    }
}