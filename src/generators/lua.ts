import {Order} from 'blockly/lua';
import * as Blockly from 'blockly/core';

export const forBlock = Object.create(null);

// Server

forBlock['tick'] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator,
) {
  const body = generator.statementToCode(block, 'CODE') || '';

  const code = `function tick()\n${body}end\n`;
  return code;
};

forBlock['get_player_count'] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator,
) {
  const code = `server.players`
  return [code, Order.ATOMIC]
}

forBlock['get_tick'] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator,
) {
  const code = `server.tick`
  return [code, Order.ATOMIC]
}

forBlock['get_player'] = function (
  block: Blockly.Block,
  generator: Blockly.CodeGenerator,
) {
  const index = generator.valueToCode(block, 'INDEX', Order.NONE)
  const code = `server:get_player(${index})`
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