import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete-button',
  templateUrl: './deletebutton.component.html',
  styleUrls: ['./deletebutton.component.css']
})
export class DeleteButtonComponent {
  @Output() onClick = new EventEmitter<void>();

  handleClick() {
    this.onClick.emit();
  }
}
