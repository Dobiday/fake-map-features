import React from "react";
import './user.less'
export default function User(props) {
  return (
    <li key={props.info.id} className='user'>
      <img src={props.info.avatar} className='user__pic' alt="User pic"/>
      <p className="user__name">{props.info.userName}</p>
      <a href={`mailto:${props.info.email}`} className="user__email">{props.info.email}</a>
    </li>
  );
}
