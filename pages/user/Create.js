import axios from 'axios'

import React from 'react'

export default function Create() {
    export const importRoles = async (roleType, roleDesc) => {
        const { data } = await axios.post('buat-role', { roleType, roleDesc });
        console.log(data)
    }
    return (
        <div>

        </div>
    )
}

