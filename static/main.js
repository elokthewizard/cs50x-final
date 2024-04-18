keyboard = document.getElementById("keyboard");
root = document.getElementById("rootnote");
major = document.getElementById("major");
minor = document.getElementById("minor");

if (major.checked) {
    console.log("major");
    root = 0;
    create_maj = (root) => {
        root = root
        third = root + 4
        fifth = root + 7
        return {root, third, fifth};
    };
    console.log(create_maj(root));
}

if (minor.checked) {
    console.log("minor");
}