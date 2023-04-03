// scripts.js

import {company , year} from './configuration.js';

const message = '© ' + company + ' (' + year + ')';
document.querySelector('footer').innerText = message;

console.log(message)







/*
// scripts.js

import company form 'configuration'
import year form 'configuration'

const message = '© ' + company + ' (' + year + ')'
document.querySelector('footer').innerText = message
*/

/* SOLUTIONS
 - I changed the spelling error on form to 'from', and compounded the import so that the variables can be imported at the same time.
 - I then properly added the link to the 'configuration.js' script. 
 - I then added 'console.log(message)' so that the message can be logged and displayed.
 */