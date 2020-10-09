import React, { useState} from "react";
import { useHistory } from "react-router-dom";
import "./PledgeForm.css"; 

function PledgeForm() {

    //variables

    const [pledge, setPledge] = useState({
        comment: "",
        project_id: "",
        anonymous: "",
        supporter: "",
        category: ""
    });

    const history = useHistory();

    //methods

    const handleChange = (e) => {
        const { id, value } = e.target;
        setPledge((prevPledge) => ({
        ...prevPledge,
        [id]: value,
        }));
    };

    const postData = async () => {
        let token = window.localStorage.getItem("token");
        console.log(token)

        // POST request using fetch with async/away 
        const response = await fetch(`${process.env.REACT_APP_API_URL}projects/`, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Token ${token}`,
            },
            body: JSON.stringify(pledge),
            
        });
        console.log(response)
        console.log(pledge)
    
        return response.json();
    };

//template

        return (
            <form>
                <div className="card">
                    <div>
                        <label htmlFor="title">Comment:</label>
                        <input 
                        type="text" 
                        id="comment" 
                        placeholder="Enter comment" 
                        onChange={handleChange}
                        />
                    </div>
                    <div className="form-check">
                        <label>
                            <input
                            type="radio"
                            id="anonymous"
                            value="true"
                            className="form-check-input"
                            onChange={handleChange}/>
                            Open
                        </label>
                    </div>
                    <div className="form-check">
                        <label>
                            <input
                            type="radio"
                            id="anonymous"
                            value="false"
                            className="form-check-input"
                            onChange={handleChange}/>
                            Closed
                        </label>
                    <div>

                    </div>
                    </div>  
                    <div>
                        <button type="submit" onClick={handleSubmit}>
                        Submit
                        </button>
                    </div>
                </div>                
            </form>
        );
        }

export default PledgeForm;