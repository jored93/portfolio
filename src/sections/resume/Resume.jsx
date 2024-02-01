import React from 'react'
import courses from '../../constants/courses.json';
import education from '../../constants/education.json';
import experience from '../../constants/experience.json';
import './resume.css'

const Resume = () => {
    return (
        <section id='resume'>
            <h5>-</h5>
            <h2>Work experience</h2>

            <div className="container resume__container">

                <div className="resume__backend">
                    <div className="resume__content">
                        {
                            experience.map (({id, position, company, startDate, endDate, aptitudes, responsibilities, description}) => {
                                return (
                                    <article className='resume__details' key={`${position}-${id}`}>
                                        <i className="bi bi-patch-check-fill" style={{ color: '#4db5ff', marginTop: '6px'}}></i>
                                        <div>
                                            <h2><strong>{position}</strong> - {company}</h2> 
                                            <h6>{startDate} - {endDate}</h6>
                                            {
                                                responsibilities.map(({id, responsibility})=> {
                                                    return(
                                                        <h5 key={`${responsibility}-${id}`}>- {responsibility}</h5>
                                                    )
                                                })
                                            }
                                        </div>
                                </article>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Resume