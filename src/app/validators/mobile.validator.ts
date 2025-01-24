import { AbstractControl, ValidationErrors } from '@angular/forms';

export function iranianMobileValidator(control: AbstractControl): ValidationErrors | null {
  const iranianMobileRegex = /^09[0-9]{9}$/;

  // اگر مقدار وارد نشده باشد، ولیدیشن انجام نمی‌شود (برای حالت required باید جداگانه عمل کنید)
  if (!control.value) {
    return null;
  }

  // بررسی شماره موبایل با regex
  const isValid = iranianMobileRegex.test(control.value);

  return isValid ? null : { invalidIranianMobile: true };
}