import {api,endpoints} from '../../Lib'
import {useState, useEffect,useMemo} from 'react';
import {useLocation} from 'react-router-dom'
import EditContactForm from '../../Components/EditContactForm/EditContactForm';
const EditPage = () =>{
    const location = useLocation();

    const postId = location.pathname.split('/')[2];
   
    const config = useMemo(()=>{
        return{
            params:[postId]
        }
    },[postId])
    const [data,setData] = useState();
    useEffect(()=>{
        const getPost = async() =>{
            const result = await api.call(endpoints.getContact, config);
            console.log(result);
            setData([result.data]);
        }
        getPost();

    },[config])
    console.log(data);
    return<>
    {data &&
    <EditContactForm data={data[0]} />
    }
    </>
}
export default EditPage;