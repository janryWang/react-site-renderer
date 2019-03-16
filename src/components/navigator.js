import React, { useContext } from 'react'
import { Link } from '@reach/router'
import styled, { withTheme } from 'styled-components'

const isActive = home => ({ isPartiallyCurrent, isCurrent }) => {
  if (home) return isCurrent ? { className: 'active' } : null
  return isPartiallyCurrent ? { className: 'active' } : null
}

export default withTheme(styled(({ dataSource, className, theme }) => (
  <ul className={`site-navigator ${className}`}>
    {dataSource.map(({ title, slug, home }) => {
      return (
        <li className="nav-item" key={slug}>
          <Link getProps={isActive(home)} to={home ? '/' : `/${slug}`}>
            {title}
          </Link>
        </li>
      )
    })}
  </ul>
))`
  display: block;
  list-style: none;
  padding: 0;
  margin: 0;
  white-space: nowrap;
  flex-shrink: 3;
  min-width: 0;
  overflow: auto;
  li {
    display: inline-block;
    position: relative;
    a {
      color: #666;
      text-decoration: none;
      padding: 0 15px;
      height: 57px;
      line-height: 60px;
      display: block;
      border-bottom: 3px solid transparent;
      transition: all 0.35s ease-out;
      &:hover {
        color: ${({ theme }) => theme.base};
      }
      &.active {
        background: ${({ theme }) => theme.main[0]};
        border-bottom: 3px solid ${({ theme }) => theme.main[3]};
        color: ${({ theme }) => theme.base};
      }
    }
  }
`)
