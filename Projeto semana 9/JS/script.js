
fetch ('https://ddragon.leagueoflegends.com/cdn/11.4.1/data/pt_BR/champion.json').then(response => response.json()).then(response => {


    for (let i in response.data) {

        document.getElementById('champSelect').innerHTML += "<option value='"+ i +"'>"+ i +"</option>";
    
    
    
    }

    
});


