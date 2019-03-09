import React, { useContext } from 'react'
import SiteContext from '../shared/context'
import { Link } from '@reach/router'
import styled from 'styled-components'
import Search from './search'
import Navigator from './navigator'

export default styled(({ dataSource, className }) => {
  const { logo, search } = useContext(SiteContext)
  return (
    <div className={className}>
      <div className="header-content">
        <div className="header-left">
          <Link to={`/`}>
            <div className="logo">
              {React.isValidElement(logo) ? logo : <img src={logo} />}
            </div>
          </Link>
          <Search {...search} />
          <Navigator dataSource={dataSource} />
        </div>
      </div>
    </div>
  )
})``
