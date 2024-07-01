import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'http://localhost:5029/api/employees';

  async getEmployees() {
    try {
      const response = await axios.get(this.apiUrl);
      return response.data;
    } catch (error) {
      console.error('Error fetching employees:', error);
      throw error;
    }
  }

  async addEmployee(employee: any) {
    try {
      const response = await axios.post(this.apiUrl, employee);
      return response.data;
    } catch (error) {
      console.error('Error adding employee:', error);
      throw error;
    }
  }

  async deleteEmployee(id: string) {
    try {
      const response = await axios.delete(`${this.apiUrl}/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting employee:', error);
      throw error;
    }
  }

  async getEmployeeById(id: string) {
    try {
      const response = await axios.get(`${this.apiUrl}/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching employee:', error);
      throw error;
    }
  }

  async updateEmployee(id: string, employee: any) {
    try {
      const response = await axios.put(`${this.apiUrl}/${id}`, employee);
      return response.data;
    } catch (error) {
      console.error('Error updating employee:', error);
      throw error;
    }
  }
}
