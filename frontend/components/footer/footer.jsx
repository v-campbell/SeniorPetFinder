import React from 'react';

const Footer = () => (
    <div className='footer'>
        <div>
            Thank you for stopping by! SeniorPetFinder is an originally-designed clone of <a href='https://www.petfinder.com/'>PetFinder</a> by Victoria Campbell. {'  '}
        </div>
        {/* <a href='https://www.linkedin.com/in/victoria-khym-campbell/'>
            <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href='https://github.com/v-campbell/SeniorPetFinder/wiki'>
            <i className="fab fa-github-square fa-2x"></i>
        </a> */}
        <div className='splash-footer'>
            <a href='https://www.linkedin.com/in/victoria-khym-campbell/'>
                <i class="fab fa-linkedin-in fa-3x"></i>
            </a>
            <a href='https://github.com/v-campbell/SeniorPetFinder/wiki'>
                <i class="fab fa-github-alt fa-3x"></i>
            </a>
            <a href='https://angel.co/u/victoria-campbell-18'>
                <i class="fab fa-angellist fa-3x"></i>
            </a>
        </div>
    </div>
)

export default Footer;