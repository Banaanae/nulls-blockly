/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Blockly from 'blockly';
import {forBlock} from './generators/lua';
import {luaGenerator} from 'blockly/lua';
import {save, load} from './serialization';
import {toolbox} from './toolbox';
import './index.css';
import { gameObjectBlocks } from './blocks/gameObjects';
import { gameDataBlocks } from './blocks/gameData';
import { serverBlocks } from './blocks/server';

// Register the blocks and generator with Blockly
Blockly.common.defineBlocks(serverBlocks)
Blockly.common.defineBlocks(gameObjectBlocks);
Blockly.common.defineBlocks(gameDataBlocks);
Object.assign(luaGenerator.forBlock, forBlock);

// Set up UI elements and inject Blockly
const codeDiv = document.getElementById('generatedCode')?.firstChild;
const outputDiv = document.getElementById('output');
const blocklyDiv = document.getElementById('blocklyDiv');

if (!blocklyDiv) {
  throw new Error(`div with id 'blocklyDiv' not found`);
}
const ws = Blockly.inject(blocklyDiv, {toolbox});

const runCode = () => {
  const code = luaGenerator.workspaceToCode(ws as Blockly.Workspace);
  if (codeDiv) codeDiv.textContent = code;

  if (outputDiv) outputDiv.innerHTML = '';
};

if (ws) {
  load(ws);
  runCode();

  ws.addChangeListener((e: Blockly.Events.Abstract) => {
    if (e.isUiEvent) return;
    save(ws);
  });

  ws.addChangeListener((e: Blockly.Events.Abstract) => {
    if (
      e.isUiEvent ||
      e.type == Blockly.Events.FINISHED_LOADING ||
      ws.isDragging()
    ) {
      return;
    }
    runCode();
  });
}
