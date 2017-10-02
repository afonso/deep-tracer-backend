import { Router } from 'express'
import { middleware as body } from 'bodymen'
import { create, show } from './controller'
import { schema } from './model'
export Tracer, { schema } from './model'

const router = new Router()
const { id, parentId, contextId, request, response, startedAt, finishedAt } = schema.tree

router.post('/',
  body({ id, parentId, contextId, request, response, startedAt, finishedAt }),
  create)

router.get('/:id',
  show)

export default router
