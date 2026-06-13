import { test } from '@japa/runner'
import testUtils from '@adonisjs/core/services/test_utils'
import type { ApiResponse } from '@japa/api-client'
import User from '#models/user'
import { type Group } from '@japa/runner/core'
import mail from '@adonisjs/mail/services/main'
import SignupConfirmationNotification from '#mails/signup_confirmation_notification'

test.group('Auth signup', (group: Group) => {
  group.each.setup(() => {
    return testUtils.db().truncate()
  })

  test('Test return errors when missing fields during creating an account', async ({ client }) => {
    const response = await client.visit('auth.new_account.store')

    response.assertStatus(422)
    response.assertBodyContains({
      errors: [
        {
          field: 'fullName',
          message: 'The fullName field must be defined',
          rule: 'required',
        },
        {
          field: 'email',
          message: 'The email field must be defined',
          rule: 'required',
        },
        {
          field: 'password',
          message: 'The password field must be defined',
          rule: 'required',
        },
        {
          field: 'passwordConfirmation',
          message: 'The passwordConfirmation field must be defined',
          rule: 'required',
        },
      ],
    })
  })
  test('Test the account creation process', async ({ client, assert }) => {
    const { mails } = mail.fake()

    const response: ApiResponse = await client.visit('auth.new_account.store').json({
      fullName: 'John doe',
      email: 'john@example.com',
      password: 'passWord1234?',
      passwordConfirmation: 'passWord1234?',
    })
    response.assertStatus(200)

    const user: User = await User.findOrFail(response.body().user.id)
    assert.equal(user.email, 'john@example.com')

    mails.assertQueued(SignupConfirmationNotification, ({ message }) => {
      return message.hasTo('john@example.com')
    })

    mail.restore()
  })
})
