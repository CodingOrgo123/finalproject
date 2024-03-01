<h1 id="mss">User Record</h1>


            <table id="challengesdatatable">
                <thead>
                    <tr>

                        <th>Challenge</th>
                        <th>Level</th>
                        <th>Points</th>
                    </tr>
                </thead>
                <tbody>
                    {challenge.map((challenges) => (
                        <tr key={challenges._id}>

                            <td>{challenges.question}</td>
                            <td>{challenges.level}</td>
                            <td>{challenges.points}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
