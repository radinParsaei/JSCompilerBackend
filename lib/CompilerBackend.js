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
    static GreaterThan = class {
        v1 = null
        v2 = null
        constructor(v1, v2) {
            this.v1 = v1;
            this.v2 = v2;
        }

        toXML() {
            return (compressed? "<gt><d1>":"<greater-than><data1>") + putValue(this.v1) + (compressed? "</d1><d2>":"</data1><data2>") + putValue(this.v2) + (compressed? "</d2></gt>":"</data2></greater-than>")
        }
    }
    static LesserThan = class {
        v1 = null
        v2 = null
        constructor(v1, v2) {
            this.v1 = v1;
            this.v2 = v2;
        }

        toXML() {
            return (compressed? "<lt><d1>":"<lesser-than><data1>") + putValue(this.v1) + (compressed? "</d1><d2>":"</data1><data2>") + putValue(this.v2) + (compressed? "</d2></lt>":"</data2></lesser-than>")
        }
    }
    static LesserThanOrEqual = class {
        v1 = null
        v2 = null
        constructor(v1, v2) {
            this.v1 = v1;
            this.v2 = v2;
        }

        toXML() {
            return (compressed? "<le><d1>":"<lesser-than-or-equal><data1>") + putValue(this.v1) + (compressed? "</d1><d2>":"</data1><data2>") + putValue(this.v2) + (compressed? "</d2></le>":"</data2></lesser-than-or-equal>")
        }
    }
    static GreaterThanOrEqual = class {
        v1 = null
        v2 = null
        constructor(v1, v2) {
            this.v1 = v1;
            this.v2 = v2;
        }

        toXML() {
            return (compressed? "<ge><d1>":"<greater-than-or-equal><data1>") + putValue(this.v1) + (compressed? "</d1><d2>":"</data1><data2>") + putValue(this.v2) + (compressed? "</d2></ge>":"</data2></greater-than-or-equal>")
        }
    }
    static And = class {
        v1 = null
        v2 = null
        constructor(v1, v2) {
            this.v1 = v1;
            this.v2 = v2;
        }

        toXML() {
            return (compressed? "<and><d1>":"<a1><data1>") + putValue(this.v1) + (compressed? "</d1><d2>":"</data1><data2>") + putValue(this.v2) + (compressed? "</d2></a1>":"</data2></and>")
        }
    }
    static Or = class {
        v1 = null
        v2 = null
        constructor(v1, v2) {
            this.v1 = v1;
            this.v2 = v2;
        }

        toXML() {
            return (compressed? "<or><d1>":"<o><data1>") + putValue(this.v1) + (compressed? "</d1><d2>":"</data1><data2>") + putValue(this.v2) + (compressed? "</d2></o>":"</data2></or>")
        }
    }
    static BitwiseAnd = class {
        v1 = null
        v2 = null
        constructor(v1, v2) {
            this.v1 = v1;
            this.v2 = v2;
        }

        toXML() {
            return (compressed? "<bitwise-and><d1>":"<ba><data1>") + putValue(this.v1) + (compressed? "</d1><d2>":"</data1><data2>") + putValue(this.v2) + (compressed? "</d2></ba>":"</data2></bitwise-and>")
        }
    }
    static BitwiseOr = class {
        v1 = null
        v2 = null
        constructor(v1, v2) {
            this.v1 = v1;
            this.v2 = v2;
        }

        toXML() {
            return (compressed? "<bitwise-or><d1>":"<bo><data1>") + putValue(this.v1) + (compressed? "</d1><d2>":"</data1><data2>") + putValue(this.v2) + (compressed? "</d2></bo>":"</data2></bitwise-or>")
        }
    }

    static If = class {
        cond = null
        program = null
        elseProgram = null
        constructor(cond, program, elseProgram) {
            this.cond = cond;
            this.program = program;
            this.elseProgram = elseProgram;
        }

        toXML() {
            return (compressed? "<i><c>":"<if><condition>") + putValue(this.cond) + (compressed? "</c><p>":"</condition><program>") + toXML(this.program, compressed, true) + (compressed? "</p>":"</program>") + (this.elseProgram? (compressed? "<e>":"<else>") + toXML(this.elseProgram, compressed, true) + (compressed? "</e>":"</else>"):"") + (compressed? "</i>":"</if>")
        }
    }

    static While = class {
        cond = null
        program = null
        constructor(cond, program) {
            this.cond = cond;
            this.program = program;
        }

        toXML() {
            return (compressed? "<w><c>":"<while><condition>") + putValue(this.cond) + (compressed? "</c><p>":"</condition><program>") + toXML(this.program, compressed, true) + (compressed? "</p>":"</program>") + (compressed? "</w>":"</while>")
        }
    }

    static For = class {
        init = null
        cond = null
        step = null
        program = null
        constructor(init, cond, step, program) {
            this.init = init;
            this.cond = cond;
            this.step = step;
            this.program = program;
        }

        toXML() {
            return (compressed? "<f><i>":"<for><init>") + toXML(this.init, compressed, true) + (compressed? "</i><s>":"</init><step>") + toXML(this.step, compressed, true) + (compressed? "</s><pr>":"</step><program>") + toXML(this.program, compressed, true) + (compressed? "</pr><c>":"</program><condition>") + putValue(this.cond) + (compressed? "</c></f>":"</condition></for>")
        }
    }
    static Variable = class {
        variableName = null
        constructor(variableName) {
            this.variableName = variableName;
        }

        toXML() {
            return (compressed? "<v>":"<variable>") + this.variableName + (compressed? "</v>":"</variable>")
        }
    }
    static SetVariable = class {
        variableName = null
        value = null
        constructor(variableName, value) {
            this.variableName = variableName;
            this.value = value;
        }

        toXML() {
            return (compressed? "<set n=\"":"<set-variable name=\"") + this.variableName + '">' + (compressed? "<v>":"<value>") + putValue(this.value) + (compressed? "</v>":"</value>") + (compressed? "</set>":"</set-variable>")
        }
    }
}

function toXML(obj, compressed_, a) {
    compressed = compressed_
    var xmlRes
    if (!a) xmlRes = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>" + (compressed? "<pr>":"<program>")
    else xmlRes = ""
    if (obj instanceof Array) {
        for (var i of obj) {
            if (i != null) xmlRes += i.toXML()
        }
    } else {
        xmlRes += obj.toXML()
    }
    return xmlRes + (!a? (compressed? "</pr>":"</program>"):"")
}

export {SyntaxTree, toXML}