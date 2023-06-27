console.log("wooorks")










// const bela = { height: 1.7 };

// console.log(bela.asdf.qwer);










let fetchPeople = () => fetch("/api/people").then((res) => res.json());


function main() {

    fetchPeople().then(people => {
        // console.log(people[0]);
        const peopleHtml = people.map(person => {
            // const uppercase = person.name.toUpperCase();
            // console.log(uppercase.toLowerCase() === person.name);
            return `
                <div>
                    <p>${person.name.toUpperCase()}</p>
                    <p>${person.email}</p>
                </div>
            `;
        });
        document.body.insertAdjacentHTML("beforeend", peopleHtml.join(""));
    });
}

main();
