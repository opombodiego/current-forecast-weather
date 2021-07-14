import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'condition-slug',
  templateUrl: './condition-slug.component.html',
  styleUrls: ['./condition-slug.component.scss']
})

export class ConditionSlugComponent implements OnInit {

  @Input() condition: any;

  constructor() { }

  ngOnInit() {
  }

}
