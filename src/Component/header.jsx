import React from 'react'
import './Header.scss'

function Header() {
  return (
    <div className='img-change'>
    <div className='div'>
        <div><h4>BrainyLingo</h4></div>
        {/* <img src='https://ik.imagekit.io/dev24/$%7Bdata?.Image%7D'/> */}
        <div className='p'>
            <p>Home</p>
            <p>LeaderBoard</p>
            <p>Daily Quiz</p>
            <p>Genre</p>
        </div>
        <div>
            <button>Sing Out</button>
        </div>
    </div>
    <div>
        <div >
        <h1 className='para'>Science Fiction Stories</h1>
        </div>
        <div className='buttons'>
        <div>
            <div className='new'>New</div>
        </div>
        <div>
            <div className='progress'>In Progress</div>
        </div>
        <div>
            <div className='completed'>Completed</div>
        </div>
        <div>
            <div className='clear'>Clear all</div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Header