import React from "react"
import { shallow } from "enzyme"
import { BoldButton, BoldPlugin, BoldMark } from "./bold"

describe("editor/plugins/bold", () => {
  describe("BoldMark", () => {
    const wrapper = shallow(<BoldMark>test</BoldMark>)

    it("should make text bold", () => {
      expect(wrapper.find("strong").length).toBe(1)
    })

    it("should render correct children", () => {
      expect(wrapper.props().children).toBe("test")
    })
  })

  describe("handleClick", () => {
    // what happens when user clicks button?
  })

  describe("BoldButton", () => {
    // what happens when user clicks button?
  })

  describe("BoldKeyboardShortcut", () => {
    // what happens when user types keyboard shortcut?
  })
})
