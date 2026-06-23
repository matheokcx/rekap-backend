import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'ai_reports'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('client_id').unsigned().references('clients.id').notNullable()
      table.dateTime('period_start').notNullable()
      table.dateTime('period_end').notNullable()
      table.enum('status', ['draft', 'approved', 'sent']).notNullable().defaultTo('draft')
      table.jsonb('content').notNullable()
      table.jsonb('source_tasks').notNullable()
      table.timestamp('approved_at').nullable()
      table.timestamp('sent_at').nullable()
      table.integer('approved_user_id').unsigned().references('users.id').nullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')

      table.index(['client_id', 'created_at'])
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
