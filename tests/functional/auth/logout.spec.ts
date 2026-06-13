import { test } from '@japa/runner'
import testUtils from '@adonisjs/core/services/test_utils'
import type { ApiResponse } from '@japa/api-client'
import User from '#models/user'
import { type Group } from '@japa/runner/core'

test.group('Auth logout', (group: Group) => {
  group.each.setup(() => {
    return testUtils.db().truncate()
  })

  test('Test logout is rejected when unauthenticated', async ({ client }) => {
    const response = await client.visit('profile.access_tokens.destroy')

    response.assertStatus(401)
  })
  test('Test the logout process', async ({ client }) => {
    const user = await User.create({
      fullName: 'John doe',
      email: 'john@example.com',
      password: 'passWord1234?',
    })

    const response: ApiResponse = await client.visit('profile.access_tokens.destroy').loginAs(user)

    response.assertStatus(200)
    response.assertBodyContains({ message: 'Logged out successfully' })
  })
})
