import React from 'react'
import { useNavigate } from 'react-router-dom'
import cn from '../../lib/cn'

function BackButton({ className, message = "Back" }) {
    const navigate = useNavigate()
    return (
        <div onClick={() => navigate(-1)} className={cn("flex items-center gap-2 cursor-pointer transition-all duration-300 ease-in-out", className)}>
            <svg width="44" height="16" viewBox="0 0 44 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40.1716 6.9999H0V8.9999H40.1716L34.8076 14.3638L36.2218 15.778L44 7.9999L36.2218 0.22168L34.8076 1.63589L40.1716 6.9999Z" fill="#F57C00" />
            </svg>
            <p>{message}</p>
        </div>
    )
}

export default BackButton