import lock from '../assets/lock.svg'

const Footer = () => {
  return (
    <div className="FooterCont">
        <div className="Footcopyright">
            <p className='footertext'>Copyright (c) 2023</p>
            <p className='footertext'>|</p>
            <p className='footertext'> Clarifionsupport@clarifion.com</p>
        </div>
        <div className="Footsecure">
            <img src={lock} className='lockimage'  alt="lock" />
            <p className='footertext'>Secure 256-bit SSL encryption.</p>
        </div>
    </div>
  )
}

export default Footer