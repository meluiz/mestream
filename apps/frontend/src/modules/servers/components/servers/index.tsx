import { Grid } from 'pandacss/jsx'
import { Fragment, Suspense } from 'react'

import { GuildCard } from '#components/layout'
import { getUserGuilds } from '#domains/discord'

import { profile } from 'library/supabase/agnostic'
import { getSupabaseClient } from 'library/supabase/server'
import { array, string } from '#utils/helpers'

export const Servers = async () => {
  return (
    <Grid
      rowGap="1.125rem"
      columnGap="1.25rem"
      gridTemplateColumns={{
        base: 'repeat(1, 1fr)',
        md: 'repeat(2, 1fr)',
      }}
    >
      <Suspense fallback={<Loading />}>
        <Render />
      </Suspense>
    </Grid>
  )
}

const faker = array.create(3).map(() => ({ id: string.cuid() }))

const Loading = () => {
  return (
    <Fragment>
      {faker.map(({ id }, index) => (
        <GuildCard.Loading key={`guild:loading:${id}`} delay={100 * index} />
      ))}
    </Fragment>
  )
}

const Render = async () => {
  const { data, error } = await getUserGuilds()

  return null

  if (error) {
    return null
  }

  const guilds = data.filter(
    ({ permissions }) => (BigInt(permissions) & 0x8n) === 0x8n,
  )

  const getRenderItem = async ({ id, icon, name }: UserGuild) => {
    return (
      <GuildCard
        key={`guild:${id}`}
        guildId={id}
        icon={icon}
        name={name}
        href={`/servers/${id}`}
      />
    )
  }

  return <Fragment>{guilds.map(getRenderItem)}</Fragment>
}
