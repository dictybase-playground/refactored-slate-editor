import React from "react"
import { shallow } from "enzyme"
import PageEditor from "./PageEditor"
import { Editor } from "slate-react"

describe("editor/PageEditor", () => {
  const wrapper = shallow(<PageEditor />)

  describe("initial render", () => {
    it("always renders an Editor", () => {
      expect(wrapper.find(Editor).length).toBe(1)
    })
  })

  describe("onChange method", () => {
    // line 16
  })
})
