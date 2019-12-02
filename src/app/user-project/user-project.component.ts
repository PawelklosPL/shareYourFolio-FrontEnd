import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-user-project',
  templateUrl: './user-project.component.html',
  styleUrls: ['./user-project.component.scss']
})
export class UserProjectComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.redirectIfNotAuthorised();
  }
  
  private redirectIfNotAuthorised() {
    let token: string = sessionStorage.getItem("Token");
    if(token == null){
      this.router.navigate(['auth']);
    }
  }

}
