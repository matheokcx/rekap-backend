import { BaseMail } from '@adonisjs/mail'
import type User from '#models/user'

export default class SignupConfirmationNotification extends BaseMail {
  subject: string = 'Bienvenue ! Confirmez votre inscription'

  constructor(private user: User) {
    super()
  }

  /**
   * The "prepare" method is called automatically when
   * the email is sent or queued.
   */
  prepare() {
    const greeting = this.user.fullName ?? this.user.email

    this.message.to(this.user.email).html(`
      <h1>Bienvenue ${greeting} !</h1>
      <p>Votre compte a bien été créé. Nous sommes ravis de vous compter parmi nous.</p>
      <p>À très bientôt,<br />L'équipe.</p>
    `)
  }
}
