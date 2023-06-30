import React from 'react'
import LichessProfileCard from './LichessProfileCard'
import LichessProfileDetails from './LichessProfileDetails'


function LichessProfile({ data }) {
    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h2 text-primary">Lichess profile Details</p>
                    </div>
                </div>
                <div className="row align-items-stretch">
                    <div className="col-md-3">
                        <LichessProfileCard data={data} />
                    </div>
                    <div className="col-md-9">
                        <LichessProfileDetails data={data} />
                    </div>
                </div>
            </div>

        </>
    )
}

export default LichessProfile