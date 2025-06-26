import { TbListDetails } from "react-icons/tb";
import { FaStar } from "react-icons/fa";
import DEFAULT_IMAGE from '../../assets/tools-1.jpg'
import { Link } from "react-router-dom";
import './PremiumToolsCard.css';

const PremiumToolsCard = ({ item }) => {

    return (
        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className='tools_service_card_box'>
                <div className='tools_service_img_box'>
                    <img src={DEFAULT_IMAGE} className="img-fluid" alt='Tools Image' />
                    <span className='tools_service_discount bg-danger'>-10% OFF</span>
                </div>
                <div className="d-flex align-items-center mt-1">
                    <span className='tools_service_price'>৳ 1190</span>
                    <span className='tools_service_rating'> <FaStar style={{ color: 'gold' }} /> 5 (100) </span>
                </div>
                <div className='tools_service_text_box'>
                    <Link to='/premium-tools/tools-details' className='tools_service_title'>YouTube Premium Pro</Link>
                    <span className='tools_service_descrip'>Duration : 3 Month</span>
                    <div className='d-flex align-items-center gap-1 pt-3'>
                        <Link to={`/premium-tools/check-out`} className='btn btn-success w-100 rounded-0 btn-sm'>BUY NOW</Link>
                        <Link to={`/premium-tools/tools-details`} className='btn btn-outline-success w-100 rounded-0 btn-sm'>DETAILS</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PremiumToolsCard;