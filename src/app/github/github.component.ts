import { Component, OnInit } from '@angular/core';
import { GithubService } from './github.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  name = 'Github$';



  constructor( public githubService: GithubService ) { }

  ngOnInit() {
    this.update();
  }
  getCurrentPrice(){
    return this.githubService.currentPrice;
  }

  update() {
    this.githubService.update();
  }
}
