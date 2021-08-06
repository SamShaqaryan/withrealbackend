import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreatedialogComponent } from '../createdialog/createdialog.component';
import { DeletedialogComponent } from '../deletedialog/deletedialog.component';
import { EditdialogComponent } from '../editdialog/editdialog.component';
import { GetDataService, Post } from '../get-data.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  posts: any = [];
  selectedPost!: Post;

  constructor(
    private GetDataService: GetDataService,
    public dialog: MatDialog
  ) {
    this.getAll();
  }

  getAll() {
    this.GetDataService.getPosts()
    
      .subscribe((response) => {
        this.posts = response.data;
      });
  }
  openCreateDialog() {
    this.dialog
      .open(CreatedialogComponent)
      .afterClosed()
      .subscribe((result) => {
        if (result) {
          this.GetDataService.addPost(result).subscribe((res) => {
            this.getAll();
          });
        }
      });
  }
  openDeleteDialog() {
    this.dialog
      .open(DeletedialogComponent)
      .afterClosed()
      .subscribe((result) => {
        if (result)
          this.GetDataService.deletePost(this.selectedPost.id).subscribe(
            (res) => {
              this.getAll();
            }
          );
      });
  }

  openEditDialog() {
    this.dialog
      .open(EditdialogComponent, {
        data: this.selectedPost,
        disableClose: false,
      })
      .afterClosed()
      .subscribe((result) => {
        if (result) {
          console.log(result, 'resul');
          this.GetDataService.updatePost(result).subscribe((res) => {
            this.getAll();
          });
        }
      });
  }

  ngOnInit(): void {}
}
