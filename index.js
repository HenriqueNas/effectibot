import SlackBot from 'slackbots'
import { config } from 'dotenv'
import axios from 'axios'

config()

const bot = new SlackBot({
  token: `${process.env.BOT_TOKEN}`,
  name: 'Mr. Nobody',
})

bot.on('start', () => {
  const params = {
    icon_emoji: ':robot_face:'
  }

  console.log('the bot is on!')

  // bot.postMessageToUser(
  //   'henrique.nascimento',
  //   'Yeahhh its working',
  //   params
  // )
})

bot.on('message', (data) => {
  if (data.type == 'message' && data.text != 'Oi pessoa') {
    console.log(data)
    handleMessage(data)
  }
  return
})

function handleMessage(data) {
  const params = {
    icon_emoji: ':joker:'
  }

  bot.postEphemeral(
    data.channel,
    data.user,
    `Oi pessoa`,
  )
}