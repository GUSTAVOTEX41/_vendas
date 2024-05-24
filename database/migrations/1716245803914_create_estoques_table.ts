import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'estoques'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('quantidade').notNullable()
      table.integer('produto_id').unsigned().references('id').inTable('produto').notNullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}