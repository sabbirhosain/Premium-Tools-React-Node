import Layout from '../../Layout/Layout'
import DEFAULT_IMG from '../../assets/tools_details.png'
import { TbArrowBadgeRight } from "react-icons/tb";
import { FaRegHandPointRight } from "react-icons/fa6";
import ToolsPackage from '../../Components/ToolsPackage/ToolsPackage';
import './ToolsDetails.css'
import { Link } from 'react-router-dom';

const ToolsDetails = () => {
  return (
    <Layout>
      <section className='tools_details_section'>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={DEFAULT_IMG} className='tools_details_img' alt="" />
            </div>
            <div className="col-md-6">
              <h1 className='tools_details_title'>Google Meet Premium</h1>
              <hr className='hr' />
              <h5 className='tools_details_section_tagline'> <FaRegHandPointRight className='tools_details_section_tagline_icon' /> Short Description</h5>
              <p className='tools_details_short_description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate eos ipsam minima magni non autem assumenda deleniti amet eius? Saepe.</p>

              <h5 className='tools_details_section_tagline'> <FaRegHandPointRight className='tools_details_section_tagline_icon' /> Additional features</h5>
              <div className="row">
                <div className="col-md-6"> <span className='additional_details_list'><TbArrowBadgeRight />Google Meet Premium</span></div>
                <div className="col-md-6"> <span className='additional_details_list'><TbArrowBadgeRight />Google Meet Premium</span></div>
                <div className="col-md-6"> <span className='additional_details_list'><TbArrowBadgeRight />Google Meet Premium</span></div>
                <div className="col-md-6"> <span className='additional_details_list'><TbArrowBadgeRight />Google Meet Premium</span></div>
                <div className="col-md-6"> <span className='additional_details_list'><TbArrowBadgeRight />Google Meet Premium</span></div>
                <div className="col-md-6"> <span className='additional_details_list'><TbArrowBadgeRight />Google Meet Premium</span></div>
                <div className="col-md-6"> <span className='additional_details_list'><TbArrowBadgeRight />Google Meet Premium</span></div>
                <div className="col-md-6"> <span className='additional_details_list'><TbArrowBadgeRight />Google Meet Premium</span></div>
                <div className="col-md-6"> <span className='additional_details_list'><TbArrowBadgeRight />Google Meet Premium</span></div>
                <div className="col-md-6"> <span className='additional_details_list'><TbArrowBadgeRight />Google Meet Premium</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='tools_details_packages'>
        <div className="container">
          <div className="row">
            <ToolsPackage />
            <ToolsPackage />
            <ToolsPackage />
            <ToolsPackage />
          </div>
        </div>
      </section>

      <section className='tools_details_description'>
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-12">
              <h5 className='tools_details_section_tagline'> <FaRegHandPointRight className='tools_details_section_tagline_icon' />Long Description</h5>
              <p className='tools_details_long_description'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, amet optio. Quae sapiente corporis illum totam. Nostrum corrupti quibusdam laboriosam natus totam magnam itaque porro! Dolor ratione ea accusantium ducimus quidem iste, dolore et aliquid quibusdam, porro vitae? Facilis totam quia, officiis aliquam adipisci magni, sint autem laborum consectetur fugit dolore dolor, repudiandae doloribus quos nemo quas quam delectus vitae quis voluptatum. Quos non doloremque fugiat nesciunt placeat cupiditate neque atque, deleniti eveniet mollitia quibusdam pariatur dolores itaque quaerat dignissimos repudiandae quo porro necessitatibus libero reiciendis at praesentium cumque. Nobis odio similique ipsum saepe ullam delectus rerum blanditiis maxime perferendis.</p>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-md-12">
              <h5 className='tools_details_section_tagline text-danger'> <FaRegHandPointRight className='tools_details_section_tagline_icon text-danger' />Important Note</h5>
              <p className='tools_details_long_description'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, amet optio. Quae sapiente corporis illum totam.</p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className='text-center'>
                <p className='tools_details_contact_support'>Contact Customer Support (Only Message Allow)</p>
                <a href='' className='tools_details_contact_support_btn'>WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ToolsDetails