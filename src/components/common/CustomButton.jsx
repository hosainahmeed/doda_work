import { Button } from 'antd'
import React from 'react'
import { FaEdit, FaPlus, FaTrash } from 'react-icons/fa'

function CustomButton({ title = "click", icon, onClick, shape }) {

    switch (icon) {
        case "plus":
            icon = <FaPlus />
            break;

        case "edit":
            icon = <FaEdit />
            break;

        case "delete":
            icon = <FaTrash />
            break;

        default:
            break;
    }

    return (
        <Button
            icon={icon}
            onClick={onClick}
            shape={shape}
            style={{
                backgroundColor: "var(--primary-color)",
                color: "white",
                border: "none",
                borderRadius: "5px",
                padding: "5px 10px",
                fontSize: "14px",
                fontWeight: "bold",
                cursor: "pointer",
                transition: "all 0.3s ease-in-out",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
                marginBottom: "10px",
            }}
        >{title}</Button>
    )
}

export default CustomButton