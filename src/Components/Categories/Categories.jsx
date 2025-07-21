import './Categories.css'
import image from '../../assets/category-1.png'
import { Link } from 'react-router-dom'

const Categories = ({ category }) => {
    return (
        <div className='col-lg-2 col-md-3 col-sm-4 col-6 mb-4'>
            <div className="categories_card">
                <div className='d-flex align-items-center justify-content-center mb-2'>
                    <img src={image} alt="image" />
                </div>
                <Link to=''>{category.categories}</Link>
            </div>
        </div>
    )
}

export default Categories