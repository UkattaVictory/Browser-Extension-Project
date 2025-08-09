document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".f_btn");
    const cards = document.querySelectorAll('.extension-card');
    const themeButton =  document.querySelector(".theme-toggle");
    const body = document.body;

    cards.forEach(card => {
        const toggle = card.querySelector(".toggle-input");
        const remove = card.querySelector(".remove-btn");
        const isActive = toggle.checked;
        card.setAttribute("data-status", isActive ? "active" : "inactive" );
        toggle.addEventListener("change", () => {
        const newStatus = toggle.checked ? "active" : "inactive";
        card.setAttribute("data-status", newStatus);
        updateCardAppearance(card);
        });
        remove.addEventListener("click", (e) => {
            e.stopPropagation();
            card.remove();
        });
    });
    function updateCardAppearance(card) {
        const isActive = card.getAttribute("data-status") === "active";
        cards.classList.toggle("active", isActive);
        cards.classList.toggle("inactive", !isActive);
    }
    filterButtons.forEach(btn =>{
        btn.addEventListener("click",  () =>{
        filterButtons.forEach(b => {
            b.classList.remove("active");
        })
        btn.classList.add("active");
        const filter = btn.dataset.filter;
        cards.forEach(card => {
            const status = card.getAttribute("data-status");
            const show = filter === "all" || filter === status;
            card.style.display = show ? "flex" : "none";
        });

        });
    });

    themeButton.addEventListener("click", ()=> {
        body.classList.toggle("lightmode");
    })


});
