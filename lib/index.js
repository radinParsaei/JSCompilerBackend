import { DOMParser } from 'xmldom'
global['DOMParser'] = DOMParser
import {SyntaxTree, toXML} from './CompilerBackend.js'
import {main} from './classes.js'
main()

let print = new SyntaxTree.Print("Hello, World!!!", 10, true)

let xml = toXML(print, true)

Runtime.run(xml)