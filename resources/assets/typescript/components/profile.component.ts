import { Component } from '@angular/core'

@Component({
    selector: 'profile-component',
    template: require('../../pug/components/_profile.component.pug'),
    styles: [ require('../../sass/components/_profile.component.sass') ]
})
export class ProfileComponent {}