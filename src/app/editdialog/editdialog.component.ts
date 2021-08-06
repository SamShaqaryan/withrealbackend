import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-editdialog',
  templateUrl: './editdialog.component.html',
  styleUrls: ['./editdialog.component.scss'],
})
export class EditdialogComponent implements OnInit {
  public formGroup!: FormGroup;
  constructor(
    private dialogRef: MatDialogRef<EditdialogComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.formGroup = this.formBuilder.group({
      id:[this.data.id],
      user_id: [this.data.user_id],
      title: [this.data.title, Validators.required],
      content: [this.data.content, Validators.required],
    });
  }

  ngOnInit(): void {}
  submit() {
    this.dialogRef.close(this.formGroup.value);
  }
}
