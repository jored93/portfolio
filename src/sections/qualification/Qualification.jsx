import React, {useState} from 'react'
import './qualification.css'

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <section className='qualification__section' id='qualifications'>
            <h5>-</h5>
            <h2>Educación y experiencia</h2>

            <div className='qualification__container container'>
                <div className='qualification__tabs'>
                    <div
                        className={ toggleState === 1 
                            ? 'qualification__button qualification__active button--flex'
                            : 'qualification__button button--flex' }
                        onClick={() => toggleTab(1)}
                    >
                        <i className='uil uil-graduation-cap qualification__icon'></i>
                        Educación
                    </div>

                    <div
                        className={ toggleState === 2 
                            ? 'qualification__button qualification__active button--flex'
                            : 'qualification__button button--flex' }
                        onClick={() => toggleTab(2)}
                    >
                        <i className='uil uil-briefcase-alt qualification__icon'></i>
                        Experiencia laboral
                    </div>
                </div>

                <div className='qualification__sections'>
                    <div
                        className={ toggleState === 1 
                            ? 'qualification__content qualification__content-active'
                            : 'qualification__content' }
                    >
                        <div className='qualification__data'>
                            <div>
                                <h3 className='qualification__title'>
                                Maestria en devops 
                                </h3>
                                <span className='qualification__subtitle'>
                                Escuela de posgrado Newman
                                </span>
                                <div className='qualification__calendar'>
                                    <i className='uil uil-calendar-alt'></i>{" "}
                                    En curso
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className='qualification__line'></span>
                            </div>
                        </div>

                        <div className='qualification__data'>
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className='qualification__line'></span>
                            </div>
                            <div>
                                <h3 className='qualification__title'>
                                Curso de especialización en metodologías ágiles.
                                </h3>
                                <span className='qualification__subtitle'>
                                    Escuela de posgrado Newman
                                </span>
                                <div className='qualification__calendar'>
                                    <i className='uil uil-calendar-alt'></i>{" "}
                                    2024
                                </div>
                            </div>
                        </div>

                        <div className='qualification__data'>
                            <div>
                                <h3 className='qualification__title'>
                                    Ingeniería en sistemas computacionales 
                                </h3>
                                <span className='qualification__subtitle'>
                                    Universidad Guayaquil
                                </span>
                                <div className='qualification__calendar'>
                                    <i className='uil uil-calendar-alt'></i>{" "}
                                    2013 - 2022
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className='qualification__line'></span>
                            </div>
                        </div>
                    </div>

                    <div
                        className={ toggleState === 2 
                            ? 'qualification__content qualification__content-active'
                            : 'qualification__content' }
                    >
                        <div className='qualification__data'>
                            <div>
                                <h3 className='qualification__title'>
                                Cloud Engineer 
                                </h3>
                                <span className='qualification__subtitle'>
                                NTT DATA EC
                                </span>
                                <div className='qualification__calendar'>
                                    <i className='uil uil-calendar-alt'></i>{" "}
                                    Sept 2022 - Actualidad
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className='qualification__line'></span>
                            </div>
                        </div>

                        <div className='qualification__data'>
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className='qualification__line'></span>
                            </div>
                            <div>
                                <h3 className='qualification__title'>
                                    Desarrollador web
                                </h3>
                                <span className='qualification__subtitle'>
                                    Tecnoprovsa
                                </span>
                                <div className='qualification__calendar'>
                                    <i className='uil uil-calendar-alt'></i>{" "}
                                    Nov 2021 - Sept 2022
                                </div>
                            </div>
                        </div>

                        <div className='qualification__data'>
                            <div>
                                <h3 className='qualification__title'>
                                Administrador de sistemas
                                </h3>
                                <span className='qualification__subtitle'>
                                Cablefuturo EC
                                </span>
                                <div className='qualification__calendar'>
                                    <i className='uil uil-calendar-alt'></i>{" "}
                                    May 2018 - Nov 2021
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className='qualification__line'></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification
