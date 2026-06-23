import { BaseSchema } from '@adonisjs/lucid/schema'
import { Plans } from '../../app/enums/plans_enum.js'

export default class extends BaseSchema {
  protected tableName = 'subscriptions'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').unsigned().references('users.id').notNullable()
      table.enum('plan', Object.values(Plans)).notNullable().defaultTo('free')
      table
        .enum('status', ['active', 'trialing', 'past_due', 'cancelled', 'incomplete'])
        .notNullable()
        .defaultTo('active')
      table.integer('stripe_customer_id').unsigned().nullable()
      table.integer('stripe_subscription_id').unsigned().nullable()
      table.integer('stripe_price_id').unsigned().nullable()
      table.timestamp('current_period_end').nullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
