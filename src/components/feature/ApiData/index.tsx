import './style.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Loader } from '../../common/Loader';

export const ApiData = () => {
    const [apiData, setApiData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(8);

    useEffect(() => {
        axios.get(`https://picsum.photos/v2/list?page=${page}&limit=${limit} `)
            .then((res) => {
                setApiData(res.data);
                setLoading(true);
            });
    }, [page, limit]);

    return (
        <div className='apiData'>
            {loading ?
                apiData.map((post) => {
                    const { author, download_url, id } = post;
                    return <div className='card' key={id}>
                        <img src={download_url} height="350px" width="350px" />
                        <h3>{author}</h3>
                        <a href={download_url} className='hover'>{download_url}</a>
                    </div>
                })
                : <Loader />
            }

            <div className='pagination'>
                <button
                    disabled={page === 1}
                    onClick={() => setPage(page - 1)}
                >
                    Prev
                </button>
                <p>{page}</p>
                <button onClick={() => setPage(page + 1)}>
                    Next
                </button>
            </div>

        </div >
    )
}

