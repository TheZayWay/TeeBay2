import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadAllTeesThunk } from '../../../store/teeshirt';
import { Link } from 'react-router-dom';
import { logout } from "../../../store/session";
import './TeeshirtCards.css'


export default function LoggedIn() {
    const dispatch = useDispatch();
    const teeshirts = useSelector((state => state));
    const tees = teeshirts.tees.allTees;
    const user = teeshirts.session;
    const teesArr = Object.values(tees);
    let brandObj = {};
    

    useEffect(() => {
        dispatch(loadAllTeesThunk());
    }, [dispatch])

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout());
      };

      const handleButtonClick = () => {
        alert('Feature coming soon...');
      };

    return (
        <>
        <div className='logged-out-header'>
            <div className='logged-out-header-presplit'>
                <span style={{paddingLeft: "0px", fontSize: "12px"}} className='logged-out-signin-sentence'>Hi <Link style={{fontWeight: "bold", color: "black", textDecoration: "none"}} to='/listings' className='logged-out-signin'>{user.user.first_name}</Link>!</span>
                <span style={{paddingLeft: "20px", fontSize: "12px"}}>Daily deals</span>
                <span style={{paddingLeft: "20px", fontSize: "12px"}}>Brand Outlet</span>
                <span style={{paddingLeft: "20px", fontSize: "12px"}}>Help & Contact</span>
            </div>            
            <div className='logged-in-header-split'>
                <span style={{fontSize: "12px"}}><Link style={{color: "black", textDecoration: "none"}} to="/selling">Sell</Link></span>
                <span style={{fontSize: "12px", paddingLeft: "20px"}}><Link style={{color: "black", textDecoration: "none"}} to="/listings">My TeeBay</Link></span>
                <span><i style={{paddingLeft: "20px"}} class="fas fa-bell"></i></span>
                <Link to="/cart"><i style={{paddingLeft: "20px"}} class="fas fa-shopping-cart"></i></Link>
                <button style={{border: "none", backgroundColor: "transparent", paddingLeft: "20px", fontSize: "12px"}} onClick={handleLogout} className='logout-btn123'>Log Out</button>
            </div>
        </div>
        <hr style={{marginBottom: "20px"}} className='hr-home'></hr>
        <div className='searchbar-home-container'>
            <Link style={{fontFamily: "Roboto, 'Courier New', monospace", textDecoration: "none", fontWeight: "bold", fontSize: "36px"}} to="/">
                <span style={{color: "#0064D2"}}>T</span>
                <span style={{color: "#FDB900"}}>e</span>
                <span style={{color: "#00B140"}}>e</span>
                <span style={{color: "#E53238"}}>B</span>
                <span style={{color: "#0064D2"}}>a</span>
                <span style={{color: "#FDB900"}}>y</span>
            </Link>
            <p style={{fontSize: "15px"}}>Find your tee</p>
            <div className='searchbar-home'>
                <div><i class="fas fa-search" style={{color: "grey", paddingLeft: "20px", paddingRight: "10px", fontSize: "15px"}}></i></div>
                <input className='searchbar-mag-text' style={{paddingRight: "55%", border: "none", outline: "none", fontSize: "16px"}} placeholder="Search for any tee" />
                <hr className='search-hr'></hr>
                <div style={{fontSize: "12px"}}>
                    All Types
                    <select style={{width: "25px", border: "none", outline: "none"}}>
                        <option></option>
                        <option>Short Sleeve</option>
                        <option>Long Sleeve</option>
                        <option>Button Short Sleeve</option>
                        <option>Button Long Sleeve</option>
                        <option>Thermal</option>
                        <option>Undershirt</option>
                    </select>
                </div>
            </div>
            <button className='searchbar-button' onClick={handleButtonClick}>Search</button>
        </div>
        <hr style={{marginTop: "20px", marginBottom: "50px"}} className='hr-home'></hr>


        {/* Working on getting brands to link to teeshirts of that brand */}


        <div className='card-brand-container'>
            {teesArr.map((teeshirt) =>  {
                brandObj[teeshirt.brand] = teeshirt.brand
            })}
             {Object.values(brandObj).map((brand) => {
            return (<h2><Link to={`/${"brand"}`}>{brand}</Link></h2>)
             })}     
        </div>
      
        
       {/* Work in progress above */}

        <div className='card-container'>           
            {teesArr.map((teeshirt) => {
                    return (
                        <div className='card' key={teeshirt.id}>
                            <div className='front-page-images-container'>
                                <Link to={`/teeshirts/${teeshirt.id}`}>
                                    <img src={teeshirt.image_url} alt='Teeshirt Preview' className='front-page-images' onError={e => e.currentTarget.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV-EVNan6uv0pIUNhN3H1m4O-OmHyaQ93pgw&usqp=CAU"}/>
                                </Link>
                            </div>
                            <Link className='homepage-price' to={`/teeshirts/${teeshirt.id}`}>
                                <p>${teeshirt.price}</p>
                            </Link>
                        </div>
                    )
                }                 
            )}
        </div>
        </>
    )
}