import React, { useContext, useState } from 'react'
import { Link, Router, Redirect, Match } from '@reach/router'
import SiteContext from '../shared/context'
import styled, { withTheme } from 'styled-components'
import { isArr } from '../shared/types'
import { FiMenu, FiX, FiExternalLink } from 'react-icons/fi'
import EmptyPage from './empty'
import cls from 'classnames'
import Sticky from 'react-stikky'
import Elevator from './elevator'

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

const getDefaultComponent = doc => {
  return props => (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Elevator>
        {React.createElement(doc && doc.component ? doc.component : EmptyPage)}
      </Elevator>
    </React.Suspense>
  )
  return (doc && doc.component) || EmptyPage
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
      notSticky: window.innerWidth <= 690
    }
  } else {
    return {
      menuOffset: 0,
      notSticky: window.innerWidth <= 690
    }
  }
}

const SideMenu = ({ dataSource, paddingLeft, autoIndex }) => {
  dataSource = toArr(dataSource)
  const content = dataSource.map(
    ({ title, slug, component, link, children }) => {
      return (
        <li key={slug} style={{ paddingLeft }}>
          {component ? (
            <React.Fragment>
              {link && (
                <a className="menu-node" href={link} target="_blank">
                  {title}
                  <FiExternalLink style={{ marginLeft: 4, fontSize: 10 }} />
                </a>
              )}
              {!link && (
                <Link className="menu-node" getProps={isActive} to={slug}>
                  <span>{title}</span>
                </Link>
              )}
            </React.Fragment>
          ) : (
            <React.Fragment>
              {link && (
                <a className="menu-node" href={link} target="_blank">
                  {title}
                  <FiExternalLink style={{ marginLeft: 4, fontSize: 10 }} />
                </a>
              )}
              {!link && <span className="menu-node no-page">{title}</span>}
            </React.Fragment>
          )}
          <SideMenu dataSource={children} paddingLeft={paddingLeft} />
        </li>
      )
    }
  )
  if (dataSource.length) {
    return <ul>{content}</ul>
  } else {
    return <React.Fragment />
  }
}

export default withTheme(styled(({ doc, className, path, uri }) => {
  const { docs } = useContext(SiteContext)
  const [menuVisible, seMenuVisible] = useState(false)
  return (
    <div
      className={cls(className, { 'menu-visible': menuVisible })}
      ref={bodyRef}
    >
      {doc.children && doc.children.length && (
        <Sticky edge="top" createState={getStickyState}>
          {({ isSticky, menuOffset, unsticky }) => (
            <div
              className="site-nav"
              style={{
                height: isSticky
                  ? window.innerHeight - 70
                  : window.innerHeight - 150,
                overflow: 'auto'
              }}
            >
              <SideMenu dataSource={doc.children} paddingLeft={30} />
            </div>
          )}
        </Sticky>
      )}
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
      <div
        className="body-menu-btn"
        onClick={() => seMenuVisible(!menuVisible)}
      >
        {React.createElement(!menuVisible ? FiMenu : FiX, {
          style: { fontSize: 26 },
          strokeWidth: 1
        })}
      </div>
    </div>
  )
})`
  display: flex;
  margin-top:20px;
  .sticky-wrapper {
    width: 300px;
    transition: all 0.15s ease-in-out;
    flex-shrink: 0;
    @media (max-width: 860px) {
      width: 210px;
    }
    @media (max-width: 690px) {
      display: none;
    }
  }
  &.menu-visible .sticky-wrapper {
    display: block;
    position: fixed;
    width: 100%;
    height: 100% !important;
    overflow: auto;
    z-index: 10;
    top: 0;
    left: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.98);
    .site-nav {
      width: 100% !important;
      height: auto !important;
    }
  }
  .body-menu-btn {
    position: fixed;
    bottom: 40px;
    right: 20px;
    width: 50px;
    height: 50px;
    display: none;
    cursor: pointer;
    justify-content: center;
    z-index: 11;
    align-items: center;
    border-radius: 100px;
    background: #fff;
    box-shadow: 0 0 14px #8c8c8c61;
    color: ${props => props.theme.main[3]};
    @media (max-width: 690px) {
      display: flex;
    }
  }
  .site-nav {
    width: 300px;
    border-right: 1px solid #eee;
    padding-top: 30px;
    padding-bottom: 30px;
    min-height: 300px;
    @media (max-width: 860px) {
      width: 210px;
    }
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
          color: ${props => props.theme.base};
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
        }
      }
    }
  }
  .site-body {
    max-width: calc(100% - 360px);
    padding: 30px;
    flex-grow: 3;
    @media (max-width: 860px) {
       max-width: calc(100% - 270px);
    }
    @media (max-width: 690px) {
      max-width: calc(100% - 60px);
    }
  }
`)
