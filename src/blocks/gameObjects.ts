import * as Blockly from 'blockly/core';

const createObject = {
  "type": "create_object",
  "message0": "Create object %1",
  "args0": [
    {
      "type": "input_value",
      "name": "OBJECT",
      "check": "OBJ_DATA"
    }
  ],
  "output": "OBJECT",
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
};

const addGameObject = {
  type: 'add_game_object',
  message0: 'Add game object %1',
  args0: [
    {
      type: 'input_value',
      name: 'OBJECT',
      check: 'OBJECT',
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 160,
  tooltip: '',
  helpUrl: '',
};

const setPosition = {
  "type": "set_position",
  "message0": "Set position of %1 to x: %2 y: %3 z: %4",
  "args0": [
    {
      "type": "input_value",
      "name": "OBJECT",
      "check": "OBJECT"
    },
    {
      "type": "input_value",
      "name": "X",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "Y",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "Z",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
};

export const gameObjectBlocks = Blockly.common.createBlockDefinitionsFromJsonArray([
  createObject,
  addGameObject,
  setPosition,
]);
