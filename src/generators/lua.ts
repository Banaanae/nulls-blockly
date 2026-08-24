import {Order} from 'blockly/lua';
import * as Blockly from 'blockly/core';

export const forBlock = Object.create(null);

// Global

forBlock['on_tick'] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator,
) {
  const body = generator.statementToCode(block, 'CODE') || '';

  const code = `function tick()\n${body}end\n`;
  return code;
};

// Server

forBlock['get_tick'] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator,
) {
  const code = `server.tick`
  return [code, Order.ATOMIC]
}

forBlock['get_player_count'] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator,
) {
  const code = `server.playersCount`
  return [code, Order.ATOMIC]
}

forBlock['get_location_data'] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator,
) {
  const code = `server.locationData`
  return [code, Order.ATOMIC]
}

forBlock['get_game_mode'] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator,
) {
  const code = `server.gameMode`
  return [code, Order.ATOMIC]
}

forBlock['is_battle_ended'] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator,
) {
  const code = `server.isBattleEnded`
  return [code, Order.ATOMIC]
}

forBlock['get_obj_man'] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator,
) {
  const code = `server.objectManager`
  return [code, Order.ATOMIC]
}

forBlock['get_map'] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator,
) {
  const code = `server.map`
  return [code, Order.ATOMIC]
}

forBlock['get_client_info'] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator,
) {
  const index = generator.valueToCode(block, 'INDEX', Order.NONE)
  const code = `server:getClientInfo(${index})`
  return [code, Order.ATOMIC]
}

forBlock['is_intro_finished'] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator,
) {
  const code = `server:isIntroFinished()`
  return [code, Order.ATOMIC]
}

forBlock['get_rand_int'] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator,
) {
  const min = generator.valueToCode(block, 'MIN', Order.NONE)
  const max = generator.valueToCode(block, 'MAX', Order.NONE)
  const code = `server:getRandomInt(${min}, ${max})`
  return [code, Order.ATOMIC]
}

// Game Objects

forBlock['add_game_object'] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator,
) {
  const text = generator.valueToCode(block, 'OBJECT', Order.NONE);
  const code = `server:add_object(${text})\n`;
  return code;
};

forBlock['create_object'] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator,
) {
  const text = generator.valueToCode(block, 'OBJECT', Order.NONE);
  const code = `server:create_object(${text})\n`;
  return [code, Order.ATOMIC];
};

forBlock['set_position'] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator,
) {
  const text = generator.valueToCode(block, 'OBJECT', Order.NONE);
  const x = generator.valueToCode(block, 'X', Order.NONE)
  const y = generator.valueToCode(block, 'Y', Order.NONE)
  const z = generator.valueToCode(block, 'Z', Order.NONE)
  const code = `${text}:set_position(${x}, ${y}, ${z})\n`;
  return code;
};


// Game Data

forBlock['get_data_by_name'] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator,
) {
  const csvId = parseInt(block.getFieldValue('CSV'))
  const name = generator.valueToCode(block, 'NAME', Order.NONE) || "''";
  const code = `server:add_data(${csvId}, ${name})\n`;
  return [code, Order.ATOMIC];
};

// Helper

forBlock['lookup'] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator,
) {
  const csvId = generator.valueToCode(block, 'table', Order.NONE) || 0;
  const name = generator.valueToCode(block, 'name', Order.NONE) || "''";
  const code = `lookup(${csvId}, ${name})\n`;
  return [code, Order.ATOMIC];
};

// TODO: create_object

forBlock['log'] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator,
) {
  const log = generator.valueToCode(block, 'contents', Order.NONE) || "''";
  const code = `log(${log})\n`;
  return [code, Order.ATOMIC];
};