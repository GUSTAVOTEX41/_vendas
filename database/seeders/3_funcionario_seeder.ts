import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Funcionario from '../../app/models/funcionario.js'




export default class extends BaseSeeder {
  async run() {

    await Funcionario.createMany([
      { nome: "Pedro", CPF: '222.567.444-78', sexo: "M", telefone:'61 9876-4444', cargo:'Gerente'},
      { nome: "Gabriel",CPF: '888.222.333-98', sexo: "M", telefone:'61 9992-2222',cargo:'Chefe'},
      { nome: "Jose",CPF: '111.222.667-98', sexo: "M", telefone:'61 9944-1111',cargo:'Vendedor'}

    ])
  }
}