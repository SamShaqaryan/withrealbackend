import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-createdialog',
  templateUrl: './createdialog.component.html',
  styleUrls: ['./createdialog.component.scss']
})
export class CreatedialogComponent implements OnInit {
public formGroup!:FormGroup
  constructor(public dialogRef: MatDialogRef<CreatedialogComponent>, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.formGroup= this.formBuilder.group({
      post_id:[null,Validators.required],
      content:[null,Validators.required],
      title:[null, Validators.required]
    })
  }
  getForm(){
    console.log(this.formGroup.value, 'form')
    this.dialogRef.close(this.formGroup.value)
  }
}
