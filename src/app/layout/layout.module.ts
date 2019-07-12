import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LayoutRoutingModule } from "./layout-routing.module";
import { HeaderComponent } from "./header/header.component";
import { LayoutComponent } from "./layout/layout.component";
import { MaterialModule } from "src/app/material/material.module";

@NgModule({
  declarations: [HeaderComponent, LayoutComponent],
  imports: [CommonModule, LayoutRoutingModule, MaterialModule]
})
export class LayoutModule {}
