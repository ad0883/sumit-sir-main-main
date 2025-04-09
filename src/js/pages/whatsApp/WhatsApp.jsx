import React, { useEffect } from 'react'
import '../../../css/pages/whatsApp/whatsAppPage.css'

const WhatsApp = () => {

  useEffect(() => {
    window.location.href= 'https://chat.whatsapp.com/CUaHJArukwsEZM3Ez6hQtn';
  }, []);

  return (
    <div className='join-whatsapp-community-container'>
      Redirecting to the WhatsApp Community ...
    </div>
  )
}

export default WhatsApp