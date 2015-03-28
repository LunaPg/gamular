var monsterController = {

  getOne: function(req, res){
    monster.find({id: monsterId}).then(function (monster){
    var monsterId = req.params('id');
      res.status(200).send(monster);
    },
      function (error){
        res.status(404).send({message: "monster not found"});
      }
    );
  },

  
  getAll: function(req, res){
    monsterr.find().then(function (monster){
      res.status(200).send(monster);
    },
      function (error){
        res.status(404).send({message: "Player not found"});
      }
    );
  },

  create: function(req, res){
    var monsterData = req.body;
    monster.create(monsterData).then(function(monster){
      res.status(200).send({message: "woot monster is created !", monster: monster });
    }, 
    function (error){
      res.status(500).send({message: "Cannot create monster"});
    });
  },

  delete: function(req, res){
    var monsterId = req.params('id');
    monster.delete(monsterId).then(function (){
      res.status(200).send({message: "monster deleted !"});
    }, 
    function (error){
      res.status(404).send({message: 'monster not found'})
    });
  }

}

module.exports = monsterController;
