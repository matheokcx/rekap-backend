import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Agency from '#models/agency'

export default class extends BaseSeeder {
  async run() {
    const colors = ['#2563eb', '#16a34a', '#dc2626', '#9333ea', '#ea580c', '#0891b2']

    const agencies = Array.from({ length: 30 }, (_, i) => {
      const n = i + 1
      const name = `Agency ${String(n).padStart(2, '0')}`
      const slug = `agency-${n}`

      return {
        name,
        email: `contact@${slug}.com`,
        senderName: name,
        brandColor: colors[i % colors.length],
        logoPath: null,
      }
    })

    await Agency.updateOrCreateMany('email', agencies)
  }
}
