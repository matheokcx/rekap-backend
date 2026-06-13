import { test } from '@japa/runner'
import testUtils from '@adonisjs/core/services/test_utils'
import type { ApiResponse } from '@japa/api-client'
import User from '#models/user'
import { type Group } from '@japa/runner/core'

test.group('Auth profile', (group: Group) => {
  group.each.setup(() => {
    return testUtils.db().truncate()
  })

  test('Test profile is rejected when unauthenticated', async ({ client }) => {
    const response = await client.visit('profile.profile.show')

    response.assertStatus(401)
  })
  test('Test profile returns the authenticated user', async ({ client, assert }) => {
    const user: User = await User.create({
      fullName: 'John doe',
      email: 'john@example.com',
      password: 'passWord1234?',
    })

    const response: ApiResponse = await client.visit('profile.profile.show').loginAs(user)

    response.assertStatus(200)
    assert.equal(response.body().email, 'john@example.com')
    assert.equal(response.body().id, user.id)
  })
})
