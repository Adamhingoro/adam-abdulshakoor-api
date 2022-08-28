import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PostsService } from './posts/posts.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PostsService],
})
export class AppModule {}
