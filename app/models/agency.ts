import { AgencySchema } from '#database/schema'
import { hasMany, hasOne } from '@adonisjs/lucid/orm'
import { type HasMany, type HasOne } from '@adonisjs/lucid/types/relations'
import User from '#models/user'
import Client from '#models/client'
import Integration from '#models/integration'
import Subscription from '#models/subscription'

export default class Agency extends AgencySchema {
  @hasMany(() => User) declare users: HasMany<typeof User>
  @hasMany(() => Client) declare clients: HasMany<typeof Client>
  @hasMany(() => Integration) declare integrations: HasMany<typeof Integration>
  @hasOne(() => Subscription) declare subscription: HasOne<typeof Subscription>
}
