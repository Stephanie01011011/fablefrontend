import React, {useState} from 'react'

const SocialFeed = () => {
    const images = ["social1.jpg", "social2.jpg", "social3.jpg", "social4.jpg"]
    const [address, setaddress] = useState("social1.jpg")
    const [count, setCount] = useState(0)
   window.setTimeout(() => {
        setCount(count + 1)
        if (count > images.length-2){
            setCount(0)
            setaddress(images[count])
        } else {
            setaddress(images[count]);
        }
    }, 2000)
   
  return (
    <div id='social-feed'>
      <img src={address} alt="img" className='social-feed-img'/>
    </div>
  )
}

export default SocialFeed
