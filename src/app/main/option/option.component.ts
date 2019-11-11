import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css']
})
export class OptionComponent implements OnInit {
  public visible: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  onOptionClick(){
    this.visible = !this.visible;
  }

}
