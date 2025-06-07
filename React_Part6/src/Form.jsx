import { useState } from "react"

// export default function Form(){
//     let [fullName, setFullName] = useState("");
//     let [userName, setUserName] = useState("");

//     let handleNameChange =(event) =>{
//         console.log(event.target.value);
//         setFullName(event.target.value)
//     }
//     let handleUserNameChange =(event) =>{
//         console.log(event.target.value);
//         setUserName(event.target.value)
//     }
//     return (
//         <>
//             {/* In these, "for" is relpace with "htmlFor" */}
//             <form >
//                 <label htmlFor="fullName">FullName:</label>
//                 <input type="text" placeholder="Enter something.." value={fullName} onChange={handleNameChange} id="fullName"/>

//                 <br /> <br />

//                 <label htmlFor="userName">UserName:</label>
//                 <input type="text" placeholder="Enter something.." value={userName} onChange={handleUserNameChange} id="userName"/>

//                 <br /> <br />

//                 <button>Submit</button>
//             </form>

//             {/* Now agr mjhe aise hi 10 field aur chahiye tho code long hoga due to state function and other stuff. so we use another way*/}
//         </>
//     )
// }
export default function Form(){
    let [formData, setFormData] = useState({
        fullName: "",
        userName: "",
        passWord: ""
    });

    let handleInputChange = (event)=>{
        let field = event.target.name;
        let newValue = event.target.value;
        // console.log(field);
        // console.log(newValue);
        setFormData((currData)=>{
            return {...currData, [field] : newValue};
        })
    }

    let handleSubmit = (event)=>{
        event.preventDefault();
        console.log(formData);
        setFormData({
            fullName: "",
            userName: "",
            passWord: ""
        });
    }

    return (
        <>
            {/* name="..." iski mdd se "handleInputChange" mai field nikaalne ki konsa hai */}
            <form onSubmit={handleSubmit}>
                <label htmlFor="fullName">FullName:</label>
                <input type="text" placeholder="Enter something.." value={formData.fullName} onChange={handleInputChange} id="fullName" name="fullName"/>

                <br /> <br />

                <label htmlFor="userName">UserName:</label>
                <input type="text" placeholder="Enter username.." value={formData.userName} onChange={handleInputChange} id="userName" name="userName"/>

                <br /> <br />

                <label htmlFor="passWord">PassWord:</label>
                <input type="password" placeholder="Enter password" value={formData.passWord} onChange={handleInputChange} id="passWord" name="passWord"/>

                <br /> <br />

                <button>Submit</button>
            </form>
        </>
    )
}