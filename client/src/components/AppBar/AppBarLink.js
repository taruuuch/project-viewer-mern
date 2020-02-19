import React from 'react'
import { Link } from 'react-router-dom'

export const AppBarLink = ({ link, title }) => (
  <Link to={link}>
    {title}
  </Link>
)