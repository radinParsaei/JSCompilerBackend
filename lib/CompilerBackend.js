function putValue(value) {
    if (typeof value == 'number') {
        return "<number>" + value + "</number>"
    } else if (typeof value == 'string') {
        return "<text data=\"" + value + "\"/>"
    }
}

class SyntaxTree {
    self = this;
    static Print = class {
        values = []
        sep = ' '
        constructor(...values) {
            this.values = values;
        }

        toXML() {
            var a = "<print><separator>" + putValue(this.sep) + "</separator>"
            for (var i of this.values) {
                a += "<data>" + putValue(i) + "</data>"
            }
            a += "</print>"
            return a
        }
    }
}

function toXML(obj) {
    return "<?xml version=\"1.0\" encoding=\"UTF-8\"?><program>" + obj.toXML() + "</program>"
}

export {SyntaxTree, toXML}