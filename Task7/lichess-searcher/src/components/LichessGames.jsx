import React from 'react'

function LichessGames({ data }) {

    // console.log("LichessGames Data\n", data)
    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h2 text-primary">Recent Chess Games</p>
                        <div>
                            The last 30 games of the user are shown below:
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col">
                        <div className="card">
                            <div className="card-header">
                                <p className="h4">Your Games</p>
                            </div>
                            <div className="card-body">
                                <ul className="list-group">
                                    {data.map((game, index) => {
                                        return (
                                            <div key={index}>
                                                <li className="list-group-item">
                                                    <div className="d-flex justify-content-between">
                                                        <span className="h5">
                                                            <a href={game[0].headers[1].value} target='_blank'>
                                                                {game[0].headers[3].value}({game[0].headers[3].name})
                                                                vs
                                                                {" "}{game[0].headers[4].value}({game[0].headers[4].name})
                                                            </a>
                                                        </span>
                                                        <span>
                                                            <span className="badge bg-warning me-5">
                                                                {game[0].headers[0].value}
                                                            </span>
                                                            <span className="badge bg-success">
                                                                Result: {game[0].result}
                                                            </span>
                                                        </span>
                                                    </div>
                                                </li>
                                            </div>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </>
    )
}

export default LichessGames