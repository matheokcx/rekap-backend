import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'projects'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('client_id').unsigned().references('clients.id').notNullable()
      table.integer('integration_id').unsigned().references('integrations.id').notNullable()
      table.string('external_project_id').notNullable()
      table.string('external_project_name').nullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')

      table.unique(['client_id', 'external_project_id'])
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
