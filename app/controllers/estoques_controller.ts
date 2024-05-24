import type { HttpContext } from '@adonisjs/core/http'
import Estoque from '../models/estoque.js'

export default class EstoquesController {
    async index({ request }: HttpContext) {
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)
        return await Estoque.query().paginate(page, perPage)
    }

    async show({ params }: HttpContext) {
        return await Estoque.query()
            .where('id', params.id)
            .first()

    }
    async store({ request }: HttpContext) {

        const dados = request.only([ 'quantidade', 'produtoId'])

        return await Estoque.create(dados)
    }

    async update({ params, request }: HttpContext) {

        const estoque = await Estoque.findOrFail(params.id)
        const dados = request.only([ 'quantidade', 'produtoId'])

        estoque.merge(dados)
        return await estoque.save()

    }

    async destroy({ params }: HttpContext) {

        const estoque = await Estoque.findOrFail(params.id)
        await estoque.delete()

        return { 'msg': 'registro deletado com sucesso', estoque }

    }
    }







