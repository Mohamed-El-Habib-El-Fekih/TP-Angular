import { Component,EventEmitter,Output,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from '../book-container/book';
import { NgForm,FormsModule } from '@angular/forms';


@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent {
  @Output() addBook = new EventEmitter<Book>();
  @Output() updateBook = new EventEmitter<Book>();
  @Input() bookToEdit: Book | null= null ;
  idCounter = 1;
  categories: string[] = ["Roman", "Science", "Histoire", "Informatique", "Art", "Autres"];
  kteb: Book={id: 0 ,title: '', author: '', publisherEmail: '',publisherPhone: '', releaseDate: '', category: '', isAvailable: false, stock: 0 };
  ngOnChanges() {
    if (this.bookToEdit)
      this.kteb = { ...this.bookToEdit };
  }
  isTitleValid(title: string): boolean {
    return isNaN(Number(title));
  }
  onSubmit(bookForm: NgForm) {
    if (!bookForm.valid || !this.isTitleValid(this.kteb.title)) 
      return;
    if (this.bookToEdit) {
      this.updateBook.emit({ ...this.kteb });
      this.bookToEdit = null;
      this.kteb = this.resetKteb();
      bookForm.resetForm(this.kteb);
    } else {
      const newBook = { ...this.kteb, id: this.idCounter++ };
      this.addBook.emit(newBook);
      this.kteb = this.resetKteb();
      bookForm.resetForm(this.kteb);
    }
  }
  resetKteb(): Book {
    return {
      id: 0,
      title: '',
      author: '',
      publisherEmail: '',
      publisherPhone: '',
      releaseDate: '',
      category: '',
      isAvailable: false,
      stock: 0
    };
  }
  get isEditMode() {
    return !!this.bookToEdit;
  }
      
}
