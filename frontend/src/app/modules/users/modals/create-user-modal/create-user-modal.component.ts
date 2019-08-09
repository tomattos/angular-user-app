import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../users.service';
import { User } from '../../user';

@Component({
  selector: 'app-create-user-modal',
  templateUrl: './create-user-modal.component.html',
  styleUrls: ['./create-user-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateUserModalComponent implements OnInit {
  form: FormGroup;

  constructor(
      public dialogRef: MatDialogRef<CreateUserModalComponent>,
      private usersService: UsersService,
      private formBuilder: FormBuilder,
  ) {
    this.form = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
  }

  onCancel() {
    this.dialogRef.close();
  }

  onSubmit() {
    if (this.form.valid) {
      this.usersService.createUser(this.form.value as User).subscribe((res) => {
        this.dialogRef.close(res.status);
      });
    }
  }
}
