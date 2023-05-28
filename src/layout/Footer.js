import React from 'react';
export default function Footer() {
    return (
        <footer className="page-footer brown darken-4">
            <div className="container">
                © {new Date().getFullYear()} 
            </div>
        </footer>
    );
}