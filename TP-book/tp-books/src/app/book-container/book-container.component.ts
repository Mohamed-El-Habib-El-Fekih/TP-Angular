import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from './book';
import { BookListComponent } from '../book-list/book-list.component';
import { FormsModule } from '@angular/forms';
import { BookFormComponent } from '../book-form/book-form.component';
@Component({
  selector: 'app-book-container',
  standalone: true,
  imports: [CommonModule,BookListComponent,FormsModule,BookFormComponent],
  templateUrl: './book-container.component.html',
  styleUrls: ['./book-container.component.css']
})



export class BookContainerComponent {
  books: Book[] = [
    new Book(1, "Le Petit Prince", "Antoine de Saint-Exupéry", "publisher1@example.com", "12345678", "1943", "Roman", true),
    new Book(2, "Histoire de la science", "John Doe", "publisher2@example.com", "87654321", "2001", "Science", true),
    new Book(3, "Apprendre Angular", "Jane Smith", "publisher3@example.com", "55566677", "2022", "Informatique", true),
    new Book(4, "L\'Art de la Renaissance", "Leonardo Rossi", "publisher4@example.com", "44455566", "2015", "Art", true),
    new Book(5, "Les Grandes Batailles", "Pierre Martin", "publisher5@example.com", "22233344", "1999", "Histoire", true)
  ];
  deleteBook(id: number) {
    this.books = this.books.filter(b => b.id !== id);
  }
  bookToEdit: Book | null = null;

  addBook(newBook: Book) {
    this.books.push(newBook);
  }

  editBook(book: Book) {
    this.bookToEdit = { ...book };
  }

  updateBook(updatedBook: Book) {
    const index = this.books.findIndex(b => b.id === updatedBook.id);
    if (index !== -1) {
      this.books[index] = { ...updatedBook };
    }
    this.bookToEdit = null;
  }
  searchText: string = '';
  get filteredBooks(): Book[] {
  return this.books.filter(b =>
    b.title.toLowerCase().includes(this.searchText.toLowerCase()) ||
    b.author.toLowerCase().includes(this.searchText.toLowerCase())
  );
 }
  sortField: 'category' | 'isAvailable' | '' = '';

get sortedBooks(): Book[] {
  let books = [...this.filteredBooks];
  if (this.sortField) {
      books.sort((a, b) => {
        if (this.sortField === 'category') return a.category.localeCompare(b.category);
        if (this.sortField === 'isAvailable') return Number(b.isAvailable) - Number(a.isAvailable);
        return 0;
      });
    }
    return books;
  }
  get displayedBooks(): Book[] {
    let result = [...this.books];

    const q = this.searchText?.trim().toLowerCase();
    if (q) {
      result = result.filter(b =>
        (b.title ?? '').toLowerCase().includes(q) ||
        (b.author ?? '').toLowerCase().includes(q)
      );
    }

    if (this.sortField === 'category') {
      result.sort((a, b) => (a.category ?? '').localeCompare(b.category ?? ''));
    } else if (this.sortField === 'isAvailable') {
      result.sort((a, b) => Number(b.isAvailable) - Number(a.isAvailable));
    }

    return result;
  }
}
