import React, { useContext } from 'react'
import { Link } from '@reach/router'
import styled from 'styled-components'

const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: 'active' } : null
}

export default styled(({ dataSource, className }) => (
  <div className={className}>
    <ul className="nav-list">
      {dataSource.map(({ title, slug, home }) => {
        return (
          <li className="nav-item" key={slug}>
            <Link getProps={isActive} to={home ? '/' : `/${slug}`}>
              {title}
            </Link>
          </li>
        )
      })}
    </ul>
  </div>
))``
