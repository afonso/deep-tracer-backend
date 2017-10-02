import _ from 'lodash'
import { success, notFound } from '../../services/response/'
import { Tracer } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Tracer.create(body)
    .then((tracer) => tracer.view(true))
    .then(success(res, 201))
    .catch(next)

export const show = ({ params }, res, next) =>
  Tracer.findById(params.id)
    .then(notFound(res))
    .then((tracer) => tracer ? tracer.view() : null)
    .then(success(res))
    .catch(next)
