import vine from '@vinejs/vine'

export const AgencyCreationValidator = vine.create({
  name: vine.string(),
  logo: vine.file().optional(),
  brandColor: vine.string().hexCode().optional(),
  senderName: vine.string().optional(),
  email: vine.string().email().optional(),
})
