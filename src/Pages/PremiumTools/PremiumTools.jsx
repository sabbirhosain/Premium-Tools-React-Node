import PremiumToolsCard from '../../Components/PremiumToolsCard/PremiumToolsCard'
import Layout from '../../Layout/Layout'
import './PremiumTools.css'

const PremiumTools = () => {
    return (
        <Layout>
            <section className='premium_tools_section'>
                <div className="container">
                    <div className="row">
                        <PremiumToolsCard />
                        <PremiumToolsCard />
                        <PremiumToolsCard />
                        <PremiumToolsCard />
                        <PremiumToolsCard />
                        <PremiumToolsCard />
                        <PremiumToolsCard />
                        <PremiumToolsCard />
                        <PremiumToolsCard />
                        <PremiumToolsCard />
                        <PremiumToolsCard />
                        <PremiumToolsCard />
                    </div>
                    <div className="d-flex align-items-center justify-content-center mt-3">
                        <nav aria-label="Page navigation example">
                            <ul className="pagination">
                                <li className="page-item">
                                    <a className="page-link" href="#" aria-label="Previous"> <span aria-hidden="true">«</span></a>
                                </li>
                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item">
                                    <a className="page-link" href="#" aria-label="Next"> <span aria-hidden="true">»</span></a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default PremiumTools