import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { catchError} from 'rxjs/operators';

export interface Employee {
  name: string;
  roleName: string;
  annualSalary: number;
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employeesUrl = 'http://localhost:8080/employeestest/api/employees';

  constructor(private http: HttpClient) { }

  getEmployees(employeeId: string) {
    const options = employeeId ?
     { params: new HttpParams().set('employeeId', employeeId) } : {};

    return this.http.get<Employee[]>(this.employeesUrl, options);
  }
}
