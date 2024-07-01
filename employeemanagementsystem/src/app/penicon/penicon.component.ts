import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pen-icon',
  templateUrl: './penicon.component.html',
  styleUrls: ['./penicon.component.css']
})
export class PenIconComponent {
  @Input() className!: string;
}
