var test = require('tape');
var extend = require('../ampersand-class-extend');


test('should extend a prototype', function (t) {
    var P1 = function () {};
    P1.extend = extend;
    var mixin1 = {
        method1: function () {
            return 1;
        }
    };
    var mixin2 = {
        method2: function () {
            return 2;
        }
    };

    var P2 = P1.extend(mixin1, mixin2);
    var P3 = P2.extend({});

    t.ok((new P2) instanceof P1, 'new P2 is instanceof P1');
    t.ok((new P2) instanceof P2, 'new P2 is instanceof P2');
    t.ok((new P3) instanceof P1, 'new P3 is instanceof P1');
    t.ok((new P3) instanceof P2, 'new P3 is instanceof P2');
    t.ok((new P3) instanceof P3, 'new P3 is instanceof P3');
    t.equal((new P2).method1, mixin1.method1, 'method1 should have been inherited');
    t.equal((new P3).method2, mixin2.method2, 'method2 should have been inherited');
    t.notEqual(P2, P3, 'safety check that they are making new construtors');
    t.end();
});
