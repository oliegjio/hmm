import { Component } from '@angular/core'
import { ViewEncapsulation } from '@angular/core'

@Component({
    selector: 'application',
    template: require('../../jade/_application.component.pug'),
    encapsulation: ViewEncapsulation.None,
    styles: [ require('../../sass/components/_application.component.sass') ]
})
export class ApplicationComponent {}