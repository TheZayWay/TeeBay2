import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadAllUserTeesThunk } from '../../../store/teeshirt';
import DeleteTeeshirt from '../DeleteTeeshirt'
import Footer from '../../Footer';
import SearchBar from '../../Search';
import './UserPage.css'

export default function SellerTeeshirts () {
    const dispatch = useDispatch();
    const state = useSelector((state) => state)
    const user = state.session.user;
    const teeshirts = state.tees.userTees;
    const teeshirtsArr = Object.values(teeshirts)

    useEffect(() => {
        dispatch(loadAllUserTeesThunk())
    }, [dispatch])


    return (
        <>
            <SearchBar />
            {
            teeshirtsArr.length === 0 ? <h1 className='user-page-no-listings'>No listings...</h1> :            
            <>
                <h1>{user.first_name}'s Listings</h1>
                <div className='user-page-teeshirt-container'>
                    {teeshirtsArr.map((teeshirt) => {
                        return (
                            <>
                                <div className='user-page-teeshirt-card'>
                                    <h3>{teeshirt.name}</h3>
                                    <Link to={`teeshirts/${teeshirt.id}`}><img className='user-page-images' src={teeshirt.image_url} alt='Teeshirt Preview' onError={e => e.currentTarget.src="https://images.stockx.com/images/Balenciaga-Womens-Maison-Balenciaga-Medium-Fit-T-Shirt-Black-Orange-White.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1642709552"}/></Link>
                                    <div className='user-page-crud-btns'>
                                        <Link style={{textDecoration: "none"}} to={`/teeshirts/${teeshirt.id}/update`}><button className='user-page-update-btn'>Update Listing</button></Link>
                                        <DeleteTeeshirt props={teeshirt.id}/>
                                    </div>
                                </div>
                            </>
                    )})}
                </div>
            </>
            }
            <Footer />
        </>
    ) 
}