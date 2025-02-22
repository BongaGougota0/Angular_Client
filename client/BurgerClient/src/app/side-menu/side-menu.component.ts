import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  template: `
  <div class="side">
      <a #sideMenu 
         [class.close-side]="!isMenuOpen"
         [class.on-side]="isMenuOpen"
         (click)="toggleMenu()">
        <i class="fa fa-times">Menu Here</i>
      </a>
      <div class="widget">
        <h6 class="title">Menu</h6>
        <ul class="link">
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Drinks</a></li>
          <li><a href="#">Burgers</a></li>
          <li><a href="#">Pizza</a></li>
          <li><a href="#">Beer</a></li>
        </ul>
      </div>
    </div>
  `,
  styleUrls: ['../header/header.component.css']
})
export class SideMenuComponent {
  @ViewChild('sideMenu') sideMenuElement!: ElementRef;
  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    console.log('Side menu is clicked!');
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event): void {
    if (this.isMenuOpen && !this.sideMenuElement.nativeElement.contains(event.target)) {
      this.isMenuOpen = false;
    }
  }
}
