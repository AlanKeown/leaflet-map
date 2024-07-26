import type { LayoutServerLoad } from './$types'

export const load: LayoutServerLoad = async ({ locals: { safeGetSession }, cookies }) => {
  const { session, user } = await safeGetSession()
  console.log('user', user)

  return {
    session,
    user,
    cookies: cookies.getAll(),
  }
}