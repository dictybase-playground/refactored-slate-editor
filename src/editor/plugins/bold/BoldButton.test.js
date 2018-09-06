import React from "react"
import { mount } from "enzyme"
import BoldButton from "./BoldButton"
import ToolbarButton from "../../toolbar/ToolbarButton"

describe("editor/plugins/bold/BoldButton", () => {
  const wrapper = mount(<BoldButton />)

  describe("initial render", () => {
    it("always renders a ToolbarButton", () => {
      expect(wrapper.find(ToolbarButton).length).toBe(1)
    })
  })

  describe("handleClick", () => {
    // line 10
  })
})
