import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'nph-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  isLogged$: Observable<boolean> = this.authService.getLogState()

  constructor (
    private readonly router: Router,
    private readonly authService: AuthService
  ) { }

  public handleLogout (): void {
    this.authService.setLogState(false)
    this.router.navigate([''])
  }

  ngOnInit(): void {
  }

}
