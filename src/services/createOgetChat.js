import {client} from '@twilio/conversations';

export const createOrJoinConversation = async (
  { room, token }
) => {
  const client = new Client(token);

  return new Promise( resolve => {
    client.on('stateChanged', async state => {
      if (state === 'initialized') {
        let conversation

        try {
          conversation = await client.createConversation({uniqueName: room});
        } catch (error) {
          console.error(error)

          try {
            conversation = await client.getConversationByUniqueName(room)
          
          } catch (error) {
            console.error(error)
          }
        }

        console.log('Conversation: ', conversation)
        
        resolve(conversation)
      }
    })
  })
}