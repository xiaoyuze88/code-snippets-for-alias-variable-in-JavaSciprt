/**
 *      @description A simple code snippet for alias variable in JavaScript
 *      @author Xiao Yuze(https://github.com/xiaoyuze88)
 */

(function(global) {
    'use strict';
    /**
     *  Usage: A.fn = "DO STH.";
     *         aliasFor(A, 'fn').is('anotherName').and('secondName').are('moreName', 'AndMoreName', [...])
     *         
     *  Notice: functions: "is","and","are" are all the same, it's just a syntactic sugar.
     */

    function aliasFor(obj, oldName) {

        var fn = function () {
            for (var i = 0, l = arguments.length; i < l; i++) {
                obj[arguments[i]] === undefined && (obj[arguments[i]] = obj[oldName]);
            }
            return fn;
        }
        // Just for syntactic sugar
        return (fn.is = fn.and = fn.are = fn);
    }

    global.aliasFor = aliasFor;

})(this);
