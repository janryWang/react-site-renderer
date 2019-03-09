import React, { Component } from "react"
import styled from "styled-components"
import Sticky from "react-stikky"

const toArr = val => {
  return Array.isArray(val) ? val : val ? [val] : []
}

const isElementInViewport = (rect, { offset = 0, threshold = 0 } = {}) => {
  const { top, right, bottom, left, width, height } = rect
  const intersection = {
    t: bottom,
    r: (width > window.innerWidth ? window.innerWidth : width) - left,
    b: (height > window.innerHeight ? window.innerHeight : height) - top,
    l: right
  }

  const elementThreshold = {
    x: threshold * width,
    y: threshold * height
  }

  return (
    intersection.t >= (offset.top || offset + elementThreshold.y) &&
    intersection.r >= (offset.right || offset + elementThreshold.x) &&
    intersection.b >= (offset.bottom || offset + elementThreshold.y) &&
    intersection.l >= (offset.left || offset + elementThreshold.x)
  )
}

export default styled(
  class Elevator extends Component {
    ref = React.createRef()

    state = {
      dataSource: [],
      levels: [],
      pathname: this.getPathName()
    }

    renderMenuList(dataSource, root) {
      const { levels } = this.state
      return (
        <ul className={`menu-list ${root ? "root" : ""}`}>
          {toArr(dataSource).map(({ slug, text, children, level }, key) => {
            return (
              <li key={key}>
                <a
                  href={`#${slug}`}
                  className={`${this.state.pathname === slug ? "active" : ""}`}
                >
                  <span>{text}</span>
                </a>
                {levels.indexOf(level) > -1 && this.renderMenuList(children)}
              </li>
            )
          })}
        </ul>
      )
    }

    renderMenu() {
      const { dataSource } = this.state

      return (
        <Sticky
          edge="top"
          stickiedStyle={{
            width: 200,
            height: "calc(100% - 80px)",
            overflowY: "auto"
          }}
          triggerDistance={50}
          zIndex={10}
        >
          {this.renderMenuList(dataSource, true)}
        </Sticky>
      )
    }

    changeAnchorBehavior(element) {
      element.querySelectorAll(".react-demo-a").forEach(el => {
        if (!el.target) el.target = "_blank"
      })
    }

    loadDataSource(element) {
      const list = Array.prototype.map.call(
        element.querySelectorAll("h1,h2,h3,h4,h5"),
        el => {
          const level = parseInt(el.tagName.charAt(1))
          const slug = el.id
          return {
            level,
            slug,
            text: el.textContent,
            el
          }
        }
      )
      const parentStack = []
      let levels = []
      const checkParent = node => {
        if (parentStack[parentStack.length - 1]) {
          if (parentStack[parentStack.length - 1].level >= node.level) {
            parentStack.pop()
            return true
          } else {
            return false
          }
        }
        return false
      }
      const newList = list.reduce((buf, node, index) => {
        let parent = parentStack[parentStack.length - 1]
        if (levels.indexOf(node.level) == -1) {
          levels.push(node.level)
        }
        if (parent) {
          if (parent.level < node.level) {
            parent.children = parent.children || []
            parent.children.push(node)
            parentStack.push(node)
            return buf
          } else if (parent.level === node.level) {
            parentStack.pop()
            let pre = parentStack[parentStack.length - 1]
            parentStack.push(node)
            if (pre) {
              pre.children = pre.children || []
              pre.children.push(node)
              return buf
            }
            return buf.concat(node)
          } else {
            while (checkParent(node)) {}
            let prev = parentStack[parentStack.length - 1]
            parentStack.push(node)
            if (prev) {
              prev.children = prev.children || []
              prev.children.push(node)
              return buf
            }
            return buf.concat(node)
          }
        } else {
          parentStack.push(node)
        }
        return buf.concat(node)
      }, [])
      this.setState({
        dataSource: newList,
        levels: levels.sort((a, b) => a - b).slice(0, 2)
      })
    }

    getPathName() {
      return decodeURIComponent(window.location.hash.slice(1))
    }

    hashChangeHandler = () => {
      this.setState({
        pathname: this.getPathName()
      })
    }

    traverseDataSource = callback => {
      const { dataSource } = this.state
      const traverse = list => {
        toArr(list).forEach((node, i) => {
          callback(node, i)
          if (node.children) {
            traverse(node.children)
          }
        })
      }

      traverse(dataSource)
    }

    scrollHandler = () => {
      const { levels } = this.state
      requestAnimationFrame(() => {
        this.traverseDataSource(({ el, slug, level }) => {
          if (
            levels.indexOf(level) > -1 &&
            isElementInViewport(el.getBoundingClientRect())
          ) {
            this.setState({
              pathname: slug
            })
          }
        })
      })
    }

    componentDidMount() {
      if (this.ref && this.ref.current) {
        this.loadDataSource(this.ref.current)
        this.changeAnchorBehavior(this.ref.current)
      }
      window.addEventListener("scroll", this.scrollHandler)
      window.addEventListener("hashchange", this.hashChangeHandler)
      this.scrollHandler()
    }

    componentWillUnmount() {
      window.removeEventListener("scroll", this.scrollHandler)
      window.removeEventListener("hashchange", this.hashChangeHandler)
    }

    render() {
      const { className, children } = this.props
      return (
        <div ref={this.ref} className={className}>
          <div className="content">{children}</div>
          {this.renderMenu()}
        </div>
      )
    }
  }
)`
  display: flex;
  width: 100%;
  .menu-list {
    width: 180px;
    min-width: 180px;
    list-style: none;
    padding: 0;
    margin: 0;
    &.root {
      border-left: 1px solid #eee;
      position: relative;
    }
    li {
      line-height: 25px;
      font-size: 14px;
      padding-left: 10px;
      border-left: 3px solid transparent;
      margin-left: -2px;
      a {
        color: #666;
        text-decoration: none;
        display: block;
        display: block;
        &.active:before {
          content: "";
          display: block;
          position: absolute;
          left: -2px;
          height: 25px;
          border-left: 3px solid #2d90ca;
        }
      }
    }
  }
  .content {
    flex-shrink: 3;
    width: calc(100% - 240px);
  }
  @media (max-width: 860px) {
    .sticky-wrapper {
      display: none;
    }
    .content {
      width: 100%;
    }
  }
`
