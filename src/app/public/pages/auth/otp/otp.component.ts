import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrl: './otp.component.scss',
  standalone: false
})
export class OtpComponent implements OnInit {
    public otpForm = new FormGroup({});
  
    get otp() {
      return this.otpForm.get('otp');
    }
  
    constructor(private router: Router, private toast: ToastrService) {}
  
    ngOnInit(): void {
      this.otpForm = this.generateForm();
    }
  
    public login(form: FormGroup) {
      if (form.valid) {
        this.toast.success('ورود با موفقیت انجام شد');
        this.router.navigate(['/panel']);
      }
    }
  
    private generateForm(): FormGroup {
      return new FormGroup({
        otp: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]),
      });
    }
}
