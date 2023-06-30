import React from 'react'
import lichessLogo from '../images/Lichess_logo_2019.png'

function LichessProfileCard({ data }) {

    // console.log("profile card data \n", data);
    return (
        <>
            <div className="card">
                <img src={lichessLogo} className="img-fluid" />
                <div className="card-body">
                    <p className="h4">{data.username}</p>
                    <div className='d-flex justify-content-between'>
                        <small>Followable: {data.followable ? "Yes" : "No"}</small>

                        <small>Following: {data.following ? "Yes" : "No"}</small>
                    </div>
                    <br />
                    <a href={data.url} className="btn btn-success btn-sm" target="_blank">Profile</a>
                </div>
            </div>

        </>
    )
}

export default LichessProfileCard