import { Component, OnInit } from '@angular/core';
import { FooterService } from './footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public systemVersion : string;
  constructor(private footerService: FooterService) { }

  ngOnInit() {
    this.domainVersion();
  }
 
  public domainVersion () {
    this.footerService.serverVersion().subscribe((version: string) => {
      console.log(version);
      this.systemVersion = version;
    })
  }
}
