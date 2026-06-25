import { AiReportSchema } from '#database/schema'
import { belongsTo } from '@adonisjs/lucid/orm'
import { type BelongsTo } from '@adonisjs/lucid/types/relations'
import Client from '#models/client'
import User from '#models/user'

export default class AiReport extends AiReportSchema {
  @belongsTo(() => Client) declare client: BelongsTo<typeof Client>
  @belongsTo(() => User, { foreignKey: 'approvedUserId' }) declare approvedBy: BelongsTo<
    typeof User
  >
}
