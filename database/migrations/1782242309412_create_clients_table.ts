import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'clients'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('agency_id').references('agencies.id').notNullable()
      table.string('name').notNullable()
      table.enum('cadence', ['weekly', 'two_weeks']).notNullable().defaultTo('weekly')
      table.integer('send_day').notNullable().defaultTo(1)
      table.boolean('active').notNullable().defaultTo(true)
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
