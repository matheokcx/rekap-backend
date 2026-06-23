import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'integrations'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('agency_id').unsigned().references('agencies.id').notNullable()
      table.enum('provider', ['asana']).notNullable()
      table.string('token').notNullable()
      table.string('token_refresh').nullable()
      table.timestamp('token_expires_at').nullable()
      table.string('external_workspace_id')
      table.string('external_workspace_name').nullable()
      table.enum('status', ['active', 'expired', 'revoked']).defaultTo('active').notNullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
