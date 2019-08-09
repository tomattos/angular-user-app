import { FormGroup } from '@angular/forms';

export interface LoginFormInterface {
  form: FormGroup;
  redirectFormType: string;
  onSubmit: () => void;
  onChangeForm: () => void;
}
