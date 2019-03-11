import React, { useContext } from 'react'
import { Link, Router } from '@reach/router'
import SiteContext from '../shared/context'
import styled from 'styled-components'
import { isArr } from '../shared/types'

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
  if (doc && doc.children && doc.children.length && doc.children[0]) {
    if (doc.children[0].component) {
      return doc.children[0].component
    } else {
      return getDefaultComponent(doc.children[0])
    }
  }
  return (doc && doc.component) || CanNotFindDocContent
}

const SideMenu = ({ dataSource }) => {
  dataSource = toArr(dataSource)
  const content = dataSource.map(({ title, slug, component, children }) => {
    return (
      <li key={slug}>
        {component ? (
          <Link className="menu-node" getProps={isActive} to={slug}>
            {title}
          </Link>
        ) : (
          <span className="menu-node">{title}</span>
        )}
        <SideMenu dataSource={children} />
      </li>
    )
  })
  if (dataSource.length) {
    return <ul>{content}</ul>
  } else {
    return <React.Fragment />
  }
}

export default styled(({ doc, className, path }) => {
  return (
    <div className={className}>
      <div className="site-nav">
        <SideMenu dataSource={doc.children} />
      </div>
      <div className="site-body">
        <Router>
          {doc.component
            ? React.createElement(doc.component, { path: '/' })
            : React.createElement(getDefaultComponent(doc), { path: '/' })}
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
})``
