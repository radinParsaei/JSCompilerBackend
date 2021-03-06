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
        case "bitwise-not":
        case "bn":
            return new SyntaxTree.BitwiseNot(getValue(node.firstChild))
        case "not":
        case "n1":
            return new SyntaxTree.Not(getValue(node.firstChild))        
        case "printFunction":
        case "pf":
            return new SyntaxTree.PrintFunction(xmlToSyntaxTree(node)[0])
        case "exitFunction":
        case "ef":
            return new SyntaxTree.ExitFunction(xmlToSyntaxTree(node)[0])
        case "variable":
        case "v":
            return new SyntaxTree.Variable(node.textContent)
        case "call-function":
        case "c": {
            let res_ = new SyntaxTree.CallFunction(node.attributes[0].textContent)
            var node1 = node.firstChild
            res_.args = []
            while (node1 != null) {
                res_.args.push(getValue(node1.firstChild))
                node1 = node1.nextSibling
            }
            return res_
        }
        case "increase":
        case "in": {
            let res_ = new SyntaxTree.Increase()
            res_.isPostfix = node.attributes[0].textContent == 'true'
            res_.variable = getValue(node.firstChild)
            return res_
        }
        case "increase":
        case "in": {
            let res_ = new SyntaxTree.Decrease()
            res_.isPostfix = node.attributes[0].textContent == 'true'
            res_.variable = getValue(node.firstChild)
            return res_
        }
    }
}

function xmlToSyntaxTree(xml, ignoreCheck) {
    let res = []
    let program = typeof xml == 'string'? new DOMParser().parseFromString(xml).firstChild.nextSibling:xml;
    if (!ignoreCheck && typeof xml == 'string' && !program.nodeName == "program" && !program.nodeName == "pr") {
        return new SyntaxTree.Print()
    } else {
        if (program === null) return []
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
                if (node1.nextSibling.nodeName == "program" || node1.nextSibling.nodeName == "p") res_.program = xmlToSyntaxTree(node1.nextSibling, true)
                if (node1.nextSibling.nextSibling.nodeName == "else" || node1.nextSibling.nextSibling.nodeName == "e") res_.elseProgram = xmlToSyntaxTree(node1.nextSibling.nextSibling, true)
                res.push(res_)
            } else if (node.nodeName == 'while' || node.nodeName == 'w') {
                let res_ = new SyntaxTree.While()
                let node1 = node.firstChild
                if (node1.nodeName == "condition" || node1.nodeName == "c") {
                    res_.cond = getValue(node1.firstChild)
                }
                if (node1.nextSibling.nodeName == "program" || node1.nextSibling.nodeName == "p") res_.program = xmlToSyntaxTree(node1.nextSibling, true)
                res.push(res_)
            } else if (node.nodeName == 'for' || node.nodeName == 'f') {
                let res_ = new SyntaxTree.For()
                let node1 = node.firstChild
                if (node1.nodeName == "init" || node1.nodeName == "i") {
                    res_.init = xmlToSyntaxTree(node1, true)
                }
                if (node1.nextSibling.nodeName == "step" || node1.nextSibling.nodeName == "s") {
                    res_.step = xmlToSyntaxTree(node1.nextSibling, true)
                }
                if (node1.nextSibling.nextSibling.nodeName == "program" || node1.nextSibling.nextSibling.nodeName == "pr") {
                    res_.program = xmlToSyntaxTree(node1.nextSibling.nextSibling, true)
                }
                if (node1.nextSibling.nextSibling.nextSibling.nodeName == "condition" || node1.nextSibling.nextSibling.nextSibling.nodeName == "c") {
                    res_.cond = getValue(node1.nextSibling.nextSibling.nextSibling.firstChild)
                }
                res.push(res_)
            } else if (node.nodeName == 'set-variable' || node.nodeName == 'set') {
                let res_ = new SyntaxTree.SetVariable(node.attributes[0].textContent)
                let node1 = node.firstChild
                if (node1.nodeName == 'value' || node1.nodeName == 'v') {
                    res_.value = getValue(node1.firstChild)
                }
                res.push(res_)
            } else if (node.nodeName == 'function' || node.nodeName == 'fun') {
                let res_ = new SyntaxTree.Function(node.attributes[0].textContent)
                res_.program = xmlToSyntaxTree(node, true)
                res_.args = node.attributes[1].textContent.split(',')
                res.push(res_)
            }
            node = node.nextSibling
        }
    }
    return res
}

export {xmlToSyntaxTree}