import { Injectable, NotFoundException } from '@nestjs/common';
import { PostsRepositoryInterface } from 'src/interfaces/posts-repository.interface';
import { NewPostDTO, UpdatePostDTO, UserPostDTO, UserPosts } from 'src/interfaces/posts.interface';

@Injectable()
export class PostsService implements PostsRepositoryInterface {

    private mockData: UserPosts = [
        {
          "userId": 1,
          "id": 1,
          "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
          "userId": 1,
          "id": 2,
          "title": "qui est esse",
          "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        },
        {
          "userId": 1,
          "id": 3,
          "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
          "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
        },
        {
          "userId": 1,
          "id": 4,
          "title": "eum et est occaecati",
          "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
        },
        {
          "userId": 1,
          "id": 5,
          "title": "nesciunt quas odio",
          "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
        },
        {
          "userId": 1,
          "id": 6,
          "title": "dolorem eum magni eos aperiam quia",
          "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
        },
        {
          "userId": 1,
          "id": 7,
          "title": "magnam facilis autem",
          "body": "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"
        },
        {
          "userId": 1,
          "id": 8,
          "title": "dolorem dolore est ipsam",
          "body": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
        },
        {
          "userId": 1,
          "id": 9,
          "title": "nesciunt iure omnis dolorem tempora et accusantium",
          "body": "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas"
        },
        {
          "userId": 1,
          "id": 10,
          "title": "optio molestias id quia eum",
          "body": "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"
        },
      ]

     findOne(post_id: number): UserPostDTO {
        const result = this.mockData.find((x) => {
            return x.id == post_id;
        });
        if(result == undefined) throw new NotFoundException("Unable to find post");
        return result;
    }

    findByUserId(user_id: number): UserPosts {
        const results = this.mockData.filter((x) => {
            return x.userId == user_id;
        });
        if(results.length == 0) throw new NotFoundException("Unable to find posts for the given user");
        return results;
    }

    getAll(): UserPosts {
        return this.mockData;
    }

    create(post: NewPostDTO): number {
        const newId = Math.max(...this.mockData.map(o => o.id)) + 1;
        this.mockData.push({id: newId, ...post});
        return newId;
    }

    update(post_id: number, post: UpdatePostDTO): number {
        const postIndex = this.mockData.findIndex((x) => ( x.id == post_id ));
        if(postIndex == -1) throw new NotFoundException("Unable to find post for update");
        this.mockData[postIndex] = { ...post , id: post_id };
        return post_id;
    }

    delete(post_id: number): number {
        const postIndex = this.mockData.findIndex((x) => ( x.id == post_id ));
        if(postIndex == -1) throw new NotFoundException("Unable to find post for deletion");
        this.mockData = this.mockData.filter((x) => {x.id != post_id});
        return post_id;
    }
}
