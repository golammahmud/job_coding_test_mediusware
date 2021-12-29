import React from 'react'
import Products from './products'
function Home() {
    return (
        <div>
            <h2>This is a home pages</h2>
            
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <Products/>

                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Home;
