import {Component} from '@angular/core';
import {debounceTime, distinctUntilChanged, filter, Observable, Subject, switchMap, tap} from 'rxjs';
import {BookStoreService} from '../shared/book-store.service';
import {Book} from '../shared/book';

@Component({
  selector: 'bm-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  input$ = new Subject<string>();
  results$: Observable<Book[]>;

  isLoading = false;

  constructor(private bookService: BookStoreService) {
    this.results$ = this.input$.pipe(
      filter(s => s.length >= 3),
      debounceTime(500),
      distinctUntilChanged(),
      tap(() => this.isLoading = true),
      switchMap(term => this.bookService.getAllSearch(term)),
      tap(() => this.isLoading = false)
    );
  }
}
