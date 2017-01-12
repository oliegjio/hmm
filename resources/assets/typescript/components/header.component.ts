import { Component } from '@angular/core'

import { Meta } from '../meta'

@Component({
    selector: 'header-component',
    template: `
        <div class="header row center-xs">
            <div class="header__offset row">
                <div class="col-xs-3 row start-xs middle-xs">
                    <img class="header__logo" src="images/logo.png" alt="${ Meta.logoText }" />
                </div>
                <div class="col-xs-6 row start-xs middle-xs">
                    <i class="header__search-icon fa fa-search" aria-hidden="true"></i>
                    <input type="text" class="header__search-bar" placeholder="Search...">
                </div>
                <div class="col-xs-3 row start-xs">
                    
                </div>
            </div>
        </div>
    `,
    styles: [`
        .header {
            background-color: #${ Meta.primaryColor };
            height: 60px;
            width: 100%;
            margin: 0 !important;
        }
        .header__offset {
            height: 100%;
            width: ${ Meta.mainColumnWidth }px;
        }
        .header__logo {
            height: 18px;
        }
        .header__search-icon {
            font-size: 23px;
            color: white;
        }
        .header__search-bar {
            border: none;
            border-radius: 100px;
            height: 35px;
            margin-left: 15px;
            color: white;
            padding-left: 15px;
            background-color: #${ Meta.primaryColorLight };
        }
        .header__search-bar::-webkit-input-placeholder {
            color: white;
        }
        .header__search-bar:focus {
            background-color: white;
            color: #${ Meta.primaryColor };
            outline: none;
        }
    `]
})
export class HeaderComponent {

    public componentName: string = 'HeaderComponent'

}