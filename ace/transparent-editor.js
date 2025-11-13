define("ace/theme/transparent-editor", ["require", "exports", "module", "ace/lib/dom"], function (require, exports, module) {
    exports.isDark = true;
    exports.cssClass = "ace-transparent-editor";
    exports.cssText = "body {\
        background-color: transparent !important;\
        background-image: none !important;\
        margin: 0;\
        padding: 0;\
        height: 100vh;\
        overflow: hidden;\
    }\
    .ace-transparent-editor {\
        background-color: transparent !important;\
        color: #CCCCCC;\
    }\
    .ace-transparent-editor .ace_marker-layer .ace_active-line {\
        background: rgba(255, 255, 255, 0.2) !important;\
    }\
    .ace-transparent-editor .ace_gutter-active-line {\
        background-color: rgba(57, 57, 57, 0.5);\
    }\
    /* Syntax Highlighting Styles */\
    .ace-transparent-editor .ace_keyword,\
    .ace-transparent-editor .ace_storage,\
    .ace-transparent-editor .ace_storage.ace_type,\
    .ace-transparent-editor .ace_support.ace_type {\
        color: #CC99CC;\
    }\
    .ace-transparent-editor .ace_comment {\
        color: #999999;\
    }\
    .ace-transparent-editor .ace_string {\
        color: #99CC99;\
    }\
    .ace-transparent-editor .ace_variable {\
        color: #F99157;\
    }\
    .ace-transparent-editor .ace_constant {\
        color: #F99157;\
    }\
    .ace-transparent-editor .ace_operator {\
        color: #66CCCC;\
    }\
    .ace-transparent-editor .ace_entity.ace_name.ace_function {\
        color: #6699CC;\
    }\
    ";

    var dom = require("../lib/dom");
    dom.importCssString(exports.cssText, exports.cssClass);
});

(function() {
    window.require(["ace/theme/TransparentEditor"], function(m) {
        if (typeof module == "object" && typeof exports == "object" && module) {
            module.exports = m;
        }
    });
})();
