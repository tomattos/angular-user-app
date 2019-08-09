import { Injectable } from '@nestjs/common';
import { MailerService } from '@nest-modules/mailer';
import { IsEmail } from 'class-validator';

@Injectable()
export class UmaMailService {
  constructor(private mailerService: MailerService) {
  }

  async sendConfirmationRegistrationMail(email: string) {
    return await this.mailerService.sendMail({
      from: 'tomattos6@gmail.com',
      to: email,
      subject: 'Confirm password',
      template: 'registration-mail',
      context: {

      }
    });
  }
}
