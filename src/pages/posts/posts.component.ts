import { Component } from "@angular/core";
import { Post } from "../../../types/types";
import { posts } from "../../../utils/posts";
import { PostCard } from "../../components/post-card/post-card.component";

@Component({
  selector: 'blog',
  standalone: true,
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css',
  imports: [ PostCard ]
})

export class Posts {
  posts: Array<Post> = posts
}