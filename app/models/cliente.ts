import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Pedido from './pedido.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'
export default class Cliente extends BaseModel {
  @column({ isPrimary: true })
  declare id: number
  @column()
  declare nome: string

  @column()
  declare cpf: string

  @column()
  declare sexo: string

  @column()
  declare telefone: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

    
  @hasMany(() => Pedido)
  declare pedido: HasMany<typeof Pedido>
}