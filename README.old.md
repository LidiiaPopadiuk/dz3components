# dz3_components

key.charAt(0).toUpperCase() + key.slice(1)
// "F" + "ollowers" => "Followers"

    <ul className="stats">
                {Object.entries(stats).map(([key, value]) => (
                    <li key={key}>
                        <span className="label">{key.charAt(0).toLocaleUpperCase() + key.slice(1)}</span>
                        <span className="quantity">{value}</span>
                    </li>
                ))}
            </ul>

            <ul className="stats">
                {Object.entries(stats).map(([key, value]) => {
                    return (
                        <li key={key}>
                        <span className="label">{key.charAt(0).toLocaleUpperCase() + key.slice(1)}</span>
                        <span className="quantity">{value}</span>
                    </li>
                    )
                })}
            </ul>
