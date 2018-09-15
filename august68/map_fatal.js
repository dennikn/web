
function addMap() {

var map = L.map('mapid', { minZoom: 3, maxZoom: 18, zoomControl: false, layers: markers}).setView([50.078859, 14.435117], 17);

L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}{r}.png', {
attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
subdomains: 'abcd',
maxZoom: 19
}).addTo(map);
var geojson;





function panning() {
    map.flyTo([48.891862, 17.569046],6)
}
setTimeout(function () { panning() }, 1600);


function style(feature) {
return {
fillColor: 'white',
weight: 2,
opacity: 1,
color: 'white',
dashArray: '1',
fillOpacity: 0
};
}



var geojson = new L.GeoJSON.AJAX("czsk.geojson", { style: style });
geojson.addTo(map);



const crossIcon = L.icon({
iconUrl: 'https://mdu.sk/okupacia/icons/cross2.png',
iconSize: [40, 40],
});

const peopleArray = [];
var markers = L.markerClusterGroup();
this.move = function() {
        $(this.country).css({"display": "block"});
        if (this.attr === "top") {
        $(this.country).animate({"opacity": 1, "top": this.value}, 1600, function () {});
        } else if (this.attr === "left") {
        $(this.country).animate({"opacity": 1, "left": this.value}, 1600, function () {});
    }}

const People = function(name, year, text, city, gpsx, gpsy) {
    this.name =name;
    this.year = year;
    this.countAge = function () {
        let age = this.year;
        if (age.length === 5) {
            let month = age.slice(0,1);
            age = age.slice(1,age.length)
            if (month < 9) {
                age = 1968 - age;
                return age;
            } else {
                age = 1967 - age;
                return age;
            }
        } else if (age.length === 6) {
            age = age.slice(2,age.length)
            age = 1967 - age;
            return age; 
        }
    };
    this.text = text;
    this.city = city;
    this.gpsx = gpsx;
    this.gpsy = gpsy;
}


peopleArray.push(new People("Pavel Albert", "11934", "Zomrel pri rozhlase na následky poškodenia a otrasu mozgu po skoku z okna z horiaceho domu..", "Praha", 50.078944, 14.434215));
peopleArray.push(new People("Jan Barovský", "41896", "Zhorel vo svojom byte. Keď videl požiar, išiel hľadať svoju ženu a švagrinu, no netušil, že sa im podarilo utiecť.", "Praha", 50.078767, 14.434753));
peopleArray.push(new People("Jozef Hanus", "41898", "Zastrelili ho sovietski vojaci, keď prehľadávali byty v okolí rozhlasu a strielali cez vchodové dvere.", "Praha", 50.078836, 14.436206));
peopleArray.push(new People("Vladimír Hnulík", "101949", "Keď vyrazil do práce, netušil, že práve prebieha okupácia. Zomrel po mnohých priestreloch najmä brucha a hrude.", "Praha", 50.078301, 14.435184));
peopleArray.push(new People("Milan Kadlec", "91947", "Zabil ho neriadený nákladný voz pred reštauráciou Hajnovka.", "Praha", 50.078290, 14.436194));
peopleArray.push(new People("Jíří Klapka", "71940", "Vyskočil z okna horiaceho domu oproti budove rozhlasu.", "Praha", 50.078861, 14.434510));
peopleArray.push(new People("Jindřich Krahulec", "71948", "Zomrel po strelbe sovietskych vojakov na nákladné auto. Ďalší traja ľudia boli zranení.", "Praha", 50.075694, 14.420089));
peopleArray.push(new People("Jaroslav Kubeš", "91949", "Zabilo ho nákladné auto spustené na autobusovú barikádu.", "Praha", 50.078066, 14.436379));
peopleArray.push(new People("Ivan Laita", "51950", "Zasiahla ho črepina z vybuchnutého tanku.", "Praha", 50.079068, 14.433611));
peopleArray.push(new People("Milan Lamper", "71949", "Zastrelili ho sovietski vojaci.", "Praha", 50.078862, 14.433890));
peopleArray.push(new People("Miroslav Málek", "61945", "Zabila ho črepina z vybuchnutého tanku.", "Praha", 50.079164, 14.433654));
peopleArray.push(new People("Mario Musich", "91948", "Zomrel pri rozhlase. Príčina jeho smrti nie je jasná, podľa Verejnej Bezpečnosti ho zastrelili, podľa svedka-spolužiaka ho zrazilo nákladné auto bez vodiča pustené na demonštrantov.", "Praha", 50.077980, 14.436186));
peopleArray.push(new People("Jaroslav Novák", "51942", "Zasiahla ho črepina z vybuchnutého tanku.", "Praha", 50.078400, 14.434898));
peopleArray.push(new People("Zdeněk Příhoda", "111941", "Zastavil na kraji cesty, aby pustil prechádzajúcu sovietsku kolónu. Niekoľko vozov prešlo, no jedno vozidlo vybočilo z rady a podľa svedkov úmyselne narazilo do Zdeňka. Potom sa zaradilo do kolóny a odišlo.", "Praha", 50.076983, 14.494035));
peopleArray.push(new People("Josef Reichl", "101945", "Zabilo ho nákladné auto bez vodiča.", "Praha", 50.078301, 14.436368));
peopleArray.push(new People("Bedřich Řepa", "91909", "Postrelili ho sovietsky vojaci", "Praha", 50.079226, 14.435531));
peopleArray.push(new People("Václav Sadílek", "31924", "Zabilo ho nákladné auto spustené na demonštrantov.", "Praha", 50.077918, 14.436390));
peopleArray.push(new People("Jaroslav Švec", "21924", "Zasiahla ho črepina z vybuchnutého tanku.", "Praha", 50.078531, 14.434802));
peopleArray.push(new People("Zdeněk Winter", "61947", "Pri jazde na motorke ho zrazil sovietsky tank.", "Praha", 50.077897, 14.506966));
peopleArray.push(new People("Karel Němec", "111952", "Zastrelili ho sovietski vojaci, ktorí bez varovania spustili paľbu na dodávku.", "Praha", 50.059231, 14.420390));
peopleArray.push(new People("Karel Parišek", "71953", "Zastrelili ho sovietski vojaci, ktorí bez varovania spustili paľbu na dodávku.", "Praha", 50.059141, 14.420840));
peopleArray.push(new People("Jan Jenšovský", "11932", "Postrelili ho sovietski vojaci, presné okolnosti nie sú známe.", "Praha", 50.094826, 14.395989));
peopleArray.push(new People("Marie Charousková", "101942", "Zasiahla ju dávka zo samopalu. Pravdepodobne išlo o nedbanlivosť sovietskych vojakov, z ktorých niekto vystrelil smerom na chodcov, ktorí prechádzali cez cestu.", "Praha", 50.091244, 14.409753));
peopleArray.push(new People("Bedřiška Kadeřábková", "91898", "Zrazil ju sovietsky tank.", "Praha", 50.069216, 14.405725));
peopleArray.push(new People("Rosalie Chocholínová", "61886", "Nepodarilo sa spoľahlivo preukázať, že zomrela v súvislosti s okupáciou. Jej meno bolo prevzaté zo staršieho zoznamu obetí.", "Praha", 50.077019, 14.437715));
peopleArray.push(new People("Miroslav Beránek", "31952", "Zastrelil ho opitý sovietsky vojak.", "Praha", 50.084145, 14.432576));
peopleArray.push(new People("Josef Bulík", "111905", "Zrazil ho sovietsky tank.", "Dolní Krakovice",  49.639710, 15.180971 ));
peopleArray.push(new People("Otto Trousil", "41930", "Pri jazde na mopede ho zrazil sovietsky tank, ktorý išiel po zlej strane cesty. Tank z miesta nehody ušiel, sovietsky veliteľ odmietol pomôcť pri hľadaní vinníka.", "Svárov", 50.052073, 14.122075));
peopleArray.push(new People("Božena Veselá", "121894", "Zabil ju sovietsky tank, keď nárazom rozmetal jej drevenú trafiku.", "Dolní Krakovice", 49.639995, 15.180778));
peopleArray.push(new People("František Novák", "121922", "Zrazil ho sovietsky tank, ktorý nečakane vybočil z kolóny. ", "Nová Hospoda", 49.910619, 14.583304));
peopleArray.push(new People("František Sokol", "121888", "Zrazila ho sovietska vojenská cisterna, keď jazdil na bicykli.", "Praha", 50.132830, 14.596827));
peopleArray.push(new People("Luděk Pokorný", "121943", "Zahynul pri nehode osobného auta, ktoré narazilo do odstaveného prívesu sovietskej armády.", "Benešov", 49.780831, 14.704065));
peopleArray.push(new People("Martin Vonka", "121943", "Zahynul pri nehode osobného auta, ktoré narazilo do odstaveného prívesu sovietskej armády.", "Benešov", 49.782263, 14.701835));
peopleArray.push(new People("Luděk Hájek", "111946", "Zahynul pri nehode osobného auta, ktoré narazilo do odstaveného prívesu sovietskej armády.", "Benešov", 49.781183, 14.702566));
peopleArray.push(new People("Pavel Davídek", "121939", "Do jeho auta narazil tank, ktorý sčasti prešiel do protismeru. Vodič tanku nebol potrestaný, lebo obeti našli pri pitve v krvi alkohol.", "Uhřiněves", 50.030107, 14.600505));
peopleArray.push(new People("František Šimek", "61923", "Zomrel po dopravnej nehode, pri ktorej boli účastníci sovietski vojaci.", "Příbram", 49.681815, 13.988423));
peopleArray.push(new People("Jan Kakos", "111943", "Zomrel pri dopravnej nehode, pri predchádzaní sovietskej kolóny.", "Višňová", 49.690715, 14.195780));
peopleArray.push(new People("Miroslav Čížek", "21945", "Zasypal ho múr po náraze sovietskeho tanku do domu.", "Liberec", 50.769722, 15.057715));
peopleArray.push(new People("Zdeněk Dragoun", "11949", "Zastrelili ho, keď fotil príjazd sovietskych vojsk z lešenia.", "Liberec", 50.769759, 15.058327));
peopleArray.push(new People("Josef Fialka", "121903", "Zomrel po priestrele brucha.", "Liberec", 50.770132, 15.058412));
peopleArray.push(new People("Bohumil Kobr", "41896", "Zabila ho vojenská cisterna, ktorá sa pokúšala vyhnúť miestu, kde havaroval tank.", "Liberec", 50.769678, 15.058133));
peopleArray.push(new People("Jindřich Kuliš", "51943", "Postrelil ho sovietsky vojak.", "Liberec",  50.770024, 15.057897 ));
peopleArray.push(new People("Rudolf Starý", "61905", "Ráno 21.8. pracoval v Liberci na oprave radnice. Pravdepodobne ho zasiahla odrazená strela do pľúc.", "Liberec",  50.769780, 15.058455 ));
peopleArray.push(new People("Dagmar Škavová", "91960", "Zomrela spolu s babičkou Mariou Vodákovou pri výbuchu a požiari cisterny sovietskej armády.", "Desná",  50.762121, 15.323925 ));
peopleArray.push(new People("Marie Vodáková", "91894", "Zomrela spolu s vnučkou Dagmar Škavovou pri výbuchu cisterny sovietskej armády.", "Desná",  50.762379, 15.323847 ));
peopleArray.push(new People("Petr Fridrich", "111940", "V noci 21. augusta sa pokúsil vlastným telom zastaviť sovietske tanky, ktoré prechádzali Ústím nad Labem. Jedno obrnené vozidlo ho zachytilo pásom a zrazilo, na druhý deň ťažkým zraneniam podľahol.", "Ústí nad Labem",  50.670920, 14.012922 ));
peopleArray.push(new People("Eva Livečková", "61937", "Spolu s manželom utekala pred streľbou, no zasiahla ju strela zozadu do hlavy.", "Liberec",  50.770519, 15.059293 ));
peopleArray.push(new People("Stanislav Veselý", "111924", "Zasiahla ho strela, keď stál v Liberci medzi radnicou a divadlom.", "Liberec",  50.770819, 15.061976 ));
peopleArray.push(new People("Vincenc Březina", "61901", "Zasypal ho múr domu, do ktorého narazil tank. Po mnohých zraneniach zomrel na zápal pľúc.", "Liberec",  50.770154, 15.059144 ));
peopleArray.push(new People("Ondrej Oprendek", "111936", "V noci z 11. na 12. septembra ho zbili a niekoľkokrát postrelili opití sovietski vojaci", "Velemín",  50.541529, 13.964615 ));
peopleArray.push(new People("František Klúc", "31924", "Z bezprostrednej blízkosti ho postrelil do hlavy sovietsky dezertér.", "Nečenice",  50.238303, 13.637935 ));
peopleArray.push(new People("Zdenka Klimešová", "121912", "Keď počula streľbu a krik zranených, vybehla spolu s manželom na ulicu. V jej tele našli sedem striel zo samopalu.", "Jičín",  50.441055, 15.346016 ));
peopleArray.push(new People("Jaroslav Veselá", "41944", "Po zásahu desiatich guliek do nôh hlasno kričal. Dorazil ho opitý polský vojak ranou do hlavy.", "Jičín",  50.440871, 15.346079 ));
peopleArray.push(new People("Jaromír Chlup", "61929", "Pri šoférovaní ho zrazil do priekopy sovietsky nákladný voz.", "Janov",  49.828066, 16.395819 ));
peopleArray.push(new People("Naděžda Chlupová", "31939", "Zomrela ako spolujazdkyňa v aute, ktoré prevrátil sovietsky nákladný voz.", "Janov",  49.827866, 16.395086 ));
peopleArray.push(new People("Miroslav Chlup", "121960", "Zahynul spolu s rodičmi po nehode so sovietskym nákladným vozom.", "Janov",  49.827177, 16.394638 ));
peopleArray.push(new People("Helena Púlkrabková", "101941", "Zomrela pri dopravnej nehode. Narazila do neosvetleného zváracieho agregátu, ktorí visel za sovietskym nákladným vozom.", "Svitany",  49.757747, 16.461893 ));
peopleArray.push(new People("Jaroslav Pánik", "71930", "Zomrel v taxíku, ktorému nedal prednosť vodič sovietskeho obrneného transportéru.", "city",  49.051065, 14.512409 ));
peopleArray.push(new People("Eduard Netušil", "111946", "Snažil sa na motorke vyhnúť zle osvetlenému sovietskemu transportéru, ktorý sa práve otáčal na úzkej ceste. Eduard narazil do stromu a zomrel.", "České Budejovice",  49.009875, 14.489958 ));
peopleArray.push(new People("Bohumír Soukup", "111921", "V aute ho zasiahla strela do hlavy od sovietskej hliadky.", "Hrabice",  49.060850, 13.763138 ));
peopleArray.push(new People("Václav Baloun", "91946", "Zasiahlo ho niekoľko striel zo samopalu sovietskeho strážnika.", "Haklovy Dvory",  48.992650, 14.414524 ));
peopleArray.push(new People("Alois Kahoun", "51929", "Zomrel po náraze do sovietskeho transportéru, ktorý išiel v protismere.", "Ponešice",  49.106785, 14.480289 ));
peopleArray.push(new People("Lubomír Pícl", "51945", "Opitý riadil motorku, nerešpektoval sovietskych regulovčíkov a zrazil sa so sovietskym vozidlom.", "Kralovice",  49.949599, 13.397852 ));
peopleArray.push(new People("Viliam Debnár", "111938", "Zastrelil ho v aute sovietsky vojak.", "Brno",  49.236149, 16.777236 ));
peopleArray.push(new People("Anna Trechová", "81931", "Zomrela po zrážke so sovietskym tankom.", "Znojmo", 48.850847, 16.116620 ));
peopleArray.push(new People("Josef Žemlička", "31952", "Zasiahla ho náhodná strela vypálená sovietskou hliadkou.", "Brno",  49.176167, 16.466618 ));
peopleArray.push(new People("Václav Frydrychovský", "91926", "21. augusta sa vlastným telom pokúsil zastaviť maďarské vojenské vozidlá. Jedno z nich ho zrazilo, zomrel o dva dni neskôr. ", "Jihlava",  49.356454, 15.541468 ));
peopleArray.push(new People("Josef Boháč", "31946", "Bezdôvodne ho zastrelili sovietsky vojaci.", "Prostějov",  49.473742, 17.115624 ));
peopleArray.push(new People("Ladislav Lang", "121897", "Bezdôvodne ho zastrelili sovietsky vojaci.", "Prostějov",  49.471036, 17.109650 ));
peopleArray.push(new People("Marta Řihovská", "81941", "Zastrelili ju zozadu, keď sa pokúšala uniknúť pred streľbou.", "Prostějov",  49.472005, 17.110190 ));
peopleArray.push(new People("Ilja Sušánková", "11931", "Zasiahli ju strely sovietskych vojakov cez okno domu na prvom poschodí.", "Bučovice",  49.151282, 17.005938 ));
peopleArray.push(new People("Karel Chalupa", "61914", "Zomrel po nehode s neosvetleným sovietskym transportérom.", "Brno",  49.271511, 16.573530 ));
peopleArray.push(new People("Leopold Verwalter", "121909", "Zrazilo ho rýchlo idúce sovietske nákladné auto.", "Brno",  48.980792, 16.522496 ));
peopleArray.push(new People("Jíří Modr", "61929", "Zomrel po samovražednom skoku pod sovietske nákladné vozidlo.", "Mošnov",  49.689707, 18.125822 ));
peopleArray.push(new People("Jan Luzar", "71917", "Vo veľkej rýchlosti narazil s motorkou do zle osvetleného sovietskeho nákladného vozu.", "Slavkov",  49.599830, 17.794573 ));
peopleArray.push(new People("Filip Mušec", "121929", "Pri jazde na motorke ho zrazilo nesprávne idúce sovietskeho nákladné vozidlo.", "Velká Bystřice",  49.588552, 17.322053 ));
peopleArray.push(new People("Aloisie Tomšíková", "61887", "Zrazilo ju sovietske nákladné vozidlo.", "Valašské Meziříčí",  49.225522, 17.712767 ));
peopleArray.push(new People("Ján Holík", "41923", "Na Šafárikovom námestí ho zabili dve strely do tváre.", "Bratislava",  48.141246, 17.116201 ));
peopleArray.push(new People("Margita Dana Košanová", "71953", "Zasiahla ju rana na schodoch Univerzity Komenského.", "Bratislava",  48.141153, 17.116019 ));
peopleArray.push(new People("Stanislav Sivák", "21939", "Zasiahla ho do brucha odrazená guľka pri Univerzite Komenského.", "Bratislava",  48.141183, 17.116212 ));
peopleArray.push(new People("Alojz Zsigárdi", "31923", "Snažil sa upokojiť zapriahnuté kone pri prejazde tankov. Zvieratá sa splačili a odhodili ho do dráhy tankov.", "Topoľníky",  47.969345, 17.785725 ));
peopleArray.push(new People("Peter Legner", "31952", "Učňa chemickej školy postrelili 22. augusta pri pošte na Námestí SNP. Zomrel po prevoze do nemocnice. Vinníka nenašli.", "Bratislava",  48.145619, 17.108766 ));
peopleArray.push(new People("Viktória Rybárová", "51901", "21. augusta ju zachytil tank zo sovietskej kolóny, ktorý išiel mimo cesty. Amputoval jej časť ľavej nohy a pohmliaždil hornú polovicu tela. Tank po incidente pokračoval ďalej v ceste.", "Šulekovo",  48.429857, 17.766419 ));
peopleArray.push(new People("Boris Zinovjev", "51893", "25. augusta pozoroval z kraja cesty prechádzajúce vojská. Jeden tank ho zachytil a zabil.", "Brezová pod Bradlom",  48.671512, 17.537159 ));
peopleArray.push(new People("Jozef Kadura", "31915", "Vodič záchrannej služby zomrel 3. septembra pri dopravnej nehode s neosvetleným vojenským transportérom, ktorý nedal prednosť jeho motorke. Vinníka nenašli.", "Bratislava",  48.671512, 17.537159 ));
peopleArray.push(new People("Dominik Teplan", "101908", "Zomrel 12. októbra po zrážke jeho bicykla s nákladným vozom armády. Keď Teplan dával rukou znamenie na odbočenie, vodič maďarskej armády do neho zozadu narazil a ušiel. Vodiča zbavili obvinenia pre údajnú chybu obete. ", "Hul",  48.101418, 18.271469 ));
peopleArray.push(new People("Milan Paulík", "31955", "Zabil ho vodič nákladného auta armády, ktoré vo vysokej rýchlosti narazilo do hromady piesku, kde stáli deti. Vodiča zbavili obvinenia pre údajné zlyhanie bŕzd.", "Rišňovce",  48.366899, 17.896744 ));
peopleArray.push(new People("Jozef Szvityel", "121949", "21. augusta ho na Námestí SNP pri pošte postrelil zozadu sovietsky vojak. Zomrel po niekoľkých mesiacoch.", "Bratislava",  48.145613, 17.108480 ));
peopleArray.push(new People("Rudolf Gavorník", "41950", "Vojaci spustili paľbu z ľahkého guľometu na ľudí, ktorí sa zhomaždili pri ceste pri prejazde kolóny. Ľudia najskôr na vojakov pokrikovali, strieľať začali po házdaní predmetov. Gavorníka zasiahli do nôh.", "Detva",  48.544103, 19.395450 ));
peopleArray.push(new People("Jozef Levák", "71930", "Podľa svedkov si ľahol do cesty tankom, aby im zabránil v prejazde. Veliteľ vojska vydal povel pokračovať a tank pomačkal Levákovú hornú časť tela.", "Zvolen",  48.575078, 19.126292 ));
peopleArray.push(new People("František Moštenický", "81921", "21. augusta išiel s dcérou na motorke na výlet do Vysokých Tatier. Narazil do nich tank, ktorý vošiel do protismeru. Jeho hrob v Banskej Štiavnici zaradilo mesto v roku 1990 medzi kultúrne pamiatky.", "Važec",  49.061049, 20.058224 ));
peopleArray.push(new People("Štefan Zdechovan", "71940", "Vojaci spustili paľbu z ľahkého guľometu na ľudí, ktorí sa zhomaždili pri ceste pri prejazde kolóny. Ľudia najskôr na vojakov pokrikovali, strieľať začali po házdaní predmetov. Zdechovana zasiahli do hrudníka a ľavej nohy.", "Detva",  48.543925, 19.395536 ));
peopleArray.push(new People("Pavol Hlaváč", "31939", "Narazil motorkou do neosvetletného vojenského vozidla.", "Bratislava",  48.578023, 18.872430 ));
peopleArray.push(new People("Anna Ulická", "91951", "Zachytila ju na chodníku ruská cisterna. Následne ju prešli ďalšie dve cisterny, no kolóna pokračovala ďalej.", "Sučany",  49.119199, 18.913283 ));
peopleArray.push(new People("Jozef Bonk", "71949", "21. augusta zatarasilo 600 obyvateľov Popradu námestie a hádzali na tanky predmety a podpálili nádrže niekoľkých tankov. Vojaci reagovali streľbou, Bonka zasiahli do brucha.", "Poprad",  49.054215, 20.297867 ));
peopleArray.push(new People("Štefan Ciberaj", "111939", "Zachytil ho tank a pritlačil o stenu domu.", "Rožňava",  48.659314, 20.528666 ));
peopleArray.push(new People("Michal Hamrák", "31952", "Zastrelili ho na Námestí Osloboditeľov ranou do srdca.", "Košice",  48.717374, 21.261053 ));
peopleArray.push(new People("Ján Hatala", "51949", "Zastrelili ho pri čerpacej stanici v Košiciach.", "Košice",  48.765566, 21.244951 ));
peopleArray.push(new People("Jozef Kolesár", "31933", "21. augusta na Námestí Osloboditeľov ho strelili do hlavy.", "Košice",  48.717663, 21.261928 ));
peopleArray.push(new People("Ján László", "31915", "Zomrel 21. augusta po zásahu do hlavy.", "Košice",  48.717422, 21.260480 ));
peopleArray.push(new People("Ivan Schmiedt", "71941", "21. augusta cestoval domov električkou. Pri streľbe sovietskych vojakov električka zastavila a vojaci strielali na unikajúcich cestujúcich. Zasiahli ho zozadu do hlavy.", "Košice",  48.716443, 21.253588 ));
peopleArray.push(new People("Ladislav Martoník", "121944", "Zasiahli ho strelou do hlavy.", "Košice",  48.734718, 21.274776 ));
peopleArray.push(new People("Bartolomej Horváth", "51947", "Zasiahli ho do brucha a lavej ruky počas práce na stavbe hotela Slovan.", "Košice",  48.733310, 21.275033 ));
peopleArray.push(new People("Štefan Sabol", "11926", "Zomrel v septembri po prestrelke medzi opitými vojakmi.", "Košice",  48.676068, 21.170092 ));
peopleArray.push(new People("Miroslav Stachura", "61966", "Sovietska cisterna, ktorá išla v protismere zrazila dvojročného chlapca, ktorý bežal cez cestu. Vodič bol zbavený obvinenia.", "Kapušany",  49.044157, 21.336530 ));
peopleArray.push(new People("Ján Sekel", "41923", "26. októbra ho na ceste predchádzalo sovietske nákladné vozidlo s mínometom. Keď jeho vodič zistil, že ho predchádza iné sovietske vozidlo, strhol volant doprava, mínometom narazil do auta Sekela a odhodil ho do betónovej prekážky.", "Slanec",  48.636661, 21.484261 ));
peopleArray.push(new People("Michal Korenko", "21929", "Pri jazde na motorke narazil do neosvetleného vojenského vozidla.", "Spišský Štvrtok",  48.982384, 20.482046 ));




function createIcons() {
    for (let i=0; i<peopleArray.length; i++) {
    markers.addLayer(L.marker([peopleArray[i].gpsx, peopleArray[i].gpsy], {icon: crossIcon}).bindPopup(`<b>${peopleArray[i].name} (${peopleArray[i].countAge()})</b><br>${peopleArray[i].text}`));
    }
}
createIcons();

map.addLayer(markers);

}
