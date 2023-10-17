let employees=[{"id":1,"name":"Jereme","email":"jlabon0@who.int","gender":"Male"},
{"id":2,"name":"Gothart","email":"gsieghart1@msu.edu","gender":"Male"},
{"id":3,"name":"Rebecca","email":"rhedlestone2@guardian.co.uk","gender":"Female"},
{"id":4,"name":"Tootsie","email":"tmarlon3@facebook.com","gender":"Female"},
{"id":5,"name":"Chrotoem","email":"cclinnick4@bloglovin.com","gender":"Male"},
{"id":6,"name":"Derril","email":"dfasset5@moonfruit.com","gender":"Genderqueer"},
{"id":7,"name":"Ernst","email":"elepiscopio6@ucla.edu","gender":"Male"},
{"id":8,"name":"Consuelo","email":"civannikov7@networkadvertising.org","gender":"Female"},
{"id":9,"name":"Christy","email":"clearoid8@hp.com","gender":"Non-binary"},
{"id":10,"name":"Lucia","email":"lmacharg9@hostgator.com","gender":"Female"},
{"id":11,"name":"Wandie","email":"whymersa@mit.edu","gender":"Female"},
{"id":12,"name":"Fanya","email":"fmooresb@about.me","gender":"Female"},
{"id":13,"name":"Veda","email":"vgrayshonc@yahoo.co.jp","gender":"Agender"},
{"id":14,"name":"Jeth","email":"jcharlestond@amazon.com","gender":"Male"},
{"id":15,"name":"Zia","email":"zhanne@youku.com","gender":"Female"},
{"id":16,"name":"Ode","email":"odreierf@de.vu","gender":"Male"},
{"id":17,"name":"Samuel","email":"sdulantyg@princeton.edu","gender":"Male"},
{"id":18,"name":"Gage","email":"gcromleyh@shinystat.com","gender":"Male"},
{"id":19,"name":"Bill","email":"brotherai@google.ru","gender":"Male"},
{"id":20,"name":"Carly","email":"cduriej@cbsnews.com","gender":"Female"},
{"id":21,"name":"Ambur","email":"aformk@pagesperso-orange.fr","gender":"Non-binary"},
{"id":22,"name":"Viole","email":"vferrettil@1688.com","gender":"Female"},
{"id":23,"name":"Lucinda","email":"llingem@cnn.com","gender":"Female"},
{"id":24,"name":"Gertrudis","email":"ghoffn@geocities.com","gender":"Female"},
{"id":25,"name":"Susana","email":"sdrinkwatero@house.gov","gender":"Female"},
{"id":26,"name":"Roldan","email":"rrainyp@arizona.edu","gender":"Male"},
{"id":27,"name":"Hersch","email":"hsichq@cam.ac.uk","gender":"Non-binary"},
{"id":28,"name":"Alden","email":"amoralasr@aol.com","gender":"Genderqueer"},
{"id":29,"name":"Cassandre","email":"cvanleeuwens@reuters.com","gender":"Female"},
{"id":30,"name":"Pris","email":"pscranet@goo.gl","gender":"Female"},
{"id":31,"name":"Evangelia","email":"ewessingu@patch.com","gender":"Female"},
{"id":32,"name":"Alford","email":"apelev@drupal.org","gender":"Male"},
{"id":33,"name":"Shannah","email":"soddew@stumbleupon.com","gender":"Female"},
{"id":34,"name":"Hannis","email":"hclancyx@last.fm","gender":"Female"},
{"id":35,"name":"Hammad","email":"hlordingy@mac.com","gender":"Male"},
{"id":36,"name":"Berri","email":"bsoulez@craigslist.org","gender":"Female"},
{"id":37,"name":"Artemis","email":"aferrand10@slideshare.net","gender":"Male"},
{"id":38,"name":"Kamilah","email":"kpantry11@twitter.com","gender":"Agender"},
{"id":39,"name":"Florance","email":"fhevner12@devhub.com","gender":"Female"},
{"id":40,"name":"Karin","email":"kjameson13@nationalgeographic.com","gender":"Female"},
{"id":41,"name":"Son","email":"sleverich14@mail.ru","gender":"Male"},
{"id":42,"name":"Robenia","email":"rsimoncini15@mediafire.com","gender":"Female"},
{"id":43,"name":"Odelinda","email":"oclampin16@reference.com","gender":"Female"},
{"id":44,"name":"Lyndsey","email":"lcanniffe17@github.com","gender":"Female"},
{"id":45,"name":"Leah","email":"lketch18@feedburner.com","gender":"Female"},
{"id":46,"name":"Burty","email":"bkenworthey19@google.com.au","gender":"Male"},
{"id":47,"name":"Lars","email":"lsay1a@sohu.com","gender":"Male"},
{"id":48,"name":"Gearalt","email":"gtobias1b@hexun.com","gender":"Male"},
{"id":49,"name":"Alexina","email":"abessent1c@soup.io","gender":"Female"},
{"id":50,"name":"Fabiano","email":"fkastel1d@economist.com","gender":"Male"}]


let data=()=>{
    let adata=""

    for(emp of employees){
        adata+=`<tr>
                    <td>${emp.id}</td>
                    <td>${emp.name}</td>
                    <td>${emp.email}</td>
                    <td>${emp.gender}</td>
        </tr>`
    }

    document.getElementById('edata').innerHTML=adata
}