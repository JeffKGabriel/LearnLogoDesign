import axios from 'axios'



  //AIzaSyAQtClPt3-Uw4xYHU3GBugfqWK4DLTHNqo


  var getInfo = async function getChannelInfo(channels){

         let channelGet = channels.join()
         const response = await axios.get('https://www.googleapis.com/youtube/v3/videos?part=snippet&id='+channelGet+'&key=AIzaSyAXLGsJxGAdVYNo68SC3OauWTWtayjbCYg')
         return response.data

  }



  module.exports = {
      getInfo: getInfo
  };
