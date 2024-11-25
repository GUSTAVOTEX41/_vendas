import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Cliente from '../../app/models/cliente.js'



export default class extends BaseSeeder {
  async run() {

    await Cliente.createMany([
      { nome: "Italo", cpf: '000.123.555-78', sexo: "M", telefone:'61 3333-4567'},
      { nome: "João",cpf: '111.222.555-98', sexo: "M", telefone:'61 9788-4567'},
      { nome: "Lucas",cpf: '111.222.667-98', sexo: "M", telefone:'61 9944-3322'},
      {nome: "João Silva",cpf: "123.456.789-00", sexo: "M",telefone: "(12) 3456-7890"},
      {nome: "Maria Santos",cpf: "987.654.321-00", sexo: "F",telefone: "(21) 9876-5432"},
      {nome: "José Oliveira",cpf: "456.789.123-00", sexo: "M",telefone: "(34) 5678-9123"},
      {nome: "Ana Pereira",cpf: "654.321.987-00", sexo: "F",telefone: "(45) 6789-1234"},
      {nome: "Carlos Ferreira",cpf: "321.987.654-00", sexo: "M",telefone: "(56) 7891-2345"}

    ])
  }
}