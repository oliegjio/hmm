import { Component } from '@angular/core'
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Injectable } from '@angular/core'

import { Observable } from 'rxjs/Rx'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Component({
    selector: 'login-component',
    template: require('../../pug/components/_login.component.pug'),
    styles: [ require('../../sass/components/_login.component.sass') ]
})
export class LoginComponent {

    private email: string
    private password: string
    private authenticateUrl: string = 'api/authenticate'
    private data;

    constructor(private http: Http) {}

    private login(): Observable<any> {
        return this.http.post(this.authenticateUrl, {
            email: this.email,
            password: this.password
        })
            .map((response: Response) => response.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server Error'))
    }

    private toggleRegister() {
        console.log(this.data);
    }

}