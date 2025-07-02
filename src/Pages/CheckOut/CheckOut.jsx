import { FaRegHandPointRight } from 'react-icons/fa6'
import Layout from '../../Layout/Layout'
import './CheckOut.css'

const CheckOut = () => {
    return (
        <Layout>
            <section className='checkout_section'>
                <div className="container">
                    <form className="row justify-content-between">
                        <div className="col-md-7">
                            <h2 className='checkout_title'>Belling Details</h2>
                            <hr className='hr' />
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className='form-label'>First Name</label>
                                    <input type="text" className='form-control rounded-0' required />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className='form-label'>Last Name</label>
                                    <input type="text" className='form-control rounded-0' required />
                                </div>
                                <div className="col-md-12 mb-3">
                                    <label className='form-label'>Email</label>
                                    <input type="text" className='form-control rounded-0' required />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className='form-label'>Phone</label>
                                    <input type="text" className='form-control rounded-0' required />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className='form-label'>Country</label>
                                    <select className='form-select rounded-0' required>
                                        <option value="bangladesh">Bangladesh</option>
                                        <option value="others">Others</option>
                                    </select>
                                </div>
                                <div className="col-md-12 mb-3">
                                    <label className='form-label'>Address</label>
                                    <input type="text" className='form-control rounded-0' required />
                                </div>
                                <div className="col-md-12 mb-3">
                                    <label className='form-label'>Message</label>
                                    <textarea rows='3' className='form-control rounded-0'></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <h2 className='checkout_title'>Order Details</h2>
                            <hr className='hr' />
                            <ol className="list-group rounded-0">
                                <li className="list-group-item">
                                    <div className="order_details_title">Lorem ipsum dolor sit amet.</div>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="order_details_title">Package Type</div>
                                    </div>
                                    <span className="">Basic</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="order_details_title">Quentity</div>
                                    </div>
                                    <span className="">0</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="order_details_title">Price</div>
                                    </div>
                                    <span className="">0 TK</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="order_details_title">Expired</div>
                                    </div>
                                    <span className="">0 Month</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="order_details_title">Discount</div>
                                    </div>
                                    <span className="">0 %</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="order_details_title text-danger">Grand Total</div>
                                    </div>
                                    <span className="text-danger">0 Tk</span>
                                </li>
                            </ol>
                            {/* <div className='d-flex align-items-center my-3'>
                                <input type="text" className='form-control rounded-0' placeholder='Coupon Code' />
                                <button type='button' className='btn btn-dark rounded-0'>Verify</button>
                            </div> */}
                            <div className="form-check my-3">
                                <input className="form-check-input rounded-0" type="checkbox" defaultValue id="checkDefault" required />
                                <label className="form-check-label" htmlFor="checkDefault">I agree to the terms and conditions.</label>
                            </div>
                            <div className='col-md-12'>
                                <button type='submit' className='btn btn-dark rounded-0 w-100'>Order Now</button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </Layout>
    )
}

export default CheckOut