import { Component } from '@angular/core'

@Component({
    selector: 'feed-component',
    template: require('../../jade/_feed.component.jade'),
    styles: [ require('../../sass/components/_feed.component.sass') ]
})
export class FeedComponent {}