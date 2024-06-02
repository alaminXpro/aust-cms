import { useState } from 'react'
import ModalVideo from 'react-modal-video'
import "react-modal-video/scss/modal-video.scss"


export default function VideoPopup({ style }) {
    const [isOpen, setOpen] = useState(false)
    return (
        <>

            {style === 1 &&
                // <a className="video-popup1" onClick={() => setOpen(true)}>
                //     <div className="video-btn play-icon-tra">
                //         <div className="video-block-wrapper">
                //             <i className="fas fa-play" />
                //         </div>
                //     </div>
                // </a>
                <a className="video-popup1" onClick={() => setOpen(true)}>
                    <div className="video-btn video-btn-xl bg--theme">
                        <div className="video-block-wrapper"><span className="flaticon-play-button" /></div>
                    </div>
                </a>
            }
            {style === 2 &&
                <a className="video-popup2" onClick={() => setOpen(true)}>
                    <div className="video-btn video-btn-xl bg--theme">
                        <div className="video-block-wrapper"><span className="flaticon-play-button" /></div>
                    </div>
                </a>
            }
            {style === 3 &&

                <a onClick={() => setOpen(true)} className="video-popup2 btn r-04 btn--tra-black hover--violet-100">See how it works
                </a>
            }
            {style === 4 &&
                <a onClick={() => setOpen(true)} className="video-popup2 btn r-04 btn--theme hover--tra-black ico-20 ico-right">See how it works <span className="flaticon-play" />
                </a>
            }
            {style === 5 &&
                <a onClick={() => setOpen(true)} className="video-popup2 btn r-04 btn--tra-black hover--theme ico-20 ico-right">
                    See how it works <span className="flaticon-play" />
                </a>
            }





            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />
        </>
    )
}