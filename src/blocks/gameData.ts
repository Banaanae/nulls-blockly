import * as Blockly from 'blockly/core';

const getDataByName = {
  "type": "get_data_by_name",
  "message0": "Get data named %1 from %2 table",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME",
      "check": "String"
    },
    {
      "type": "field_dropdown",
      "name": "CSV",
      "options": [
        [
          "Character",
          "16"
        ],
        [
          "Items",
          "18"
        ],
        [
          "Projectiles",
          "6"
        ],
        [
          "Area Effects",
          "17"
        ]
      ]
    }
  ],
  "inputsInline": true,
  "output": "OBJ_DATA",
  "colour": 0,
  "tooltip": "",
  "helpUrl": ""
};

export const gameDataBlocks = Blockly.common.createBlockDefinitionsFromJsonArray([
  getDataByName,
]);
