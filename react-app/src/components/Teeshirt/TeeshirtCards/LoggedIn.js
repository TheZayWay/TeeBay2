import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadAllTeesThunk } from '../../../store/teeshirt';
import SearchBar from '../../Search';
import { Link } from 'react-router-dom';
import { logout } from "../../../store/session";
import './TeeshirtCards.css'

export default function LoggedIn() {
    const dispatch = useDispatch();
    const teeshirts = useSelector((state => state));
    const tees = teeshirts.tees.allTees;
    const user = teeshirts.session;
    const teesArr = Object.values(tees);
  
    useEffect(() => {
        dispatch(loadAllTeesThunk());
    }, [dispatch]);

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout());
      };

    return (
        <>
            <div className='logged-out-header'>
                <div className='logged-out-header-presplit'>
                    <span style={{paddingLeft: "0px", fontSize: "12px"}} className='logged-out-signin-sentence'>Hi <Link style={{fontWeight: "bold", color: "black", textDecoration: "none"}} to='/listings' className='logged-out-signin'>{user.user.first_name}</Link>!</span>
                    <span className='deadlinks' style={{paddingLeft: "20px", fontSize: "12px"}}>Daily deals</span>
                    <span className='deadlinks' style={{paddingLeft: "20px", fontSize: "12px"}}>Brand Outlet</span>
                    <span className='deadlinks' style={{paddingLeft: "20px", fontSize: "12px"}}>Help & Contact</span>
                </div>            
                <div className='logged-in-header-split'>
                    <span style={{fontSize: "12px"}}><Link style={{color: "black", textDecoration: "none"}} to="/selling">Sell</Link></span>
                    <span style={{fontSize: "12px", paddingLeft: "20px"}}><Link style={{color: "black", textDecoration: "none"}} to="/listings">My TeeBay</Link></span>
                    <span className='deadlinks'><i style={{paddingLeft: "20px"}} className="fas fa-bell"></i></span>
                    <Link to="/cart"><i style={{paddingLeft: "20px"}} className="fas fa-shopping-cart"></i></Link>
                    <button style={{border: "none", backgroundColor: "transparent", paddingLeft: "20px", fontSize: "12px"}} onClick={handleLogout} className='logout-btn123'>Log Out</button>
                </div>
            </div>
            <hr style={{marginBottom: "20px"}} className='hr-home'></hr>    
            <SearchBar />
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