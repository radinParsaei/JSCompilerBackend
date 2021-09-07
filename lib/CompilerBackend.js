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
    } else if (typeof value == 'string') {
        return "<text data=\"".replace("test", compressed? "t":"test") + value + "\"/>"
    } else {
        return value.toXML()
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
    static ExitFunction = class {
        exit = null
        constructor(exit) {
            this.exit = exit;
        }

        toXML() {
            return (compressed? "<ef>":"<exitFunction>") + this.exit.toXML() + (compressed? "</ef>":"</exitFunction>")
        }
    }
    static Add = class {
        v1 = null
        v2 = null
        constructor(v1, v2) {
            this.v1 = v1;
            this.v2 = v2;
        }

        toXML() {
            return (compressed? "<a><d1>":"<add><data1>") + putValue(this.v1) + (compressed? "</d1><d2>":"</data1><data2>") + putValue(this.v2) + (compressed? "</d2></a>":"</data2></add>")
        }
    }
    static Sub = class {
        v1 = null
        v2 = null
        constructor(v1, v2) {
            this.v1 = v1;
            this.v2 = v2;
        }

        toXML() {
            return (compressed? "<s><d1>":"<sub><data1>") + putValue(this.v1) + (compressed? "</d1><d2>":"</data1><data2>") + putValue(this.v2) + (compressed? "</d2></s>":"</data2></sub>")
        }
    }
    static Mul = class {
        v1 = null
        v2 = null
        constructor(v1, v2) {
            this.v1 = v1;
            this.v2 = v2;
        }

        toXML() {
            return (compressed? "<m><d1>":"<mul><data1>") + putValue(this.v1) + (compressed? "</d1><d2>":"</data1><data2>") + putValue(this.v2) + (compressed? "</d2></m>":"</data2></mul>")
        }
    }
    static Div = class {
        v1 = null
        v2 = null
        constructor(v1, v2) {
            this.v1 = v1;
            this.v2 = v2;
        }

        toXML() {
            return (compressed? "<d><d1>":"<div><data1>") + putValue(this.v1) + (compressed? "</d1><d2>":"</data1><data2>") + putValue(this.v2) + (compressed? "</d2></d>":"</data2></div>")
        }
    }
    static Mod = class {
        v1 = null
        v2 = null
        constructor(v1, v2) {
            this.v1 = v1;
            this.v2 = v2;
        }

        toXML() {
            return (compressed? "<m1><d1>":"<mod><data1>") + putValue(this.v1) + (compressed? "</d1><d2>":"</data1><data2>") + putValue(this.v2) + (compressed? "</d2></m1>":"</data2></mod>")
        }
    }
    static Pow = class {
        v1 = null
        v2 = null
        constructor(v1, v2) {
            this.v1 = v1;
            this.v2 = v2;
        }

        toXML() {
            return (compressed? "<p1><d1>":"<pow><data1>") + putValue(this.v1) + (compressed? "</d1><d2>":"</data1><data2>") + putValue(this.v2) + (compressed? "</d2></p1>":"</data2></pow>")
        }
    }
    static Equals = class {
        v1 = null
        v2 = null
        constructor(v1, v2) {
            this.v1 = v1;
            this.v2 = v2;
        }

        toXML() {
            return (compressed? "<eq><d1>":"<equals><data1>") + putValue(this.v1) + (compressed? "</d1><d2>":"</data1><data2>") + putValue(this.v2) + (compressed? "</d2></eq>":"</data2></equals>")
        }
    }
    static StrictEquals = class {
        v1 = null
        v2 = null
        constructor(v1, v2) {
            this.v1 = v1;
            this.v2 = v2;
        }

        toXML() {
            return (compressed? "<seq><d1>":"<strict-equals><data1>") + putValue(this.v1) + (compressed? "</d1><d2>":"</data1><data2>") + putValue(this.v2) + (compressed? "</d2></seq>":"</data2></strict-equals>")
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