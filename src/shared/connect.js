import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './theme'

export default () => Target => {
  return props => {
    return (
      <ThemeProvider theme={theme(props.color)}>
        <Target {...props} />
      </ThemeProvider>
    )
  }
}
