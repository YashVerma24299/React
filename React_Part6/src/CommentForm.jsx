import { useState } from "react";

export default function CommentForm(){
    let [formData, setFormData] = useState({
        username: "",
        remarks: "",
        rating: ""
    });

    let handleInputChange = (event)=>{
        let field = event.target.name;
        let newValue = event.target.value;
        setFormData((currData)=>{
            return {...currData, [field] : newValue};
        })
    }

    let handleSubmit = (event)=>{
        event.preventDefault();
        console.log(formData);
        setFormData({
            username: "",
            remarks: "",
            rating: ""
        });
    }

    return(
        <>
            <div className="CommentForm">
                <h2>Give a Comment!</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="username" placeholder="username" value={formData.username} onChange={handleInputChange}/>
                    <br /><br />
                    <textarea name="remarks" placeholder="add few remarks" value={formData.remarks} onChange={handleInputChange}></textarea>
                    <br /><br />
                    <input name="rating" type="number" min="1" max="5" placeholder="rating" value={formData.rating} onChange={handleInputChange}/>
                    <br /><br />
                    <button>Add coment</button>
                </form>
            </div>
        </>
    )
}