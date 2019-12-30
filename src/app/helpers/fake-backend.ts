import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpRequest } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { HttpEvent } from '@angular/common/http';


@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
   constructor() { }

   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      if (request.url.endsWith('/admin/list-ipo') && request.method === 'GET') {
         request = request.clone({
            url: '../../assets/json/ipos.json'
         });
      }

      if (request.url.endsWith('/admin/list-company') && request.method === 'GET') {
         request = request.clone({
            url: '../../assets/json/companies.json'
         });
      }

      if (request.url.endsWith('/users/register') && request.method === 'POST') {
         return ok({
            status: 200,
            body: request.body
         });
      }
      if (request.url.endsWith('/auth/login') && request.method === 'POST') {
         return ok({
            username: "12",
            password: "123133",
         });
      }

      if (request.url.endsWith('/admin/add-company') && request.method === 'POST') {
         return ok({
            status: 200,
            body: request.body
         });
      }

      if (request.url.endsWith('/admin/update-company') && request.method === 'POST') {
         return ok({
            status: 200,
            body: request.body
         });
      }

      if (request.url.endsWith('/admin/update-ipo') && request.method === 'POST') {
         return ok({
            status: 200,
            body: request.body
         });

      }
      //user update user
      if (request.url.endsWith('/users/update-user') && request.method === 'PUT') {
         return ok({
            status: 200,
            body: request.body
         });
      }
      //user manage ipo
      if (request.url.endsWith('/users/list-ipo') && request.method === 'GET') {
         request = request.clone({
            url: '../../assets/json/ipos.json'
         });
      }
      //user search company
      if (request.url.endsWith('/users/search-company') && request.method === 'GET') {
         request = request.clone({
            url: '../../assets/json/companies.json'
         });
      }

      return next.handle(request);

      function ok(body?) {
         return of(new HttpResponse({ status: 200, body }))
      }
   }

}

export let fakeBackendProvider = {
   // use fake backend in place of Http service for backend-less development
   provide: HTTP_INTERCEPTORS,
   useClass: FakeBackendInterceptor,
   multi: true
};