import { DOMParser } from 'xmldom'
import {SyntaxTree, toXML} from './CompilerBackend.js'

function getValue(node) {
    switch (node.nodeName) {
        case "number":
        case "n":
            return Number(node.textContent)
        case "list":
        case "l":
            var x = node.firstChild
            var res =[]
            while (x != null) {
                res.push(getValue(x.firstChild))
                x = x.nextSibling
            }
            return res
        case "text":
        case "t":
            return node.attributes[0].value
        case "bool":
        case "b":
            return node.textContent.toLowerCase() == 'true'
        case "null":
        case "nl":
            return null
        case "add":
        case "a":
            return new SyntaxTree.Add(getValue(node.firstChild.firstChild), getValue(node.childNodes[1].firstChild))
        case "sub":
        case "s":
            return new SyntaxTree.Sub(getValue(node.firstChild.firstChild), getValue(node.childNodes[1].firstChild))
        case "mul":
        case "m":
            return new SyntaxTree.Mul(getValue(node.firstChild.firstChild), getValue(node.childNodes[1].firstChild))
        case "div":
        case "d":
            return new SyntaxTree.Div(getValue(node.firstChild.firstChild), getValue(node.childNodes[1].firstChild))
        case "mod":
        case "m1":
            return new SyntaxTree.Mod(getValue(node.firstChild.firstChild), getValue(node.childNodes[1].firstChild))
        case "pow":
        case "p1":
            return new SyntaxTree.Pow(getValue(node.firstChild.firstChild), getValue(node.childNodes[1].firstChild))        
        case "equals":
        case "eq":
            return new SyntaxTree.Equals(getValue(node.firstChild.firstChild), getValue(node.childNodes[1].firstChild))        
        case "strict-equals":
        case "seq":
            return new SyntaxTree.StrictEquals(getValue(node.firstChild.firstChild), getValue(node.childNodes[1].firstChild))
        case "greater-than":
        case "gt":
            return new SyntaxTree.GreaterThan(getValue(node.firstChild.firstChild), getValue(node.childNodes[1].firstChild))
        case "lesser-than":
        case "lt":
            return new SyntaxTree.LesserThan(getValue(node.firstChild.firstChild), getValue(node.childNodes[1].firstChild))
        case "lesser-than-or-equal":
        case "le":
            return new SyntaxTree.LesserThanOrEqual(getValue(node.firstChild.firstChild), getValue(node.childNodes[1].firstChild))        
        case "greater-than-or-equal":
        case "ge":
            return new SyntaxTree.GreaterThanOrEqual(getValue(node.firstChild.firstChild), getValue(node.childNodes[1].firstChild))
        case "and":
        case "a1":
            return new SyntaxTree.And(getValue(node.firstChild.firstChild), getValue(node.childNodes[1].firstChild))
        case "or":
        case "o":
            return new SyntaxTree.Or(getValue(node.firstChild.firstChild), getValue(node.childNodes[1].firstChild))
        case "bitwise-and":
        case "ba":
            return new SyntaxTree.BitwiseAnd(getValue(node.firstChild.firstChild), getValue(node.childNodes[1].firstChild))
        case "bitwise-or":
        case "bo":
            return new SyntaxTree.BitwiseOr(getValue(node.firstChild.firstChild), getValue(node.childNodes[1].firstChild))        
        case "printFunction":
        case "pf":
            return new SyntaxTree.PrintFunction(xmlToSyntaxTree(node)[0])
        case "exitFunction":
        case "ef":
            return new SyntaxTree.ExitFunction(xmlToSyntaxTree(node)[0])
    }
}

function xmlToSyntaxTree(xml, ignoreCheck) {
    let res = []
    let program = typeof xml == 'string'? new DOMParser().parseFromString(xml).firstChild.nextSibling:xml;
    if (!ignoreCheck && typeof xml == 'string' && !program.nodeName == "program" && !program.nodeName == "pr") {
        return new SyntaxTree.Print()
    } else {
        let node = program.firstChild
        while (node != null) {
            if (node.nodeName == 'print' || node.nodeName == 'p') {
                let res_ = new SyntaxTree.Print()
                let node1 = node.firstChild
                if (node1.nodeName == "separator" || node1.nodeName == "s") {
                    res_.sep = getValue(node1.firstChild)
                }
                node1 = node1.nextSibling;
                while (node1 != null) {
                    if (node1.nodeName == "data" || node1.nodeName == "d")
                        res_.values.push(getValue(node1.firstChild))
                    node1 = node1.nextSibling;
                }
                res.push(res_)
            } else if (node.nodeName == 'exit' || node.nodeName == 'e') {
                let res_ = new SyntaxTree.Exit()
                res_.stat = getValue(node.firstChild)
                res.push(res_)
            } else if (node.nodeName == 'executeValue' || node.nodeName == 'ev') {
                let res_ = new SyntaxTree.ExecuteValue()
                let node1 = node.firstChild
                if (node1.nodeName == "value" || node1.nodeName == "v") {
                    res_.value = getValue(node1.firstChild)
                }
                res.push(res_)
            } else if (node.nodeName == 'if' || node.nodeName == 'i') {
                let res_ = new SyntaxTree.If()
                let node1 = node.firstChild
                if (node1.nodeName == "condition" || node1.nodeName == "c") {
                    res_.cond = getValue(node1.firstChild)
                }
                res_.program = xmlToSyntaxTree(node1.nextSibling, true)
                res.push(res_)
            }
            node = node.nextSibling
        }
    }
    return res;
}

export {xmlToSyntaxTree}