import { Component } from '@angular/core'

@Component({
    selector: 'header-component',
    template: require('../../jade/_header.component.jade'),
    styles: [ require('../../sass/components/_header.component.sass') ]
})
export class HeaderComponent {}