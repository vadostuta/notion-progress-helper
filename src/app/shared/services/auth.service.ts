import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly logState: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  constructor () { }

  public setLogState (state: boolean): void {
    this.logState.next(state)
  }

  public getLogState (): Observable<boolean> {
    return this.logState.asObservable()
  }
}
