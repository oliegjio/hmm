import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule, Routes } from '@angular/router'

import { ApplicationComponent } from './components/application.component'
import { HeaderComponent } from './components/header.component'
import { ProfileComponent } from './components/profile.component'
import { FeedComponent } from './components/feed.component'
import { NavigationMenuComponent } from './components/navigation-menu.component'
import { PostComponent } from './components/post.component'
import { LikeButtonComponent } from './components/like-button.component'

const applicationRoutes: Routes = [
    {
        path: 'profile',
        component: ProfileComponent
    },
    {
        path: '',
        component: FeedComponent
    },
    {
        path: '**',
        component: FeedComponent
    }
]

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(applicationRoutes)
    ],
    declarations: [
        ApplicationComponent,
        HeaderComponent,
        ProfileComponent,
        FeedComponent,
        NavigationMenuComponent,
        PostComponent,
        LikeButtonComponent
    ],
    bootstrap: [ ApplicationComponent ]
})
export class ApplicationModule {}