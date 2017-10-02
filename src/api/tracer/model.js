import mongoose, { Schema } from 'mongoose'

const tracerSchema = new Schema({
  id: {
    type: String
  },
  parentId: {
    type: String
  },
  contextId: {
    type: String
  },
  request: {
    type: Object
  },
  response: {
    type: Object
  },
  startedAt: {
    type: String
  },
  finishedAt: {
    type: String
  }
}, {
  timestamps: true,
  strict: false
})

tracerSchema.methods = {
  view () {
    const view = {
      id: this.id,
      parentId: this.parentId,
      contextId: this.contextId,
      request: this.request,
      response: this.response,
      startedAt: this.startedAt,
      finishedAt: this.finishedAt,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }
    return view
  }
}

const model = mongoose.model('Tracer', tracerSchema)

export const schema = model.schema
export default model
