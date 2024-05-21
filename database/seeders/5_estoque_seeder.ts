import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Estoque from '../../app/models/estoque.js'



export default class extends BaseSeeder {
  async run() {

    await Estoque.createMany([
      { produto: "cabo tipo c", quantidade: 20, produtoId:1},
      { produto: "teclado", quantidade: 39, produtoId:3},
      { produto: "mouse", quantidade: 30, produtoId:2},
    
    ])
  }
}