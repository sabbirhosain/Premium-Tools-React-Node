import Layout from '../../Layout/Layout'
import { useAppContextProvider } from '../../Context/ContextProvider'
import { useNavigate } from 'react-router-dom'
import { checkOut } from '../../Context/Base_Api_Url'
import { useState } from 'react'
import axios from 'axios'
import './CheckOut.css'

const CheckOut = () => {
    const navigate = useNavigate();
    const { selectedPackage, itemDetails } = useAppContextProvider()
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [country, setCountry] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [message, setMessage] = useState('');
    const [fieldError, setFieldError] = useState({});
    const [loading, setLoading] = useState(false);
    const resetFields = () => { setFirstName(''), setLastName(''), setCountry(''), setEmail(''), setPhone(''), setAddress(''), setMessage(''), setFieldError({}) };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFieldError({});
        setLoading(true);

        try {
            const response = await axios.post(checkOut, {
                items: [{
                    item_id: itemDetails._id,
                    package_id: selectedPackage._id
                }],
                billing_address: {
                    first_name: firstName,
                    last_name: lastName,
                    full_name: firstName + ' ' + lastName,
                    email: email,
                    phone: phone,
                    country: country,
                    address: address,
                    message: message
                },
            });

            if (response && response.data && response.data.success) {
                navigate(`/premium-tools/order-confirm/${response.data.payload._id}`);
                resetFields();
            }

        } catch (error) {
            setFieldError(error.response.data || 'Internal Server Error');
            console.error('Internal Server Error', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Layout>
            <section className='checkout_section'>
                <div className="container">
                    <form onSubmit={handleSubmit} className="row justify-content-between">
                        <div className="col-md-7">
                            <h2 className='checkout_title'>Belling Details</h2>
                            <hr className='hr' />
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className='form-label'>First Name</label>
                                    <input type="text" value={firstName} onChange={(event) => setFirstName(event.target.value)} className='form-control rounded-0' required disabled={loading} />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className='form-label'>Last Name</label>
                                    <input type="text" value={lastName} onChange={(event) => setLastName(event.target.value)} className='form-control rounded-0' required disabled={loading} />
                                </div>
                                <div className="col-md-12 mb-3">
                                    <label className='form-label'>Email</label>
                                    <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} className='form-control rounded-0' required disabled={loading} />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className='form-label'>Phone</label>
                                    <input type="tel" value={phone} onChange={(event) => setPhone(event.target.value)} className='form-control rounded-0' required disabled={loading} />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className='form-label'>Country</label>
                                    <select value={country} onChange={(event) => setCountry(event.target.value)} className='form-select rounded-0' disabled={loading}>
                                        <option value="bangladesh">Bangladesh</option>
                                        <option value="others">Others</option>
                                    </select>
                                </div>
                                <div className="col-md-12 mb-3">
                                    <label className='form-label'>Address</label>
                                    <input type="text" value={address} onChange={(event) => setAddress(event.target.value)} className='form-control rounded-0' disabled={loading} />
                                </div>
                                <div className="col-md-12 mb-3">
                                    <label className='form-label'>Message</label>
                                    <textarea rows='3' value={message} onChange={(event) => setMessage(event.target.value)} className='form-control rounded-0' disabled={loading}></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <h2 className='checkout_title'>Order Details</h2>
                            <hr className='hr' />
                            <ol className="list-group rounded-0">
                                <li className="list-group-item">
                                    <div className="order_details_title">{itemDetails.item_name ?? 'N/A'}</div>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="order_details_title">Package Type</div>
                                    </div>
                                    <span className="">{selectedPackage.package_name ?? 'N/A'}</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="order_details_title">Access Account</div>
                                    </div>
                                    <span className="">{selectedPackage.quantity ?? 'N/A'}</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="order_details_title">Price</div>
                                    </div>
                                    <span className="">{selectedPackage.price ?? ''} {selectedPackage.currency ?? 'N/A'}</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="order_details_title">Expired</div>
                                    </div>
                                    <span className="">{selectedPackage.expired ?? ''} {selectedPackage.expired_type ?? 'N/A'}</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="order_details_title">Discount</div>
                                    </div>
                                    <span className="">{selectedPackage.discount ?? '0'} %</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="order_details_title text-danger">Grand Total</div>
                                    </div>
                                    <span className="text-danger">{selectedPackage.price ?? ''} {selectedPackage.currency ?? 'N/A'}</span>
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