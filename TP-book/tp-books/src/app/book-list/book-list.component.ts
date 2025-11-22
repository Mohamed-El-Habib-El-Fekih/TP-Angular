import { Component, Input,Output,EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Book} from '../book-container/book';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  @Input() tab:Book[]=[];
  @Output() edit = new EventEmitter<Book>();
  @Output() delete = new EventEmitter<number>();
  trackById(index: number, book: Book) {
    return book.id;
  }
   onEdit(book: Book) {
    this.edit.emit(book);
  }

  onDelete(id?: number) {
    if (id != null) this.delete.emit(id);
  }
}
