import React, { useState} from "react";
import { useHistory } from "react-router-dom";


function AddProject() {

    const [credentials, setCredentials] = useState({
        title: "",
        description: "",
        image: "",
        post_code: "",
        suburb: "",
        seeking: "",
        is_open: "",
        date_created: "0000-00-00 06:00:00.000000",
    });

    const history = useHistory();

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
        body: JSON.stringify(credentials),
        
    });
    console.log(response)
    console.log(credentials)
    

    return response.json();
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setCredentials((prevCredentials) => ({
        ...prevCredentials,
        [id]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (credentials.title) {
            postData().then((response) => {
                history.push("/"); 
            })
            .catch((error) => {
                alert("Sorry your credentials appear invalid");
            });
        }
    };

//template
return (
    <form>
        <div className="card">
            <div>
                <label htmlFor="title">Title:</label>
                <input 
                type="text" 
                id="title" 
                placeholder="Enter title" 
                onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <input 
                type="text" 
                id="description" 
                placeholder="Enter description" 
                onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="post_code">Post code:</label>
                <input 
                type="text" 
                id="post_code" 
                placeholder="Enter postcode" 
                onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="suburb">Suburb:</label>
                <input 
                type="text" 
                id="suburb" 
                placeholder="Enter suburb" 
                onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="seeking">Seeking:</label>
                <input 
                type="text" 
                id="seeking" 
                placeholder="Enter what you are type of donations you are looking for" 
                onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="image">Project Image:</label>
                <input 
                type="url" 
                id="image" 
                placeholder="Enter image URL" 
                onChange={handleChange}
                />
            </div>
            <div className="form-check">
                <label>
                    <input
                    type="radio"
                    id="is_open"
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
                    id="is_open"
                    value="false"
                    className="form-check-input"
                    onChange={handleChange}/>
                    Closed
                </label>
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

export default AddProject;
