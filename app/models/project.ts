import { ProjectSchema } from '#database/schema'
import { belongsTo } from '@adonisjs/lucid/orm'
import { type BelongsTo } from '@adonisjs/lucid/types/relations'
import Client from '#models/client'
import Integration from '#models/integration'

export default class Project extends ProjectSchema {
  @belongsTo(() => Client) declare client: BelongsTo<typeof Client>
  @belongsTo(() => Integration) declare integration: BelongsTo<typeof Integration>
}
