import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { UserPosts } from 'src/interfaces/posts.interface';
import { PostsService } from './posts.service';

const mockData: UserPosts = [
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

describe('PostsService', () => {
  let service: PostsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostsService],
    }).compile();

    service = module.get<PostsService>(PostsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return posts all posts', () => {
    const result = service.getAll();
    expect(result).toStrictEqual(mockData);
  });

  it('should return single post', () => {
    const post_id = mockData[0].id;
    const result = service.findOne(post_id);
    expect(result).toStrictEqual(mockData[0]);
  });

  it('should return posts of a user', () => {
    const user_id = 1;
    const result = service.findByUserId(user_id);
    expect(result).toStrictEqual(mockData);
  });

  it('should return error for invalid user', () => {
    try {
      service.findByUserId(99)
      expect(false).toBe(true);
    } catch (error) {
      expect(error).toBeInstanceOf(NotFoundException)
    }
  });

  it('should create a new post', () => {
    const new_post_id = service.create({
      title: "new post title",
      body: "new post body",
      userId: 2,
    });
    const newPost = service.findOne(new_post_id);
    expect(newPost).toStrictEqual({
      title: "new post title",
      body: "new post body",
      userId: 2,
      id: new_post_id
    });
  });

  it('should delete a single post', () => {
    const post_id = mockData[0].id;
    try {
      service.delete(post_id);
      service.findOne(post_id);
      expect(false).toBe(true);
    } catch (error) {
      expect(error).toBeInstanceOf(NotFoundException)
    }
  });

  it('should not delete a already deleted post', () => {
    const post_id = mockData[0].id;
    try {
      service.delete(post_id); // deleting 
      service.delete(post_id); // deleting again
      expect(false).toBe(true);
    } catch (error) {
      expect(error).toBeInstanceOf(NotFoundException)
    }
  });

  it('should update a single post', () => {
    const post = mockData[1];
    service.update(post.id, {
      body: "updated",
      userId: 3,
      title: 'updated',
    });
    const updatedPost = service.findOne(post.id);
    expect(updatedPost).toStrictEqual({
      id: post.id,
      body: "updated",
      userId: 3,
      title: 'updated',
    });
  });

  it('should not update a already deleted or missing post', () => {
    const post = mockData[0];
    try {
      service.delete(post.id);
      service.update(post.id, {
        body: "updated",
        userId: 3,
        title: 'updated',
      });
      expect(false).toBe(true);
    } catch (error) {
      expect(error).toBeInstanceOf(NotFoundException)
    }
  });


});
