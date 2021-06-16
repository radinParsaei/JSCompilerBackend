var compressed = false;

function putValue(value) {
    if (typeof value == 'number') {
        return (compressed? "<n>":"<number>") + value + (compressed? "</n>":"</number>")
    } else if (typeof value == 'string') {
        return "<text data=\"".replace("test", compressed? "t":"test") + value + "\"/>"
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
            var a = (compressed? "<p><s>":"<print><separator>") + putValue(this.sep) + (compressed? "</s>":"</separator>")
            for (var i of this.values) {
                a += (compressed? "<d>":"<data>") + putValue(i) + (compressed? "</d>":"</data>")
            }
            a += compressed? "</p>":"</print>"
            return a
        }
    }
}

function toXML(obj, compressed_) {
    compressed = compressed_
    return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>" + (compressed? "<pr>":"<program>") + obj.toXML() + (compressed? "</pr>":"</program>")
}

export {SyntaxTree, toXML}