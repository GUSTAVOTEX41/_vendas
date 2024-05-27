import { BaseSeeder } from '@adonisjs/lucid/seeders'

import Pedido from '../../app/models/pedido.js'



export default class extends BaseSeeder {
  async run() {

    await Pedido.createMany([
      {  produtoId: 1, clienteId:1 ,funcionarioId:1 },
      {  produtoId: 3,clienteId:2, funcionarioId:2 },
      {  produtoId: 2 , clienteId:3, funcionarioId:3},

    ])
  }
}