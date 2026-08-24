import * as Blockly from 'blockly';

const lookup = {
  "type": "lookup",
  "tooltip": "Returns a Data object by its type and name.",
  "helpUrl": "",
  "message0": "get object from table %1 named %2",
  "args0": [
    {
      "type": "input_value",
      "name": "table",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "name",
      "check": "String"
    }
  ],
  "output": "OBJECT",
  "colour": 225,
  "inputsInline": true
}

const createObject = {
  "type": "create_object",
  "tooltip": "Creates a new LogicGameObject instance for a specific Data.",
  "helpUrl": "",
  "message0": "add the game object with data %1",
  "args0": [
    {
      "type": "input_value",
      "name": "data",
      "check": "OBJECT"
    }
  ],
  "output": "OBJECT",
  "colour": 225,
}

// TODO: createCallback
// TODO: enamAsTable

const log = {
  "type": "log",
  "tooltip": "Prints a message to the debug logs and to the friendly room chat, if available.",
  "helpUrl": "",
  "message0": "Log to team chat %1",
  "args0": [
    {
      "type": "input_value",
      "name": "contents",
      "check": "String"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 225,
}

export const helperBlocks = Blockly.common.createBlockDefinitionsFromJsonArray([
  lookup,
  createObject,
  log
])