import type { CSSProperties } from "react";

export const MyAwesomeApp = () => {

    const firstName = 'Kenia';
    const lastName = 'Castro';

    const favoriteGames = ['Forza Horizon', 'Assasins creed', 'Far cry'];
    const isActive = true;

    const address = {
        zipCode: 'ABC-123',
        country: 'Canadá',
    };

    const myStyles: CSSProperties = {
        backgroundColor: 'red',
        borderRadius: 10,
        padding: 10,
        marginTop: 30,
    };

    return (
        <>
            <h1>{ firstName }</h1>
            <h3>{ lastName }</h3>
            <p>{favoriteGames.join(', ')}</p>

            <h1>{isActive ? 'Activo' : 'No activo'}</h1>

            <p
                style={ myStyles }>
                {JSON.stringify(address)}
            </p>
        </>
    );
}


// export function MyAwesomeApp(){
//     return(
//         <>
//             <h1>Kenia Castro</h1>
//             <h3>Torres</h3>
//         </>
//     );
// }