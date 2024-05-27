// import type { HttpContext } from '@adonisjs/core/http'
import type { HttpContext } from '@adonisjs/core/http'
import Pedido from '../models/pedido.js'

export default class PedidosController {

    async index({ request }: HttpContext) {
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)
        return await Pedido.query().paginate(page, perPage)
    }

    async show({ params }: HttpContext) {
        return await Pedido.query()
            .where('id', params.id)
            .preload('produto')
            .preload('cliente')
            .preload('funcionario')
            .firstOrFail()

    }
    async store({ request }: HttpContext) {

        const dados = request.only(['produtoId', 'clienteId'])

        return await Pedido.create(dados)
    }

    async update({ params, request }: HttpContext) {

        const pedido = await Pedido.findOrFail(params.id)
        const dados = request.only(['quantidade', 'produtoId'])

        pedido.merge(dados)
        return await pedido.save()

    }

    async destroy({ params }: HttpContext) {

        const pedido = await Pedido.findOrFail(params.id)
        await pedido.delete()

        return { 'msg': 'registro deletado com sucesso', pedido }

    }
}

