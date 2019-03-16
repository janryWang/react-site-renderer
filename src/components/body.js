import React, { useContext } from 'react'
import { Link, Router, Redirect } from '@reach/router'
import SiteContext from '../shared/context'
import styled, { withTheme } from 'styled-components'
import { isArr } from '../shared/types'
import Sticky from 'react-stikky'

const bodyRef = React.createRef()

const toArr = val => (Array.isArray(val) ? val : val ? [val] : [])

const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: 'active' } : null
}

const flatMap = (arr, callback) => {
  const result = []
  const _flatMap = node => {
    if (isArr(node)) {
      node.forEach(_flatMap)
    } else if (node) {
      if (isArr(node.children) && node.children.length) {
        _flatMap(node.children)
      }
      result.push(callback(node))
    }
  }
  _flatMap(arr)
  return result
}

const CanNotFindDocContent = () => <div>Can not find document contents.</div>

const getDefaultComponent = doc => {
  return (doc && doc.component) || CanNotFindDocContent
}

const getStartDocPath = doc => {
  if (doc && doc.children) {
    if (doc.children[0]) {
      if (doc.children[0].component) {
        return doc.children[0].slug
      } else {
        return getStartDocPath(doc.children[0])
      }
    }
  }
}

const getStickyState = () => {
  if (!bodyRef || (bodyRef && !bodyRef.current)) return
  const wrapper = bodyRef.current
  const wrapperRect = wrapper.getBoundingClientRect()
  const offset =
    window.pageYOffset +
    window.innerHeight -
    wrapperRect.height -
    wrapper.offsetTop
  if (offset > 0) {
    return {
      menuOffset: offset,
      notSticky: window.innerWidth <= 710
    }
  } else {
    return {
      menuOffset: 0,
      notSticky: window.innerWidth <= 710
    }
  }
}

const SideMenu = ({ dataSource, paddingLeft, autoIndex }) => {
  dataSource = toArr(dataSource)
  const content = dataSource.map(({ title, slug, component, children }) => {
    return (
      <li key={slug} style={{ paddingLeft }}>
        {component ? (
          <Link className="menu-node" getProps={isActive} to={slug}>
            <span>{title}</span>
          </Link>
        ) : (
          <span className="menu-node no-page">{title}</span>
        )}
        <SideMenu dataSource={children} paddingLeft={paddingLeft + 10} />
      </li>
    )
  })
  if (dataSource.length) {
    return <ul>{content}</ul>
  } else {
    return <React.Fragment />
  }
}

export default withTheme(styled(({ doc, className, path, uri }) => {
  return (
    <div className={className} ref={bodyRef}>
      <Sticky edge="top" createState={getStickyState}>
        {({ isSticky, menuOffset, unsticky }) => (
          <div
            className="site-nav"
            style={{
              height: isSticky
                ? window.innerHeight - 60
                : window.innerHeight - 140,
              overflow: 'auto'
            }}
          >
            <SideMenu dataSource={doc.children} paddingLeft={30} />
          </div>
        )}
      </Sticky>
      <div className="site-body">
        <Router>
          {doc.component ? (
            React.createElement(doc.component, { path: '/' })
          ) : (
            <Redirect from="/" noThrow to={`${uri}/${getStartDocPath(doc)}`} />
          )}
          {flatMap(doc.children, childDoc => {
            return React.createElement(getDefaultComponent(childDoc), {
              path: childDoc.slug,
              key: childDoc.slug
            })
          })}
        </Router>
      </div>
    </div>
  )
})`
  display: flex;
  .sticky-wrapper{
    width:300px;
  }
  .site-nav {
    min-width: 300px;
    border-right: 1px solid #eee;
    padding-top: 30px;
    padding-bottom:30px;
    min-height: 300px;
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    li {
      span.menu-node {
        text-decoration: none;
        color: #333;
        font-size: 14px;
        line-height: 25px;
        min-height: 40px;
        padding-right: 10px;
        display: flex;
        align-items: center;
      }
      .menu-node.no-page {
        color: #777;
      }
      a {
        text-decoration: none;
        color: #333;
        font-size: 14px;
        line-height: 25px;
        display: flex;
        min-height: 40px;
        padding-right: 10px;
        align-items: center;
        position: relative;
        z-index: 1;
        transition: all 0.25s ease-out;
        border-right: 0px solid transparent;
        span {
          display: block;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          position: relative;
          z-index: 1;
        }
        &:hover {
          color: ${props => props.theme.base};
        }

        &.active {
          border-right: 3px solid ${props => props.theme.base};
          position: relative;
          &::after {
            content: '';
            display: block;
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            width: 200%;
            background: ${props => props.theme.main[1]};
            opacity: 0.4;
            z-index: 0;
          }
          a {
            color: ${props => props.theme.base};
          }
        }
      }
    }
  }
  .site-body {
    padding: 30px;
    flex-grow: 3;
  }
`)
