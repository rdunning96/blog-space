import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post.model';
import { BlogService } from '../../services/blog.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CustomOptionsModelResponsive } from '../../models/owl-options';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html'
})
export class BlogComponent implements OnInit {
  public posts$: Observable<Post[]>;
  customOptions: OwlOptions = CustomOptionsModelResponsive;

  items = [
    // { src: "./assets/images/portfolio/5.jpg", button: 'Details page', author:'Martin J.' },
    // { src: "./assets/images/portfolio/6.jpg", button: 'Details page', author:'App Design' },
    // { src: "./assets/images/portfolio/7.jpg", button: 'Details page', author:'Phone App' },
    // { src: "./assets/images/portfolio/8.jpg", button: 'Details page', author:'Gravity' },
    // { src: "./assets/images/portfolio/2.jpg", button: 'Details page', author:'Gravity' },
    // { src: "./assets/images/portfolio/1.jpg", button: 'Details page', author:'Gravity' },
  ]
  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.posts$ = this.blogService.getPosts();
  }
}

/*import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html'
})
export class BlogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


}*/
