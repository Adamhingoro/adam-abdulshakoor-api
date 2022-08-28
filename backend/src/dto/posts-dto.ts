import { ApiProperty } from "@nestjs/swagger";
import { UserPostDTO } from "src/interfaces/posts.interface";

export class UserPost implements UserPostDTO {
    @ApiProperty({
        description: "id of the post",
        default: 1,
        type: "number",
    })
    id: number;

    @ApiProperty({
        description: "id of the user who posted that post. poster-id ",
        default: 1,
        type: "number",
    })
    userId: number;

    @ApiProperty({
        description: "title of the post.",
        default: "a sunny day in cincinati",
        type: "string",
    })
    title: string;


    @ApiProperty({
        description: "contents or the body of the post.",
        default: "lorem dolar set amet....",
        type: "string",
    })
    body: string;
}