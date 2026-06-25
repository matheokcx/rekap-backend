import User from '#models/user'
import mail from '@adonisjs/mail/services/main'
import SignupConfirmationNotification from '#mails/signup_confirmation_notification'
import { type Plans } from '../enums/plans_enum.js'
import Subscription from '#models/subscription'

export class AuthService {
  public async createUserAccount(
    fullName: string,
    email: string,
    password: string,
    plan: Plans,
    stripeCustomerId?: number,
    stripeSubscriptionId?: number,
    stripePriceId?: number
  ) {
    const user = await User.create({ fullName, email, password })
    const token = await User.accessTokens.create(user)

    await Subscription.create({
      userId: user.id,
      plan: plan,
      stripeCustomerId: stripeCustomerId,
      stripeSubscriptionId: stripeSubscriptionId,
      stripePriceId: stripePriceId,
    })

    await mail.sendLater(new SignupConfirmationNotification(user))

    return { user, token }
  }
}
