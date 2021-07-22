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
        }
}

function xmlToSyntaxTree(xml) {
    let res = []
    let program = new DOMParser().parseFromString(xml).firstChild.nextSibling;
    if (!program.nodeName == "program" && !program.nodeName == "pr") {
        return new SyntaxTree.Print();
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
            }
            node = node.nextSibling
        }
    }
    return res;
}

export {xmlToSyntaxTree}