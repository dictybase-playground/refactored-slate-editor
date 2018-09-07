import React from "react"
import { shallow } from "enzyme"
import { Editor } from "slate-react"

import PageEditor from "./PageEditor"
import EditorToolbar from "./toolbar/EditorToolbar"

describe("editor/PageEditor", () => {
  const wrapper = shallow(<PageEditor />)

  describe("initial render", () => {
    it("always renders an EditorToolbar", () => {
      expect(wrapper.find(EditorToolbar).length).toBe(1)
    })
    it("always renders an Editor", () => {
      expect(wrapper.find(Editor).length).toBe(1)
    })
  })

  describe("renderMark", () => {
    // write test for renderMark
    // should display BoldMark when props.mark.type is "bold"
  })

  describe("onChange method", () => {
    // test what happens to value onChange
    // use slate-simulator?
  })
})
