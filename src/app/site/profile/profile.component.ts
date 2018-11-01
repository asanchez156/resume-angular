import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @Input() fullName: string;
  @Input() year: string;
  @Input() country: string;
  @Input() city: string;

  constructor() { }

  ngOnInit() {
  }

}
