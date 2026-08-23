import * as Blockly from 'blockly/core';

const getTick = {
  "type": "get_tick",
  "message0": "current tick",
  "output": "Number",
  "colour": 230,
  "tooltip": "The current server tick. Increases by 1 every 50 milliseconds.",
  "helpUrl": ""
};

const getPlayerCount = {
  "type": "get_player_count",
  "message0": "player count",
  "output": "Number",
  "colour": 230,
  "tooltip": "The number of players in the battle.",
  "helpUrl": ""
};

const getLocationData = {
  "type": "get_location_data",
  "message0": "location data",
  "output": "OBJECT",
  "colour": 230,
  "tooltip": "The LocationData of the current location. May be nil if a custom map is being used.",
  "helpUrl": ""
};

const getGameMode = {
  "type": "get_game_mode",
  "message0": "game mode data",
  "output": "OBJECT",
  "colour": 230,
  "tooltip": "The current game mode.",
  "helpUrl": ""
};

const isBattleEnded = {
  "type": "is_battle_ended",
  "message0": "battle ended?",
  "output": "Boolean",
  "colour": 230,
  "tooltip": "Will be true if the battle has ended.",
  "helpUrl": ""
};

const getObjectManager = {
  "type": "get_obj_man",
  "tooltip": "Gets a value from the object manager.",
  "helpUrl": "",
  "message0": "object manager %1",
  "args0": [
    {
      "type": "input_value",
      "name": "METHOD"
    }
  ],
  "output": null,
  "colour": 225,
  "inputsInline": true
}

const getMap = {
  "type": "get_map",
  "message0": "map data",
  "output": "OBJECT",
  "colour": 230,
  "tooltip": "...",
  "helpUrl": ""
};

const getClientInfo = {
  "type": "get_client_info",
  "message0": "Get player %1 ClientInfo",
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
  "tooltip": "Returns the ClientInfo object for a player index.",
  "helpUrl": ""
};

const isIntroFinished = {
  "type": "is_intro_finished",
  "message0": "intro finished?",
  "output": "Boolean",
  "colour": 230,
  "tooltip": "Checks whether the battle intro animation has finished.",
  "helpUrl": ""
};

const getRandomInt = {
  "type": "get_rand_int",
  "message0": "Get random integer between %1 and %2",
  "args0": [
    {
      "type": "input_value",
      "name": "MIN",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "MAX",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "output": "Number",
  "colour": 230,
  "tooltip": "Returns a random integer from N to M: [N; M). Uses the same random number generator as the game logic.",
  "helpUrl": ""
};

export const serverBlocks = Blockly.common.createBlockDefinitionsFromJsonArray([
  getTick,
  getPlayerCount,
  getLocationData,
  getGameMode,
  isBattleEnded,
  getObjectManager,
  getMap,
  getClientInfo,
  isIntroFinished,
  getRandomInt
]);
