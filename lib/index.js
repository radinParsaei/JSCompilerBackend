import { DOMParser } from 'xmldom'
global['DOMParser'] = DOMParser
import { xmlToSyntaxTree } from './XMLToSyntaxTree.js'
import {SyntaxTree, toXML} from './CompilerBackend.js'
import {main} from './classes.js'
main()

// let program = [new SyntaxTree.If(false, new SyntaxTree.Print("Hello, World!!!", 10, true,  null, [1, 2, 3], new SyntaxTree.Add(10, 20), '\n'), new SyntaxTree.Print("Else!"))]
// let program = [new SyntaxTree.For(new SyntaxTree.SetVariable('i', 0), new SyntaxTree.LesserThan(new SyntaxTree.Variable('i'), 10), new SyntaxTree.SetVariable('i', new SyntaxTree.Add(new SyntaxTree.Variable('i'), 1)), new SyntaxTree.Print(new SyntaxTree.Variable('i')))]
let program = [new SyntaxTree.Function('a', new SyntaxTree.Print("hello"), 'a'), new SyntaxTree.ExecuteValue(new SyntaxTree.CallFunction('a', 10))]
// let program = [new SyntaxTree.SetVariable('a', 10), new SyntaxTree.Print(new SyntaxTree.Variable('a'))]
// program[0].program.sep = '\t'
// program[0].elseProgram.sep = '\t'

let xml = toXML(program, true)

console.log(xml)

let program1 = xmlToSyntaxTree(xml)
let xml1 = toXML(program1, true)
console.log(xml1)
if (xml1 != xml) console.log("Oooops...")

Runtime.run(xml)
let xml_ = '<?xml version="1.0" encoding="UTF-8"?><pr><ev><v><pf><p><s><t data=" "/></s><d><nl/></d><d><l><d><n>10</n></d><d><t data="Hello"/></d></l></d></p></pf></v></ev></pr>'
console.log(toXML(xmlToSyntaxTree(xml_)))
Runtime.run(toXML(xmlToSyntaxTree(xml_)))