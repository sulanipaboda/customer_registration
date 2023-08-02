const districts = [
    {value: 'Ampara', text: 'Ampara'},
    {value: 'Anuradhapura', text: 'Anuradhapura'},
    {value: 'Badulla', text: 'Badulla'},
    {value: 'Baticaloa', text: 'Baticaloa'},
    {value: 'Colombo', text: 'Colombo'},
    {value: 'Galle', text: 'Galle'},
    {value: 'Gampaha', text: 'Gampaha'},
    {value: 'Hambantota', text: 'Hambantota'},
    {value: 'Jaffna', text: 'Jaffna'},
    {value: 'Kalutara', text: 'Kalutara'},
    {value: 'Kandy', text: 'Kandy'},
    {value: 'Kegalle', text: 'Kegalle'},
    {value: 'Kilinochchi', text: 'Kilinochchi'},
    {value: 'Kurunegala', text: 'Kurunegala'},
    {value: 'Mannar', text: 'Mannar'},
    {value: 'Matale', text: 'Matale'},
    {value: 'Matara', text: 'Matara'},
    {value: 'Monaragala', text: 'Monaragala'},
    {value: 'Mullaitivu', text: 'Mullaitivu'},
    {value: 'NuwaraEliya', text: 'NuwaraEliya'},
    {value: 'Polonnaruwa', text: 'Polonnaruwa'},
    {value: 'Puttalam', text: 'Puttalam'},
    {value: 'Ratnapura', text: 'Ratnapura'},
    {value: 'Trincomalee', text: 'Trincomalee'},
    {value: 'Vavuniya', text: 'Vavuniya'},
];

export const Form = () => {
    return (
        <div className="regform">
            <h2>Easy Alert</h2>
            <h4>Registration</h4>

           
            <form>
                <label>Company Name</label>
                    <input type="text" required />
                <label>Address1</label>
                    <input type="text" required />
                <label>Address2</label>
                    <input type="text" required/>
                <label>Address3</label>
                    <input type="text" required />
                <label>City</label>
                    <input type="text" required />
                <label>District</label>
                    <select value="Ampara">
                        {districts.map(dis=> {
                            return (<option key={dis.value} value={dis.value}> {dis.text} </option> );
                        })}
                    </select>
                <label>Hotline</label>
                    <input type="text" required />
                <label>SMS Number</label>
                    <input type="text" required />
                <label>Email</label>
                    <input type="email" required />   
                <label>Facebook</label>
                    <input type="text"  />
                <label>Twitter</label>
                    <input type="text"  />
                <label>Linkedin</label>
                    <input type="text" />
                <label>Company Logo</label>
                    <input type="file" required />
                <label>Business Type</label>
                    <input type="text" required />
                    <button type="submit" >Cancel</button>
                <button type="submit" >Save</button>
            </form>
           
           
        </div>
    )
}

export default Form;