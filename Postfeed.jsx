import React from 'react'

const Postfeed = (props) => {
  return (
    <div>
        <article className='posts'>
            <img src={props.profile} height="100" width="100" alt="pic"/>
            <h3 className={props.mode?"mode-online":"mode-offline"}>{props.mode?"online":"offline"}</h3>
            <h1 className='name'>{props.name}</h1>
            <h3 className='subject'>{props.subject}</h3>
            <p className='caption'>{props.post}</p>
        </article>
    </div>
  )
}

export default Postfeed
