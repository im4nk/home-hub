import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { ShareModule } from '../../../share/share.module';
import { LoginRouting } from './auth.routes';
import { RegisterComponent } from './register/register.component';
import { OtpComponent } from './otp/otp.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    OtpComponent
  ],
  imports: [
    ShareModule,
    LoginRouting
  ],
  exports: [
    LoginComponent
  ]
})
export class AuthModule { }
