import { DOMParser } from 'xmldom'
global['DOMParser'] = DOMParser
import { xmlToSyntaxTree } from './XMLToSyntaxTree.js'
import {SyntaxTree, toXML} from './CompilerBackend.js'
import {main} from './classes.js'
main()

let print = [new SyntaxTree.Print("Hello, World!!!", 10, true,  null)]
print[0].sep = '\t'

let xml = toXML(print, true)

console.log(xml)

let print1 = xmlToSyntaxTree(xml)
let xml1 = toXML(print1, true)
console.log(xml1)
if (xml1 != xml) console.log("Oooops...")

Runtime.run(xml)