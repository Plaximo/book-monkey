import { Component } from '@angular/core';
import { Book } from '../../shared/book';
import { BookStoreService } from '../../shared/book-store.service';
import { ActivatedRoute, Router } from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'bm-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent {

  book$: Observable<Book>;

  constructor(private bookService: BookStoreService, private route: ActivatedRoute, private router: Router) {
    const ibsn = this.route.snapshot.paramMap.get('isbn')!;
    this.book$ = this.bookService.getSingle(ibsn);
  }

  removeBook(isbn: string) {
    if (window.confirm('Remove book?'))
      this.bookService.remove(isbn).subscribe(() => this.router.navigateByUrl('/books'))
  }
}
