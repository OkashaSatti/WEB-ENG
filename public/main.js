import { delay, makeCounter, getRequired } from "./utils.js";
const bookingCounter = makeCounter();
const tableBody = getRequired("#schedule tbody");
const bookingStatus = getRequired("#status");
tableBody.addEventListener("click", async (event) => {
    const target = event.target;
    if (!(target instanceof Element))
        return;
    const button = target.closest("button[data-day]");
    if (button === null)
        return;
    const day = button.dataset.day;
    if (!day)
        return;
    const row = button.closest("tr");
    if (row === null)
        return;
    row.classList.toggle("selected");
    bookingStatus.textContent = "Updating...";
    await delay(1000);
    const selectedCount = document.querySelectorAll("#schedule tr.selected").length;
    const bookingNumber = bookingCounter();
    bookingStatus.textContent =
        `Booking #${bookingNumber} confirmed for ${day}. ` +
            `${selectedCount} slot(s) currently selected.`;
});
