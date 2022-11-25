import React from 'react'

export const List = ({children}) => {
  return (
    <div>
           <ul className="divide-y divide-slate-100">
            {children}
           </ul>
    </div>
  )
}
