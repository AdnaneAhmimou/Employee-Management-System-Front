import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-update-button',
  templateUrl: './updatebutton.component.html',
  styleUrls: ['./updatebutton.component.css']
})
export class UpdateButtonComponent {
  @Output() onClick = new EventEmitter<void>();

  handleClick() {
    this.onClick.emit();
  }
}