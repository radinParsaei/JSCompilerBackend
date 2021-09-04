var compressed = false;

function putValue(value) {
    if (typeof value == 'number') {
        return (compressed? "<n>":"<number>") + value + (compressed? "</n>":"</number>")
    } else if (typeof value == 'boolean') {
        return (compressed? "<b>":"<bool>") + value + (compressed? "</b>":"</bool>")
    } else if (value == null) {
        return (compressed? "<nl/>":"<null/>")
    } else if (value instanceof Array) {
        var res = (compressed? "<l>":"<list>")
        for (var i of value) {
            res += (compressed? "<d>":"<data>") + putValue(i) + (compressed? "</d>":"</data>")
        }
        return res + (compressed? "</l>":"</list>")
    } else if (value instanceof SyntaxTree.PrintFunction) {
        return value.toXML()
    } else if (typeof value == 'string') {
        return "<text data=\"".replace("test", compressed? "t":"test") + value + "\"/>"
    }
}

class SyntaxTree {
    static Print = class {
        values = []
        sep = ' '
        constructor(...values) {
            this.values = values;
        }

        toXML() {
            var a = (compressed? "<p><s>":"<print><separator>") + putValue(this.sep) + (compressed? "</s>":"</separator>")
            for (var i of this.values) {
                a += (compressed? "<d>":"<data>") + putValue(i) + (compressed? "</d>":"</data>")
            }
            a += compressed? "</p>":"</print>"
            return a
        }
    }
    static Exit = class {
        stat = 0
        constructor(stat) {
            this.stat = stat;
        }

        toXML() {
            return (compressed? "<e>":"<exit>") + putValue(this.stat) + (compressed? "</e>":"</exit>")
        }
    }
    static ExecuteValue = class {
        value = null
        constructor(value) {
            this.value = value;
        }

        toXML() {
            return (compressed? "<ev><v>":"<executeValue><value>") + putValue(this.value) + (compressed? "</v></ev>":"</value></executeValue>")
        }
    }
    static PrintFunction = class {
        print = null
        constructor(print) {
            this.print = print;
        }

        toXML() {
            return (compressed? "<pf>":"<printFunction>") + this.print.toXML() + (compressed? "</pf>":"</printFunction>")
        }
    }
}

function toXML(obj, compressed_) {
    compressed = compressed_
    var xmlRes = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>" + (compressed? "<pr>":"<program>")
    if (obj instanceof Array) {
        for (var i of obj) {
            xmlRes += i.toXML()
        }
    } else {
        xmlRes += i.toXML()
    }
    return xmlRes + (compressed? "</pr>":"</program>")
}

export {SyntaxTree, toXML}