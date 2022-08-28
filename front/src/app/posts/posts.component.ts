import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  post_id: any;
  post_title: any = "Loading...";
  post_data: any = "Loading...";



  constructor(  private route: ActivatedRoute,
    private apiService: ApiService,
    ) { }

    ngOnInit() {
      this.route.queryParams.subscribe(params => {
        this.post_id = params['post_id'];
        this.apiService.getPost(this.post_id).subscribe((post) => {
          this.post_title = post.title;
          this.post_data = post.body;
        },(error) => {
          this.post_title = "Error while fetching the post from the server";
          this.post_data = error.message;
        });
      });
    }

}
