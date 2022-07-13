import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { AuthService } from 'src/app/shared/services/auth.service'

@Component({
  selector: 'nph-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StartComponent implements OnInit {
  // TODO: thing about some bigger validation and formGroup
  public readonly databaseLink = new FormControl('', Validators.required);
  public readonly integrationKey = new FormControl('', Validators.required);

  public get isSearceDisabled (): boolean {
    return this.databaseLink.invalid || this.integrationKey.invalid
  }

  constructor (
    private readonly router: Router,
    private readonly authService: AuthService
  ) { }

  public handleSearch (): void {
    if (this.databaseLink.invalid || this.integrationKey.invalid) {
      return;
    }

    // TODO: auth?
    this.authService.setLogState(true)
    this.router.navigate(['dashboard'], { queryParams: { integrationKey: this.integrationKey.value, databaseLink: this.databaseLink.value } })
  }

  public handleSaveDatabase (): void {
    localStorage.setItem('databaseLink', this.databaseLink.value)
  }

  public handleSaveIntegrationKey (): void {
    localStorage.setItem('integrationKey', this.integrationKey.value)
  }

  public handeSearchClear (): void {
    this.databaseLink.reset()
  }

  public handeIntegrationKeyClear (): void {
    this.integrationKey.reset()
  }

  ngOnInit (): void {
    const integrationKey = localStorage.getItem('integrationKey')
    const databaseLink = localStorage.getItem('databaseLink')
    if (integrationKey) {
      this.integrationKey.setValue(integrationKey)
    }
    if (databaseLink) {
      this.databaseLink.setValue(databaseLink)
    }
  }

}
