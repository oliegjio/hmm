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
    private name: string
    private password: string
    private signupUrl: string = '/api/signup'
    private signinUrl: string = '/api/signin'
    private data

    constructor(private http: Http) {}

    private signup(): Observable<any> {
        console.log(this.email, this.name, this.password)
        return this.http.post(this.signupUrl, {
            name: this.name,
            email: this.email,
            password: this.password
        })
            .map((response: Response) => response.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server Error'))
    }

    private signin() {
        console.log(this.email, this.name, this.password)
        return this.http.post(this.signupUrl, {
            name: this.name,
            email: this.email,
            password: this.password
        })
            .map((response: Response) => response.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server Error'))
    }

}
