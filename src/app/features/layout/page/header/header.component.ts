import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <div class="navbar">
    <!-- Conteúdo da navbar -->
    <p>Navbar Content</p>
  </div>
`,
styles: [`
  .navbar {
    height: 60px;
    background-color: #333;
    color: #fff;
    padding: 10px;
  }
`]
})
export class HeaderComponent {

}
