import React, { useEffect } from 'react';

function BackTop() {
    useEffect(() => {
        const progressPath = document.querySelector('.progress-wrap path');
        const pathLength = progressPath.getTotalLength();

        progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
        progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';

        const updateProgress = () => {
        const scroll = window.scrollY;
        const height = document.documentElement.scrollHeight - window.innerHeight;
        const progress = pathLength - (scroll * pathLength / height);
        progressPath.style.strokeDashoffset = progress;
        };

        updateProgress();
        window.addEventListener('scroll', updateProgress);

        const handleScroll = () => {
        const offset = 50;
        const progressWrap = document.querySelector('.progress-wrap');
        if (window.scrollY > offset) {
            progressWrap.classList.add('active-progress');
        } else {
            progressWrap.classList.remove('active-progress');
        }
        };

        window.addEventListener('scroll', handleScroll);

        const handleClick = (event) => {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        };

        const progressWrap = document.querySelector('.progress-wrap');
        progressWrap.addEventListener('click', handleClick);

        // Cleanup event listeners on component unmount
        return () => {
        window.removeEventListener('scroll', updateProgress);
        window.removeEventListener('scroll', handleScroll);
        progressWrap.removeEventListener('click', handleClick);
        };
    }, []);

  return (
    <div className="progress-wrap">
        <svg
            className="progress-circle svg-content"
            width="100%"
            height="100%"
            viewBox="-1 -1 102 102"
        >
            <path
            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
            style={{
                transition: "stroke-dashoffset 10ms linear 0s",
                strokeDasharray: "307.919, 307.919",
                strokeDashoffset: "307.919"
            }}
            />
        </svg>
    </div>

  )
}

export default BackTop