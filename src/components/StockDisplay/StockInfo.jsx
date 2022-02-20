import React from 'react'
import styled from 'styled-components'

const InfoCon = styled.div`
    width: 100%;
`

function StockInfo({ profileData }) {
    return (
        <InfoCon>
            <span>
                <a href={profileData.website}>{profileData.companyName} </a>
                
                <a href={`tel:${profileData.phone}`}>{`${profileData.phone.substr(1, 3)} ${profileData.phone.substr(4, 3)} ${profileData.phone.substr(7)}`}</a>
            </span> <br />
            <span>{profileData.address}</span> <br />
            <span>{`${profileData.city} ${profileData.state[0]}${profileData.state[1]} ${profileData.zip} ${profileData.country}`}</span> <br />
            <span>{`Ceo: ${profileData.ceo}`}</span> <br />
            <span>{`Sector(s): ${profileData.sector}`}</span> <br />
            <span>{`Industry: ${profileData.industry}`}</span> <br />
            <span>Full Time Employees: <span>{profileData.fullTimeEmployees}</span></span>
            <p>{profileData.description}</p>
        </InfoCon>
    )
}

export default StockInfo