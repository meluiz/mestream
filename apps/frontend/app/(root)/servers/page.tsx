import { profile } from 'library/supabase/agnostic'
import { getSupabaseClient } from 'library/supabase/server'

const Page: Page.FC = async () => {
  const supabase = await getSupabaseClient()
  const { user } = await profile.get(supabase)

  return <div>Hello, {user?.user_metadata.nickname}</div>
}

export default Page
