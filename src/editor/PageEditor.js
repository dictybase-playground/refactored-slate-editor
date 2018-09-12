import React from "react"
import { Editor, getEventTransfer } from "slate-react"
import { Value } from "slate"

import EditorToolbar from "./toolbar/EditorToolbar"
import initialValue from "./data/initialValue.json"
import { onPasteHtml, onPasteText } from "./utils/utils"

/** Import mark renderers */
import { BoldMark } from "./plugins/bold"
import { FontFamilyMark } from "./plugins/fontfamily"
import { ItalicMark } from "./plugins/italic"
import { StrikethroughMark } from "./plugins/strikethrough"
import { UnderlineMark } from "./plugins/underline"

/** Import node renderers */
import { AlignmentNode } from "./plugins/alignment"
import { H1Node, H2Node, H3Node } from "./plugins/heading"
import { ImageNode } from "./plugins/image"
import { LinkNode } from "./plugins/link"
import {
  ListItemNode,
  OrderedListNode,
  UnorderedListNode,
} from "./plugins/list"
import { VideoNode } from "./plugins/video"

/** Import custom plugins */
import { AlignmentPlugin } from "./plugins/alignment"
import { BoldPlugin } from "./plugins/bold"
import { HeadingPlugin } from "editor/plugins/heading"
import { ImagePlugin } from "./plugins/image"
import { ItalicPlugin } from "./plugins/italic"
import { LinkPlugin } from "./plugins/link"
import { ListPlugin } from "./plugins/list"
import { StrikethroughPlugin } from "./plugins/strikethrough"
import { UnderlinePlugin } from "./plugins/underline"
import { VideoPlugin } from "./plugins/video"

/**
 * All of the plugins that go into our editor
 * These are generally keyboard shortcuts
 */

const plugins = [
  AlignmentPlugin(),
  BoldPlugin(),
  HeadingPlugin(),
  ImagePlugin(),
  ItalicPlugin(),
  LinkPlugin(),
  ListPlugin(),
  StrikethroughPlugin(),
  UnderlinePlugin(),
  VideoPlugin(),
]

/**
 * Necessary renderMark function that receives the mark type then renders the HTML
 * In our case, we are returning custom components
 */
export const renderMark = (props: Props) => {
  const { mark } = props

  switch (mark.type) {
    case "bold":
      return <BoldMark {...props} />
    case "font-family":
      return <FontFamilyMark {...props} />
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
export const renderNode = props => {
  const { node, attributes, children } = props
  switch (node.type) {
    case "alignment":
      return <AlignmentNode {...props} />
    case "h1":
      return <H1Node {...props} />
    case "h2":
      return <H2Node {...props} />
    case "h3":
      return <H3Node {...props} />
    case "image":
      return <ImageNode {...props} />
    case "link":
      return <LinkNode {...props} />
    case "list-item":
      return <ListItemNode {...props} />
    case "unordered-list":
      return <UnorderedListNode {...props} />
    case "ordered-list":
      return <OrderedListNode {...props} />
    case "video":
      return <VideoNode {...props} />

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

  onPaste = (e, change) => {
    const transfer = getEventTransfer(e)
    const { type } = transfer
    switch (type) {
      case "text":
        return onPasteText(e, change)
      case "html":
        return onPasteHtml(e, change)
      default:
        break
    }
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
          onPaste={this.onPaste}
          renderMark={renderMark}
          renderNode={renderNode}
          plugins={plugins}
        />
      </div>
    )
  }
}

export default PageEditor
