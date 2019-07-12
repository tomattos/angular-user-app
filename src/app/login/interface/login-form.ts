import { FormGroup } from '@angular/forms';

export interface LoginForm {
  form: FormGroup;
  redirectFormType: string;
  onSubmit: () => void;
  onChangeForm: () => void;
}
