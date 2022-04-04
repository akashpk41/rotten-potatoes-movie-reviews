import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div className='hover:text-blue-900'>
      <Link  style={{color: match ? "#4c1d95" : "black", fontWeight: match ? 'bold' : 'normal'  }} to={to} {...props}>
        {children}
      </Link>
    </div>
  );
}

export default CustomLink;
