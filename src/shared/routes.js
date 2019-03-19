import React, { useContext } from 'react'
import { Router, Match, Redirect } from '@reach/router'
import styled, { createGlobalStyle } from 'styled-components'
import Header from '../components/header'
import Body from '../components/body'
import Home from '../components/home'
import cls from 'classnames'
import EmptyPage from '../components/empty'
//import Footer from '../components/footer'
import SiteContext from './context'

const GlobalStyle = createGlobalStyle`
body{
  margin:0;
}
`

export default styled(({ className }) => {
  const { homes, headers } = useContext(SiteContext)
  return (
    <Match path="/">
      {props => {
        return (
          <div className={cls(className, { home: !!props.match })}>
            <GlobalStyle />
            <Header dataSource={headers} />
            <Router>
              {homes.length === 0 && headers[0] && (
                <Redirect from="/" noThrow to={headers[0].slug} />
              )}
              <Home dataSource={homes} path="/" />
              {headers.map((doc, index) => {
                if (doc.children && doc.children.length) {
                  return <Body doc={doc} path={`${doc.slug}/*`} key={index} />
                } else if (doc.component) {
                  return React.createElement(doc.component, {
                    path: `${doc.slug}`,
                    key: index
                  })
                } else {
                  return <EmptyPage path={`${doc.slug}`} key={index} />
                }
              })}
            </Router>
          </div>
        )
      }}
    </Match>
  )
})`
  font-family: Lato, 'Chinese Quote', -apple-system, BlinkMacSystemFont,
    'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei',
    'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol';
  font-size: 14px;
`
