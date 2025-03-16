import React from 'react';
import ReactDOM from 'react-dom/client';
import Booklist from './gridlist';
import './style.css';
function Greeting() {
    return (
        <div>
            <React.Fragment> 
                <div className="greeting">
                    <h1>Welcome to Denji's Dojo</h1>
                    <p>My name is Carlos Matos and this is my domain.<br>
                    </br>
                    Feel free to look around and snag something you like.
                    </p>
                </div>
                <div className="list">
                    <ul>
                        <li><a href="#">Music</a></li>
                        <li><a href="#">Games</a></li>
                        <li><a href="#">Programming</a></li>
                    </ul>
                </div>
            </React.Fragment>  
            <React.Fragment>
                <div className="booklist">
                    <Booklist />
                </div> 
            </React.Fragment>
        </div>
   )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greeting />);
