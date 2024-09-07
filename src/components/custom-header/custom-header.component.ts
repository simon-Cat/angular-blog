import { Component } from "@angular/core";
import { Navigation } from "../navigation/navigation.component";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'custom-header',
  standalone: true,
  templateUrl: './custom-header.component.html',
  styleUrl: './custom-header.component.css',
  imports: [ Navigation, RouterLink ]
})

export class CustomHeader {}