import React from 'react'

const DEFAULT_LAYOUT = {
  width: 0,
  height: 0,
  x: 0,
  y: 0,
}

const useLayout = () => {
  const [tabLayout, setTabLayout] = React.useState(DEFAULT_LAYOUT)
  const [barLayout, setBarLayout] = React.useState(DEFAULT_LAYOUT)

  const [isVisible, visibility] = React.useState(false)

  const onHoverStart = (layout: typeof DEFAULT_LAYOUT) => {
    visibility(true)
    setBarLayout(layout)
  }

  const onHoverEnd = () => {
    visibility(false)
  }

  const onLayout = (layout: typeof DEFAULT_LAYOUT) => {
    setTabLayout(layout)
  }

  return {
    tabLayout,
    barLayout,

    isVisible,

    onLayout,
    onHoverEnd,
    onHoverStart,
  }
}

export default useLayout
