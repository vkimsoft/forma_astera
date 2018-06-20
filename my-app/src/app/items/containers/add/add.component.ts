import { Component, OnInit } from '@angular/core';
import { State } from '../../../shared/enums/state.enum';
import { Item } from '../../../shared/interfaces/item';
import { CollectionService } from '../../../core/services/collection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  public intitules=Object.values(State)
  public newItem:Item;
  private collection:Item[];

  constructor(private collectionService:CollectionService,private router:Router) { }

  ngOnInit() {
    this.init();
    this.collection=this.collectionService.collection;
  }

  private init():void {
    this.newItem={
      id:'',
      name:'',
      reference:'',
      state:State.ALIVRER
    }
  }
  public process():void{
    console.log(this.newItem);
    this.collectionService.addItem(this.newItem);
    //this.collection.push(this.newItem);
    this.init();
this.router.navigate(['/list'])
  }
}
