import React from 'react'

import Title from '../Componant/Title'
const VideoContainer = () => {


    return (
        <>
            <div className="video_container pt-[40px] pb-[70px]">
                <div className="container">
                    <Title heading1={'Featured YouTube Video'} />
                    <div className="video_section  ">


                        <iframe width="900" height="450"
                            src="https://www.youtube.com/embed/rF4Jsp5Lo3w?si=Of8KycjI-sSXW5R6&autoplay=1&mute=1&loop=1&playlist=rF4Jsp5Lo3w&controls=0&showinfo=0&modestbranding=1&iv_load_policy=3&rel=0"

                            frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

                    </div>
                </div>
            </div>

        </>
    )
}

export default VideoContainer