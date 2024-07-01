import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './services/employee.service';

type Employee = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  position: string;
  department: string;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  employees: Employee[] = [];
  loading = true;
  error: string | null = null;

  newEmployee: Omit<Employee, 'id'> = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    position: '',
    department: ''
  };

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.fetchEmployees();
  }

  async fetchEmployees() {
    try {
      this.loading = true;
      this.error = null;
      this.employees = await this.employeeService.getEmployees();
    } catch (error) {
      this.error = 'Failed to fetch employees';
    } finally {
      this.loading = false;
    }
  }

  async addEmployee() {
    try {
      const addedEmployee = await this.employeeService.addEmployee(this.newEmployee);
      this.employees.push(addedEmployee);
      this.resetNewEmployee();
    } catch (error) {
      this.error = 'Failed to add employee';
    }
  }

  async deleteEmployee(id: string) {
    try {
      await this.employeeService.deleteEmployee(id);
      this.employees = this.employees.filter(employee => employee.id !== id);
    } catch (error) {
      this.error = 'Failed to delete employee';
    }
  }

  resetNewEmployee() {
    this.newEmployee = {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      position: '',
      department: ''
    };
  }
}
