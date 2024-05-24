/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import ClientesController from '../app/controllers/clientes_controller.js'
import EstoquesController from '../app/controllers/estoques_controller.js'
import FuncionariosController from '../app/controllers/funcionarios_controller.js'
import PedidosController from '../app/controllers/pedidos_controller.js'
import ProdutosController from '../app/controllers/produtos_controller.js'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})
router.resource('/produtos', ProdutosController).apiOnly()
router.resource('/cliente', ClientesController).apiOnly()
router.resource('/funcionario', FuncionariosController).apiOnly()
router.resource('/pedido', PedidosController).apiOnly()
router.resource('/estoque', EstoquesController).apiOnly()