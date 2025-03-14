import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigationbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigationbar.component.html',
  styleUrl: './navigationbar.component.css'
})
export class NavigationbarComponent {

  mobileMenuOpen = false;

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
}
