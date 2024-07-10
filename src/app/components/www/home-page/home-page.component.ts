import { Component } from '@angular/core';
import { QuickSearchComponent } from "../../shared/quick-search/quick-search.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [QuickSearchComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
