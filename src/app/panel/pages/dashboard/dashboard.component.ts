import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { iranianMobileValidator } from '../../../validators/mobile.validator';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: false
})
export class DashboardComponent implements OnInit {
  public mobileForm = new FormGroup({});
  public usernameForm = new FormGroup({});

  get mobile() {
    return this.mobileForm.get('mobile');
  }

  get username() {
    return this.usernameForm.get('username');
  }

  constructor() {}

  ngOnInit(): void {
      this.mobileForm = this.generateMobileForm();
      this.usernameForm = this.generateUserForm();
  }

  private generateMobileForm(): FormGroup {
    return new FormGroup({
      mobile: new FormControl('', [Validators.required, iranianMobileValidator]),
    });
  }

  private generateUserForm(): FormGroup {
    return new FormGroup({
      username: new FormControl('', [Validators.required]),
    });
  }
}
