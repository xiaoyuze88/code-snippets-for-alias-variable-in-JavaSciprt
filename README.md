# code-snippets-for-alias-variable-in-JavaSciprt

Just a simple code snippet for alias variable in JavaScript.

Usage like: 

    Obj.fn = "DO STH.";
    aliasFor(Obj, 'fn').is('anotherName').and('secondName').are('moreName', 'andMoreName'[,...]);

    console.log(Obj.fn, Obj.anotherName, Obj.secondName, Obj.moreName, Obj.andMoreName); // "DO STH.", "DO STH.", "DO STH.", "DO STH.", "DO STH."

