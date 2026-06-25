import type { HttpContext } from '@adonisjs/core/http'
import Agency from '#models/agency'
import AgencyTransformer from '#transformers/agency_transformer'
import { type AgencyService } from '#services/agency_service'
import { AgencyCreationValidator } from '#validators/agency'

export default class AgenciesController {
  public constructor(private agencyService: AgencyService) {}

  async index({ request, serialize }: HttpContext) {
    const page = request.input('page', 1)
    const agencies = await Agency.query().orderBy('name', 'asc').paginate(page, 20)

    return serialize(AgencyTransformer.transform(agencies.all()))
  }

  async store({ request, serialize }: HttpContext) {
    const payload = await request.validateUsing(AgencyCreationValidator)
    return serialize(
      AgencyTransformer.transform(
        await this.agencyService.createAgency(
          payload.name,
          payload.logo,
          payload.brandColor,
          payload.senderName,
          payload.email
        )
      )
    )
  }
}
