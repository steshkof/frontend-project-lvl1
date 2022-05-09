#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {greet} from '../src/cli.js';

console.log("Welcome to the Brain Games!");
greet();
