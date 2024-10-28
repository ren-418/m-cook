import React from 'react'
import { IconButtonProps } from './IconButton'

function Add({className = ''}:IconButtonProps) {
  return (
    <>
        <svg className={className} width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.5 10.2493H4V8.74927H8.5V4.24927H10V8.74927H14.5V10.2493H10V14.7493H8.5V10.2493Z" fill="currentColor"/>
        </svg>
    </>
  )
}

export default Add