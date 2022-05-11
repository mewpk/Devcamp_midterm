

axios.get('https://reqres.in/api/users').then((response) => {
        const aUser = response.data.data;
        let str = '';
        for (let i=0; i<aUser.length; i++) {
            str += `
            <div class="col">
                <span class='bold'>${aUser[i].first_name}</span><br>
                ${aUser[i].email}<br>
                <img src='${aUser[i].avatar}'>
            </div>
            `;
            console.log(str)
        }
        document.getElementById('content').innerHTML = str;
        
    })
   