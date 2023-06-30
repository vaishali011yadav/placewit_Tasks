import React from 'react'

function LichessProfileDetails({ data }) {

    // console.log("lichessProfileDetails ", data)

    const date = new Date(data.createdAt);
    const readableDate = date.toLocaleString();
    const preservedSpaces = {
        whiteSpace: 'pre'
    };
    return (
        <>
            <div className="card h-100">
                <div className="card-header">
                    <span className="badge bg-success mx-2">
                        {data.count.all} Total Games
                    </span>
                    <span className="badge bg-warning mx-2">
                        {data.count.rated} Rated Games
                    </span>
                    <span className="badge bg-danger mx-2">
                        {data.count.ai} Unrated Games
                    </span>
                </div>
                <div className="card-body">
                    <ul className="list-group">
                        <li className="list-group-item">
                            USERNAME : <span className="fw-bold">{data.username}</span>
                        </li>
                        <li className="list-group-item">
                            WINS : <span>{data.count.win}</span>
                        </li>
                        <li className="list-group-item">
                            Losses : <span>{data.count.loss}</span>
                        </li>
                        <li className="list-group-item">Draws : {data.count.draw}</li>
                        <li className="list-group-item">
                            Rating :{" "}

                            <span>
                                {data.perfs.rapid.rating} Rapid
                            </span>
                            <br />
                            <span style={preservedSpaces}>
                                {'      '}       {data.perfs.blitz.rating} Blitz
                            </span>
                            <br />
                            <span style={preservedSpaces}>
                                {'      '}       {data.perfs.bullet.rating} Bullet
                            </span>
                            <br />
                            <span style={preservedSpaces}>
                                {'      '}       {data.perfs.classical.rating} Classical
                            </span>
                        </li>
                        <li className="list-group-item">
                            Member since :{" "}
                            <span>
                                {
                                    readableDate
                                }
                            </span>
                        </li>
                    </ul>
                </div>
            </div>


        </>
    )
}

export default LichessProfileDetails