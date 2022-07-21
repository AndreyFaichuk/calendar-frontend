import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';

const Event: FC = () => {
    const [post, setPost] = useState(null);

    useEffect(() => {
        axios({
            headers: { 
              'Content-Type': 'application/json'
            },
            withCredentials: true,
            method: 'get',
            url: 'http://localhost:5000/users/protected',
          })
    }, []);

    return (
        <div>
            event
        </div>
    )
}

export default Event;