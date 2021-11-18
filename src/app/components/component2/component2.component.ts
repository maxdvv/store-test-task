import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.scss']
})
export class Component2Component implements OnInit {

  @Input() counter1: number | undefined
  @Input() counter2: number | undefined

  constructor() { }

  ngOnInit(): void {
  }

}
