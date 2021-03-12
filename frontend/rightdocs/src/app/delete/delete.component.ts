import { Component, OnInit } from '@angular/core';
import {  PeopleService} from "../people.service";
import { ListComponent } from "../list/list.component";
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  public displayForm = false;
  public Id:string = "";
  public listOfPersons: any = [];
  constructor(private _peopleService: PeopleService) { }

  onClickDelete(){
    if(this.displayForm !== true){
      this.displayForm = true;
    }
    else{
      this.displayForm = false;
    }
  }

  onClickSubmit(){
    this._peopleService.deletePerson(this.Id)
    .subscribe();
    this.displayForm = false;
    

  }


  ngOnInit(): void {
  }

}
