import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-add-button',
  templateUrl: './addbutton.component.html',
  styleUrls: ['./addbutton.component.css']
})
export class AddButtonComponent {
  @Input() onClick!: () => void;
  buttonClasses: string = 'inline-flex items-center justify-center rounded-md bg-black px-4 py-4 text-white transition-colors hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2';
}