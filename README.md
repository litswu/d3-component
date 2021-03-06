# d3-component

A lightweight component abstraction for [D3.js](d3js.org).

**Features:**

 * Encapsulates the [General Update Pattern](https://github.com/d3/d3-selection#selection_merge).
 * Composable (even [recursive](https://bl.ocks.org/curran/2aafab81bb2029e1f4f24d258b790ce4)!) stateless functional components.
 * Reliable `destroy` hook for cleaning things up.
 * Works great with [Redux](http://redux.js.org/).

**Examples:**
<table>
  <tr>
    <!-- Posts -->
    <td>
      <div>
        <a href="http://bl.ocks.org/curran/fc8f6989901628e2e79d6374849453ed">Posts</a> | <a href="https://bl.ocks.org/micahstubbs/23a43e0236d235fe52855dc6aecd74a0">ES6 version</a>
      </div>
      <a href="http://bl.ocks.org/curran/fc8f6989901628e2e79d6374849453ed">
        <img width="230" height="120" src="http://bl.ocks.org/curran/raw/fc8f6989901628e2e79d6374849453ed/thumbnail.png">
      </a>
    </td>
    <!-- Spinner -->
    <td>
        <div>
          <a href="http://bl.ocks.org/curran/685fa8300650c4324d571c6b0ecc55de">Spinner</a> | <a href="https://bl.ocks.org/micahstubbs/0e2b63921f5642f0f65f51e27cccd02f">ES6 version</a>
        </div>
        <a href="http://bl.ocks.org/curran/685fa8300650c4324d571c6b0ecc55de">
          <img width="230" height="120" src="http://bl.ocks.org/curran/raw/685fa8300650c4324d571c6b0ecc55de/thumbnail.png">
        </a>
    </td>
    <!-- Stopwatch (Redux) -->
    <td>
        <div>
          <a href="http://bl.ocks.org/curran/593ffae30c42789a9af36f08c983867e">Stopwatch (Redux)</a> | <a href="https://bl.ocks.org/micahstubbs/8e94f74c7d0a5dec710330574781fda0">ES6 version</a>
        </div>
        <a href="http://bl.ocks.org/curran/593ffae30c42789a9af36f08c983867e">
          <img width="230" height="120" src="http://bl.ocks.org/curran/raw/593ffae30c42789a9af36f08c983867e/thumbnail.png">
        </a>
    </td>
  </tr>
  <tr>
    <!-- Counter (Redux) -->
    <td>
      <div>
        <a href="http://bl.ocks.org/curran/acde35df0c7939ff97740b4f9800258e">Counter (Redux)</a> | <a href="https://bl.ocks.org/micahstubbs/04df008db0b12474a726a7986d73ad14">ES6 version</a>
      </div>
      <a href="http://bl.ocks.org/curran/acde35df0c7939ff97740b4f9800258e">
        <img width="230" height="120" src="http://bl.ocks.org/curran/raw/acde35df0c7939ff97740b4f9800258e/thumbnail.png">
      </a>
    </td>
    <!-- Todos -->
    <td>
      <a href="http://bl.ocks.org/curran/d8639546697c7ae3ab46c2544683d53a">
        <div>Todos</div>
        <img width="230" height="120" src="http://bl.ocks.org/curran/raw/d8639546697c7ae3ab46c2544683d53a/thumbnail.png">
      </a>
    </td>
    <!-- Scatter Plot with Menus (Redux) -->
    <td>
      <div>
        <a href="http://bl.ocks.org/curran/8c131a74b85d0bb0246233de2cff3f52">Scatter Plot with Menus (Redux)</a>
        <br>
        <a href="http://bl.ocks.org/micahstubbs/9180020ff8265eade016a82ba54db26b">ES6 version</a> | <a href="http://bl.ocks.org/micahstubbs/b097f9d0999848ee70b74b36ce30cbb8">Radius select variant</a>
      </div>
      <a href="http://bl.ocks.org/curran/8c131a74b85d0bb0246233de2cff3f52">
        <img width="230" height="120" src="https://cloud.githubusercontent.com/assets/68416/23792933/ff5f7142-05ae-11e7-97dc-9489438dc3e6.png">
      </a>
    </td>
  </tr>
  <tr>
    <!-- Clock -->
    <td>
      <a href="http://bl.ocks.org/curran/28047fcfeb11cc0c66d10e7f30e1fe22">
        <div>Clock</div>
        <img width="230" height="120" src="http://bl.ocks.org/curran/raw/28047fcfeb11cc0c66d10e7f30e1fe22/thumbnail.png">
      </a>
    </td>
    <!-- Airport Clocks -->
    <td>
      <a href="http://bl.ocks.org/curran/598e90fe0dcab73030dbecc38fb6e725">
        <div>Airport Clocks</div>
        <img width="230" height="120" src="http://bl.ocks.org/curran/raw/598e90fe0dcab73030dbecc38fb6e725/thumbnail.png">
      </a>
    </td>
    <!-- example-viewer -->
    <td>
      <a href="https://github.com/curran/example-viewer">
        <div>example-viewer (Redux, ES6)</div>
        <img width="230" height="120" src="https://cloud.githubusercontent.com/assets/68416/24115062/2e694866-0dc8-11e7-8dee-73bfcb42ff13.png">
      </a>
    </td>
  </tr>
  <tr>
    <!-- Fractal Pie Chart -->
    <td>
      <a href="http://bl.ocks.org/curran/2aafab81bb2029e1f4f24d258b790ce4">
        <div>Fractal Pie Chart (ES6)</div>
        <img width="230" height="120" src="http://bl.ocks.org/curran/raw/2aafab81bb2029e1f4f24d258b790ce4/thumbnail.png">
      </a>
    </td>
  </tr>
</table>

Using this component abstraction, you can easily encapsulate data-driven user interface components as conceptual "boxes-within-boxes", cleanly isolating concerns for various levels of your DOM tree. This component abstraction is similar in concept and functionality to [React Stateless Functional Components](https://hackernoon.com/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc#.dc21r5uj4). Everything a component needs to render itself and interact with application state gets passed down through the component tree at render time. Components don't store any local state; this is the main difference between d3-component and the [Towards Reusable Charts](https://bost.ocks.org/mike/chart/) pattern. No special treatment is given to events or event delegation, because the intended use is within a unidirectional data flow architecture like [Redux](http://redux.js.org/).

## Installing

If you use NPM, `npm install d3-component`. Otherwise, download the [latest release](https://github.com/curran/d3-component/releases/latest). You can also load directly from [unpkg.com](https://unpkg.com) as a [standalone library](https://unpkg.com/d3-component@1). AMD, CommonJS, and vanilla environments are supported. In vanilla, a `d3` global is exported:

```html
<script src="https://unpkg.com/d3@4"></script>
<script src="https://unpkg.com/d3-component@3"></script>
<script>
  var myComponent = d3.component("div");
</script>
```

## API Reference

**Note:** There was a recent [major version release](https://github.com/curran/d3-component/releases/tag/v3.0.0), and along with it there were substantial [API Changes](https://github.com/curran/d3-component/issues/70).

In summary, the API looks like this:

```js
var myComponent = d3.component("div", "some-class")
  .create((selection, d, i) => { ... }) // Invoked for entering component instances.
  .render((selection, d, i) => { ... }) // Invoked for entering AND updating component instances.
  .destroy((selection, d, i) => { ... }); // Invoked for exiting instances, may return a transition.

// To invoke the component,
d3.select("body") // create a selection with a single element,
  .call(myComponent, "Hello d3-component!"); // then use selection.call().
```

To see the full API in action, check out this ["Hello d3-component" example](https://bl.ocks.org/curran/c3d9783e641636479fa8e07a480e7233).

<a href="#component" name="component">#</a> <b>component</b>(<i>tagName</i>[, <i>className</i>]))

Creates a new component generator that manages and renders into DOM elements of the specified *tagName*.

The optional parameter *className* determines the value of the `class` attribute on the DOM elements managed.

<a href="#component_create" name="component_create" >#</a> <i>component</i>.<b>create</b>(<i>function(selection, d, i)</i>)

Sets the create *function* of this component generator, which will be invoked whenever a new component instance is created, being passed a *selection* containing the current DOM element, the current datum (*d*), and the index of the current datum (*i*).

<a href="#component_render" name="component_render" >#</a> <i>component</i>.<b>render</b>(<i>function(selection, d, i)</i>)

Sets the render *function* of this component generator. This *function* will be invoked for each component instance during rendering, being passed a *selection* containing the current DOM element, the current datum (*d*), and the index of the current datum (*i*).

<a href="#component_destroy" name="component_destroy" >#</a> <i>component</i>.<b>destroy</b>(<i>function(selection, d, i)</i>)

Sets the destroy *function* of this component generator, which will be invoked whenever a component instance is destroyed, being passed a *selection* containing the current DOM element, the current datum (*d*), and the index of the current datum (*i*).

When a component instance gets destroyed, the destroy *function* of all its children is also invoked (recursively), so you can be sure that this *function* will be invoked before the compoent instance is removed from the DOM.

The destroy *function* may optionally return a transition, which will defer DOM element removal until after the transition is finished (but only if the parent component instance is not destroyed). Deeply nested component instances may have their DOM nodes removed before the transition completes, so it's best not to depend on the DOM node existing after the transition completes.

<a href="#component_key" name="component_key" >#</a> <i>component</i>.<b>key</b>(<i>function</i>)

Sets the key *function* used in the internal [data join](https://github.com/d3/d3-selection#selection_data) when managing DOM elements for component instances. Specifying a key *function* is optional (the array index is used as the key by default), but will make re-rendering more efficient in cases where *data* arrays get reordered or spliced over time.

<a href="#component_invoke" name="component_invoke" >#</a> <i>component</i>(<i>selection</i>[,<i>data</i>[,<i>context</i>]])

Renders the component to the given *selection*, a D3 selection containing a single DOM element. A raw DOM element may also be passed in as the *selection* argument. Returns a D3 selection containing the merged Enter and Update selections for component instances.

 * If *data* is specified and is an array, one component instance will be rendered for each element of the array, and the *[render function](component_render)* will receive a single element of the *data* array as its *d* argument.
   * **Useful case:** If *data* is specified as an empty array `[]`, all previously rendered component instances will be removed.
 * If *data* is specified and is not an array, exactly one component instance will be rendered, and the *[render function](component_render)* will receive the *data* value as its *d* argument.
 * If *data* is not specified, exactly one component instance will be rendered, and the *[render function](component_render)* will receive `undefined` as its *d* argument.

In summary, components can be rendered using the following signatures:

 * `selection.call(myComponent, dataObject)` → One instance, render function *d* will be `dataObject`.
 * `selection.call(myComponent, dataArray)` → `dataArray.length` instances, render function *d* will be `dataArray[i]`
 * `selection.call(myComponent)` → One instance, render function *d* will be `undefined`.

If a *context* object is specified, each data element in the data array will be shallow merged into a new object whose prototype is the *context* object, and the resulting array will be used in place of the *data* array. This is useful for passing down callback functions through your component tree. To clarify, the following two invocations are equivalent:

```js
var context = {
  onClick: function (){ console.log("Clicked!");
};
selection.call(myComponent, dataArray.map(function (d){
  return Object.assign(Object.create(context), d);
}));
```

```js
var context = {
  onClick: function (){ console.log("Clicked!");
};
selection.call(myComponent, dataArray, context);
```
