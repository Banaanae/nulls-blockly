import * as Blockly from 'blockly';

const getObject = {
  "type": "get_obj",
  "tooltip": "Finds an object by Object ID.",
  "helpUrl": "",
  "message0": "get object with id %1",
  "args0": [
    {
      "type": "input_value",
      "name": "ID"
    }
  ],
  "output": "OBJECT",
  "colour": 225,
}

const addObject = {
  "type": "add_obj",
  "tooltip": "Adds a new object to the battlefield.",
  "helpUrl": "",
  "message0": "add object %1",
  "args0": [
    {
      "type": "input_value",
      "name": "ID",
      "check": "OBJECT"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 225,
}

const getCharacters = {
  "type": "get_characters",
  "tooltip": "Returns a list of LogicCharacter objects.",
  "helpUrl": "",
  "message0": "get characters",
  "output": "OBJECT",
  "colour": 225,
}

const getAreaEffects = {
  "type": "get_area_effects",
  "tooltip": "Returns a list of LogicAreaEffect objects.",
  "helpUrl": "",
  "message0": "get area effects",
  "output": "OBJECT",
  "colour": 225,
}

const getItems = {
  "type": "get_items",
  "tooltip": "Returns a list of LogicItem objects.",
  "helpUrl": "",
  "message0": "get items",
  "output": "OBJECT",
  "colour": 225,
}

const getProjectiles = {
  "type": "get_projectiles",
  "tooltip": "Returns a list of LogicProjectile objects.",
  "helpUrl": "",
  "message0": "get projectiles",
  "output": "OBJECT",
  "colour": 225,
}

export const gameObjectManagerBlocks = Blockly.common.createBlockDefinitionsFromJsonArray([
  getObject,
  addObject,
  getCharacters,
  getAreaEffects,
  getItems,
  getProjectiles
])