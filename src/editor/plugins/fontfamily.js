import React from "react"

/**
 * List of fonts available
 */
const FontFamilyList = [
  { name: "Roboto Condensed", options: "400,400i,700,700i" },
  { name: "Roboto Mono", options: "400,400i,700,700i" },
  { name: "Roboto Slab", options: "400,700" },
  { name: "Roboto", options: "400,400i,700,700i" },
]

/**
 * Functions to set the font family marks.
 */
const hasMark = value => value.marks.some(mark => mark.type === "font-family")
const getMark = value =>
  value.marks.filter(mark => mark.type === "font-family").first()

const createMark = fontFamilyIndex => ({
  type: "font-family",
  data: { fontFamilyIndex },
})

const reapplyMark = ({ change, fontFamilyIndex }) =>
  change.removeMark(getMark(change.value)).addMark(createMark(fontFamilyIndex))

const applyMark = ({ change, fontFamilyIndex }) =>
  change.addMark(createMark(fontFamilyIndex))

const fontFamilyMarkStrategy = attributes => {
  const { value, fontFamilyIndex } = attributes

  if (hasMark(value)) {
    if (value.isExpanded) {
      return reapplyMark({ change: value.change(), fontFamilyIndex })
    }
  } else {
    if (value.isExpanded) {
      return applyMark({ change: value.change(), fontFamilyIndex })
    }
    console.log("nada")
    return applyMark({ change: value.change(), fontFamilyIndex })
  }

  return value.change()
}

/**
 * Rendering components that provide the actual HTML to use inside the editor.
 */
const FontFamilyMark = ({ children, mark: { data } }) => (
  <span
    style={{ fontFamily: FontFamilyList[data.get("fontFamilyIndex")].name }}>
    {children}
  </span>
)

/**
 * Dropdown component that connects to the editor.
 */
const FontFamilyDropdown = ({ value, onChange }) => {
  const handleChange = ({ target: { value: fontFamilyIndex } }) => {
    onChange(fontFamilyMarkStrategy({ value, fontFamilyIndex }))
  }

  return (
    <select onChange={handleChange}>
      {FontFamilyList.map((font, index) => (
        <option key={`font-family-${index}`} value={index}>
          {font.name}
        </option>
      ))}
    </select>
  )
}

/**
 * Export everything needed for the editor.
 */
export { FontFamilyMark, FontFamilyDropdown }
