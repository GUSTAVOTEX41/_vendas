import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Cliente from '../../app/models/cliente.js'



export default class extends BaseSeeder {
  async run() {

    await Cliente.createMany([
      { nome: "Italo", CPF: '000.123.555-78', sexo: "M", telefone:'61 3333-4567'},
      { nome: "João",CPF: '111.222.555-98', sexo: "M", telefone:'61 9788-4567'},
      { nome: "Lucas",CPF: '111.222.667-98', sexo: "M", telefone:'61 9944-3322'},

    ])
  }
}