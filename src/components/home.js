import React, { useContext } from 'react'
import styled from 'styled-components'

const toArr = val => (Array.isArray(val) ? val : val ? [val] : [])

export default styled(({ className, dataSource }) => {
  return (
    <div className={className}>
      {toArr(dataSource).map((doc, i) => {
        return React.createElement(doc.component, { key: doc.slug + i })
      })}
    </div>
  )
})``
