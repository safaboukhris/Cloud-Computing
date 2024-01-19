import React from 'react';
import styled from 'styled-components';

const P = styled.p`
text-align: center;
margin-bottom: 3rem;
margin-top: 3rem;
margin-left:5rem;
margin-right:5rem;
display: flex;
align-items: center;
justify-content: center;
font-size: 1.2em;
line-height: 1.5;
color: #333; 
font-weight: 400;
`;


const Intoparag = () => {
    return (
        <div>
            <P>Welcome to our extraordinary journey! At our travel agency, we believe in the art of storytelling and the magic of experiences. Each adventure is more than a trip; it's a carefully crafted narrative that unfolds with every step. Our commitment to making a positive impact sets us apart –
                while others talk about minimizing their footprint, we strive to maximize the good we do.With small group travel, we provide exclusive behind-the-scenes moments that larger groups can only dream of. Our trips, limited to 12-14 curious co-travelers, grant special access to unique experiences, fostering a sense of exploration and camaraderie. Our travelers are not just participants; they are storytellers themselves, seeking the extraordinary in the ordinary. Join us as we venture to places no one else goes, uncovering hidden wonders where the most incredible stories await discovery. Let the journey begin, where every moment is a chapter in the story of a lifetime.
            </P>
        </div>
    )  
}

export default Intoparag

