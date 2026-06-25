import { IntegrationSchema } from '#database/schema'
import { beforeSave, belongsTo } from '@adonisjs/lucid/orm'
import { type BelongsTo } from '@adonisjs/lucid/types/relations'
import Agency from '#models/agency'
import encryption from '@adonisjs/core/services/encryption'

export default class Integration extends IntegrationSchema {
  @belongsTo(() => Agency) declare agency: BelongsTo<typeof Agency>

  @beforeSave()
  static encryptSensitiveData(integration: Integration) {
    if (integration.token) {
      integration.token = encryption.encrypt(integration.token)
    }
  }

  decryptToken(): string | null {
    if (!this.token) {
      return null
    }
    return encryption.decrypt(this.token)
  }
}
