import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loading-container',
  templateUrl: './loading-container.component.html',
  styleUrls: ['./loading-container.component.scss']
})
export class LoadingContainerComponent implements OnInit {

  @Input() loading = true;

  constructor() { }

  ngOnInit() {
  }

}
