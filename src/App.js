import React, {useState} from 'react';
import JsonData from './MOCK_DATA.json'


function App(props) {
    const [search, setsearch] = useState()
    return (
        <div className={"App"}>
            <input type={"text"} placeholder={"SEARCH...."} onChange={(event) => {
                setsearch(event.target.value)
            }}/>
            {JsonData.filter((val) => {
                if (setsearch == "") {
                    return val
                } else if (val.first_name.toLowerCase().includes(search.toLowerCase())) {
                    return val
                }
            }).map((val, key) => {
                return( <div className={"user"} key={key}>
                    <p>{val.first_name}</p>
                </div>)
            })}
        </div>
    );
}

export default App;