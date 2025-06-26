import { TbArrowBadgeRight } from "react-icons/tb";
import { Link } from 'react-router-dom'
import './ToolsPackage.css'

const ToolsPackage = () => {
    return (
        <div className='col-md-3 mb-4'>
            <div className="package_card">
                <h5 className='package_card_price_cartegory'>Basic Plan</h5>
                <span className='package_price'>$100 <sub>3 Month</sub></span>
                <Link to='/premium-tools/check-out' className='btn btn-success w-100 mt-4 mb-2'>Select Package</Link>
                <span className='package_modules_list'><TbArrowBadgeRight /> Available Modules Name</span>
                <span className='package_modules_list'><TbArrowBadgeRight /> Available Modules Name</span>
                <span className='package_modules_list'><TbArrowBadgeRight /> Available Modules Name</span>
                <span className='package_modules_list'><TbArrowBadgeRight /> Available Modules Name</span>
                <span className='package_modules_list'><TbArrowBadgeRight /> Available Modules Name</span>
                <span className='package_modules_list'><TbArrowBadgeRight /> Available Modules Name</span>
            </div>
        </div>
    )
}

export default ToolsPackage