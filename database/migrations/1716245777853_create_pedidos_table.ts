import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'pedidos'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('produto_id').unsigned().references('id').inTable('produto').notNullable()
      table.integer('cliente_id').unsigned().references('id').inTable('cliente').notNullable()
      table.integer('funcionario_id').unsigned().references('id').inTable('funcionarios').notNullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}