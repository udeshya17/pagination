import React, {useEffect, useState} from "react";
import { FetchApi } from "../Api/Api";
import './Table.css'
import Pagination from '../Pagination/Pagination';

function Table(){

    const [data, setData] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const nbPages = 10;

    useEffect(()=>{ 
        const getData = async()=>{
            let result = await FetchApi();
            setData(result);
        }
        getData();
    },[])

    if(!data){
        return <div>Loading...</div>
    }

    const lastIndex = currentPage * nbPages;
    const firstIndex = lastIndex - nbPages;
    const currentItems = data.slice(firstIndex, lastIndex);

    return(
        <div>
            <h1 style={{textAlign:'center'}}>Employee Data Table</h1>
            <div className="table">
                <table className="table">
                    <tr className="heading">
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                    {currentItems.map((item, index)=>(
                        <tbody>
                            <tr>
                                <td>{item.id}</td>
                                <td >{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.role}</td>
                            </tr>
                        </tbody>
                    ))}
                </table>
            </div>
            <Pagination
                totalItems = {data.length}
                setCurrentPage = {setCurrentPage}
                currentPage = {currentPage}
                nbPages = {nbPages}
            />
        </div>
    )
}

export default Table;