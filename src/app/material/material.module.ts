import { NgModule } from "@angular/core";

import {
  MatButtonModule,
  MatMenuModule,
  MatIconModule,
  MatInputModule,
  MatFormFieldModule
} from "@angular/material";

const modules = [
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatMenuModule,
  MatIconModule
];

@NgModule({
  imports: [...modules],
  exports: [...modules]
})
export class MaterialModule {}
