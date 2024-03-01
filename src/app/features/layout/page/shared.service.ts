// shared.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private clickExpansed = new BehaviorSubject(false);
  currentClickExpansed = this.clickExpansed.asObservable();

  changeClickExpansed(state: boolean) {
    this.clickExpansed.next(state);
  }
}