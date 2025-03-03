import { Component } from '@angular/core';
import { RouterOutlet ,Router} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
  menuOpen: boolean = false;

  constructor(private router: Router) {}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  navigateTo(path: string) {
    this.router.navigate([path]); // 🔹 Navigate programmatically
    this.menuOpen = false; // 🔹 Close menu after navigation
  }
}
