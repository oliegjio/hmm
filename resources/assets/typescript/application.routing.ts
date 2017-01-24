import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ProfileComponent } from './components/profile.component'
import { FeedComponent } from './components/feed.component'
import { LoginComponent } from './components/login.component'

const APPLICATION_ROUTES: Routes = [
    {
        path: 'profile',
        component: ProfileComponent
    },
    {
        path: 'feed',
        component: FeedComponent
    },
    {
        path: 'login',
        component: LoginComponent
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

export const routing: ModuleWithProviders = RouterModule.forRoot(APPLICATION_ROUTES);