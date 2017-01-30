import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule, Routes } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

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

import 'rxjs'
import { NgRedux, NgReduxModule } from 'ng2-redux'
import * as reduxLogger from 'redux-logger'

import rootReducer from './reducers/root.reducer'

interface IApplicationState {}

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        NgReduxModule,
        HttpModule,
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
export class ApplicationModule {

    constructor(ngRedux: NgRedux<IApplicationState>) {

        let logger = reduxLogger();

        ngRedux.configureStore(rootReducer, {}, [ logger ]);

    }

}