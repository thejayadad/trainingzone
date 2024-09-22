import Link from 'next/link';
import React from 'react'

const routes = [
    { name: 'Program', id: 'program' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Calculator', id: 'calculator' },
  ];
  

const HeaderLinks = () => {
  return (
    <div className="space-x-4">
    {routes.map((route) => (
      <Link key={route.id} href={`#${route.id}`}
      className="nav"
      >
      {route.name}
      </Link>
    ))}
  </div>
  )
}

export default HeaderLinks