
/*

When the user types in a an owner id (0 or 1) into the input field,
then number of their puppies should show up.

Check the request in the network tab (Headers, Response), does it look correct?
*/

function main() {
    const puppyCount = document.querySelector("#puppy-count");
    const ownerInput = document.querySelector("#owner");
    ownerInput.addEventListener("input", async () => {
        const id = Number(ownerInput.value);
        if (isNaN(id)) {
            puppyCount.textContent = "-Invalid ID-";
            return;
        }
        const response = await fetch(`/api/peolpe/${id}/puppy-count`);
        const countData = await response.json();
        puppyCount.textContent = countData;
    });
}
main();
