import Categories from '../../Components/Categories/Categories'
import FreeToolsCard from '../../Components/FreeToolsCard/FreeToolsCard'
import Layout from '../../Layout/Layout'
import './Home.css'

const Home = () => {
  return (
    <Layout>
      <section className='hero_section' id='hero_section'></section>

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
          <div className="row align-items-center justify-content-center">
            <Categories />
            <Categories />
            <Categories />
            <Categories />
            <Categories />
            <Categories />
            <Categories />
            <Categories />
            <Categories />
            <Categories />
            <Categories />
            <Categories />
          </div>
        </div>
      </section>

      <section className='free_tools_section' id='free_tools_section'>
        <div className="container">
          <div className="row">
            <FreeToolsCard />
            <FreeToolsCard />
            <FreeToolsCard />
            <FreeToolsCard />
            <FreeToolsCard />
            <FreeToolsCard />
            <FreeToolsCard />
            <FreeToolsCard />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Home