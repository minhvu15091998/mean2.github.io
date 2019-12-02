import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { BookModel } from './book-model.model';



@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  selectedBook: BookModel;
  books: BookModel[];
  giaBan: string;
  readonly baseUrl = 'http://localhost:3000/books';

  constructor(private _http: HttpClient) {
    this.getBookList;
  }

  findAll(): BookModel[] {
    return this.books;
  }

  find(_id: string): BookModel{
    return this.books[this.getSelectedIndex(_id)];
  }

  private getSelectedIndex(id: string) {
    for (var i = 0; i < this.books.length; i++) {
        if (this.books[i]._id == id) {
            return i;
        }
    }
    return -1;
}


  postBooks(book: BookModel){
    return this._http.post(this.baseUrl, book);
  }

  getBookList() {
    return this._http.get(this.baseUrl);
  }

  putBook(book: BookModel){
    return this._http.put (this.baseUrl + `/${book._id}`, book);
  }

  deleteBook(_id: string) {
    return this._http.delete(this.baseUrl + `/${_id}`);
  }
  
}
