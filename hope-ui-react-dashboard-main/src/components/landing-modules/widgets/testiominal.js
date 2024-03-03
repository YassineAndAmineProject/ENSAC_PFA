import React, { Fragment,memo} from 'react'

const Testiominal = memo((props) => {
  return (
  <Fragment>
    <svg width="98" height="99" className="mt-5" viewBox="0 0 98 99" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M65.1171 0.5H93.4687L97.4572 8.44811L65.2733 98.5H50.2545L65.1171 0.5ZM14.9113 0.5H42.7957L46.7842 8.44811L14.6003 98.5H-0.415726L14.9113 0.5Z" stroke="#3A57E8"/>
    </svg>
    <p className="mt-4 test-text">{props.testText}</p>
     <h6 className="">{props.testOwner}</h6>
     <p className="mb-0 text-primary">{props.testSubtitle}</p>
  </Fragment>
  )
})
export default Testiominal
