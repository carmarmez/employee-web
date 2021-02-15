import { Component, OnInit } from '@angular/core';
import { EmployeeService, Employee } from '../employee.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  employees: Employee[];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['name', 'role', 'annualSalary'];

  searchEmployees(employeeId: string) {
    this.employeeService.getEmployees(employeeId)
      .subscribe(employees => (this.employees = employees));
  }
}
