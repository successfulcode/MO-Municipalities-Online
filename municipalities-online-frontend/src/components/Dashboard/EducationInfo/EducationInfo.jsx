import React from 'react'
import PropTypes from 'prop-types'

const EducationInfo = ({ education }) => {
  return (
    <div>
      {education.map((item) => <div key={item._id}>{item.school}</div> )}
    </div>
  )
}

EducationInfo.propTypes = {

}

export default EducationInfo
