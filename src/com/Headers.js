import React from 'react'
import './Headers.css'

export default function Headers() {
  return (
    <div className='header'>
        <div className='Header_left'>
            <ul>
                <li><a href="/r/popular" className='active'>Popular</a></li>
                <li><a href="/r/hot">Hot</a></li>
                <li><a href="/r/rising">Rising</a></li>
                <li><a href="/r/controvers">Controvers</a></li>
                <li><a href="/r/gilded">Gilded</a></li>
            </ul>
        </div>
        <div className='header_right'>
            <i className='fas fa-bell'></i>
            <img src='' alt=''></img>
            <div className='header_usr'>
                <span>akash</span>
                <i className='fas fa-caret-down'></i>

            </div>

        </div>
    </div>
  )
}
