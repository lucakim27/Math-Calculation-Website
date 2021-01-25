/**
* math.js
* https://github.com/josdejong/mathjs
*
* Math.js is an extensive math library for JavaScript and Node.js,
* It features real and complex numbers, units, matrices, a large set of
* mathematical functions, and a flexible expression parser.
*
* @version 9.0.0
* @date    2021-01-16
*
* @license
* Copyright (C) 2013-2021 Jos de Jong <wjosdejong@gmail.com>
*
* Licensed under the Apache License, Version 2.0 (the "License"); you may not
* use this file except in compliance with the License. You may obtain a copy
* of the License at
*
* https://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
* WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
* License for the specific language governing permissions and limitations under
* the License.
*/

/**
* plotly.js v1.35.2
* Copyright 2012-2018, Plotly, Inc.
* All rights reserved.
* Licensed under the MIT license
*/

/**
Copyright (c) 2015 Martin Donk

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

function draw() {
    try {
      const expression = document.getElementById('eq').value
      var input = expression.replace(/\s/g, '');
      var sol = nerdamer.solveEquations(input, 'x');
      document.getElementById("demo").innerHTML = sol;
      const expr = math.compile(expression)

      const xValues = math.range(-10, 10, 0.5).toArray()
      const yValues = xValues.map(function (x) {
        return expr.evaluate({x: x})
      })

      const trace1 = {
        x: xValues,
        y: yValues,
        type: 'scatter'
      }
      const data = [trace1]
      Plotly.newPlot('plot', data)
    }
    catch (err) {
      console.error(err)
      alert(err)
    }
  }

  document.getElementById('form').onsubmit = function (event) {
    event.preventDefault()
    draw()
  }

  draw()
