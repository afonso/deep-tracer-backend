import { Tracer } from '.'

let tracer

beforeEach(async () => {
  tracer = await Tracer.create({ id: 'test', parentId: 'test', contextId: 'test', request: 'test', response: 'test', startedAt: 'test', finishedAt: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = tracer.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(tracer.id)
    expect(view.id).toBe(tracer.id)
    expect(view.parentId).toBe(tracer.parentId)
    expect(view.contextId).toBe(tracer.contextId)
    expect(view.request).toBe(tracer.request)
    expect(view.response).toBe(tracer.response)
    expect(view.startedAt).toBe(tracer.startedAt)
    expect(view.finishedAt).toBe(tracer.finishedAt)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = tracer.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(tracer.id)
    expect(view.id).toBe(tracer.id)
    expect(view.parentId).toBe(tracer.parentId)
    expect(view.contextId).toBe(tracer.contextId)
    expect(view.request).toBe(tracer.request)
    expect(view.response).toBe(tracer.response)
    expect(view.startedAt).toBe(tracer.startedAt)
    expect(view.finishedAt).toBe(tracer.finishedAt)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
