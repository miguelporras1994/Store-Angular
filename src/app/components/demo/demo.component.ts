import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'plazti-store';
  items  =['manzana','pera','uva']

  addItem(){
    this.items.push(this.title)
  }

  deleteItem(index :number){
    this.items.splice(index,1)
  }

}
