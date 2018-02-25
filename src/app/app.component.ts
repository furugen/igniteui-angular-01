import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'サンプル';

  onClickMenu() {
    console.log('MenuClicked');
  }
}
