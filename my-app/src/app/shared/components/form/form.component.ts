import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
import { State } from '../../../shared/enums/state.enum';
// import { CollectionService } from '../../../core/services/collection.service';
import { Item } from '../../interfaces/item';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public form: FormGroup;
  public intitules = Object.values(State);
  @Output() newItem: EventEmitter<Item> = new EventEmitter<Item>();
  @Input() editItem: Item;

  constructor(private fb: FormBuilder/*, private collectionService:CollectionService, private router:Router*/) {
    // this.createForm();
  }

  ngOnInit() {
console.log(this.editItem);
this.createForm();
}

  createForm() {
    this.form = this.fb.group({
      name: [
        this.editItem ? this.editItem.name : '',
        Validators.compose([Validators.required, Validators.minLength(5)])
      ],
      reference: [
        this.editItem ? this.editItem.reference : '',
        Validators.compose([Validators.required, Validators.minLength(4)])
      ],
      state: this.editItem ? this.editItem.state : State.ALIVRER
    });
  }

  private getItem(): Item {
  const data = this.form.value as Item;
  if (!this.editItem) {
    return data;
    } else {
    const id = this.editItem.id;
    return{ id, ...data};
    }
  }

  public process(): void {
    this.newItem.emit(this.form.value);

    console.log(this.form.value);
    // this.collectionService.addItem(this.form.value);
    this.form.reset();
    this.form.get('state').setValue(State.ALIVRER);
    // this.router.navigate(['/list']);
  }
  public isError(field: string): Boolean {
  return this.form.get(field).invalid && this.form.get(field).touched;
  }

}
