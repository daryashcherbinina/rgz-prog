import {useState, useEffect} from 'react';
import {useLocation} from 'react-router';
import './inputf.css';
import React from 'react';

export default function SearchInput(props) {
    const location = useLocation();

    const [value, setValue] = useState('');

    useEffect(() => {
        const search = decodeURIComponent(location.search);
        if (search === '') {
            setValue('');
            return;
        }
        const [name, input] = search.split('=');
        if (name.trim() !== '?str') {
            setValue('');
            return;
        }
        if (input.trim() === '') {
            setValue('');
            return;
        }
        setValue(input.trim());
    }, [location.search]);

    const handleEnter = (event) => {
        if (event.key === 'Enter') {
            props.searchHandler(value);
        }
    }

    return (
        <div className="row">
            <div className="input-field col s12">
            
                <input 
                    type="text"
                    value={value}
                    onChange={event => setValue(event.target.value)}
                    onKeyUp={handleEnter}
                    placeholder="Search"
                />

                <button  className="btn search brown darken-4" onClick={() => props.searchHandler(value)}><i className ="material-icons">search</i></button>
            </div>
        </div>
    );
}