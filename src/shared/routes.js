import React, { useContext } from 'react'
import { Router } from '@reach/router'
import styled from 'styled-components'
import Header from '../components/header'
import Body from '../components/body'
import Home from '../components/home'
//import Footer from '../components/footer'
import SiteContext from './context'

export default styled(({ className }) => {
  const { homes, headers } = useContext(SiteContext)
  return (
    <div className={className}>
      <Header dataSource={headers} />
      <Router>
        <Home dataSource={homes} path="/" />
        {headers.map(doc => {
          return <Body doc={doc} path={`${doc.slug}/*`} key={doc.slug} />
        })}
      </Router>
    </div>
  )
})`
  font-family: Lato, 'Chinese Quote', -apple-system, BlinkMacSystemFont,
    'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei',
    'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol';
  font-size: 14px;
`
