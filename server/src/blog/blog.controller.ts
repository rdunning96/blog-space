// src/blog/blog.controller.ts
import { Controller, Get } from '@nestjs/common';

@Controller('blog')
export class BlogController {
  @Get()
  getAllPosts() {
    // Implement logic to fetch and return blog posts
  }
}
