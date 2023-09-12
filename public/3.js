
/*

When the user types in a an owner id (0 or 1) into the input field,
then number of their puppies should show up.

Check the request in the network tab (Headers, response), does it look correct?
- Check the URL, method, and status.
- Check the response
    - if the response is correct than the issue must be on the frontend
    - if the response is not corret the issue may be on the server
*/

const renderCount = async () => {
    const ownerInput = document.querySelector("#owner");
    const puppyCount = document.querySelector("#puppy-count");
    const id = Number(ownerInput.value);
    if (!ownerInput.value || isNaN(id)) {
        puppyCount.textContent = "-Invalid ID-";
        return;
    }
    const response = await fetch(`/api/peolpe/${id}/puppy-count`);
    const countData = await response.json();
    puppyCount.textContent = countData.count;
}

function main() {
    const ownerInput = document.querySelector("#owner");
    ownerInput.addEventListener("input", () => renderCount());
    renderCount();
}
main();
