import React, { Fragment, useState } from 'react'

const Accordion = ({items}) => {

  const onTitleClick = () => {
    console.log('title clicked', selected)
  }

  const [selected, changeSelected] = useState(null);

  const renderedItems = items.map((item, index) => {
    const active = index === selected ? "active" : "";
    return (
      <Fragment key={item.title}>
        <div 
          className={`title ${active}`} 
          onClick={() => changeSelected(index)} >
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </Fragment>
    )
  })


  return (
    <div className="ui styled accordion">
      {renderedItems}
    </div>
  )
}

export default Accordion;