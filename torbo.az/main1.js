document.addEventListener('contextmenu',function (e) {
    e.preventDefault();
})
document.addEventListener("DOMContentLoaded", function () {
    let input1 = document.getElementById("input1");
    let input2 = document.getElementById("input2");
    let input3 = document.getElementById("input3");
    let inputs = document.body.querySelectorAll('input');
    console.log(inputs);
    for (let inp of inputs) {
        console.log(inp);
        inp.addEventListener('keydown', function (e) {
            if (e.keyCode > 64 && e.keyCode < 91)
                e.preventDefault();
        })
    }
    let container = document.getElementById("container").addEventListener("contextmenu", (e) => {
        e.preventDefault(container);
    })
    let isEquals = false;
    document.getElementById("button").addEventListener("click", function () { 
        let error = document.getElementById("error");
        for (let f in users) {
            if ((users[f].num == input1.value) && (users[f].cvv == input3.value) && (users[f].date == input2.value)) {
                alert("succes");
                isEquals = true;
            }  
        }
        if (!isEquals) {
                error.classList.add("d-block");
                setTimeout(() => {
                    error.classList.remove("d-block");
                }, 3000);
            }
    });
});

