import { Component, Input } from "@angular/core";
import { Post } from "../../../types/types";
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'post-card',
  standalone: true,
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.css',
  imports: [ MatCardModule ]
})

export class PostCard {
  @Input({ required: true }) postData: Post = {
    id: '',
    title: '',
    description: '',
    dateOfExist: '',
    image: ''
  }
}