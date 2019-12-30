import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UploadService } from '../../service/upload.service';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  fileData: File = null;
  
  constructor(
    private http: HttpClient,
    private uploadService: UploadService
  ) { }

  ngOnInit() {
  }

 
  fileProgress(fileInput: any) {
      this.fileData = <File>fileInput.target.files[0];
  }
 
  onSubmit() {
      const formData = new FormData();
      formData.append('file', this.fileData);
      console.log('Hello');
      this.uploadService.upload(formData)
      .subscribe(
        res => {
        //console.log(res);
        alert('SUCCESS !!');
      })
  }

  uploadFile(event: any) {
    let files = event.target.files;
    //check if file is valid
    if (!this.validateFile(files[0].name)) {
      //console.log('Selected file format is not supported');
      alert("Selected file format is not supported")
      return false;
    }
    this.fileData = files[0];
  }

  validateFile(name: String) {
    var ext = name.substring(name.lastIndexOf('.') + 1);
    if (ext.toLowerCase() == 'xlsx' || ext.toLowerCase() == 'xls') {
      return true;
    }
    else {
      return false;
    }
  }
  


}
