import { BaseSchema } from '@adonisjs/lucid/schema'
import { Roles } from '../../app/enums/roles_enum.js'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.string('full_name').nullable()
      table.string('email', 254).notNullable().unique()
      table.string('password').notNullable()
      table.enum('role', Object.values(Roles)).notNullable().defaultTo(Roles.USER)
      table.integer('agency_id').nullable().references('agencies.id').onDelete('CASCADE')
      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()

      table.index('agency_id')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
