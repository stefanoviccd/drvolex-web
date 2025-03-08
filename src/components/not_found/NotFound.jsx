import React from 'react'
import './not-found.css';

function NotFound() {
  return (<div>
         <div className='company_brand zoomIn not-found'>
            <h2 className='subtitle'>Stranica nije pronađena:(</h2>
            <button className='btn-o-nama'>
              <a className="anchor-o-nama"href="/">Nazad na početnu stranicu</a></button>
        </div>
  </div>
  )
}
export default NotFound;