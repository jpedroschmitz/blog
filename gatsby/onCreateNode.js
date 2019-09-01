/* eslint-disable strict */

'use strict';

module.exports = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    const fileNode = getNode(node.parent);
    const source = fileNode.sourceInstanceName;
    createNodeField({
      node,
      name: 'source',
      value: source,
    });
  }
};
