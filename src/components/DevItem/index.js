import React from 'react';

import './styles.css';

// export default function DevItem(props){
//   const dev = props;

  export default function DevItem({dev}){


  return(
    <li  className= "dev-item">
            <header>
              <img src={dev.avatar_url} alt={dev.name}/>
              <div className="dev-info">
                <strong>{dev.name}</strong>
                <span>{dev.techs.join(',')}</span>
              </div>
            </header>
            <p>{dev.bio}</p>
            <a href={`https://github.com/${dev.github_username}`}>Github Profile</a>
          </li>
  );
}
