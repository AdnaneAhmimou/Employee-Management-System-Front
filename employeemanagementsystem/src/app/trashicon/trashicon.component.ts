import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-trash-icon',
  templateUrl: './trashicon.component.html',
  styleUrls: ['./trashicon.component.css']
})
export class TrashIconComponent {
  @Input() className!: string;
}
