import { Component } from '@angular/core'

@Component({
    selector: 'login-component',
    template: require('../../pug/components/_login.component.pug'),
    styles: [ require('../../sass/components/_login.component.sass') ]
})
export class LoginComponent {}