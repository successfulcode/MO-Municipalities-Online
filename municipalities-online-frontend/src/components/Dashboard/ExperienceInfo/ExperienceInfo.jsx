import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const ExperienceInfo = ({ experience, deleteExperience }) => {

  return (
    <div>
      <h3>Experience Credentials</h3>
      <table className='table'>
        <thead>
          <tr>
            <th className='hide-sm table-secondary'>Company</th>
            <th className='hide-sm table-secondary'>Title</th>
            <th className='hide-sm table-secondary'>Years</th>
            <th className='hide-sm table-secondary'> </th>
          </tr>
        </thead>
        <tbody>
          {experience.map((exp) => (
            <tr key={exp._id}>
              <td>{exp.company}</td>
              <td>{exp.title}</td>
              <td>
                <Moment format='YYYY-MM-DD'>{exp.from}</Moment> - {exp.to === null ? 'Now' : <Moment format='YYYY-MM-DD'>{exp.to}</Moment>}
              </td>
              <td>
                <button className="btn btn-danger" onClick={() => deleteExperience(exp._id)}><i className='far fa-trash-alt' /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

ExperienceInfo.propTypes = {
  experience: PropTypes.array.isRequired,
  deleteExperience: PropTypes.func.isRequired
};

export default ExperienceInfo;
