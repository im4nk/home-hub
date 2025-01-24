import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { iranianMobileValidator } from '../../../../validators/mobile.validator';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  standalone: false,
})
export class LoginComponent implements OnInit {
  public loginForm = new FormGroup({});

  get mobile() {
    return this.loginForm.get('mobile');
  }

  constructor(private router: Router, private toast: ToastrService) {}

  ngOnInit(): void {
    this.loginForm = this.generateForm();
  }

  public onSubmit(form: FormGroup) {
    if (form.valid) {
      this.toast.success('کد با موفقیت ارسال شد');
      this.router.navigate(['/otp']);
    }
  }

  private generateForm(): FormGroup {
    return new FormGroup({
      mobile: new FormControl('', [Validators.required, iranianMobileValidator]),
    });
  }
}
