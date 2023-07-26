
/*
Task 1
This is a small frontend using the server API endpoints.

You can type an id of a person (0 or 1) into the owner field
and the puppies of that person get listed.

You should also be able to add a new puppy using the form and the add puppy button.
However this button doesn't work correctly. Find the issue and fix the problem.
Check the status code in the network tab.
*/
async function renderPuppies() {
    const ownerInput = document.querySelector("#owner");
    const container = document.querySelector("#puppies");
    container.innerHTML = "";
    if (!ownerInput.value) {
        return;
    }
    const response = await fetch("/api/people/" + ownerInput.value);
    const person = await response.json();

    for (const puppy of person.puppies) {
        container.insertAdjacentHTML("beforeend", `
            <div>${puppy.name}, ${puppy.weight}</div>
        `)
    }
}

function main() {
    renderPuppies();
    const form = document.querySelector("#puppy-form");
    const ownerInput = document.querySelector("#owner");
    const nameInput = document.querySelector("#name");
    const weightInput = document.querySelector("#weight");
    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        await fetch(`/api/people/${ownerInput.value}/puppies`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ name: nameInput.value, weight: weightInput.value })
        });
        renderPuppies();
    });
    ownerInput.addEventListener("input", () => {
        renderPuppies();
    })
}
main();
