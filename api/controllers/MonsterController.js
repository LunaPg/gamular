var monsterController = {

  getOne: function(req, res){
    var monsterId = req.params('id');
    monster.find({id: monsterId}).then(function (monster){
      res.status(200).send(monster);
    },
      function (error){
        res.status(404).send({message: "Monster not found"});
      }
    );
  },

  getAll: function(req, res){
    monsterr.find().then(function (monster){
      res.status(200).send(monster);
    },
      function (error){
        res.status(404).send({message: "Monster not found"});
      }
    );
  },

  create: function(req, res){
    var monsterData = req.body;
    monster.create(monsterData).then(function(monster){
      res.status(200).send(monster);
    }, 
    function (error){
      res.status(500).send({message: "Cannot create monster"});
    });
  },

  delete: function(req, res){
    var monsterId = req.params('id');
    monster.delete({id: monsterId}).then(function (){
      res.status(200).send({message: "monster deleted !"});
    }, 
    function (error){
      res.status(404).send({message: 'monster not found'})
    });
  },

  updatePos: function (req, res){
    var monsterId = req.param('id');

    monster.findOne({id:monsterId}).then(function (monster){
      if (!monster.posX)
        monster.posX = 0;

      if (!monster.posY)
        monster.posY = 0;

      if(req.query.posX)
        monster.posX  += req.query.posX*1 ; 
      if(req.query.posY)
        monster.posY  += req.query.posY*1 ; 

      if(monster.posX< 0 || monster.posX >5 || monster.posY < 0 || monster.posY>5)
        res.status(400).send({message: 'monster out of bound !'})
      else {

      monster.save();
      res.status(200).send(monster);
      }
    },
    function (err){
      res.status(404).send({message: 'monster not found'})
    });
  
  }
}

module.exports = monsterController;
