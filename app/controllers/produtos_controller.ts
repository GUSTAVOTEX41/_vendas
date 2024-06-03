import type { HttpContext } from '@adonisjs/core/http'

import Produto from "../models/produto.js"

export default class ProdutosController {

    async index({ request }: HttpContext) {
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 5)
        return await Produto.query().paginate(page, perPage)
    }

    async show({ params }: HttpContext) {
        return await Produto.query()
            .where('id', params.id)
            .preload('pedido')
            .preload('estoque')
            .first()

    }
    async store({ request }: HttpContext) {

        const dados = request.only(['nome', 'preco', 'descricao', 'tipoId'])

        return await Produto.create(dados)
    }

    async update({ params, request }: HttpContext) {

        const produto = await Produto.findOrFail(params.id)
        const dados = request.only(['nome', 'preco', 'descricao', 'tipoId'])

        produto.merge(dados)
        return await produto.save()

    }

    async destroy({ params }: HttpContext) {

        const produto = await Produto.findOrFail(params.id)
        await produto.delete()

        return { 'msg': 'registro deletado com sucesso', produto }

    }
















}