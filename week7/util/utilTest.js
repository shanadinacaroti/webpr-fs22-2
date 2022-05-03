
// requires util.js
 test("my test", assert => {
     const collect = [];

     (10).times( n => collect.push(n) );

     assert.equals(collect.length, 10);
     assert.equals(collect[0]    , 0);
     assert.equals(collect[9]    , 9);
 });

( () => {
    let ok = [];



    const collect = (10).times( n => n+1 );

    ok.push(collect.length === 10);
    ok.push(collect[0] === 1);
    ok.push(collect[9] === 10);

    report("util-times", ok);
}) ();
