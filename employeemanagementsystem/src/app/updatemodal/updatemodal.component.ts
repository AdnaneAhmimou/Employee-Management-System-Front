import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

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
  selector: 'app-update-modal',
  templateUrl: './updatemodal.component.html',
  styleUrls: ['./updatemodal.component.css']
})
export class UpdateModalComponent implements OnInit {
  @Input() employee: Employee | null = null;
  @Output() onClose = new EventEmitter<void>();
  @Output() onUpdate = new EventEmitter<Employee>();

  formData: Employee = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    position: '',
    department: ''
  };

  ngOnInit() {
    if (this.employee) {
      this.formData = { ...this.employee };
    }
  }

  handleChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const { name, value } = target;
    this.formData = { ...this.formData, [name]: value };
  }

  handleSubmit(event: Event) {
    event.preventDefault();
    this.onUpdate.emit(this.formData); 
  }

  closeModal() {
    this.onClose.emit(); 
  }
}
