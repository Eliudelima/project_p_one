import { Component, OnInit } from '@angular/core';
import { MinhacarteiraService } from './minhacarteira.service';

@Component({
  selector: 'app-minhacarteira',
  templateUrl: './minhacarteira.component.html',
  styleUrls: ['./minhacarteira.component.css']
})
export class MinhacarteiraComponent implements OnInit {
  name = 'Minhacarteira$';



  constructor( public minhacarteiraService: MinhacarteiraService ) { }

  ngOnInit() {
    this.update();
  }
  getCurrentPrice(){
    return this.minhacarteiraService.currentPrice;
  }

  update() {
    this.minhacarteiraService.update();
  }
};
