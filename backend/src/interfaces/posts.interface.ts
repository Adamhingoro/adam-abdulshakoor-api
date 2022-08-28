export interface UserPostDTO extends NewPostDTO {
    id: number;
}

export interface NewPostDTO {
    userId: number;
    title: string;
    body: string;
}

export type UserPosts = UserPostDTO[];
export type UpdatePostDTO = NewPostDTO;