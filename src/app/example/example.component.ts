import { Component, OnInit } from '@angular/core';
import { CustomConfig } from '../dialog/custom.config';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {

  constructor(private config: CustomConfig) { }

  ngOnInit() {
  
  }
}
