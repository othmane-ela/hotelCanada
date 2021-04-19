import React from 'react'

function NoMatch() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center text-light pt-5">
                        <div className="logo d-block">
                              <img src="logo.png" className="logo my-5" alt="hotel canada inn logo" width="10%"/>
                        </div>
                          <h1>40<span style={{color:"#e23343"}}>4</span></h1>
                          <p className="text-light font-weight-bold">Page Not found  :(</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NoMatch
