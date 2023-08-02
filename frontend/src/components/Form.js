import { useState } from "react";


export const Form = () => {
    const [ companyname, setCompanyName ] = useState();
    const [ address1, setAddress1 ] = useState();
    const [ address2, setAddress2 ] = useState();
    const [ address3, setAddress3 ] = useState();
    const [ city, setCity ] = useState();
    const [ district, setDistrict ] = useState();
    const [ hotline, setHotline ] = useState();
    const [ smsnumber, setSmsNumber ] = useState();
    const [ email, setEmail ] = useState();
    const [ facebook, setFacebook ] = useState();
    const [ twitter, setTwitter ] = useState();
    const [ linkedin, setLinkedin ] = useState();
    const [ companylogo, setCompanyLogo ] = useState();
    const [ businesstype, setBusinessType ] = useState();

   

    const handleSave = (e) => {
        e.preventDefault();
        const customer = { companyname, address1, address2, address3, city, district, hotline, smsnumber, email, facebook, twitter, linkedin, companylogo, businesstype };
        console.log(customer);

        fetch("http://localhost:5000/register", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-control-Allow-Origin": "*",
            },
            body:JSON.stringify({
                companyname, address1, address2, address3, city, district, hotline, smsnumber, email, facebook, twitter, linkedin, companylogo, businesstype
            }),
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data, "customerRegister");
        })

    }

    const handleCancel = (e) => {
        e.preventDefault();
        const customer = { companyname, address1, address2, address3, city, district, hotline, smsnumber, email, facebook, twitter, linkedin, companylogo, businesstype };

        console.log(customer);

    }

    return (
        <div className="regform">
            <h2>Easy Alert</h2>
            <h4>Registration</h4>

           
            <form>
                <label>Company Name</label>
                    <input type="text" required value={companyname} onChange={(e) => setCompanyName(e.target.value)} />
                <label>Address1</label>
                    <input type="text" required value={address1} onChange={(e) => setAddress1(e.target.value)} />
                <label>Address2</label>
                    <input type="text" required value={address2} onChange={(e) => setAddress2(e.target.value)} />
                <label>Address3</label>
                    <input type="text" required value={address3} onChange={(e) => setAddress3(e.target.value)} />
                <label>City</label>
                    <input type="text" required value={city} onChange={(e) => setCity(e.target.value)} />
                <label>District</label>
                    <select required value={district} onChange={(e) => setDistrict(e.target.value)}>
                        {districts.map(dis=> {
                            return (<option key={dis.value} value={dis.value}> {dis.text} </option> );
                        })}
                    </select>
                <label>Hotline</label>
                    <input type="text" required value={hotline} onChange={(e) => setHotline(e.target.value)} />
                <label>SMS Number</label>
                    <input type="text" required value={smsnumber} onChange={(e) => setSmsNumber(e.target.value)} />
                <label>Email</label>
                    <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />   
                <label>Facebook</label>
                    <input type="text" value={facebook} onChange={(e) => setFacebook(e.target.value)} />
                <label>Twitter</label>
                    <input type="text" value={twitter} onChange={(e) => setTwitter(e.target.value)} />
                <label>Linkedin</label>
                    <input type="text" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} />
                <label>Company Logo</label>
                    <input type="file" required value={companylogo} onChange={(e) => setCompanyLogo(e.target.value)} />
                <label>Business Type</label>
                    <input type="text" required value={businesstype} onChange={(e) => setBusinessType(e.target.value)}/>
                
                <button type="submit" onClick={handleCancel}>Cancel</button>
                <button type="submit" onClick={handleSave} >Save</button>
            </form>
           
           
        </div>
    )
}

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

export default Form;