import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { Post } from '../interfaces/post.interface';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  arrPublicacion: Post[];

  constructor(private blogService: BlogService) {
    this.arrPublicacion = [];
  }

  ngOnInit(): void {
    this.arrPublicacion = this.blogService.getAllPost();
  }

}
