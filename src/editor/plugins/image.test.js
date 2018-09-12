import React from "react"
import { shallow } from "enzyme"

import { ImagePlugin, ImageNode, ImageButton } from "./image"
import ToolbarButton from "editor/toolbar/ToolbarButton"

describe("editor/plugins/image", () => {
  // describe("ImageNode", () => {
  //   const props = {
  //     node: {
  //       data: {
  //         src: "google.com",
  //       },
  //     },
  //   }
  //   const wrapper = shallow(<ImageNode {...props}>test</ImageNode>)

  //   it("should render a img", () => {
  //     expect(wrapper.find("img").length).toBe(1)
  //   })

  //   it("should render correct children", () => {
  //     expect(wrapper.contains("test")).toBe(true)
  //   })
  // })

  describe("ImageButton", () => {
    const wrapper = shallow(<ImageButton />)

    describe("initial render", () => {
      it("always renders a ToolbarButton", () => {
        expect(wrapper.find(ToolbarButton).length).toBe(1)
      })
    })
  })

  // describe("ImagePlugin", () => {

  // })
})
