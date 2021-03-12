import { Component, OnInit } from '@angular/core';
import {  PeopleService} from "../people.service";
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public displayDetails = false;
  public listOfPersons: any = [];
  constructor(private _peopleService: PeopleService) { }

  ngOnInit() {
   this._peopleService.listOfPeople().subscribe(data  => this.listOfPersons = data);
  }
  onClickDetails(){
    if(this.displayDetails !== true){
      this.displayDetails = true;
    }
    else{
      this.displayDetails = false;
    }
  }
  onClickRefresh(){
    this.ngOnInit();
  }

}
