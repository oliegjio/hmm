import { Component } from '@angular/core'

@Component({
    selector: 'like-button-component', 
    template: require('../../jade/_like-button.component.pug'),
    styles: [ require('../../sass/components/_like-button.component.sass') ]
})
export class LikeButtonComponent {}