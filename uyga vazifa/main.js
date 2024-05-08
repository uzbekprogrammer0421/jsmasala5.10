
const fetchUsers = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();
        return users;
    } catch (error) {
        alert("Error");
    }
};

const createTable = (users) => {
    let tr = "";
    users.forEach((item, index) => {
        tr += "<tr>" +
            "<td>" + (index + 1) + "</td>" + 
            "<td>" + item.name + "</td>" +
            "<td>" + item.username + "</td>" +
            "<td>" + item.email + "</td>" +
            "<td>" + item.phone + "</td>" +
            "<td>" + item.address.street + "</td>" +
            "<td>" + item.address.city + "</td>" +
            "<td>" + item.website + "</td>" +
            "<td>" + item.company.name + "</td>" +
            "<td>" + item.address.zipcode + "</td>" +
            "</tr>";
        console.log(item);
    });
    document.getElementById("tbody").innerHTML = tr;
};

const finish = async () => {
    const users = await fetchUsers();
    if (users) {
        createTable(users);
    }
};

finish();
