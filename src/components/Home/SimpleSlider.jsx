import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import slide1 from '../../assets/slide1.png'
import slide2 from '../../assets/slide2.png'
import slide3 from '../../assets/slide3.png'
import './style.css'

const SimpleSlider = () => {
    const sliderRef = React.useRef(null)
    const [id, setId] = React.useState(1)

    const images = [
        {
            id: 0,
            image: slide2, 
            active: false
        },
        {
            id: 1,
            image: slide1, 
            active: true
        },
        {
            id: 2,
            image: slide3,
            active: false
        }
        ,
        {
            id: 3,
            image: slide2,
            active: false
        }
        ,
        {
            id: 4,
            image: slide1,
            active: false
        }
        ,
        {
            id: 5,
            image: slide3,
            active: false
        }
    ]
    
    React.useEffect(() => {
        const setInit = () =>{
            const slider = sliderRef.current
            slider.scrollLeft += 150
        }
        setInit()
    }, [])

    const moveRight = () => {
        const slider = sliderRef.current
        const imgs = slider.querySelectorAll('img')

        slider.scrollLeft += 200

        if(slider.scrollLeft >= slider.scrollWidth/2) {
            slider.scrollLeft = 0
            imgs[1].classList.remove('nonact')
            imgs[1].classList.add('active')
            setId(1)
        }else{
            imgs[id+1].classList.remove('nonact')
            imgs[id+1].classList.add('active')
            setId(id+1)
        }
        imgs[id].classList.remove('active')
        imgs[id].classList.add('nonact')

    }

    const moveLeft = () => {
        const slider = sliderRef.current
        slider.scrollLeft -= 200
        if(slider.scrollLeft == 0){
            slider.scrollLeft = slider.scrollWidth / 2
            imgs[5].classList.remove('nonact')
            imgs[5].classList.add('active')
            setId(5)
        }else{
            imgs[id-1].classList.remove('nonact')
            imgs[id-1].classList.add('active')
            setId(id-1)
        }
        imgs[id].classList.remove('active')
        imgs[id].classList.add('nonact')
    }
  return (
    <div className='flex justify-between mt-10 slider'>
        <ArrowBackIosIcon onClick={moveLeft} className='text-white m-auto'/>
        <div className='w-[100%] flex slides justify-between' ref={sliderRef}>
            {images && images.map((prop, i) => <img id={i} className={prop.active ? 'active ml-7' : 'nonact ml-7'} src={prop.image} alt="image" />)}
        </div>
        <ArrowForwardIosIcon onClick={moveRight} className='text-white m-auto'/>
    </div>
  )
}

export default SimpleSlider