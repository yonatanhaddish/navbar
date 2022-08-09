import React from 'react'
import '../Navbar01/navbar01.css';

const Navbar01 = () => {
  return (
    <>
    <div className='navbar01'>
        <div className='navbar-container'>
            <div className='navbar-logo'>
                <div>Logo</div>
            </div>
                <div className='list-items'>
                    {/* <li className='list'><a href= "#">Home</a></li>
                    <li className='list'><a href= "#">Feature</a></li>
                    <li className='list'><a href= "#">Pricing</a></li>
                    <li className='list'><a href= "#">About</a></li> */}
                    <button><a href= "#">Home</a></button>
                    <button>Feature</button>
                    <button>Pricing</button>
                    <button>About</button>
                </div>
        </div>
    </div>
    </>
  )
}

export default Navbar01;