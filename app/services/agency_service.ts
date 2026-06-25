import Agency from '#models/agency'
import string from '@adonisjs/core/helpers/string'

export class AgencyService {
  public async createAgency(
    name: string,
    logo?: any,
    brandColor?: string,
    senderName?: string,
    email?: string
  ): Promise<Agency> {
    let logoPath: string | null = null

    if (logo) {
      const path = `agencies/${string.uuid()}.${logo.extname}`
      await logo.moveToDisk(path)
    }

    return await Agency.create({
      name: name,
      logoPath: logoPath,
      brandColor: brandColor,
      senderName: senderName,
      email: email,
    })
  }
}
