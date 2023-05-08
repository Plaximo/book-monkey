import { Component } from '@angular/core';
import { Book } from '../../shared/book';
import { BookStoreService } from '../../shared/book-store.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'bm-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent {
  books$: Observable<Book[]>;

  constructor(private booksService: BookStoreService) {
    this.books$ = this.booksService.getAll();
  }
}
