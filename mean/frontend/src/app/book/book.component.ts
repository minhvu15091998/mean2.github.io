import { Component, OnInit } from '@angular/core';

import {BookServiceService} from '../book-model/book-service.service'
import { NgForm } from '@angular/forms';
import { BookModel } from '../book-model/book-model.model';



@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  providers: [BookServiceService]
})
export class BookComponent implements OnInit {

  constructor(private bookService: BookServiceService) { }

  private books : BookModel[];
  ngOnInit() {
    this.resetForm();
    this.refreshBookList();
    this.books = this.bookService.findAll();
    
    
  }
  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.bookService.selectedBook = {  
      _id: "",
      tenSach: "",
      tacGia: "",
      giaBan: "",
     imgSach: ""
    }
  }
  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.bookService.postBooks(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshBookList();
      console.log('Saved successfully');
      });
    }
    else {
      this.bookService.putBook(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshBookList();
        console.log('Updated successfully');
    })
  }
}
  refreshBookList() {
    this.bookService.getBookList().subscribe((res) => {
      this.bookService.books = res as BookModel[];
    });
  }
  onEdit(book: BookModel) {
    this.bookService.selectedBook = book;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.bookService.deleteBook(_id).subscribe((res) => {
        this.refreshBookList();
        this.resetForm(form);
        console.log('Deleted successfully');
      });
    }
  }
}
