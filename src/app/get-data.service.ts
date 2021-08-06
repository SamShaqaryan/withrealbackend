import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Post {
  id: number;
  post_id: number;
  title: string;
  content: string;
}

@Injectable({
  providedIn: 'root',
})
export class GetDataService {
  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get<{ data: any }>('http://127.0.0.1:8000/api/posts');
  }

  addPost(post: any) {
    return this.http.post('http://127.0.0.1:8000/api/posts', post);
  }
  deletePost(postId: any) {
    return this.http.delete('http://127.0.0.1:8000/api/posts/' + postId);
  }

  updatePost(post: any) {
    return this.http.patch('http://127.0.0.1:8000/api/posts/' + post.id, post);
  }
}
