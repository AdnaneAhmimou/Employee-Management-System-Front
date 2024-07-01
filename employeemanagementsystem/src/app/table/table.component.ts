import { Component, Input, Output, EventEmitter } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

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
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() employees: Employee[] = [];
  @Output() deleteEmployee = new EventEmitter<string>();

  selectedEmployee: Employee | null = null;
  showUpdateModal = false;

  constructor(private employeeService: EmployeeService) {}

  onDelete(id: string) {
    this.deleteEmployee.emit(id);
  }

  openUpdateModal(employee: Employee) {
    this.selectedEmployee = employee;
    this.showUpdateModal = true;
  }

  closeUpdateModal() {
    this.selectedEmployee = null;
    this.showUpdateModal = false;
  }

  async updateEmployee(employee: Employee) {
    try {
      await this.employeeService.updateEmployee(employee.id, employee);
      // Update the local employee list with the new data
      this.employees = this.employees.map(emp => emp.id === employee.id ? employee : emp);
      this.closeUpdateModal();
    } catch (error) {
      console.error('Error updating employee:', error);
    }
  }
}
