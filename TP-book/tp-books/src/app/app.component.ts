import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookFormComponent } from './book-form/book-form.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookContainerComponent } from './book-container/book-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, BookFormComponent, BookListComponent,BookContainerComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tp-books';
}
