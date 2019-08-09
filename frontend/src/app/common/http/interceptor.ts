import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BaseProgressSpinnerService } from '../../base/components/base-progress-spinner/base-progress-spinner.service';
import { finalize } from 'rxjs/operators';

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {
  constructor(
    private progressSpinnerService: BaseProgressSpinnerService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const reqInstance = req.clone({
      url: `${environment.baseUrl}${req.url}`
    });

    // Show spinner
    this.progressSpinnerService.toggleSpinner();

    return next.handle(reqInstance).pipe(
      finalize(() => {
        // Hide spinner
        setTimeout(() => this.progressSpinnerService.toggleSpinner(), 500);
      }),
    );
  }
}
