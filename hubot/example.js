'use strict'

// Description:
//   Example scripts for you to examine and try out.
//
// Notes:
//   They are commented out by default, because most of them are pretty silly and
//   wouldn't be useful and amusing enough for day to day huboting.
//   Uncomment the ones you want to try and experiment with.
//
//   These are from the scripting documentation: https://github.com/github/hubot/blob/master/docs/scripting.md

module.exports = (robot) => {


  //this code responds if enter "anyone there"
//------------------------------------------------------------
  robot.hear(/anyone there/i, (res) => {
    res.send('here i am, how can i help you')
  })
//------------------------------------------------------------







// this code gives a rondom image qouate about dissapointemnt if enter im dissapointed
//-------------------------------------------------------------
  let imageQuate = [
    "https://www.therandomvibez.com/wp-content/uploads/2017/08/Deep-Disappointment-Disillusionment-Quotes.jpg",
    "https://i.enkiquotes.com/Vmm9m49GpWUmW9DRmKGjhXllZSM=//images/2016/08/3d63113b89dc537be9dd09dfba270f6f.jpg"
    
  ]
  
    robot.hear (/im disappointed/i, (res) => {
      res.send (res.random (imageQuate))
    })
  //----------------------------------------------------






  //in this code you can have a conversation with bot
  //----------------------------------------------------
  var switchBoard = new Conversation(robot, [type])

  robot.hear(/delete all the files/i, function(res) {
 
    res.reply('Are you really sure???')
    
    var dialog = switchBoard.startDialog(res)
    
    
    
    dialog.addChoice(/yes/, function(res){})
    dialog.addChoice( /no/, function(res){})
 
      
})
  //----------------------------------------------------
}
