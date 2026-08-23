import * as Blockly from 'blockly/core';

const onTick = {
  "type": "on_tick",
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

export const globalBlocks = Blockly.common.createBlockDefinitionsFromJsonArray([
  onTick
])