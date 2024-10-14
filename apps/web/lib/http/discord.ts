import ky from 'ky'

const discord = ky.create({ prefixUrl: 'https://discord.com/api/v10' })

export default discord
