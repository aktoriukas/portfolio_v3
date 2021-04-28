import React from 'react'

export default function Background() {
    return (
        <div id='background-shapes'>

            <svg   
                className='opacity-1 shape' 
                id="hexagon-1"
                width="600px" 
                height="600px" 
                viewBox="0 0 64 64" >
                <polygon 
                    fill="none" 
                    stroke="#36827f" 
                    strokeWidth="2" 
                    strokeMiterlimit="10" 
                    points="16.675,59 1.351,32 16.675,5 47.325,5 62.649,32 47.325,59 "/>
            </svg>

            <svg   
                className='opacity-1 shape' 
                id="hexagon-2"
                width="700px" 
                height="700px" 
                viewBox="0 0 64 64" >
                <polygon 
                    fill="none" 
                    stroke="#0cc6e7" 
                    strokeWidth="2" 
                    strokeMiterlimit="10" 
                    points="16.675,59 1.351,32 16.675,5 47.325,5 62.649,32 47.325,59 "/>
            </svg>

            <svg 
                className='opacity-1 shape' 
                id="dot"
                width="3000px"
                height="3000px"
                viewBox="0 0 50 50"  >
                <g id="Layer_1_1_">
                    <path d="M1.586,25L25,48.414L48.414,25L25,1.586L1.586,25z M25,45.586L4.414,25L25,4.414L45.586,25L25,45.586z"/>
                    <rect x="18" y="24" width="2" height="2"/>
                    <rect x="24" y="24" width="2" height="2"/>
                    <rect x="30" y="24" width="2" height="2"/>
                </g>
            </svg>

            <svg 
                className='opacity-1 shape' 
                id="code"
                width="2000px"
                height="2000px"
                viewBox="0 0 40 40" 
                enableBackground="new 0 0 40 40" >
                <g>
                    <path d="M26.308,29.12c-0.236,0-0.458-0.104-0.61-0.283c-0.281-0.336-0.237-0.839,0.099-1.12l9.171-7.69l-9.227-7.741
                        c-0.336-0.281-0.38-0.784-0.098-1.12c0.151-0.181,0.374-0.285,0.609-0.285c0.188,0,0.368,0.065,0.512,0.187l9.953,8.352
                        C36.897,19.569,37,19.793,37,20.026c0,0.237-0.104,0.459-0.285,0.61l-9.896,8.297C26.676,29.055,26.494,29.12,26.308,29.12
                        L26.308,29.12z"/>
                    <path d="M13.693,29.12c-0.188,0-0.369-0.065-0.511-0.187l-9.897-8.299C3.104,20.485,3,20.264,3,20.026
                        c0-0.235,0.104-0.457,0.284-0.608l9.953-8.352c0.144-0.121,0.325-0.187,0.511-0.187c0.236,0,0.458,0.104,0.609,0.285
                        c0.282,0.336,0.238,0.839-0.098,1.12l-9.227,7.741l9.171,7.69c0.336,0.281,0.38,0.784,0.099,1.12
                        C14.15,29.016,13.929,29.12,13.693,29.12L13.693,29.12z"/>
                    <path d="M17.904,29.12c-0.069,0-0.132-0.007-0.193-0.023c-0.425-0.104-0.685-0.537-0.58-0.963l4.138-16.649
                        c0.088-0.356,0.406-0.604,0.771-0.604c0.064,0,0.13,0.009,0.192,0.023c0.426,0.106,0.686,0.539,0.58,0.965l-4.138,16.649
                        C18.587,28.872,18.27,29.12,17.904,29.12L17.904,29.12z"/>
                </g>
            </svg>

            <svg 
                viewBox="0 0 24 24" 
                id='box'
                className='opacity-1 shape' 
                width="800px"
                height="800px">
                <path fill="none" d="M0 0h24v24H0z"/>
                <path d="M2 2h5v5H2V2zm0 15h5v5H2v-5zM17 2h5v5h-5V2zm0 15h5v5h-5v-5zM8 4h8v2H8V4zM4 8h2v8H4V8zm14 0h2v8h-2V8zM8 18h8v2H8v-2z" fill="#000"/>
            </svg>
        </div>
    )
}
