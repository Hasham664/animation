import React from 'react';
import project from './data/project.json';
const Projects = () => {
  return (
    <div className='container Projects my-3' id='projects'>
      <h1>Projects</h1>
      <div
        style={{ maxWidth: '1000px', margin: 'auto' }}
        className='row d-flex justify-content-center align-content-center'
      >
        {project.map((data) => {
          return (
            <div key={data.id} className='my-4 col-sm-6 col-md-4 col-lg-4'>
              <div
                className='card bg-dark text-light'
                style={{
                  border: '2px solid yellow',
                }}
                data-aos='flip-right'
                data-aos-duration='1000'
              >
                <div className='img d-flex justify-content-center align-content-center p-3'>
                  <img
                    src={data.imageSrc}
                    className='card-img-top'
                    alt='...'
                    style={{
                      maxWidth: '250px',
                      height: '200px',
                      border: '2px solid yellow',
                      borderRadius: '10px',
                    }}
                  />
                </div>
                <div className='card-body text-center'>
                  <h5 className='card-title'> {data.title} </h5>
                  <p className='card-text'>{data.description}</p>
                  <a href={data.demo} className='btn btn-primary mx-3'>
                    Source
                  </a>
                  <a href={data.source} className='btn btn-warning '>
                    Code
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
