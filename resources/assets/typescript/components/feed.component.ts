import { Component } from '@angular/core'

@Component({
    selector: 'feed-component',
    template: require('../../pug/components/_feed.component.pug'),
    styles: [ require('../../sass/components/_feed.component.sass') ]
})
export class FeedComponent {}