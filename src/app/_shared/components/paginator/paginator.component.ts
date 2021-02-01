import { Page } from './../../model/page.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  @Input() page: Page<Object>;

  @Output() changePage = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
    this.onChangePage(0);
  }

  arrayOne(n: number) {
    return Array(n);
  }

  onChangePage(pageNumber: number) {
    this.changePage.emit(pageNumber);
  }
}
