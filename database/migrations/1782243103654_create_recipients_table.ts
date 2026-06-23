import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'recipients'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('client_id').unsigned().references('clients.id').notNullable()
      table.string('name').nullable()
      table.string('email').notNullable()
      table.boolean('active').notNullable().defaultTo(true)
      table.timestamp('created_at')
      table.timestamp('updated_at')

      table.unique(['client_id', 'email'])
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
