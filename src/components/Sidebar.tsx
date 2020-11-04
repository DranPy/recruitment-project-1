import React, { FC } from 'react'
import { Link } from 'react-router-dom'

import './Sidebar.scss'

const Sidebar: FC = () => {
  return (
    <aside className="sidebar">
      <h4 className="sidebar-header">Categories</h4>
      <ul className="sidebar-list">
        <li>
          <Link to="/">Paper clips</Link>
        </li>
        <li>
          <Link to="/">Post-it notes</Link>
        </li>
        <li>
          <Link to="/">Staples</Link>
        </li>
        <li>
          <Link to="/">Hole punches</Link>
        </li>
        <li>
          <Link to="/">Binders</Link>
        </li>
        <li>
          <Link to="/">Staplers</Link>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar
