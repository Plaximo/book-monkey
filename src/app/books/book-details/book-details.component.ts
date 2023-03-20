import { Component } from '@angular/core';
import { Book } from '../../shared/book';
import { BookStoreService } from '../../shared/book-store.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'bm-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent {
  book?: Book;

  constructor(private route: ActivatedRoute, private bookService: BookStoreService) {
    const ibsn = this.route.snapshot.paramMap.get('isbn')!;
    this.book = this.bookService.getSingle(ibsn);
  }
}
