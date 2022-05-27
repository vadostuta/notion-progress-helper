import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'
import { Router } from '@angular/router'
import { AuthService } from 'src/app/shared/services/auth.service'

@Component({
  selector: 'nph-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StartComponent implements OnInit {

  constructor (
    private readonly router: Router,
    private readonly authService: AuthService
  ) { }

  handleLogin (): void {
    this.authService.setLogState(true)
    this.router.navigate(['dashboard'])
  }

  ngOnInit (): void {
  }

}
