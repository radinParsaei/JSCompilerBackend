import org.teavm.jso.JSBody;
import org.teavm.jso.JSObject;

public class Client {
    public interface RuntimeExport extends JSObject {
        void run(String input);
    }
    public static class Runtime implements RuntimeExport {
        @Override
        public void run(String input) {
            if (input.trim().toLowerCase().startsWith("<?xml")) {
                try {
                    new XMLToSyntaxTree().xmlToProgram(input).eval();
                    System.out.println();
                  } catch (Exception e) {
                    e.printStackTrace();
                  }
            } else {
                System.out.println("Ooops");
            }
        }
    }

    @JSBody(params = { "name", "service" }, script = "global[name] = service;")
    private static native void export(String name, JSObject service);

    public static void main(String[] args) {
        export("Runtime", new Runtime());
    }
}
