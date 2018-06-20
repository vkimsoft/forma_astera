import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { State } from '../../../shared/enums/state.enum';
import { CollectionService } from '../../../core/services/collection.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  public form: FormGroup;
  public intitules=Object.values(State);

  constructor(private fb: FormBuilder, private collectionService:CollectionService, private router:Router) {
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
    console.log(this.form.value);
    this.collectionService.addItem(this.form.value);
    this.form.reset();
    this.form.get('state').setValue(State.ALIVRER);
    this.router.navigate(['/list']);
  }
  public isError(field:string):Boolean{
  return this.form.get(field).invalid && this.form.get(field).touched;
  }
}
