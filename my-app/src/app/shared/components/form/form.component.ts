import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { Router } from '@angular/router';
import { State } from '../../../shared/enums/state.enum';
//import { CollectionService } from '../../../core/services/collection.service';
import { Item } from '../../interfaces/item';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public form: FormGroup;
  public intitules=Object.values(State);
  @Output() newItem: EventEmitter<Item> = new EventEmitter<Item>();

  constructor(private fb: FormBuilder/*, private collectionService:CollectionService, private router:Router*/) {
    this.createForm();
  }

  ngOnInit() {

  }

  createForm() {
    this.form = this.fb.group({
      name: [
        '',
        Validators.compose([Validators.required,Validators.minLength(5)])
      ],
      reference:[
        '',
        Validators.compose([Validators.required,Validators.minLength(4)])
      ],
      state:State.ALIVRER
    });
  }
  public process():void{
    this.newItem.emit(this.form.value);

    console.log(this.form.value);
    //this.collectionService.addItem(this.form.value);
    this.form.reset();
    this.form.get('state').setValue(State.ALIVRER);
    //this.router.navigate(['/list']);
  }
  public isError(field:string):Boolean{
  return this.form.get(field).invalid && this.form.get(field).touched;
  }

}
