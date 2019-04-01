import React, { useContext, useState, useRef } from 'react'
import { Link, Match } from '@reach/router'
import styled, { withTheme } from 'styled-components'
import { FiMenu, FiX, FiExternalLink } from 'react-icons/fi'
import { useOutsideClick } from 'react-use'
import cls from 'classnames'

const isActive = home => ({ isPartiallyCurrent, isCurrent }) => {
  if (home) return isCurrent ? { className: 'active' } : null
  return isPartiallyCurrent ? { className: 'active' } : null
}

export default withTheme(styled(({ dataSource, className, theme }) => {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useOutsideClick(ref, () => {
    if (visible === false) return
    setVisible(!visible)
  })
  return (
    <div className={className} ref={ref}>
      <ul className={cls(`site-navigator`, { visible })}>
        {dataSource.map(({ title, slug, home, link }) => {
          return (
            <li className="nav-item" key={slug}>
              {link && (
                <a href={link} target="_blank">
                  {title}
                  <FiExternalLink style={{ marginLeft: 4, fontSize: 10 }} />
                </a>
              )}
              {!link && (
                <Link getProps={isActive(home)} to={home ? '/' : `/${slug}`}>
                  {title}
                </Link>
              )}
            </li>
          )
        })}
      </ul>
      {React.createElement(!visible ? FiMenu : FiX, {
        className: 'top-menu-btn',
        style: { fontSize: 26 },
        strokeWidth: 1,
        onClick: () => setVisible(!visible)
      })}
    </div>
  )
})`
  position: relative;
  user-select: none;
  .top-menu-btn {
    display: none;
    cursor: pointer;
    color: ${({ theme }) => theme.main[4]};
    @media (max-width: 860px) {
      display: block;
    }
  }

  .site-navigator {
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
        height: 60px;
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
  }

  .site-navigator {
    @media (max-width: 860px) {
      display: none;
      padding: 10px;
      &::after {
        display: block;
        content: '';
        transform: rotate(45deg);
        position: absolute;
        display: block;
        border-color: transparent;
        border-style: solid;
        background: #fff;
        width: 8.48528137px;
        height: 8.48528137px;
        box-shadow: -2px -2px 5px rgba(0, 0, 0, 0.06);
        right: 16px;
        top: -6px;
      }
      &.visible {
        display: flex;
        flex-direction: column;
        position: absolute;
        right: 0;
        top: 100%;
        margin-top: 10px;
        background: #fff;
        box-shadow: 0 3px 10px #5f5f5f33;
        border-radius: 3px;
        align-items: flex-start;
        a {
          border-bottom: none !important;
          min-width: 200px;
          line-height: 40px;
          height: auto;
          border-left: 3px solid transparent;
        }
        a.active {
          border-left: 3px solid ${({ theme }) => theme.main[3]};
        }
      }
    }
  }
`)
