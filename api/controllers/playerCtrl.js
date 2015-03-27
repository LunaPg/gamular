var playerCtrl = {

  getOne: function(req, res){
    var playerId = req.params('id');
    player.find({id: playerId}).then(function (player){
      res.status(200).send(player);
    },
      function (error){
        res.status(404).send({message: "Player not found"});
      }
    );
  },

  create: function(){
    var playerData = req.body;
    player.create(playerData).then(function(player){
      res.status(200).send({message: "woot player is created !", player: player });
    
    }, 
    function (error)){
      res.statu(500).send({message: "Cannot create player"});
    }
  }

}

module.exports = playerCtrl'
