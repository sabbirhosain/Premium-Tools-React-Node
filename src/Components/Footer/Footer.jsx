import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer_section'>
            <div className="container">
                <div className="row py-4">
                    <div className="col-md-6">
                        <span className='footer_copy_right_text text-center text-md-left'>Copyright © 2025 Premiumtoolskit.shop All rights reserved.</span>
                    </div>
                    <div className="col-md-6">
                        <div className="d-flex align-items-center justify-content-center justify-content-md-end gap-2">
                            <Link to='https://www.facebook.com/premium.tools.kit/' className='footer_copy_right_text'>Facebook</Link>
                            <a href='https://api.whatsapp.com/send/?phone=+8801780741598&text=I%20want%20to%20order%20premium%20tools.%20Please%20help%20me.' target="_new" rel="noopener noreferrer" className='footer_copy_right_text'>WhatsApp</a>
                            <Link to='' className='footer_copy_right_text'>Linkedin</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer