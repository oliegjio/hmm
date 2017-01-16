import { Component } from '@angular/core'

@Component({
    selector: 'profile-information-component',
    template: require('../../jade/_profile-information.component.pug'),
    styles: [ require('../../sass/components/_profile-information.component.sass') ]
})
export class ProfileInformationComponent {}