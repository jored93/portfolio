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
                            education.map (({id, title, description, register, institution, type}) => {
                                return (
                                    <article className='resume__details' key={`${title}-${id}`}>
                                    <i className="bi bi-patch-check-fill" style={{ color: '#4db5ff', marginTop: '6px'}}></i>
                                    <div>
                                        <h4><strong>{title}</strong> - {institution}</h4> 
                                        <h5 >Register: {register}</h5>
                                        <h6 className='text-ligth'>{type}</h6>
                                    </div>
                                </article>
                                )
                            })
                        }
                    </div>
                    <h3>Courses</h3>
                    <div className="resume__content">
                        {
                            courses.map (({id, course, description, institution, knowledges}) => {
                                return (
                                    <article className='resume__details' key={`${course}-${id}`}>
                                    <i className="bi bi-patch-check-fill" style={{ color: '#4db5ff', marginTop: '6px'}}></i>
                                    <div>
                                        <h4>{course}</h4>
                                        <h6>{institution}</h6>
                                        <h5 className='details'>Knowledges:</h5>
                                            <div>
                                                {
                                                    knowledges.map (({id, knowledge}) => {
                                                        return (
                                                            <div key={`${knowledge}-${id}`} >
                                                                <small className='text-ligth'>
                                                                <i className="bi bi-check" style={{ color: '#4db5ff', marginTop: '6px'}}></i> {knowledge}</small>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
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
                            experience.map (({id, position, company, startDate, endDate, aptitudes, responsibilities, description}) => {
                                return (
                                    <article className='resume__details' key={`${position}-${id}`}>
                                        <i className="bi bi-patch-check-fill" style={{ color: '#4db5ff', marginTop: '6px'}}></i>
                                        <div>
                                            <h4><strong>{position}</strong> - {company}</h4> 
                                            <h5>{startDate} - {endDate}</h5>
                                            {
                                                responsibilities.map(({id, responsibility})=> {
                                                    return(
                                                        <h6 key={`${responsibility}-${id}`}>{responsibility}</h6>
                                                    )
                                                })
                                            }
                                            <h5 className='details'>Aptitudes:</h5>
                                            <div className='aptitud'>
                                                {
                                                    aptitudes.map (({aptitud}) => {
                                                        return (
                                                            <div key={aptitud} >
                                                                <small className='text-ligth'>{aptitud} </small>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
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