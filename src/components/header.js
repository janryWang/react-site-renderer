import React, { useContext } from 'react'
import SiteContext from '../shared/context'
import { Link } from '@reach/router'
import styled from 'styled-components'
import Search from './search'
import Navigator from './navigator'

export default styled(({ dataSource, className }) => {
  const { logo, search } = useContext(SiteContext)
  return (
    <div className={`site-header ${className}`}>
      <div className="header-content">
        <Link to={`/`} className="logo-wrapper">
          <div className="logo">
            {React.isValidElement(logo) ? (
              logo
            ) : logo ? (
              <img src={logo} />
            ) : (
              'This is Logo'
            )}
          </div>
        </Link>
        <Search {...search} />
        <Navigator dataSource={dataSource} />
      </div>
    </div>
  )
})`
  border-bottom: 1px solid rgb(238, 238, 238);
  background: #fff;
  box-shadow: 0 0 10px #eeeeeec9;
  .header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 30px;
    @media (max-width: 860px) {
      margin: 0 20px;
    }
    @media (max-width: 690px) {
      margin: 0 10px;
    }
    .logo-wrapper{
      font-size: 20px;
      font-weight: 300;
      text-transform: uppercase;
      text-decoration: none;
    }
    .logo {
      height: 60px;
      display: flex;
      align-items: center;
      position: relative;
      justify-content: left;
      width: 270px;
      @media (max-width: 860px) {
        width: 180px;
      }
    }
    
    img {
      height: 60px;
      display: inline-block;
    }
    &:after {
      content: '';
      display: block;
      height: 22px;
      border-left: 1px solid #eee;
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      @media (max-width: 690px) {
        display: none;
      }
    }
  }
`
