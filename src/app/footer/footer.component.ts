import { Component, OnInit } from '@angular/core';
import { FooterService } from './footer.service';
import { Cat } from '../jakkolwiek/cat';
import { Dog } from '../jakkolwiek/dog';
import { Pet } from '../jakkolwiek/pet';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public systemVersion: string;
  constructor(private footerService: FooterService) { }

  ngOnInit() {
    const borys: Cat = new Cat();
    borys.name = 'Borys';
    borys.eatShitDuda();
    this.domainVersion();
  }

  public domainVersion() {
    this.footerService.serverVersion().subscribe((version: string) => {
      console.log(version);
      this.systemVersion = version;
    });
  }
}
