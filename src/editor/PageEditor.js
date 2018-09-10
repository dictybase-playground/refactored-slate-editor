import React from "react"
import { Editor } from "slate-react"
import { Value } from "slate"

import EditorToolbar from "./toolbar/EditorToolbar"
import initialValue from "./data/initialValue.json"

/** Import mark renderers */
import { BoldMark } from "./plugins/bold"
import { ItalicMark } from "./plugins/italic"
import { StrikethroughMark } from "./plugins/strikethrough"
import { UnderlineMark } from "./plugins/underline"

/** Import node renderers */
import { AlignmentNode } from "./plugins/alignment"
import {
  ListItemNode,
  OrderedListNode,
  UnorderedListNode,
} from "./plugins/list"

/** Import custom plugins */
import { AlignmentPlugin } from "./plugins/alignment"
import { BoldPlugin } from "./plugins/bold"
import { ItalicPlugin } from "./plugins/italic"
import { ListPlugin } from "./plugins/list"
import { StrikethroughPlugin } from "./plugins/strikethrough"
import { UnderlinePlugin } from "./plugins/underline"

/**
 * All of the plugins that go into our editor
 * These are generally keyboard shortcuts
 */

const plugins = [
  AlignmentPlugin(),
  BoldPlugin(),
  ItalicPlugin(),
  ListPlugin(),
  StrikethroughPlugin(),
  UnderlinePlugin(),
]

/**
 * Necessary renderMark function that receives the mark type then renders the HTML
 * In our case, we are returning custom components
 */
const renderMark = (props: Props) => {
  const { mark } = props

  switch (mark.type) {
    case "bold":
      return <BoldMark {...props} />
    case "italic":
      return <ItalicMark {...props} />
    case "strikethrough":
      return <StrikethroughMark {...props} />
    case "underline":
      return <UnderlineMark {...props} />

    default:
      return null
  }
}

/**
 * Similar to renderMark above, except now we are working with nodes.
 */
const renderNode = props => {
  const { node, attributes, children } = props
  switch (node.type) {
    case "alignment":
      return <AlignmentNode {...props} />
    case "list-item":
      return <ListItemNode {...props} />
    case "unordered-list":
      return <UnorderedListNode {...props} />
    case "ordered-list":
      return <OrderedListNode {...props} />

    default:
      return <p {...attributes}>{children}</p>
  }
}

/**
 * The main PageEditor component.
 * It displays both the toolbar and the Slate Editor component,
 * passing in value and onChange as props to both.
 */

class PageEditor extends React.Component {
  state = {
    value: Value.fromJSON(initialValue),
  }

  onChange = ({ value }) => {
    this.setState({ value })
  }

  render() {
    const { value } = this.state

    return (
      <div>
        <EditorToolbar value={value} onChange={this.onChange} />
        <br />
        <Editor
          value={value}
          onChange={this.onChange}
          renderMark={renderMark}
          renderNode={renderNode}
          plugins={plugins}
        />
      </div>
    )
  }
}

export default PageEditor
