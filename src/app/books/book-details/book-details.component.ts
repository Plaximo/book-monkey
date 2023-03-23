import { Component } from '@angular/core';
import { Book } from '../../shared/book';
import { BookStoreService } from '../../shared/book-store.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'bm-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent {
  book?: Book;

  constructor(private bookService: BookStoreService, private route: ActivatedRoute, private router: Router) {
    const ibsn = this.route.snapshot.paramMap.get('isbn')!;
    this.bookService.getSingle(ibsn).subscribe(book => this.book = book);
  }

  removeBook(isbn: string) {
    if (window.confirm('Remove book?'))
      this.bookService.remove(isbn).subscribe(() => this.router.navigateByUrl('/books'))
  }
}
