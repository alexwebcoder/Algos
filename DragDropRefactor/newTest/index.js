document.getElementById('startButton').addEventListener('click', function() {
    console.log('Button clicked!'); // Check if button click is registered

    // Hide the empty rectangles container
    document.getElementById('emptyRectangles').style.display = 'none';

    // Fetch data from JSON file
    fetch('data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Assuming the data structure is known
            const round1Data = data["Fish"];

            // Dynamically populate nicknames
            const nicknameContainer = document.getElementById('left-column');
            round1Data.forEach(item => {
                const nicknameDiv = document.createElement('div');
                nicknameDiv.className = 'draggable rectangle';
                nicknameDiv.setAttribute('data-match', item.player); // Set the player as the match
                nicknameDiv.setAttribute('tabindex', '0');
                nicknameDiv.setAttribute('role', 'button');
                nicknameDiv.setAttribute('aria-label', `Draggable ${item.nickname}`);
                nicknameDiv.textContent = item.nickname; // Set the nickname text
                nicknameContainer.appendChild(nicknameDiv);
            });

            // Show the new round content
            document.getElementById('round1Content').style.display = 'block';
        })
        .catch(error => console.error('Error fetching the JSON data:', error));
});
