import './style.css'

type bannerProps = {
    src: string,
}

const Banner = (prop: bannerProps) => {
    return (
        <div >
            <img src={prop.src} alt="banner" className='banner' style={{ height: '90rem' }} />
        </div>
    )
}

export default Banner;