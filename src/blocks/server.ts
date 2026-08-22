import * as Blockly from 'blockly/core';

const tick = {
  "type": "tick",
  "message0": "On game tick %1 %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "CODE"
    }
  ],
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
};

const getPlayers = {
  "type": "get_player_count",
  "message0": "Get player count",
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
};

const getPlayer = {
  "type": "get_player",
  "message0": "Get player %1",
  "args0": [
    {
      "type": "input_value",
      "name": "INDEX",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "output": "OBJECT",
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
};

const getTick = {
  "type": "get_tick",
  "message0": "Get current tick",
  "output": "Number",
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
};

export const serverBlocks = Blockly.common.createBlockDefinitionsFromJsonArray([
  tick,
  getPlayers,
  getPlayer,
  getTick
]);
