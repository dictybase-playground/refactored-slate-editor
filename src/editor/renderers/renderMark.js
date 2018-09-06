// @flow
import React from "react"
import { type Mark } from "slate"

import { BoldMark } from "../plugins/bold"

type Props = {
  mark: Mark,
}

const renderMark = (props: Props) => {
  const { mark } = props

  switch (mark.type) {
    case "bold":
      return <BoldMark {...props} />

    default:
      return null
  }
}

export default renderMark
