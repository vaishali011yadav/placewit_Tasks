import React, { useState, useEffect } from 'react'
import { PERSONAL_ACCESS_TOKEN, headers } from "./LichessCredentials";
import axios from "axios"
import { parse } from 'pgn-parser';
import LichessProfile from './LichessProfile';
import LichessGames from './LichessGames';

function LichessSearchApp() {

    const [lichessUser, setLichessUser] = useState("");
    const [lichessProfile, setLichessProfile] = useState({});
    const [lichessGames, setLichessGames] = useState([]);
    const [visibility, setVisibility] = useState('d-none');


    const submitSearch = async (e) => {
        e.preventDefault();
        let dataURL = `https://lichess.org/api/user/${lichessUser}`;


        try {

            let response = await axios.get(dataURL, {
                headers: {
                    Authorization: `Bearer ${PERSONAL_ACCESS_TOKEN}`
                }
            });
            // console.log(response.data);
            setLichessProfile(response.data);

        } catch (error) {
            console.log(error);
            setLichessProfile({});
        }

        let dataURL2 = `https://lichess.org/api/games/user/${lichessUser}?max=30`;

        try {
            const response2 = await axios.get(dataURL2, {
                headers: {
                    Authorization: `Bearer ${PERSONAL_ACCESS_TOKEN}`,
                }
            });


            // console.log('response2.data\n', response2.data)

            const pgnResponse = response2.data.toString();
            const cleanedResponse = pgnResponse.replace(/[^ -~\r\n\t]/g, '');
            const games = cleanedResponse.split(/\n\n(?=\[Event)/);


            const parsedGames = games.map((game) => {
                const parsedGame = parse(game);
                return parsedGame;
            });

            // console.log("parsedGames\n ", parsedGames);

            setLichessGames(parsedGames);
        } catch (error) {
            console.log(error);
            setLichessGames([]);
            setLichessProfile({});
        }

        setVisibility("");

    }

    return (
        <>
            <div className="container mt-6">
                <div className="row">
                    <div className="col">
                        <p className="display-3">Lichess Profile Search</p>
                        <p className="lead font-weight-bold">
                            Search a Lichess Profile to see his/her activities
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <form className="form-inline"
                            onSubmit={submitSearch}
                        >
                            <input
                                style={{ fontWeight: "bold" }}
                                value={lichessUser}
                                onChange={(e) => setLichessUser(e.target.value)}
                                size="30"
                                type="text"
                                className="form-control"
                                placeholder="Lichess UserName"
                            />

                            <input
                                type="submit"
                                value="Search"
                                className="btn btn-secondary btn-sm mt-2"
                            />
                        </form>
                    </div>
                </div>
            </div>
            <div>
                {
                    Object.keys(lichessProfile).length > 0 &&
                    <LichessProfile data={lichessProfile} />
                }
            </div>
            <div>
                {
                    lichessGames.length > 0 ?
                        <LichessGames data={lichessGames} /> :
                        <div className={visibility}>
                            <div className="d-flex justify-content-center">
                                <div className="btn btn-danger">Username is Incorrect!</div>
                            </div>
                        </div>
                }
            </div>

        </>
    )
}


export default LichessSearchApp