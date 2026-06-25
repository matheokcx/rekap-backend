import { RecipientSchema } from '#database/schema'
import { belongsTo } from '@adonisjs/lucid/orm'
import { type BelongsTo } from '@adonisjs/lucid/types/relations'
import Client from '#models/client'

export default class Recipient extends RecipientSchema {
  @belongsTo(() => Client) declare client: BelongsTo<typeof Client>
}
