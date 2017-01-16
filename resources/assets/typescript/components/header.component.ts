import { Component } from '@angular/core'

@Component({
    selector: 'header-component',
    template: require('../../pug/components/_header.component.pug'),
    styles: [ require('../../sass/components/_header.component.sass') ]
})
export class HeaderComponent {}