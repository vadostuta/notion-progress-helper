import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly logState: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  public get logState$ (): Observable<boolean> {
    return this.logState.asObservable()
  }

  constructor () { }

  public setLogState (state: boolean): void {
    if (!state) {
      localStorage.removeItem('integrationKey')
      localStorage.removeItem('databaseLink')
    }

    this.logState.next(state)
  }

  public getLogState (): Observable<boolean> {
    return this.logState.asObservable()
  }
}
