import { ClientSchema } from '#database/schema'
import { belongsTo, hasMany } from '@adonisjs/lucid/orm'
import Agency from '#models/agency'
import { type BelongsTo, type HasMany } from '@adonisjs/lucid/types/relations'
import Recipient from '#models/recipient'
import Project from '#models/project'
import AiReport from '#models/ai_report'

export default class Client extends ClientSchema {
  @belongsTo(() => Agency) declare agency: BelongsTo<typeof Agency>
  @hasMany(() => Recipient) declare recipients: HasMany<typeof Recipient>
  @hasMany(() => Project) declare projects: HasMany<typeof Project>
  @hasMany(() => AiReport) declare updates: HasMany<typeof AiReport>
}
