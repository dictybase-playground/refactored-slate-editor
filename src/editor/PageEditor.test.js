import React from "react"
import { shallow } from "enzyme"
import { Editor } from "slate-react"

import PageEditor, { renderMark, renderNode } from "./PageEditor"
import EditorToolbar from "./toolbar/EditorToolbar"
import { BoldMark } from "./plugins/bold"
import { ItalicMark } from "./plugins/italic"
import { StrikethroughMark } from "./plugins/strikethrough"
import { UnderlineMark } from "./plugins/underline"
import { AlignmentNode } from "./plugins/alignment"
import {
  ListItemNode,
  OrderedListNode,
  UnorderedListNode,
} from "./plugins/list"

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
