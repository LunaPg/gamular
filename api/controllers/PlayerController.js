var PlayerController = {

  getOne: function(req, res){
    var playerId = req.param('id');
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
      res.status(200).send(player);
    }, 
    function (error){
      res.status(500).send({message: "Cannot create player"});
      });
  },

  delete: function(req, res){
    var playerId = req.param('id');
    player.destroy({id: playerId}).then(function (){
      res.status(200).send({message: "Player deleted !"});
    }, 
    function (error){
      res.status(404).send({message: 'Player not found'})
    });
  },

  updatePos: function (req, res){
    var playerId = req.param('id');

    player.findOne({id:playerId}).then(function (player){
      if (!player.posX)
        player.posX = 0;

      if (!player.posY)
        player.posY = 0;

      if(req.query.posX)
        player.posX  += req.query.posX*1 ; 
      if(req.query.posY)
        player.posY  += req.query.posY*1 ; 

      if(player.posX< 0 || player.posX >5 || player.posY < 0 || player.posY>5)
        res.status(400).send({message: 'Player out of bound !'})
      else {

      player.save();
      res.status(200).send(player);
      }
    },
    function (err){
      res.status(404).send({message: 'Player not found'})
    });
  
  }

}

module.exports = PlayerController;
