import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor() {}

  private subject = new Subject<any>();

  sendData(data: any) {
    this.subject.next({ text: data });
  }

  clearData() {
    this.subject.next();
  }

  getData(): Observable<any> {
    return this.subject.asObservable();
  }
}
