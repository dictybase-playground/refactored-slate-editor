import React from "react"
import { mount } from "enzyme"
import EditorToolbar from "./EditorToolbar"
import AppBar from "@material-ui/core/AppBar"

describe("editor/toolbar/EditorToolbar", () => {
  const wrapper = mount(<EditorToolbar />)

  describe("initial render", () => {
    it("always renders an AppBar", () => {
      expect(wrapper.find(AppBar).length).toBe(1)
    })
  })
})
