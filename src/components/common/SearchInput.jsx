import React from 'react'
import { Input } from 'antd'
import cn from '../../lib/cn'

function SearchInput({ placeholder, className, onChange }) {

    return (
        <div className={cn("w-[300px]", className)}>
            <Input onChange={onChange} placeholder={placeholder} />
        </div>
    )
}

export default SearchInput