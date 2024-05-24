import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Estoque from '../../app/models/estoque.js'



export default class extends BaseSeeder {
  async run() {

    await Estoque.createMany([
      { quantidade: 20, produtoId: 1 },
      { quantidade: 39, produtoId: 3 },
      { quantidade: 30, produtoId: 2 },

    ])
  }
}