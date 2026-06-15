import type { HttpContext } from '@adonisjs/core/http'
import { Resend } from 'resend'
import env from '#start/env'

export default class AddWaitlistsController {
  async add({ request }: HttpContext): Promise<void> {
    const resend = new Resend(env.get('RESEND_API_KEY'))

    await resend.contacts.create({
      email: request.input('email'),
      unsubscribed: false,
    })
  }
}
