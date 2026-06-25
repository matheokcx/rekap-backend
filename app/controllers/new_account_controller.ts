import { signupValidator } from '#validators/user'
import type { HttpContext } from '@adonisjs/core/http'
import UserTransformer from '#transformers/user_transformer'
import { AuthService } from '#services/auth_service'
import { inject } from '@adonisjs/core'

export default class NewAccountController {
  @inject()
  async store({ request, serialize }: HttpContext, authService: AuthService) {
    const { fullName, email, password, plan } = await request.validateUsing(signupValidator)

    const result = await authService.createUserAccount(fullName, email, password, plan)

    return serialize({
      user: UserTransformer.transform(result.user),
      token: result.token.value!.release(),
    })
  }
}
