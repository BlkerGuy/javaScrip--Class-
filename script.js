class Company {
    constructor(companyN, fName) {
        this.companyN = companyN,
            this.fName = fName
    }


    employees = [
        [],
        [],
        []
    ]

    getData() {
        let data = this.employees;
        let inp1 = document.getElementById('inp1');
        let inp2 = document.getElementById('inp2');
        var select = document.getElementById('sect');
        var option = select.options[select.selectedIndex];


        if (inp1.value != '' && inp2.value != '' && option.value!='') {
            if (data[0].includes(inp1.value)) {
                alert('This value already exists!')
                inp1.value = '';
                return false;
            }

            data[0].push(inp1.value);
            data[1].push(inp2.value)
            data[2].push(option.text)
        }
        else { alert('The form must be filled out') }


    }

    employeeTable() {
        let data = this.employees;

        let tr = `<tr>
        <td> Name </td>
        <td> Position </td>
        <td> Address </td>
        </tr>`
        for (let i = 0; i < data[0].length; i++) {
            tr += `<tr>
            <td> ${data[0][i]} </td>
            <td> ${data[1][i]} </td>
            <td> ${data[2][i]} </td>
            </tr>` // tr = tr+
        }
        return tr;
    }
}

const a = new Company('Code Academy', '28 may');
const b = new Company('Code Academy', 'Nizami');

let companyName = document.getElementById('companyName');
let flialName = document.getElementById('companyF');
let btn = document.getElementById('btn');
let form = document.getElementById('form');
let tbl = document.getElementById('tbl');

form.addEventListener('submit', (e) => {
    e.preventDefault()
    a.getData();
    tbl.innerHTML = a.employeeTable();
})
companyName.innerHTML = a.companyN;
flialName.innerHTML = a.fName;





