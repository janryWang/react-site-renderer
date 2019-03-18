import React from 'react'
import styled from 'styled-components'
export default styled(({ className }) => {
  return (
    <div className={className}>
      <div className="empty-content">
        <img
          height={80}
          src="//img.alicdn.com/tfs/TB1cVncKAzoK1RjSZFlXXai4VXa-184-152.svg"
        />
        <div>Page Not Found</div>
      </div>
    </div>
  )
})`
  min-height: 460px;
  display: flex;
  justify-content: center;
  align-items: center;
  .empty-content {
    text-align: center;
    line-height:40px;
    color:#777;
  }
`
