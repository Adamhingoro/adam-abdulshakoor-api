import { NewPostDTO, UpdatePostDTO, UserPostDTO, UserPosts } from "./posts.interface";

export interface PostsRepositoryInterface{
    findOne(post_id: number): UserPostDTO;
    findByUserId(user_id: number): UserPosts;
    getAll(): UserPosts;
    create(post: NewPostDTO): number;
    update(post_id: number , post: UpdatePostDTO): number;
    delete(post_id: number): number;
}