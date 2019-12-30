import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UploadService {
  
  constructor(private http: HttpClient) {}

  private uploadUrl = 'http://localhost:9000/batch/api/v1/attachment';

  upload(form: FormData) {
   return this.http.post(this.uploadUrl, form)
  }
  
}
