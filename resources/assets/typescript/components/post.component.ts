import { Component } from '@angular/core'

@Component({
    selector: 'post-component',
    template: require('../../pug/components/_post.component.pug'),
    styles: [ require('../../sass/components/_post.component.sass') ]
})
export class PostComponent {}