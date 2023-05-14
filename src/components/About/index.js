import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBootstrap, faCss3, faGit, faGithub, faHtml5, faJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { faM } from '@fortawesome/free-solid-svg-icons';
import Loader from 'react-loaders';


function About() {

    const [letterClass , setLetterClass ] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
             setLetterClass('text-animate-hover')
           }, 3000)
         }, [])
    return ( 
        <>
        <div className='container about-page'>
            <div className='text-zone'>

                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['A' , 'b' , 'o', 'u', 'b', ' ' , 'm', 'e']}
                    idx={15}
                     />
                </h1>
                <p>I'm Mojtaba keshavarzi I'm a very humble front-end developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.</p>
                <p>I'm quite confident, naturally curious, and perpetually working on
            improving my chops one problem at a time.</p>
            </div>
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faReact} color='#dd0031'/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color='#f06529'/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color='#28a4d9'/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faJs} color='#28a4d9'/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faBootstrap} color='#5ED4F4'/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGit} color="#EFD81D"/>
                    </div>
                </div>
            </div>
        </div>
        <Loader type='pacman' />
        </>
     );
}

export default About;