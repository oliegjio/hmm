import { Component } from '@angular/core'
import { ViewEncapsulation } from '@angular/core'

@Component({
    selector: 'application',
    template: require('../../pug/components/_application.component.pug'),
    encapsulation: ViewEncapsulation.None,
    styles: [ require('../../sass/components/_application.component.sass') ]
})
export class ApplicationComponent {}