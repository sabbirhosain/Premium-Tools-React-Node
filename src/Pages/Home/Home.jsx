import { useEffect, useState } from 'react'
import Categories from '../../Components/Categories/Categories'
import { useAppContextProvider } from '../../Context/ContextProvider'
import FreeToolsCard from '../../Components/PremiumToolsCard/FreeToolsCard'
import Layout from '../../Layout/Layout'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { handleError, isLoading, freeTools, totalPages, getFreeTools, categoryHandleError, isCategoryLoading, categories, getCategory } = useAppContextProvider()
  useEffect(() => { getFreeTools(currentPage), getCategory() }, [currentPage]);
  const handlePrevPage = () => { if (currentPage > 1) { setCurrentPage(prev => prev - 1) } }
  const handleNextPage = () => { if (currentPage < totalPages) { setCurrentPage(prev => prev + 1) } }

  return (
    <Layout>
      <section className='hero_section' id='hero_section'>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className='hero_text_box'>
                <h1>সকল প্রকার ফ্রি ও প্রিমিয়াম টুলস এখন মোবাইল ও কম্পিউটার এর জন্য পাচ্ছেন একদম সাশ্রয়ী মূল্যে!</h1>
                <h2>মানসম্মত সেবা, সর্বনিম্ন মূল্য — সব একসাথে।</h2>
                <div className="d-flex align-items-center gap-2 mt-4">
                  <Link to='/premium-tools' className='nav_btn bg-danger'>Premium Tools</Link>
                  <a href='#free_tools_section' className='nav_btn'>Free Tools</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='categories_section' id='categories_section'>
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-md-6">
              <div className="categories_text">
                <h4>Featured Category</h4>
                <p>Get Your Desired Tools From Featured Category!</p>
              </div>
            </div>
          </div>

          {categories?.length > 0 ? (
            <div className="row align-items-center justify-content-center">
              {categories.map((category, index) => (<Categories key={index} category={category} />))}
            </div>
          ) : (
            <div className="text-center py-5">
              <span>No Data Available</span>
            </div>
          )}
          
        </div>
      </section>

      <section className='free_tools_section' id='free_tools_section'>
        <div className="container">
          {freeTools?.length > 0 ? (
            <div className="row">
              {freeTools.map((item, index) => (<FreeToolsCard key={index} item={item} />))}
            </div>
          ) : (
            <div className="text-center py-5">
              <span>No Data Available</span>
            </div>
          )}
          {totalPages > 1 && (
            <div className="d-flex align-items-center justify-content-center mt-4">
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                    <button className="page-link" onClick={handlePrevPage} aria-label="Previous" disabled={currentPage === 1}> <span aria-hidden="true">«</span> </button>
                  </li>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <li key={page} className={`page-item ${currentPage === page ? 'active' : ''}`}>
                      <button className="page-link" onClick={() => setCurrentPage(page)}>{page}</button>
                    </li>
                  ))}

                  <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                    <button className="page-link" onClick={handleNextPage} aria-label="Next" disabled={currentPage === totalPages} > <span aria-hidden="true">»</span></button>
                  </li>
                </ul>
              </nav>
            </div>
          )}
        </div>
      </section>
    </Layout>
  )
}

export default Home