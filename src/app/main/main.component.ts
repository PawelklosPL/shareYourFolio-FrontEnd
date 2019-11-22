import { Component, OnInit } from '@angular/core';
import { Avatar, WindowOption } from './main.model';
import { MainService } from './main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  avatars: Avatar[];

  windowOptions: WindowOption[];
  public isCollapsed = false;
  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.avatars = this.mainService.getMainAvatarList();
    this.windowOptions = this.mainService.getWindowOption();
  }

  public hideDescrption(windowOptionName: string){

  }
  private applyWindowOptions(){

  }

  public descriptionIsVisible(): boolean{
    let selectDescription = this.windowOptions.find((windowOption: WindowOption)=>{return windowOption.name =="Description"});
    return selectDescription.value;
  }

  public nameIsVisible(): boolean{
    let selectName = this.windowOptions.find((windowOption: WindowOption)=>{return windowOption.name == "Name"});
    return selectName.value;
  }


  public changeWindowOptionValue(index: number) {
    this.windowOptions[index].value = !this.windowOptions[index].value;
  }
}
