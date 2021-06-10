//import org.teavm.jso.browser.Window;
import org.teavm.jso.dom.html.HTMLDocument;
import org.teavm.jso.dom.html.HTMLElement;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Targets {
    public static final boolean isWeb = true;
    public static final boolean isInThread = true;
    public static final boolean systemPrint = true;
    public static final boolean useAnalyzer = false;
    public static int count = 0;

    public static void print(ValueBase value) {
    }

    public static final boolean customWhile = false;

    public interface CustomWhileInterface {
        boolean run();
    }

    public static void _while(CustomWhileInterface customWhileInterface) { }
}