'use strict';

// const Node = require('../../../index.js').Node;
import { Node } from 'butterfly-dag';
// const Node = require('../../../services/butterflies/src/node/baseNode');
import $ from 'jquery';
import './node.less';

class BaseNode extends Node {
  constructor(opts) {
    super(opts);
    this.id = opts.id;
    this.top = opts.x;
    this.left = opts.y;
    this.options = opts;
  }
  draw = (opts) => {
    let container = $('<div class="fruchterman-node"></div>')
                    .css('top', this.top + 'px')
                    .css('left', this.left+ 'px')
                    .attr('id',  this.id = opts.id);
    container.text(opts.options.id);

    return container[0];
  }
}

export default BaseNode;
