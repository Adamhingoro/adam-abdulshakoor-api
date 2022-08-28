import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit {
  post_id_form_control = new FormControl('');
  constructor(private router: Router) { }

  MoveToPostsPage(){
    this.router.navigateByUrl(`/posts?post_id=${this.post_id_form_control.value}`);
  }
  ngOnInit(): void {
  }

}
