import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Produto from '../../app/models/produto.js'


export default class extends BaseSeeder {
  async run() {

    await Produto.createMany([
      { nome: "Teclado", preco: 50, descricao: "Teclado preto"},
      { nome: "Mouse", preco: 20, descricao: "Com led"},
      { nome: "Cabo tipo C", preco: 10, descricao: "Cabo tipo C"},

    ])
  }
}