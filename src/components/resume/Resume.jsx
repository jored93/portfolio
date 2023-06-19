import React from 'react'
import { BsPatchCheckFill } from 'react-icons/bs'
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
                        <article className='resume__details'>
                            <BsPatchCheckFill className='resume__details-icon' />
                            <div>
                                <h4>HTML</h4>
                                <small className='text-ligth'>resumed</small>
                            </div>
                        </article>
                    </div>
                    <h3>Courses</h3>
                    <div className="resume__content">
                        <article className='resume__details'>
                            <BsPatchCheckFill className='resume__details-icon' />
                            <div>
                                <h4>HTML</h4>
                                <small className='text-ligth'>resumed</small>
                            </div>
                        </article>

                        <article className='resume__details'>
                            <BsPatchCheckFill className='resume__details-icon' />
                            <div>
                                <h4>HTML</h4>
                                <small className='text-ligth'>resumed</small>
                            </div>
                        </article>
                        <article className='resume__details'>
                            <BsPatchCheckFill className='resume__details-icon' />
                            <div>
                                <h4>HTML</h4>
                                <small className='text-ligth'>resumed</small>
                            </div>
                        </article>

                        <article className='resume__details'>
                            <BsPatchCheckFill className='resume__details-icon' />
                            <div>
                                <h4>HTML</h4>
                                <small className='text-ligth'>resumed</small>
                            </div>
                        </article>

                        <article className='resume__details'>
                            <BsPatchCheckFill className='resume__details-icon' />
                            <div>
                                <h4>HTML</h4>
                                <small className='text-ligth'>resumed</small>
                            </div>
                        </article>
                    </div>
                </div>

                <div className="resume__backend">
                    <h3>Work experience</h3>
                    <div className="resume__content">
                        <article className='resume__details'>
                            <BsPatchCheckFill className='resume__details-icon' />
                            <div>
                                <h4><strong>Solutions Assistant</strong> - NTT Data</h4> 
                                <h5>Sept 2022 - Actually</h5>
                                <small className='text-ligth'>Amazon Web Services (AWS)</small> <br />
                                <small className='text-ligth'>TypeScript</small> <br />
                                <small className='text-ligth'>Node.js</small><br />
                                <small className='text-ligth'>Agile Methodologies</small><br />
                                <small className='text-ligth'>Terraform</small>
                            </div>
                        </article>

                        <article className='resume__details'>
                            <BsPatchCheckFill className='resume__details-icon' />
                            <div>
                                <h4><strong>Solutions Assistant</strong> - NTT Data</h4> 
                                <h5>Sept 2022 - Actually</h5>
                                <small className='text-ligth'>Amazon Web Services (AWS)</small> <br />
                                <small className='text-ligth'>TypeScript</small> <br />
                                <small className='text-ligth'>Node.js</small><br />
                                <small className='text-ligth'>Agile Methodologies</small><br />
                                <small className='text-ligth'>Terraform</small>
                            </div>
                        </article>

                        <article className='resume__details'>
                            <BsPatchCheckFill className='resume__details-icon' />
                            <div>
                                <h4><strong>Solutions Assistant</strong> - NTT Data</h4> 
                                <h5>Sept 2022 - Actually</h5>
                                <small className='text-ligth'>Amazon Web Services (AWS)</small> <br />
                                <small className='text-ligth'>TypeScript</small> <br />
                                <small className='text-ligth'>Node.js</small><br />
                                <small className='text-ligth'>Agile Methodologies</small><br />
                                <small className='text-ligth'>Terraform</small>
                            </div>
                        </article>

                        <article className='resume__details'>
                            <BsPatchCheckFill className='resume__details-icon' />
                            <div>
                                <h4><strong>Solutions Assistant</strong> - NTT Data</h4> 
                                <h5>Sept 2022 - Actually</h5>
                                <small className='text-ligth'>Amazon Web Services (AWS)</small> <br />
                                <small className='text-ligth'>TypeScript</small> <br />
                                <small className='text-ligth'>Node.js</small><br />
                                <small className='text-ligth'>Agile Methodologies</small><br />
                                <small className='text-ligth'>Terraform</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Resume