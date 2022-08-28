import { Controller, Get, Param } from '@nestjs/common';
import { ApiParam, ApiResponse } from '@nestjs/swagger';
import { UserPost } from './dto/posts-dto';
import { UserPosts } from './interfaces/posts.interface';
import { PostsService } from './posts/posts.service';

@Controller('posts')
export class AppController {
  constructor(private readonly postsService: PostsService) {}

  
  @Get()
  @ApiResponse({ type:UserPost, isArray:true })
  getAll(): UserPost[] {
    return this.postsService.getAll();
  }

  @Get('/:id')
  @ApiParam({name: "id", type: "number"})
  @ApiResponse({ type:UserPost })
  getOne(@Param() params: { id: number }): UserPost {
    return this.postsService.findOne(params.id);
  }

  @Get('/user/:uid')
  @ApiParam({name: "uid", type: "number"})
  @ApiResponse({ type:UserPost, isArray:true })
  getByUser(@Param() params: { uid: number }): Array<UserPost>  {
    return this.postsService.findByUserId(params.uid);
  }
}
