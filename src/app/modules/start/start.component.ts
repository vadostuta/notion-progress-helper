import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'nph-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StartComponent implements OnInit {

  constructor (
    private readonly router: Router
  ) { }

  handleLogin (): void {
    /**
     * TODO: login logic
     */
    this.router.navigate(['dashboard'])
  }

  ngOnInit (): void {
  }

}
