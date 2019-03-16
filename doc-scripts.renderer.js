import React from 'react'
import Renderer from './src'

const docs = [
  { title: '首页', component: () => <div>这是首页</div>, home: true },
  { title: '快速开始', component: () => <div>这是快速开始</div> },
  {
    title: '案例场景',
    children: [
      { title: '案例1', component: () => <div>这是案例1</div> },
      {
        title: '案例2',
        children: [
          { title: '案例2-1', component: () => <div>案例2-1</div> },
          { title: '案例2-2', component: () => <div>案例2-2</div> }
        ]
      },
      { title: '案例1', component: () => <div>这是案例1</div> },
      {
        title: '案例2',
        children: [
          { title: '案例2-1', component: () => <div>案例2-1</div> },
          { title: '案例2-2', component: () => <div>案例2-2</div> }
        ]
      },
      { title: '案例1', component: () => <div>这是案例1</div> },
      {
        title: '案例2',
        children: [
          { title: '案例2-1', component: () => <div>案例2-1</div> },
          { title: '案例2-2', component: () => <div>案例2-2</div> }
        ]
      },
      { title: '案例1', component: () => <div>这是案例1</div> },
      {
        title: '案例2',
        children: [
          { title: '案例2-1', component: () => <div>案例2-1</div> },
          { title: '案例2-2', component: () => <div>案例2-2</div> }
        ]
      },
      { title: '案例1', component: () => <div>这是案例1</div> },
      {
        title: '案例2',
        children: [
          { title: '案例2-1', component: () => <div>案例2-1</div> },
          { title: '案例2-2', component: () => <div>案例2-2</div> }
        ]
      },
      { title: '案例1', component: () => <div>这是案例1</div> },
      {
        title: '案例2',
        children: [
          { title: '案例2-1', component: () => <div>案例2-1</div> },
          { title: '案例2-2', component: () => <div>案例2-2</div> }
        ]
      },
      { title: '案例1', component: () => <div>这是案例1</div> },
      {
        title: '案例2',
        children: [
          { title: '案例2-1', component: () => <div>案例2-1</div> },
          { title: '案例2-2', component: () => <div>案例2-2</div> }
        ]
      },
    ]
  },
  {
    title: '常见问题',
    component: () => <div>这是常见问题</div>,
    children: [
      { title: '问题1', component: () => <div>问题1</div> },
      { title: '问题2', component: () => <div>问题2</div> }
    ]
  }
]

export default () => {
  return (
    <Renderer
      docs={docs}
      logo="//img.alicdn.com/tfs/TB1eH62LmzqK1RjSZPcXXbTepXa-206-98.png"
      color="blue"
    />
  )
}
