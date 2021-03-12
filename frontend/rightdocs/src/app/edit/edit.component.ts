import { Component, OnInit } from '@angular/core';
import {  PeopleService} from "../people.service";
import {IPerson } from "../person";
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
   public displayForm = false;
   public person: IPerson = {
     _id: "",
     name: "",
     age: 0,
     gender: "",
     mob: 0,
     __v: 0
   };

    constructor(private _peopleService: PeopleService) { }
   onClickEdit(){
     if(this.displayForm !== true){
       this.displayForm = true;
     }
     else{
       this.displayForm = false;
     }
   }
   onClickSubmit(){


     this._peopleService.updatePerson(this.person)
     .subscribe();
     this.displayForm = false;


   }


  ngOnInit(): void {
  }


}
