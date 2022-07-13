import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { AuthService } from './shared/services/auth.service'

@Component({
  selector: 'nph-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  constructor (
    private readonly router: Router,
    private readonly authService: AuthService
  ) { }

  ngOnInit (): void {
    this.initAuth()
  }

  private initAuth (): void {
    const integrationKey = localStorage.getItem('integrationKey')
    const databaseLink = localStorage.getItem('databaseLink')

    if (integrationKey && databaseLink) {
      this.authService.setLogState(true)
      this.router.navigate(['dashboard'], { queryParams: { integrationKey, databaseLink } })
    }
  }
}
