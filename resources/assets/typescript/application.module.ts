import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { ApplicationComponent } from './components/application.component'
import { HeaderComponent } from './components/header.component'

@NgModule({
    imports: [ BrowserModule ],
    declarations: [
        ApplicationComponent,
        HeaderComponent
    ],
    bootstrap: [ ApplicationComponent ]
})
export class ApplicationModule {}