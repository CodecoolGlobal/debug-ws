/*
Visit http://localhost:3005/2.html
*/

/*
Task 1
Without running the code, uncomment the line below,
and predict what will get printed in the console.
Then visit the site and check the console.

Check the request in the network tab (Headers, response), does it look correct?
- Check the URL, method, and status.
- Check the response
    - if the response is correct than the issue must be on the frontend
    - if the response is not correct the issue may be on the server
*/
// prettier-ignore
let fetchPeople = () => { fetch("/api/people").then((res) => res.json()) };
// fetchPeople().then(people => { console.log(people[0]) });

/*
Task 2
Think about what could cause the error. Fix the error.
*/

/*
Task 3
We want to display all people `div`s. Why don't they show up?
Fix the issue, so that they show.
*/
fetchPeople().then((people) => {
    const divs = people.map((person) => {
        `
        <div>
            ${person.name}, ${person.email}
        </div>
    `;
    });
    document.body.insertAdjacentHTML("beforeend", divs.join(""));
});
