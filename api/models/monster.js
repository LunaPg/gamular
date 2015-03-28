
module.exports = {
  attributes: {
    name:{type: 'string'},
    life: { type: 'integer', required: true, defaultsTo: 5} ,
    posX: {type:'integer', min: 0, max : 5},
    posX: {type:'integer', min: 0, max: 5},
  }

};
