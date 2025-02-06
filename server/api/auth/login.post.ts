import { eq } from 'drizzle-orm'
import { users } from '@/database/schema'

const invalidCredentialsError = createError({
  statusCode: 401,

  // This message is intentionally vague to prevent user enumeration attacks.
  message: 'Invalid credentials',
})

export default defineEventHandler(async event => {
  const bodyRequest = await readBody(event)

  const result = await readValidatedBody(event, body => userSchema.safeParse(body))

  if (!result.success) {
    throw createError({
      statusCode: 400,
      message: JSON.stringify(result.error),
    })
  } else {
    const user = await dbConnect.select().from(users).where(eq(users.email, bodyRequest.email)).get()

    if (!user) throw invalidCredentialsError

    if (!(await verifyPassword(user.password, bodyRequest.password))) throw invalidCredentialsError

    await setUserSession(event, {
      user: {
        name: user.name,
        email: user.email,
        picture: user.picture || '',
      },
      loggedInAt: Date.now(),
    })
  }

  return setResponseStatus(event, 200)
})
