import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StoreComponent } from "./components/store/store.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StoreComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'data-pipelines-deployments';
}
