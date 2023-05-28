import React from 'react';
export default function Preloader() {
    return (
        <div className="progress" style= {{backgroundColor: '#ffe0b2' }} >
            <div className="indeterminate" style= {{backgroundColor: '#f57c00' }}></div>
        </div>
    );
}