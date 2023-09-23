import { Controller, Get } from '@nestjs/common';
import { BlogService } from './blog.service';
import { Post } from './interfaces/post.interface';

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Get()
  findAll(): Post[] {
    return this.blogService.findAll();
  }
}

