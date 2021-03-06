var tape = require("tape"),
    jsdom = require("jsdom"),
    d3 = Object.assign(require("../"), require("d3-selection"));


var recursiveComponent = d3.component("div")
  .render(function (selection, d){
    selection
        .attr("class", d.class)
        .call(recursiveComponent, d.children || []);
  });


tape("Recursive component.", function(test) {
  var div = d3.select(jsdom.jsdom().body).append("div");

  div.call(recursiveComponent, { class: "a" });
  test.equal(div.html(), '<div class="a"></div>');

  div.call(recursiveComponent, {
    class: "a",
    children: [{ class: "b" }]
  });
  test.equal(div.html(), '<div class="a"><div class="b"></div></div>');

  div.call(recursiveComponent, {
    class: "a",
    children: [
      {
        class: "b",
        children: [
          { class: "c" }
        ]
      },
      { class: "d" }
    ]
  });
  test.equal(div.html(), [
    '<div class="a">',
      '<div class="b">',
        '<div class="c"></div>',
      '</div>',
    '<div class="d"></div></div>'
  ].join(""));

  test.end();
});
