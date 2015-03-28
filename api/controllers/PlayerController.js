var PlayerController = {

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


  getAll: function(req, res){
    player.find().then(function (player){
      res.status(200).send(player);
    },
      function (error){
        res.status(404).send({message: "Player not found"});
      }
    );
  },


  create: function(req, res){
    var playerData = req.body;
    player.create(playerData).then(function(player){
      res.status(200).send({message: "woot player is created !", player: player });
    }, 
    function (error){
      res.status(500).send({message: "Cannot create player"});
      });
  },

  delete: function(req, res){
    var playerId = req.params('id');
    player.delete(playerId).then(function (){
      res.status(200).send({message: "Player deleted !"});
    }, 
    function (error){
      res.status(404).send({message: 'Player not found'})
    });
  }

}

module.exports = PlayerController;
