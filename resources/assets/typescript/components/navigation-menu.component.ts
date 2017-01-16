import { Component } from '@angular/core'

@Component({
    selector: 'navigation-menu-component',
    template: require('../../jade/_navigation-menu.component.pug'),
    styles: [ require('../../sass/components/_navigation-menu.component.sass') ]
})
export class NavigationMenuComponent {}