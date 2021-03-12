import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IPerson } from "./person";
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  // httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  // };

  constructor(private http: HttpClient) { };

  listOfPeople():Observable<IPerson[]>{
    return this.http.get<IPerson[]>("http://localhost:4000/api/person");

  };
  deletePerson(id: string): Observable<{}> {
  const url = `http://localhost:4000/api/person/${id}`;
  return this.http.delete(url);

}
updatePerson(person: IPerson): Observable<any> {
  const url = "http://localhost:4000/api/person/" + person._id;
  return this.http.put(url, person);
}
}
