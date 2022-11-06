import React, { useEffect, useState} from "react";
import ReactPaginate from "react-paginate";
import Helmet from "react-helmet";
import Loading from "../components/Loading";
const User =() =>{

const [users, setUsers] = useState([]);
const [pageNumber, setPageNumber] = useState(0);
const [loading, setLoading] = useState(false)


 const usersPerPage = 6
 const pagesVisited = pageNumber * usersPerPage

 
    

    const pageCount = Math.ceil(users.length / usersPerPage);

    const changePage =({selected}) => {
setPageNumber(selected);
    };
    useEffect(() =>{
        fetch("https://randomuser.me/api/?results=50").then((response) => response.json()).then((result) =>
            setUsers(result.results),
            setLoading(true)
        );
            }, []);
   
        

 return (
 <div className ="main"> 
     <Helmet>
      <title>Explore users</title>
      <meta name="description"
      content="top users"  />
      </Helmet>
    <h3> Meet our top customers</h3>
    {loading ? users.slice(pagesVisited, pagesVisited + usersPerPage)
 .map((user) => {
    return (
        
        <div className="user">
            <h3>{user.name.first}</h3>
            <h3>{user.name.last}</h3>
            <h3>{user.email}</h3>
           

    </div>
     );
     }) 
     : <Loading />

}
    
<ReactPaginate
previousLabel={"Previous"}
nextLabel={"Next"}
pageCount={pageCount} 
onPageChange={changePage}
containerClassName={"paginationBttns"}
previousLinkClassName={"previousBttn"}
nextLinkClassName={"nextBttn"}
disabledClassName={"paginationDisabled"}
activeClassName={"paginationActive"}
/>
</div>
 );
};
export default User;