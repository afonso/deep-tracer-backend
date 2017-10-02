import request from 'supertest-as-promised'
import express from '../../services/express'
import routes, { Tracer } from '.'

const app = () => express(routes)

let tracer

beforeEach(async () => {
  tracer = await Tracer.create({})
})

test('POST /tracers 201', async () => {
  const { status, body } = await request(app())
    .post('/')
    .send({ id: 'test', parentId: 'test', contextId: 'test', request: 'test', response: 'test', startedAt: 'test', finishedAt: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual('test')
  expect(body.parentId).toEqual('test')
  expect(body.contextId).toEqual('test')
  expect(body.request).toEqual('test')
  expect(body.response).toEqual('test')
  expect(body.startedAt).toEqual('test')
  expect(body.finishedAt).toEqual('test')
})

test('GET /tracers/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`/${tracer.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(tracer.id)
})

test('GET /tracers/:id 404', async () => {
  const { status } = await request(app())
    .get('/123456789098765432123456')
  expect(status).toBe(404)
})
