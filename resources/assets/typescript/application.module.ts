import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule, Routes } from '@angular/router'

import { routing } from './application.routing'
import { ApplicationComponent } from './components/application.component'
import { HeaderComponent } from './components/header.component'
import { ProfileComponent } from './components/profile.component'
import { FeedComponent } from './components/feed.component'
import { NavigationMenuComponent } from './components/navigation-menu.component'
import { PostComponent } from './components/post.component'
import { LikeButtonComponent } from './components/like-button.component'
import { ProfileInformationComponent } from './components/profile-information.component'
import { LoginComponent } from './components/login.component'



@NgModule({
    imports: [
        BrowserModule,
        routing
    ],
    declarations: [
        ApplicationComponent,
        HeaderComponent,
        ProfileComponent,
        FeedComponent,
        NavigationMenuComponent,
        PostComponent,
        LikeButtonComponent,
        ProfileInformationComponent,
        LoginComponent
    ],
    bootstrap: [ ApplicationComponent ]
})
export class ApplicationModule {}