import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.scss']
})
export class SiteComponent implements OnInit {

  fullName = 'fullName';
  email = 'email';
  website = 'website';

  year = 'year';
  country = 'country';
  city = 'city';

  constructor() { }

  ngOnInit() {
  }

}
