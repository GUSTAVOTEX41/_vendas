import type { HttpContext } from '@adonisjs/core/http'
import Funcionario from '../models/funcionario.js'

export default class FuncionariosController {

    async index({request}: HttpContext){
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 5)

        return await Funcionario.query().paginate(page, perPage)
    }

    async show({params}: HttpContext){
        return await Funcionario.query()
                            .where('id', params.id)
                            .preload('pedido')
                            .first()
    }

    async store({request}: HttpContext){
        const dados = request.only(['nome', 'cpf', 'sexo','telefone','cargo' ])
        return await Funcionario.create(dados)
    }

    async update({params, request}: HttpContext){

        const funcionario = await Funcionario.findOrFail(params.id)
        const dados = request.only(['nome', 'cpf', 'sexo','telefone','cargo'])

        funcionario.merge(dados)
        return await funcionario.save()
    }

    async destroy({params}: HttpContext){
        const funcionario = await Funcionario.findOrFail(params.id)
        
        await funcionario.delete()
        return {msg: 'Registro deletado com sucesso', funcionario}
    }
}
