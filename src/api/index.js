import { Router } from 'express'
import tracer from './tracer'

const router = new Router()

router.use('/tracers', tracer)

export default router
