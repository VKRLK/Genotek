import { Component} from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.scss'],
})
export class TableComponentComponent {
  constructor(private http: HttpService) {}
  visibleNames = [];
  displayedColumns: string[] = ['id', 'firstName', 'lastName'];
  activePage = 1;

  changePage(): any {
    this.requestNames(this.activePage, 3);
  }

  requestNames(pageNumber, limit): any {
    this.http.getNames(pageNumber).subscribe((res) => {
      this.visibleNames = res.data;
      console.log(this.visibleNames);
    });
  }

  prevPage() {
    if (this.activePage !== 1) {
      this.activePage -= 1;
    }
    this.changePage()
  }
  nextPage() {
    if (this.activePage !== 3) {
      this.activePage += 1;
    }
    this.changePage()
  }

  moveTo(targetPage) {
    this.activePage = targetPage;
    this.changePage()
  }
  
  ngOnInit(): void {
    this.changePage()
  }
}
