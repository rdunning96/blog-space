import { Injectable } from '@nestjs/common';
import { Post } from './interfaces/post.interface';

@Injectable()
export class BlogService {
  private readonly posts: Post[] = [
    // Sample posts
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl sed cursus rhoncus, nunc nulla ullamcorper sapien, eget aliquet ni',
    },
    {
      id: 2,
      title: 'Lorem ipsum dolor sit amet',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl sed cursus rhoncus, nunc nulla ullamcorper sapien, eget aliquet ni',
    },
    {
      id: 3,
      title: 'Lorem ipsum dolor sit amet',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl sed cursus rhoncus, nunc nulla ullamcorper sapien, eget aliquet ni',
    },
  ];

  findAll(): Post[] {
    return this.posts;
  }
}

