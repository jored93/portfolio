import React from 'react'
import courses from '../../constants/courses.json';
import education from '../../constants/education.json';
import experience from '../../constants/experience.json';
import './resume.css'

const Resume = () => {
    return (
        <section id='resume'>
            <h5>Resume</h5>
            <h2>Education & work experience</h2>

            <div className="container resume__container">
                <div className="resume__frontend">
                    <h3>University</h3>
                    <div className="resume__content">
                        {
                            education.map (({title, description, register}) => {
                                return (
                                    <article className='resume__details'>
                                    <i className="bi bi-patch-check-fill" style={{ color: '#4db5ff', marginTop: '6px'}}></i>
                                    <div>
                                        <h4>{title}</h4>
                                        <h6>{register}</h6>
                                        <small className='text-ligth'>{description}</small>
                                    </div>
                                </article>
                                )
                            })
                        }
                    </div>
                    <h3>Courses</h3>
                    <div className="resume__content">
                        {
                            courses.map (({id, course, description, institution}) => {
                                return (
                                    <article className='resume__details'>
                                    <i className="bi bi-patch-check-fill" style={{ color: '#4db5ff', marginTop: '6px'}}></i>
                                    <div>
                                        <h4>{course}</h4>
                                        <h6>{institution}</h6>
                                        <small className='text-ligth'>{description}</small>
                                    </div>
                                </article>
                                )
                            })
                        }
                    </div>
                </div>

                <div className="resume__backend">
                    <h3>Work experience</h3>
                    <div className="resume__content">
                        {
                            experience.map (({id, position, company, startDate, endDate, aptitudes, description}) => {
                                return (
                                    <article className='resume__details'>
                                        <i className="bi bi-patch-check-fill" style={{ color: '#4db5ff', marginTop: '6px'}}></i>
                                        <div>
                                            <h4><strong>{position}</strong> - {company}</h4> 
                                            <h5>{startDate} - {endDate}</h5>
                                            <h6>{description}</h6>
                                            {
                                                aptitudes.map (({aptitud}) => {
                                                    return (
                                                        <small className='text-ligth'>{aptitud} - </small>
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