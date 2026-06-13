import { test } from '@japa/runner'
import testUtils from '@adonisjs/core/services/test_utils'
import type { ApiResponse } from '@japa/api-client'
import User from '#models/user'
import { type Group } from '@japa/runner/core'

test.group('Auth login', (group: Group) => {
  group.each.setup(() => {
    return testUtils.db().truncate()
  })

  test('Test return errors when missing fields during login', async ({ client }) => {
    const response = await client.visit('auth.access_tokens.store')

    response.assertStatus(422)
    response.assertBodyContains({
      errors: [
        {
          field: 'email',
          rule: 'required',
        },
        {
          field: 'password',
          rule: 'required',
        },
      ],
    })
  })
  test('Test login fails with invalid credentials', async ({ client }) => {
    await User.create({
      fullName: 'John doe',
      email: 'john@example.com',
      password: 'passWord1234?',
    })

    const response = await client.visit('auth.access_tokens.store').json({
      email: 'john@example.com',
      password: 'wrongPassword1?',
    })

    response.assertStatus(400)
  })
  test('Test the login process returns a token', async ({ client, assert }) => {
    await User.create({
      fullName: 'John doe',
      email: 'john@example.com',
      password: 'passWord1234?',
    })

    const response: ApiResponse = await client.visit('auth.access_tokens.store').json({
      email: 'john@example.com',
      password: 'passWord1234?',
    })

    response.assertStatus(200)
    assert.equal(response.body().user.email, 'john@example.com')
    assert.exists(response.body().token)
  })
})
