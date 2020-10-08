import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EmployeeService} from '../service/employee.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() product: any = [];
  @Output() dataEvent = new EventEmitter<any>();
  id: number;
  private router: any;
  update: any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.product);
  }
  // tslint:disable-next-line:typedef
  onRemove() {
    if (confirm('Do you want to Delete this Record')){
      this.product.pop();
    }
  }
  // tslint:disable-next-line:typedef
  onEdit(data: any){
      this.update = true;
      this.dataEvent.emit({data : data, update: this.update});
  }
}
