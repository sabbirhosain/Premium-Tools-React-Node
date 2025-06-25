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
                            <Link to='' className='footer_copy_right_text'>Facebook</Link>
                            <Link to='' className='footer_copy_right_text'>Youtube</Link>
                            <Link to='' className='footer_copy_right_text'>Linkedin</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer