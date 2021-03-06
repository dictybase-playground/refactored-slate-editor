import React from "react"
import { shallow } from "enzyme"
import { Editor } from "slate-react"

import PageEditor, { renderMark, renderNode } from "./PageEditor"
import EditorToolbar from "./toolbar/EditorToolbar"
import { BoldMark } from "./plugins/bold"
import { FontFamilyMark } from "./plugins/fontfamily"
import { ItalicMark } from "./plugins/italic"
import { StrikethroughMark } from "./plugins/strikethrough"
import { UnderlineMark } from "./plugins/underline"
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

describe("editor/PageEditor", () => {
  describe("initial render", () => {
    const wrapper = shallow(<PageEditor />)

    it("always renders an EditorToolbar", () => {
      expect(wrapper.find(EditorToolbar).length).toBe(1)
    })
    it("always renders an Editor", () => {
      expect(wrapper.find(Editor).length).toBe(1)
    })
  })

  describe("renderMark", () => {
    it("should return BoldMark when type is bold", () => {
      const props = {
        mark: {
          type: "bold",
        },
      }
      expect(renderMark(props)).toEqual(<BoldMark {...props} />)
    })

    it("should return ItalicMark when type is italic", () => {
      const props = {
        mark: {
          type: "italic",
        },
      }
      expect(renderMark(props)).toEqual(<ItalicMark {...props} />)
    })

    it("should return UnderlineMark when type is underline", () => {
      const props = {
        mark: {
          type: "underline",
        },
      }
      expect(renderMark(props)).toEqual(<UnderlineMark {...props} />)
    })

    it("should return StrikethroughMark when type is strikethrough", () => {
      const props = {
        mark: {
          type: "strikethrough",
        },
      }
      expect(renderMark(props)).toEqual(<StrikethroughMark {...props} />)
    })

    it("should return FontFamilyMark when type is font-family", () => {
      const props = {
        mark: {
          type: "font-family",
        },
      }
      expect(renderMark(props)).toEqual(<FontFamilyMark {...props} />)
    })

    it("should return null when type is something else", () => {
      const props = {
        mark: {
          type: "nothing",
        },
      }
      expect(renderMark(props)).toEqual(null)
    })
  })

  describe("renderNode", () => {
    it("should return AlignmentNode when type is alignment", () => {
      const props = {
        node: {
          type: "alignment",
        },
      }

      expect(renderNode(props)).toEqual(<AlignmentNode {...props} />)
    })

    it("should return ListItemNode when type is list-item", () => {
      const props = {
        node: {
          type: "list-item",
        },
      }

      expect(renderNode(props)).toEqual(<ListItemNode {...props} />)
    })

    it("should return OrderedListNode when type is ordered-list", () => {
      const props = {
        node: {
          type: "ordered-list",
        },
      }

      expect(renderNode(props)).toEqual(<OrderedListNode {...props} />)
    })

    it("should return UnorderedListNode when type is unordered-list", () => {
      const props = {
        node: {
          type: "unordered-list",
        },
      }

      expect(renderNode(props)).toEqual(<UnorderedListNode {...props} />)
    })

    it("should return H1Node when type is alignment", () => {
      const props = {
        node: {
          type: "h1",
        },
      }

      expect(renderNode(props)).toEqual(<H1Node {...props} />)
    })

    it("should return H2Node when type is alignment", () => {
      const props = {
        node: {
          type: "h2",
        },
      }

      expect(renderNode(props)).toEqual(<H2Node {...props} />)
    })

    it("should return H3Node when type is alignment", () => {
      const props = {
        node: {
          type: "h3",
        },
      }

      expect(renderNode(props)).toEqual(<H3Node {...props} />)
    })

    it("should return ImageNode when type is alignment", () => {
      const props = {
        node: {
          type: "image",
        },
      }

      expect(renderNode(props)).toEqual(<ImageNode {...props} />)
    })

    it("should return LinkNode when type is alignment", () => {
      const props = {
        node: {
          type: "link",
        },
      }

      expect(renderNode(props)).toEqual(<LinkNode {...props} />)
    })

    it("should return VideoNode when type is alignment", () => {
      const props = {
        node: {
          type: "video",
        },
      }

      expect(renderNode(props)).toEqual(<VideoNode {...props} />)
    })

    it("should return a paragraph if something else", () => {
      const props = {
        node: {
          type: "nothing",
        },
      }

      expect(renderNode(props)).toEqual(<p />)
    })
  })

  // describe("onChange method", () => {
  //   const state = {
  //     value: "value",
  //   }
  //   const onChangeMock = jest.fn()
  //   const wrapper = shallow(<PageEditor onChange={onChangeMock} {...state} />)

  //   it("handles onChange correctly", () => {
  //     wrapper
  //       .find(Editor)
  //       .simulate("change", { target: { value: "new value" } })
  //     expect(onChangeMock.called).toBe(true)
  //     expect(wrapper.state("value")).toBe("new value")
  //   })
  // })
})
