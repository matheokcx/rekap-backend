import { BaseTransformer } from '@adonisjs/core/transformers'
import type Agency from '#models/agency'

export default class AgencyTransformer extends BaseTransformer<Agency> {
  toObject() {
    return this.pick(this.resource, [
      'id',
      'name',
      'brandColor',
      'senderName',
      'email',
      'createdAt',
    ])
  }
}
