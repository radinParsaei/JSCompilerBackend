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
        case "printFunction":
        case "pf":
            return new SyntaxTree.PrintFunction(xmlToSyntaxTree(node)[0])
    }
}

function xmlToSyntaxTree(xml) {
    let res = []
    let program = typeof xml == 'string'? new DOMParser().parseFromString(xml).firstChild.nextSibling:xml;
    if (typeof xml == 'string' && !program.nodeName == "program" && !program.nodeName == "pr") {
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
            }
            node = node.nextSibling
        }
    }
    return res;
}

export {xmlToSyntaxTree}