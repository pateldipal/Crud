import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employee: any;

  constructor() { }

  // tslint:disable-next-line:typedef ban-types
  onGetEmployee(id: Number){
      return this.employee.find(x => x.id === id);
  }
}
