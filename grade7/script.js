let questions = [
    {
        q: "Ang tao ay may kakayahang maglingkod sa kapuwa. Ano ang pangunahing katangian ng pagpapakatao na nag-uudyok sa isang tao na tumulong sa kanyang kapuwa?",
        a: ["Integridad", "Pagkakaisa", "Pagmamalasakit", "Responsabilidad"],
        correct: "Pagmamalasakit"
    },
    {
        q: "Bilang isang lider ng mga kabataan, pinamunuan ni Jerald ang kanilang pagtitipon para pag-usapan ang SK Project sa barangay. Naging maayos at matiwasay ito dahil sa nagkakasundo ang lahat. Ano ang ipinapakita ni Jerald sa puntong ito?",
        a: ["Pag-unlad ng pagkatao", "Pag-unlad ng pakikipagkaibigan", "Pagiging mabuting mamamayan", "Pagtatamo ng mapayapang lipunan"],
        correct: "Pagtatamo ng mapayapang lipunan"
    },
    {
        q: "Si Carlo ay empleyado ng isang kompanya na nagkaroon ng pagkakataon na pamunuan ang isang proyekto na layuning magbigay ng serbisyong pampubliko. Nais niyang ipakita ang tamang pagpapakatao at malasakit sa kaniyang bayan habang pinapaunlad ang sarili. Ano ang ginawa ni Carlo upang maipakita ang tamang pagpapakatao at malasakit sa kanyang bayan habang pinapaunlad ang sarili?",
        a: ["Inuna ang sariling interes.", "Binalewala ang layunin ng proyekto.", "Hindi nakikipagtulungan sa clean-up drive.", "Nagtatag ng libreng workshap para sa kabataan."],
        correct: "Nagtatag ng libreng workshap para sa kabataan."
    },
    {
        q: "May isang ina na may tatlong anak na nagsisikap maging mabuting halimbawa. Paparating na ang halalan at nais niyang ipakita sa kanyang mga anak ang kahalagahan ng pagkakaroon ng mabuting pinuno para sa komunidad at bayan. Ano ang gagawin ng ina upang masigurong mabuti ang kanyang napiling kandidato?",
        a: ["Ipagbili ang mga boto para magkapera.", "Makipagpulong sa pamilya para sa isahang pagboto.", "Magsaliksik online at alamin ang bawat plataporma ng kandidato.", "Huwag bumoto at hayaan na lamang ang iba na magdesisyon sa halalan."],
        correct: "Magsaliksik online at alamin ang bawat plataporma ng kandidato."
    },
    {
        q: "Ang mga alituntunin at tamang asal online ay mahalagang hakbang para maging responsable sa paggamit ng social media. Ano ang pangunahing hakbang sa tamang paggamit ng social media?",
        a: ["Suriin ang katotohanan ng impormasyon bago ito ibahagi.", "Gumugol ng buong araw sa social media kahit hindi produktibo.", "Gumamit ng mapanirang salita sa pagkomento sa mga post ng iba.", "Magbahagi ng impormasyon nang walang pag-verify kung totoo o hindi."],
        correct: "Suriin ang katotohanan ng impormasyon bago ito ibahagi."
    },
    {
        q: "Ang mga kabataan ngayon ay mahilig nang gumamit ng social media, saan mang sulok ng mundo. Ano ang tamang terminolohiya ang tumutukoy sa maling impormasyon na ikinakalat sa social media?",
        a: ["Cyberbullying", "Fast-checking", "Fake news", "Online privacy"],
        correct: "Fake news"
    },
    {
        q: "Si Lino ay may natutuhan mula sa mga sermon ng pari na ang pagiging mabuting mamamayan ay bahagi ng kanyang pananampalataya. Ang pagmamalasakit, pagtulong sa kapuwa, at pagsunod sa batas ay bahagi ng kaniyang espirituwal na tungkulin. Ano ang natutuhan ni Lino tungkol sa kaugnayan ng kanyang espirituwalidad sa pagiging mabuting mamamayan?",
        a: ["Naalala ni Lino na ang pagiging mabuting mamamayan ay walang kinalaman sa espirituwalidad.", "Nalaman ni Lino na ang pagiging mabuting mamamayan ay hindi dapat pagtuunan ng pansin.", "Naintindihan ni Lino o na mahalaga lamang ang panalangin at hindi ang pagtulong sa kapwa.", "Natutuhan ni Lino na ang pagsunod sa mga batas ng bansa at pagtulong sa kapwa ay bahagi ng kanyang pananampalataya."],
        correct: "Natutuhan ni Lino na ang pagsunod sa mga batas ng bansa at pagtulong sa kapwa ay bahagi ng kanyang pananampalataya."
    },
    {
        q: "May isang klase kung saan tinalakay nila ang iba’t ibang isyu ng bayan tulad ng kahirapan, korapsyon, at kawalan ng trabaho. Matapos ang klase, nag-isip ng mabuti ang batang si Ninya tungkol sa mga isyung ito. Nalaman niya na ang korapsyon ay isang malaking balakid sa pag-unlad ng bansa at nakakaapekto sa kalidad ng pamumuhay ng mga tao. Ano ang natutunan ni Ninya mula sa kanyang pakikinig tungkol sa mga isyu ng bayan?",
        a: ["Napansin ni Ninya na masyadong mababa ang kita ng mga manggagawa", "Naalala ni Ninya na mahalaga ang kalusugan sa paglago ng ekonomiya", "Nalaman ni Ninya na ang korapsyon ay isang hadlang sa pag-unlad ng bansa.", "Naisip ni Ninya na ang edukasyon ay mahalaga sa para sa sarili at pag-unlad ng bayan."],
        correct: "Nalaman ni Ninya na ang korapsyon ay isang hadlang sa pag-unlad ng bansa."
    },
    {
        q: "Ang \"glokalisasyon\" ay ang konsepto kung saan pinagsasama ang mga ideya, teknolohiya, o inobasyon mula sa global na lebel, at iniangkop ang mga ito upang maging akma sa lokal na konteksto at pangangailangan ng isang komunidad. At sinasabing ito ang magsisilbing tugon sa suliranin ng bayan. Ano ang kahulugan ng terminong glokalisasyon batay sa pahayag?",
        a: ["Pagkakaroon ng pagkakaisa sa buong mundo", "Pagpapalawak ng lokal na produkto sa ibang bansa", "Paggamit ng makabagong teknolohiya para sa personal na kapakanan", "Pinagsasama ang mga ideya, teknolohiya, o inobasyon mula sa global na lebel, at iniangkop ang mga ito upang maging akma ito sa lokal na konteksto"],
        correct: "Pinagsasama ang mga ideya, teknolohiya, o inobasyon mula sa global na lebel, at iniangkop ang mga ito upang maging akma ito sa lokal na konteksto"
    },
    {
        q: "Ang Barangay Masigasig ay naglunsad ng proyekto upang mapanatili ang habitat ng mga hayop. Alin sa mga sumusunod ang isang paraan upang mapanatili ang habitat ng mga hayop?",
        a: ["Pagtatanim ng mga puno.", "Pagpuputol ng mga puno.", "Pagtatayo ng pabrika sa kagubatan.", "Pag-aalaga ng mga hayop sa bahay."],
        correct: "Pagtatanim ng mga puno."
    },
    {
        q: "Sa pagninilay ni Mother Teresa, narinig niya ang tawag ng paglilingkod sa labas ng kumbento- ang tulungan ang mga batang napabayaan, mga taong hindi minahal at may sakit na hindi inalagaan. Ginamit niya ang kaniyang kaalaman sa panggagamot at kakayahan sa pagtuturo upang tugunan ang pangangailangang pisikal at espirituwal ng mga mahihirap. Anong katangian ang ipinamalas ni Mother Teresa?",
        a: ["Pagpapaunlad ng sarili", "Pagpapaunlad ng pagkatao", "Pagtatamo ng mapayapang lipunan", "Mabuting pakikisalamuha sa lipunan"],
        correct: "Mabuting pakikisalamuha sa lipunan"
    },
    {
        q: "Paano ipinapaliwanag ng buhay ni Mother Teresa ang mahalagang papel ng pamilya bilang gabay sa pagpili ng mga mabubuting pinuno na maglilingkod sa bayan?",
        a: ["Si Mother Teresa ay hindi naging gabay ng kanyang pamilya sa pagpili ng mga mabuting lider sa komunidad.", "Walang kaugnayan ang buhay ni Mother Teresa sa mga aral ng pamilya tungkol sa pagkilatis ng mabuting lider.", "Ang pamilya ni Mother Teresa ay walang epekto sa kanyang pagiging lider, at natutuhan niya ang lahat mula sa kanyang karanasan sa labas ng pamilya.", "Ipinapakita ng buhay ni Mother Teresa na ang mga prinsipyo at katangian ng isang mabuting lider ay kadalasang nagmumula sa mga aral at gabay ng pamilya, tulad ng pagpapakumbaba at malasakit sa kapuwa."],
        correct: "Ipinapakita ng buhay ni Mother Teresa na ang mga prinsipyo at katangian ng isang mabuting lider ay kadalasang nagmumula sa mga aral at gabay ng pamilya, tulad ng pagpapakumbaba at malasakit sa kapuwa."
    },
    {
        q: "Ikaw ay aktibong gumagamit ng facebook. Sa maraming pagkakataon, nagpapakita ka ng pagiging responsable sa paggamit ng social media tulad ng pagbabagi ng buhay ni Mother Teresa. Alin sa mga sumusunod ang tamang hakbang na iyong gagawin sa pabahagi ng impormasyon sa social media?",
        a: ["Ipagkalat ang maling impormasyon tungkol kay Mother Theresa", "Gumawa ng ibang kuwento tungkol sa buhay ni Mother Teresa", "Tiyaking tama ang mga impormasyong ibabahagi tungkol sa buhay ni Mother Teresa", "Makilahok sa mga online discussions nang walang respeto tungkol sa buhay ni Mother Teresa"],
        correct: "Tiyaking tama ang mga impormasyong ibabahagi tungkol sa buhay ni Mother Teresa"
    },
    {
        q: "Batay sa tekstong iyong nabasa sa itaas, alin sa mga sumusunod na pahayag ang nagpapamalas ng gawaing katulad ni Mother Teresa?",
        a: ["Makipagtulungan sa mga pulis.", "Hintayin muna ang utos ng guro bago tumulong", "Bumuo ng grupong nagsusulong ng Tree planting.", "Magbidyo muna bago tumulong sa kapitbahay na nasunogan."],
        correct: "Bumuo ng grupong nagsusulong ng Tree planting."
    },
    {
        q: "Si Juan, isang guro at miyembro ng simbahan, ay aktibong lumahok sa isang kampanya upang linisin ang mga ilog at gubat, bilang bahagi ng kanilang pagsuporta sa kalikasan at pag-iwas sa pagbaha. Bakit nakatutulong ang espirituwalidad ni Juan sa pagiging mabuting mamamayan?",
        a: ["Ang espirituwalidad ni Juan ay nagtuturo ng malasakit at responsibilidad sa kalikasan, na nagpapalakas sa kanyang layuning gumawa ng mabuti.", "Aktibo si Juan sa kalikasan bilang halimbawa ng pagnanais maglingkod sa iba.", "Nauunawaan ni Juan na ang pag-aalaga sa kalikasan ay bahagi ng kanyang misyon sa Diyos at komunidad.", "Ang espirituwalidad ni Juan ay nagpapalakas sa kanyang malasakit at responsibilidad sa kalikasan."],
        correct: "Ang espirituwalidad ni Juan ay nagtuturo ng malasakit at responsibilidad sa kalikasan, na nagpapalakas sa kanyang layuning gumawa ng mabuti."
    },
    {
        q: "Si David ay isang debotong mananampalataya na nais gamitin ang kanyang espirituwalidad upang magbigay ng mabuting halimbawa sa kanyang komunidad. Alin sa mga hakbang na ito ang pinakamainam na gawin ni David upang magamit ang kanyang espirituwalidad sa pagiging mabuting mamamayan?",
        a: ["Magdaos ng mga aktibidad na pang-isports.", "Huwag makilahok sa mga gawaing pangkomunidad", "Mag-organisa ng prayer meetings at spiritual retreats.", "Hayaan ang mga simbahan na magsagawa at magpalaganap nito."],
        correct: "Mag-organisa ng prayer meetings at spiritual retreats."
    },
    {
        q: "Isang aktibong miyembro si Pedro ng simbahan kung saan natutuhan niya sa Bible study na ang pananampalataya ay nagtuturo ng paglilingkod sa komunidad, paggalang sa batas, at pagtulong sa nangangailangan. Bakit naiintindihan ni Pedro ang kaugnayan ng espirituwalidad sa pagiging mabuting mamamayan?",
        a: ["Dahil ang espirituwalidad ay hiwalay sa gawain bilang mamamayan.", "Dahil tumutulong si Pedro sa kanyang kapuwa kung may kapalit na gantimpala.", "Dahil ang pananampalataya ay personal na bagay at hindi nauugnay sa pagiging mamamayan.", "Dahil ang pananampalataya ay nagtuturo kay Pedro na maglingkod sa komunidad at tumulong sa mga nangangailangan."],
        correct: "Dahil ang pananampalataya ay nagtuturo kay Pedro na maglingkod sa komunidad at tumulong sa mga nangangailangan."
    },
    {
        q: "Dumalo sa seminar si Liza tungkol sa mga isyu ng bayan tulad ng kahirapan, kalusugan, at korapsyon. Napagtanto niya na ang kahirapan ay sanhi ng kakulangan sa edukasyon at problema sa kalusugan. Paano nabatid ni Liza ang kahalagahan ng pakikiisa sa mga usaping may kaugnayan sa lipunan?",
        a: ["Naintindihan ni Liza na mahalaga ang edukasyon, kalusugan, at pagkakaroon ng trabaho upang makaahon sa kahirapan.", "Napagtanto ni Liza na ang edukasyon ay makakatulong sa mga tao, ngunit kalusugan lamang ang dapat tutukan ng gobyerno.", "Napansin ni Liza na ang kahirapan, kalusugan, at korapsyon ay may kani-kaniyang mga solusyon, ngunit lahat ay nakaaapekto sa pag-unlad ng bansa.", "Nalaman ni Liza na ang korapsyon ang tanging dahilan ng lahat."],
        correct: "Naintindihan ni Liza na mahalaga ang edukasyon, kalusugan, at pagkakaroon ng trabaho upang makaahon sa kahirapan."
    },
    {
        q: "Kadalasang napagkakamalang magkakaugnay ang glokalisasyon sa globalisasyon. Subalit malaki ang pagkakaiba nitong dalawa sapagkat ang glokalisasyon ay iniaangkop ito sa mga ideya sa lokal na pangangailangan samantalang ang globalisasyon ay nakasentro sa buong mundo. Paano naiiba ang glokalisasyon sa globalisasyon?",
        a: ["Ang glokalisasyon at globalisasyon ay magkatulad at walang pagkakaiba.", "Ang glokalisasyon ay binibigyang diin ang paggamit ng lokal na mga solusyon lamang, habang ang globalisasyon ay tumutukoy sa global na pagkilos.", "Ang glokalisasyon ay tumutukoy sa pagpapalaganap ng mga lokal na ideya sa buong mundo, habang ang globalisasyon ay eksklusibo sa mga lokal na lugar.", "Ang glokalisasyon ay nangangahulugang iniangkop ang mga pandaigdigang ideya o produkto sa mga lokal na pangangailangan, samantalang ang globalisasyon ay ang pagpapalawak ng mga ideya at produkto sa buong mundo."],
        correct: "Ang glokalisasyon ay nangangahulugang iniangkop ang mga pandaigdigang ideya o produkto sa mga lokal na pangangailangan, samantalang ang globalisasyon ay ang pagpapalawak ng mga ideya at produkto sa buong mundo."
    },
    {
        q: "Ang mga Tboli na kilala sa kanilang mga handicraft ay nag-organisa ng isang kooperatiba na naglalayong mapalago ang kanilang mga produkto, tulad ng T’nalak. Sa pamamagitan ng pagsasama-sama, nagawa nilang mabawasan ang gastos sa produksyon at mas mapabuti ang kalidad ng kanilang mga produkto. Ang mga ito ay naging popular hindi lamang sa lokal na merkado kundi pati na rin sa mga turista, na nagdulot ng pagtaas ng kita at trabaho sa komunidad. Paano nakatulong ang glokalisasyon sa pag-unlad ng ekonomiya ng mga taga T’boli?",
        a: ["Sa pamamagitan ng pagpapabaya sa lokal na industriya at pagtutok sa global trade lamang.", "Sa pamamagitan ng pagtutok lamang sa lokal na produkto at hindi pagtanggap ng global na ideya.", "Sa pamamagitan ng panggagaya sa lahat ng global na pamamaraan kahit hindi ito akma sa lokal na kondisyon", "Sa pamamagitan ng pag-angkop ng mga global na teknolohiya at ideya upang mapahusay ang kanilang lokal na produkto at serbisyo."],
        correct: "Sa pamamagitan ng pag-angkop ng mga global na teknolohiya at ideya upang mapahusay ang kanilang lokal na produkto at serbisyo."
    },
    {
        q: "Ang sikat na artistang si Melai ay nag-organisa ng feeding program para sa mga batang lansangan at hinihikayat ang kanyang mga tagahanga na tumulong. Paano ipinamalas ni Melai ang katangian ng pagpapakatao sa pagtupad ng kanyang tungkulin bilang isang kilalang personalidad?",
        a: ["Sa pamamagitan ng pagdedepende lamang sa iba.", "Sa pamamagitan ng pag-iwas sa responsibilidad.", "Sa pamamagitan ng aktibong pagtulong at paghikayat sa iba.", "Sa pamamagitan ng pagtulong sa kapuwa ngunit hindi bukal sa kalooban."],
        correct: "Sa pamamagitan ng aktibong pagtulong at paghikayat sa iba."
    },
    {
        q: "Ang Biography at Background o B2 ay isa sa mga paraan ng wastong pagpili ng mabubuting pinuno. Ito ay naglalaman ng pagsusuri ng mga kandidato, pag-unawa sa mga isyu, at aktibong pagtutok sa pangangampanya na maaaring ituro ng pamilya sa pamamagitan ng pagkilala nang maigi sa mga kandidato. Alin sa mga sumusunod na pahayag ang nagpapakita ng wastong paglalapat ng B2 (Biography at Background) sa pagpili ng mabuting pinuno?",
        a: ["Ihalal ang kandidato dahil sa kanilang popularidad sa telebisyon.", "Pumili ng mga kandidato na walang kaalaman at karanasan sa posisyong tinatakbuhan.", "Suriin ang biograpiya ng kandidato, kasama na ang kanilang mga nagawa at pananaw sa mga isyu.", "Umangkop sa anumang plataporma ng kandidato kahit hindi ito naaayon sa kanilang background."],
        correct: "Suriin ang biograpiya ng kandidato, kasama na ang kanilang mga nagawa at pananaw sa mga isyu."
    },
    {
        q: "Ang Character, Competence, at Conscience o C3 ay isa sa mga paraan ng wastong pagpili ng mabuting pinuno. Ito ay ang pag-aaral sa karakter o katangian ng kandidato at ang pagsuri sa kakayahan nitong gampanan ang posisyong nais tatakbuhan. Bilang isang mag-aaral, paano mo maipakikita na ikaw ay may kakayahang pumili ng isang mabuting pinuno?",
        a: ["Pumili ng kandidato batay sa kanilang kasikatan sa social media.", "Tumingin sa mga personal na relasyon ng kandidato kaysa sa kanilang kwalipikasyon.", "Suriin ang karakter ng kandidato at ang kanilang kakayahan sa pagtupad ng mga tungkulin.", "Ihalal ang kandidato dahil sa kanilang mga pangako sa kampanya kahit walang konkretong plano."],
        correct: "Suriin ang karakter ng kandidato at ang kanilang kakayahan sa pagtupad ng mga tungkulin."
    },
    {
        q: "Kung makakita ka ng post sa social media na naglalaman ng maling impormasyon na maaring magdulot ng takot o kaguluhan, ano ang tamang aksyon na dapat mong gawin?",
        a: ["Ibahagi agad ang post upang ipaalam sa iba ang nakita mo.", "Balewalain ang post at magpatuloy sa paggamit ng social media", "Makipag argumento sa orihinal na nagpost at ipahiya siya sa harap ng iba.", "Siguraduhin muna ang impormasyon at kung mapatunayang mali i-report ang post saka ibahagi ang tamang impormasyon."],
        correct: "Siguraduhin muna ang impormasyon at kung mapatunayang mali i-report ang post saka ibahagi ang tamang impormasyon."
    },
    {
        q: "Si Mia ay aktibong miyembro ng simbahan at gusto niyang gamitin ang kanyang pananampalataya upang makatulong sa paglutas ng problema ng basura sa kanilang komunidad. Paano maisasabuhay ni Mia ang kanyang espirituwalidad sa pagtugon sa problema ng basura at kalinisan sa kanilang komunidad?",
        a: ["Manatili na lamang sa bahay.", "Mag-organisa ng clean-up drive.", "Iwasan na lamang ang kanilang lugar."],
        correct: "Mag-organisa ng clean-up drive."
    },
    {
        q: "Nakatira malapit sa tabing-dagat ang pamilya Dalisay at napansin nila na maraming basura ang napupunta sa dalampasigan na nagdudulot ng polusyon at pagkasira ng tirahan ng mga nilalang-dagat. Bilang isang responsableng mamamayan, paano sila makatutulong sa pamayanan na may layuning mapapanatili ang kalinisan ng dalampasigan?",
        a: ["Manatili na lang sa bahay", "Magtapon ng basura sa dagat.", "Iwasan ang pagpunta sa tabing-dagat.", "Makipagtulungan sa lokal na pamahalaan."],
        correct: "Makipagtulungan sa lokal na pamahalaan."
    },
    {
        q: "Sa ibang bansa, matagumpay na ipinapatupad ang batas sa paggamit ng plastic recycling machines, ngunit dito sa ating bansa hindi ito madaling gamitin dahil sa kakulangan ng pondo. Paano maisakatupran ang implementasyon ng glokalisasyon upang malutas ang problema sa plastic waste sa ating bansa?",
        a: ["Huwag nang subukang magrecycle ng plastic waste at i-export na lamang ito sa ibang bansa.", "Palitan ang lahat ng kagamitan ng mga banyagang kumpanya na may mataas na gastos.", "Gumamit ng imported recycling machines at ipasa ang gastos sa mga lokal na mamamayan", "Gumamit ng global na teknolohiya ngunit iangkop ito sa mga lokal na materyales at maglagay ng low-cost, community-based recycling system."],
        correct: "Gumamit ng global na teknolohiya ngunit iangkop ito sa mga lokal na materyales at maglagay ng low-cost, community-based recycling system."
    },
    {
        q: "Ilan sa mga barangay sa ating bansa ay nagkaroon ng mga problema sa tubig dahil sa tagtuyot noong mga nakaraang buwan ng Abril at Mayo. Sa ibang bansa, may matagumpay na mga programa sa water conservation gamit ang advanced irrigation systems, ngunit sa Pilipnas, mahal ang ganitong teknolohiya at hindi abot-kaya. Paano maaaring gamitin ang prinsipyo ng glokalisasyon upang matugunan ang problema sa tubig?",
        a: ["Maghintay na lamang ng tulong mula sa ibang bansa.", "Kumuha ng pinakamahal na irrigation system mula sa ibang bansa kahit hindi ito angkop sa lokal na kondisyon.", "Huwag nang pansinin ang global solutions at ipagpatuloy ang tradisyunal na pamamaraan kahit hindi ito epektibo.", "Gumamit ng mga ideya mula sa global conservation techniques at magpatupad ng mas abot-kayang irrigation system na magagamit sa Pilipinas."],
        correct: "Gumamit ng mga ideya mula sa global conservation techniques at magpatupad ng mas abot-kayang irrigation system na magagamit sa Pilipinas."
    },
    {
        q: "Ang bayan ng Matatag ay nakararanas ng pagtaas ng kawalan ng trabaho. Sa ibang bansa, ginagamit ang online job platforms upang lumikha ng maraming oportunidad sa trabaho, ngunit sa ating bansa, maraming tao ang walang internet access. Paano maisakatuparan ang glokalisasyon sa bayan ng Matatag upang lumikha ng mga trabaho sa kabila ng kanilang limitadong access sa internet?",
        a: ["Magtrabaho sa ibang bansa gamit ang mga illegal na dokumento.", "Puwersahin ang lahat ng mamamayan na gumamit ng online platforms kahit walang internet connection", "Gumamit ng global online job platforms gaya ng jobstreet.com.ph at bilhin ang mga mahal na gadgets para sa bawat mamamayan.", "Lumikha ng hybrid na sistema kung saan may offline job matching centers (TESDA, PESO, JOB FAIRS atbp.) na nagbibigay ng access sa mga oportunidad mula sa global platforms."],
        correct: "Lumikha ng hybrid na sistema kung saan may offline job matching centers (TESDA, PESO, JOB FAIRS atbp.) na nagbibigay ng access sa mga oportunidad mula sa global platforms."
    },
    {
        q: "Ang pamilya Reyes ay nakatira sa lungsod ng Heneral Santos at aktibong nakikilahok sa mga gawain ng kanilang lungsod. Napansin nila na maraming kabataan ang nawawalan ng interes sa pakikilahok sa mga proyekto ng komunidad. Bakit mahalaga para sa pamilyang Reyes na ipakita ang katangian ng pagpapakatao para sa bayan?",
        a: ["Upang magpasikat at makilala sa lungsod", "Upang mapanatili ang diwa ng bayanihan", "Upang magkaroon ng mas maraming libreng oras para sa pamilya.", "Upang makaiwas sa kanilang mga personal na responsabilidad"],
        correct: "Upang mapanatili ang diwa ng bayanihan"
    },
    {
        q: "Si Joseph ay kasali sa isang organisasyong boluntaryo na naglilinis ng kanilang barangay tuwing sabado. Siya ay naniniwala na ang paglilingkod sa komunidad ay isang paraan ng pagpapakita ng kanyang pananampalataya. Isinasapuso niya ang mga aral sa simbahan kagaya ng pagiging tapat, masipag at may malasakit sa kapaligiran. Paano naisasakilos ni Joseph ang mga paraan ng paglilingkod sa komunidad na ginagabayan ng kanyang espirituwalidad?",
        a: ["Si Joseph ay tumutulong lamang sa komunidad dahil kailangan, ngunit hindi niya isinasaalang-alang ang kaniyang pananampalataya sa kaniyang mga aksyon.", "Si Joseph ay aktibo sa pamayanan ngunit hindi nakikita ang koneksyon ng kanyang mga gawain sa kanyang espirituwalidad", "Tumutulong si Joseph sa komunidad ngunit hindi siya nag-iisip tungkol sa epekto nito sa kanyang pananampalataya.", "Tinutulungan ni Joseph ang komunidad bilang bahagi ng kaniyang pananampalataya, at sinisiguro niyang ang bawat gawain ay nagpapakita ng kanyang mlasakit at pananagutan sa kapaligiran."],
        correct: "Tinutulungan ni Joseph ang komunidad bilang bahagi ng kaniyang pananampalataya, at sinisiguro niyang ang bawat gawain ay nagpapakita ng kanyang mlasakit at pananagutan sa kapaligiran."
    },
    {
        q: "Sa isang maliit na pamayanan malapit sa kagubatan, napansin ng mga residente na dumarami ang mga hayop na umaalis sa kanilang natural na tirahan dahil sa pagkakalbo ng mga kagubatan at pagkasira ng kanilang habitat. Bilang tugon, nagkaroon ng pagpupulong ang mga lider ng barangay upang magplano ng mga hakbang para makalikha ng sustainable na paraan ng pamumuhay na hindi nakakapinsala sa kalikasan. Paano pagtibayin ang mga paraan upang mapanatili ang habitat ng mga hayop sa pamamagitan ng kanilang mga proyekto?",
        a: ["Magtanim ng mga puno ngunit walang proyekto o kampanyang tumutukoy sa", "Isaalang-alang ang habitat ng mga hayop sa kanilang mga plano sa reforestation.", "Magpatupad sa komunidad ng mga programang tulad ng reforestation at edukasyon tungkol sa kalikasan upang protektahan ang tirahan ng mga hayop.", "Magtulungan ang mga residente sa pagpapanatili ng habitat ng mga hayop ngunit iiwan ang ibang isyu sa gobyerno."],
        correct: "Magpatupad sa komunidad ng mga programang tulad ng reforestation at edukasyon tungkol sa kalikasan upang protektahan ang tirahan ng mga hayop."
    },
    {
        q: "Ang Barangay Kalikasan na nasa gilid ng kagubatan ay nakakaranas ng pagkaubos ng natural na habitat ng mga hayop dahil sa pagputol ng puno at paglawak ng sakahan. Bilang tugon, naglunsad ang mga lider ng proyekto para sa reforestation, pagkontrol sa illegal na pagputol ng puno, pagbibigay ng seminar sa komunidad upang ibalik ang habitat ng mga hayop at hikayatin ang lahat na makilahok sa solusyon. Ano ang pangunahing hakbang na ginawa ng Barangay Kalikasan upang mapanatili ang habitat ng mga hayop?",
        a: ["Pinahintulutan ang pagputol ng puno upang palawakin ang sakahan.", "Nagbigay lamang ng mga seminar ngunit walang ginawang aksyon sa reforestation.", "Nagpatupad ng reforestation at pagkontrol sa iligal na pagputol ng puno.", "Hindi isinama ang mga residente sa proyekto at ipinasa ang problema sa gobyerno."],
        correct: "Nagpatupad ng reforestation at pagkontrol sa iligal na pagputol ng puno."
    },
    {
        q: "Paano naisasama ang mga residente ng Barangay Kalikasan sa pagpapanatili ng mga habitat ng mga hayop?",
        a: ["Pinilit ng barangay ang mga residente na tumigil sa kanilang kabuhayan upang protektahan ang mga hayop", "Walang pakialam ang mga residente sa kalikasan, kaya hindi sila isinama sa proyekto.", "Ang mga residente ay nagpatuloy sa kanilang mga aktibidad nang walang koordinasyon sa barangay.", "Ang mga residente ay tinuruan sa mga seminar kung paano nila mapangangalagaan ang kalikasan at aktibong sumali sa reforestation."],
        correct: "Ang mga residente ay tinuruan sa mga seminar kung paano nila mapangangalagaan ang kalikasan at aktibong sumali sa reforestation."
    },
    {
        q: "Sa Brgy. Marupok, pangingisda ang pangunahing hanapbuhay ng mga tao, ngunit dahil sa overfishing at polusyon, bumaba ang huli ng isda at naapektuhan ang kabuhayan ng mga mangingisda. Sa ibang bansa, ginagamit ang sustainable fishing practices para maprotektahan ang marine biodiversity at maparami ang huling isda. Paano maaaring gamitin ang konsepto ng glokalisasyon upang lutasin ang suliranin ng komunidad sa pangingisda, habang isinasaalang-alang ang kanilang lokal na kakayahan at sitwasyon?",
        a: ["Umasa sa pag-import ng isda mula sa ibang bansa at kalimutan ang lokal na industriya ng pangingisda.", "Gamitin ang modernong teknolohiya mula sa ibang bansa nang walang pagsasaalang-alang sa lokal na kondisyon.", "Ipagbawal ang paggamit ng anumang modernong teknolohiya at magpatuloy sa tradisyunal na paraan ng pangingisda.", "Iangkop ang sustainable fishing practices mula sa ibang bansa at pagsamahin ito sa tradisyunal na kaalaman ng mga lokal na mangingisda upang lumikha ng abot-kayang solusyon na magprotekta sa kalikasan."],
        correct: "Iangkop ang sustainable fishing practices mula sa ibang bansa at pagsamahin ito sa tradisyunal na kaalaman ng mga lokal na mangingisda upang lumikha ng abot-kayang solusyon na magprotekta sa kalikasan."
    },
    {
        q: "Sa lungsod ng Heneral Santos, isang grupo ng mga mangingisda ang nagtutulungan upang lumikha ng produktong sardinas gamit ang lokal na mga nahuling isda. Upang gawing mas angkop sa pandaigdigang merkado, gumamit sila ng makabagong packaging at teknolohiya habang pinapanatili ang tradisyunal na lasa na mahalaga sa kanilang komunidad. Paano sinusuri ang mga produktong ito upang maging angkop sa konsepto ng glokalisasyon kung saan tumutugon sa pangangailangan ng pamayanan?",
        a: ["Nagbebenta ng mga produkto sa ibang bansa.", "Pagpapatigil sa paggamit ng tradisyunal na pamamaraan.", "Pagtutok lamang sa lokal na merkado nang walang inobasyon.", "Tinitiyak ang kalidad ng produktong lokal upang maging angkop sa pandaigdigang merkado."],
        correct: "Tinitiyak ang kalidad ng produktong lokal upang maging angkop sa pandaigdigang merkado."
    },
    {
        q: "Nakararanas ang lungsod ng Heneral Santos ng pagbaha dahil sa baradong kanal at kakulangan ng punong kahoy. Upang masolusyunan ito, inilunsad ang programang \"Tanim Para sa Bayan,\" na nagtataguyod ng pagtatanim ng puno gamit ang lokal na kaalaman at pandaigdigang teknolohiya tulad ng rainwater harvesting. Bakit mahalaga ang glokalisasyon bilang tugon sa suliraning ito?",
        a: ["Ginagawang sentro ng kalakalan ang barangay.", "Nagpapadali ng pag-aangkat ng produkto mula sa ibang bansa", "Pinagsasama ang lokal na inisyatiba at pandaigdigang suporta.", "Mas maganda ang umasa lamang sa pandaigdigang organisasyon."],
        correct: "Pinagsasama ang lokal na inisyatiba at pandaigdigang suporta."
    },
    {
        q: "Ayon kay Kuya Tony isang tanod sa Sarangani, laging siyang handang tumulong sa mga emergency at sakuna sa kanilang barangay. Sa kabila ng kanyang abalang buhay, tapat siya sa kanyang tungkulin at nagmamalasakit sa kapuwa. Paano napatutunayan ang katangian ng pagpapakatao sa sitwasyong ito?",
        a: ["Sa pamamagitan ng pagpapabaya sa mga emergency.", "Sa pamamagitan ng pagtulong lamang sa may kakayahang magbayad.", "Sa pamamagitan ng pagiging hindi tapat at maagap sa kaniyang tungkulin.", "Sa pamamagitan ng pagpapakita ng malasakit at dedikasyon sa komunidad."],
        correct: "Sa pamamagitan ng pagpapakita ng malasakit at dedikasyon sa komunidad."
    },
    {
        q: "Habang kumakain sa hapag kainan ang pamilya ni Ana, tinanong niya ang kanyang mga magulang kung paano pipili ng tamang kandidato. Natutuhan niyang suriin ang mga kandidato batay sa prinsipyo. Sa halalan, pinili niya ang kandidatong may mabuting katangian at malasakit sa bayan. Anong gampanin ng pamilya bilang gabay sa pagpili ng mga mabuting pinuno sa komunidad at bayan ang ipinakikita ng pamilya Cruz?",
        a: ["Ang pamilya ay isang modelo sa pagpili ng mabuting pinuno.", "Ang pamilya ay isang tulay upang aktibong makipagpartisipasyon sa halalan.", "Ang pagkakaroon ng bukas na komunikasyon o diskusyon sa pagkilatis ng magandang katangian ng isang mabuting pinuno.", "Ang pamilya ang unang tagapagturo ng mga moral na prinsipyo at halaga sa isang indibidwal."],
        correct: "Ang pagkakaroon ng bukas na komunikasyon o diskusyon sa pagkilatis ng magandang katangian ng isang mabuting pinuno."
    },
    {
        q: "Habang naglalaro si Marco, nakita niya ang ina na tumutulong sa kapitbahay at ang ama na masipag sa trabaho. Sinabi ng ina na ang malasakit ay mahalaga sa lider, at idinagdag ng ama na ang sipag at dedikasyon ay susi sa paglilingkod. Dahil dito, nahikayat si Marco na maging mabuting tao at mamamayan. Ano ang patunay na ang pamilya ay gabay sa pagpili ng mga mabubuti pinuno sa komunidad at bayan?",
        a: ["Ang pamilya bilang tagapagturo ng disiplina at paniniwala.", "Ang pamilya bilang pundasyon ng pagkatao at gabay sa mga pagpapahalaga.", "Ang pamilya bilang tagapagtanim ng malasakit at sipag sa kanilang anak.", "Ang pamilya bilang tagapagbigay ng mga mabuting halimbawa ng pag-uugali"],
        correct: "Ang pamilya bilang pundasyon ng pagkatao at gabay sa mga pagpapahalaga."
    },
    {
        q: "Ang social media ay may mabuti at masamang epekto sa tao at sa bayan depende sa paggamit nito. Paano mo masusuri ang epekto ng tamang paggamit ng social media sa pakikipag-ugnayan sa kapuwa at katiwasayan ng bayan?",
        a: ["Sa pamamagitan ng obserbasyon kung gaano karami ang likes at shares ng isang post.", "Sa pamamagitan ng pagsususri sa trending na topic at pagsali sa mga viral na diskusyon", "Sa pamamagitan ng pag-follow sa maraming account upang makita ang iba’t ibang opinyon", "Sa pamamagitan ng pagtatasa kung paano nakatutulong ang mga etikal na post sa pagbuo ng mas positibong diskurso at pagbabawas ng tensyon sa lipunan."],
        correct: "Sa pamamagitan ng pagtatasa kung paano nakatutulong ang mga etikal na post sa pagbuo ng mas positibong diskurso at pagbabawas ng tensyon sa lipunan."
    },
    {
        q: "Si Basilio ay aktibong kasapi sa isang organisasyon ng simbahan na tumutulong sa komunidad. Sa kanilang pagninilay tungkol sa kahirapan, kalikasan, at katarungang panlipunan, natutunan niyang ang pagninilay ay bahagi ng kaniyang espirituwalidad. Napagtanto niya na ang mga isyung ito ay nangangailangan ng mas malalim na pang-unawa upang makatulong nang naaayon sa kaniyang kakayahan, at ang pagiging aktibo at pakikiisa sa mga gawaing pangkomunidad ay isang pagpapahayag ng kaniyang pananampalataya at responsabilidad bilang mamamayan. Paano napatutunayan ni Basilio na ang pagninilay sa mga isyu ng bayan ay bahagi ng kanyang espirituwalidad at batayan ng kanyang pagpapasiya at pakikisangkot sa mga isyu?",
        a: ["Nauunawaan ni Basilio na ang pagninilay sa mga isyu ng bayan ay nagiging batayan ng kanyang pakikilahok at pagtulong bilang bahagi ng kaniyang pananampalataya.", "Si Basilio ay dumalo sa mga talakayan ngunit hindi isinasama ang mga natutuhan sa kanyang mga desisyon at gawain sa komunidad.", "Naiisip ni Basilio na walang kaugnayan ang mga isyu ng bayan sa kanyang espirituwalidad.", "Si Basilio ay nagdarasal lamang at hindi siya aktibong nakikisangkot sa mga isyu ng bayan."],
        correct: "Nauunawaan ni Basilio na ang pagninilay sa mga isyu ng bayan ay nagiging batayan ng kanyang pakikilahok at pagtulong bilang bahagi ng kaniyang pananampalataya."
    },
    {
        q: "Paano naaapektuhan ng pagninilay ni Basilio sa ang mga isyu ng bayan ang kanyang mga desisyon at pagkilos sa pagtulong sa kapwa?",
        a: ["Ang pagninilay ni Basilio ay hindi mahalaga at hindi niya ito ginagamit bilang batayan sa kanyang mga aksyon sa pagtulong.", "Si Basilio ay umaasa sa iba pang tao para gumawa ng desisyon kung paano siya makatutulong sa mga isyu ng bayan.", "Ang pagninilay ni Basilio ay nagbibigay sa kanya ng mas malalim na kahulugan sa mga isyu ng bayan at nagtutulak sa kanya na maging aktibo sa pagtulong sa kapwa.", "Hindi naaapektuhan ni Basilio ang kanyang mga desisyon at patuloy lang siyang tumutulong sa kapwa kahit hindi siya nagmumuni-muni tungkol sa mga isyu ng bayan."],
        correct: "Ang pagninilay ni Basilio ay nagbibigay sa kanya ng mas malalim na kahulugan sa mga isyu ng bayan at nagtutulak sa kanya na maging aktibo sa pagtulong sa kapwa."
    },
    {
        q: "Sa Pilipinas, maraming lokal na komunidad ang nahaharap sa suliranin tulad ng kahirapan, kakulangan sa edukasyon, at isyu sa kalikasan. Halimbawa rito, ang paggamit ng teknolohiya mula sa ibang bansa sa larangan ng Agrikultura na maaaring magbigay ng mas mahusay na solusyon sa mga problemang pang-agrikultura ng mga lokal na magsasaka. Paano mo mailalarawan ang interaksyon ng ating bansa at pandaigdigang ideya tungkol sa glokalisasyon?",
        a: ["Ang glokalisasyon ay walang epekto sa ating bansa.", "Ang mga tradisyunal na pamamaraan ay dapat isantabi sa ngalan ng modernisasyon.", "Ang glokalisasyon ay nagbibigay lamang ng mga benepisyo sa mga nakakaalam ng teknolohiya.", "Ang interaksyon sa pagitan ng ating bansa at pandaigdigang ideya ay nagdudulot ng pagbabago sa lahat ng aspekto ng lipunan, ngunit nagdadala rin ng mga hamon sa ating pagkakakilanlan."],
        correct: "Ang interaksyon sa pagitan ng ating bansa at pandaigdigang ideya ay nagdudulot ng pagbabago sa lahat ng aspekto ng lipunan, ngunit nagdadala rin ng mga hamon sa ating pagkakakilanlan."
    },
    {
        q: "Aling Rosa, isang negosyante sa Davao ay naglunsad ng programang \"Kultura at Kalikasan\" kung saan gumagamit siya ng mga lokal na materyales at kaalaman sa paggawa ng mga handicrafts. Pinagsama niya ito sa makabagong teknolohiya mula sa ibang bansa tulad ng sustainable packaging at online marketing upang ipakilala ang mga produkto sa global na merkado. Paano mo suportahan ang desisyon ni Aling Rosa na pagsamahin ang lokal na kaalaman at makabagong teknolohiya sa programang \"Kultura at Kalikasan\"?",
        a: ["Sapat na ang tradisyunal na kaalaman, hindi mahalaga ang teknolohiya.", "Hindi angkop dahil maaaring mawala ang diwa ng lokal na kultura.", "Sa pamamagitan ng pagsang-ayon na dapat bigyang-diin ang tradisyunal na pamamaraan.", "Sa pamamagitan ng pagpapalawak ng access sa merkado nang hindi naisasantabi ang kultura."],
        correct: "Sa pamamagitan ng pagpapalawak ng access sa merkado nang hindi naisasantabi ang kultura."
    },
    {
        q: "Ipagpalagay na nais mong maglunsad ng kampanya para sa mapanagutang paggamit ng social media. Alin sa mga sumusunod ang dapat buoin bilang pinakamabisang plano upang isulong ito?",
        a: ["Magpasimula ng online debate tungkol sa mga isyung kontrobersyal upang mapansin ng marami.", "Mag-follow ng mga influencers at ibahagi ang kanilang mga post tungkol sa social media responsibility", "Gumawa ng isang viral na post na nagbabatikos sa mga tao na hindi responsable sa paggamit ng social media.", "Lumilikha ng serye ng mga educational posts na nagpapaliwanag ng tamang asal sa social media, pagbabahagi ng tamang impormasyon at kung paano ireport ang maling nilalaman"],
        correct: "Lumilikha ng serye ng mga educational posts na nagpapaliwanag ng tamang asal sa social media, pagbabahagi ng tamang impormasyon at kung paano ireport ang maling nilalaman"
    },
    {
        q: "Si Leo bilang isang Presidente ng Sangguniang Kabataan sa kanilang barangay ay may responsabilidad na iangat ang kalagayan ng kabataan sa kanilang komunidad. Nakipagtulungan siya sa paglunsad ng programa para sa pagtatanim ng mga puno at mga libreng seminar sa kalusugan at nutrisyon. Sa kanilang sama-samang pagsisikap, ipinapakita nila ang kanilang tungkulin sa pamayanan habang ginagabayan ng kanilang espirituwal na pananaw. Paano bubuo si Leo at ang kanyang mga kaibigan ng mga hakbang upang magampanan ang kanilang tungkulin sa pamayanan gamit ang kanilang espirituwalidad? I. Magdasal at humingi ng gabay para maging matagumpay ang mga proyekto. II. Mag-organisa ng mga proyekto tulad ng pagtatanim ng puno at seminar patungkol sa kalusugan. III. Maghikayat ng kabataan at iba pang kasapi sa komunidad na mag-volunteer. IV. Maglunsad ng mga aktibidad na nagpo-promote ng pagmamahal sa kalikasan at kapwa",
        a: ["I, II, III, IV", "I, II, III", "II, IV", "I, III, IV"],
        correct: "I, II, III, IV"
    },
    {
        q: "Napansin ni Sisa at ng kanyang mga kasamahan sa prayer group ang kakulangan ng pagkain sa kanilang komunidad. Nagdaos sila ng prayer vigil at nag-organisa ng feeding program gamit ang mga donasyon. Bumuo ng proseso kung paano maaaring gamitin ang espirituwalidad upang makatulong sa mga isyu ng komunidad. I. Magdaos ng mga prayer meetings upang magdasal para sa komunidad at magsagawa ng mga proyekto tulad ng feeding programs at outreach activities. II. Mag-organisa ng mga proyekto na tumutugon sa mga pangunahing pangangailangan ng komunidad, tulad ng pagbibigay ng pagkain, damit, at kalusugan. III. Maghikayat ng ibang tao na makiisa sa mga proyekto sa pamamagitan ng espirituwal na pagpapahalaga sa pagtulong sa kapwa. IV. Gumamit ng mga aral mula sa relihiyon upang magsimula ng mga community-driven na inisyatibo na nagsusulong ng katarungan at pagkakaisa.",
        a: ["I, II, IIIII", "IV, III, II, I", "I, II, III, IV", "I, III, IV"],
        correct: "I, II, III, IV"
    },
    {
        q: "Sa iyong baranggay, may mga dayuhang kumpanya na nag-aalok ng makabagong teknolohiya para sa pagsasaka, ngunit ito ay masyadong mahal para sa mga lokal na magsasaka. Paano mo ilalapat ang prinsipyo ng glokalisasyon upang matulungan sila?",
        a: ["Tanggihan ang teknolohiya at manatili sa lumang paraan.", "Hingin sa gobyerno na bilhin ang lahat ng mahal na makinarya para sa bawat magsasaka.", "Pag-aralan ang konsepto ng teknolohiya at gumawa ng mas simpleng bersyon gamit ang mga lokal at abot-kayang materyales.", "Hikayatin ang mga magsasaka na mangutang nang malaki upang makabili ng imported na kagamitan."],
        correct: "Pag-aralan ang konsepto ng teknolohiya at gumawa ng mas simpleng bersyon gamit ang mga lokal at abot-kayang materyales."
    },
    {
        q: "Bilang isang mag-aaral, nakita mo na ang iyong kaklase ay nag-post ng isang edited na larawan ng inyong guro upang gawing katatawanan. Ano ang dapat mong gawin bilang pagpapakita ng tamang asal sa social media?",
        a: ["I-like at i-share ang post dahil ito ay nakakatawa naman.", "Huwag pansinin ang post upang hindi ka madamay sa gulo.", "Kausapin nang mahinahon ang kaklase at ipaliwanag na ang paggawa nito ay kawalan ng paggalang sa dignidad at privacy ng iba.", "Gumawa rin ng sariling edited na larawan upang hindi magpatalo sa kaklase."],
        correct: "Kausapin nang mahinahon ang kaklase at ipaliwanag na ang paggawa nito ay kawalan ng paggalang sa dignidad at privacy ng iba."
    }
];

const questionEl = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");
const scoreDisplay = document.getElementById("score-display");
const backBtn = document.querySelector(".btn-home");
const nameBadge = document.getElementById("student-name-badge");
const bgToggle = document.getElementById("bg-toggle");
const themeToggle = document.getElementById("theme-toggle");
const _audioProbe = document.createElement("audio");
const _audioExt = _audioProbe && _audioProbe.canPlayType && _audioProbe.canPlayType("audio/wav") ? "wav" : "mp3";
const correctAudio = new Audio("../assets/sounds/correct." + _audioExt);
const incorrectAudio = new Audio("../assets/sounds/incorrect." + _audioExt);
const APP_VERSION = "1.0.0";
const versionEl = document.getElementById("app-version");
if (versionEl) versionEl.textContent = APP_VERSION;
const footerEl = document.querySelector(".app-footer");
const loaderEl = document.getElementById("loader-overlay");

function showLoader() {
    if (loaderEl) loaderEl.style.display = "flex";
}
function hideLoader() {
    if (loaderEl) loaderEl.style.display = "none";
}

let current = 0;
let score = 0;
let studentName = "";
let bgIndex = 1;

let selectedAnswer = null;
let answered = false;
let confirmEl = null;
let feedbackEl = null;
let nextBtn = null;
const SCORE_KEY = "g7_scores";
let optionButtons = [];
let nameInputEl = null;
let startBtnEl = null;
let confirmYesBtnEl = null;
let confirmNoBtnEl = null;

function clearTransient() {
    if (confirmEl && confirmEl.parentNode) confirmEl.parentNode.removeChild(confirmEl);
    if (feedbackEl && feedbackEl.parentNode) feedbackEl.parentNode.removeChild(feedbackEl);
    if (nextBtn && nextBtn.parentNode) nextBtn.parentNode.removeChild(nextBtn);
    confirmEl = null;
    feedbackEl = null;
    nextBtn = null;
}

function showNameForm() {
    questionEl.textContent = "Enter your name to start the 4th Quarter Examination";
    optionsContainer.innerHTML = "";
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Your full name";
    input.className = "name-input";
    const startBtn = document.createElement("button");
    startBtn.textContent = "Start";
    startBtn.style.marginTop = "10px";
    optionsContainer.appendChild(input);
    optionsContainer.appendChild(startBtn);
    if (footerEl) footerEl.style.display = "block";
    nameInputEl = input;
    startBtnEl = startBtn;
    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            startBtn.click();
        }
    });
    startBtn.addEventListener("click", async () => {
        const val = (input.value || "").trim();
        if (!val) {
            input.style.borderColor = "#e74c3c";
            input.focus();
            return;
        }
        studentName = val;
        if (nameBadge) {
            nameBadge.textContent = studentName;
            nameBadge.style.display = "inline-block";
        }
        score = 0;
        current = 0;
        nameInputEl = null;
        startBtnEl = null;
        showLoader();
        await loadExternalQuestions();
        renderQuestion();
        hideLoader();
    });
}

function renderQuestion() {
    clearTransient();
    answered = false;
    selectedAnswer = null;
    if (footerEl) footerEl.style.display = "none";
    if (current >= questions.length) {
        questionEl.textContent = (studentName ? (studentName + ", ") : "") + "Tapos na ang pagsagot mo sa 4th Quarter Examination. Ang iyong Kabuuang iskor ay: " + score + " / " + questions.length;
        optionsContainer.innerHTML = "";
        scoreDisplay.textContent = "Score: " + score;
        if (footerEl) footerEl.style.display = "block";
        recordAndOfferDownload();
        return;
    }
    const q = questions[current];
    questionEl.textContent = (current + 1) + ". " + q.q;
    optionsContainer.innerHTML = "";
    optionButtons = [];
    q.a.forEach(opt => {
        const btn = document.createElement("button");
        btn.textContent = opt;
        btn.className = "option-btn";
        btn.addEventListener("click", () => onOptionClick(opt, btn));
        optionsContainer.appendChild(btn);
        optionButtons.push(btn);
    });
    scoreDisplay.textContent = "Score: " + score;
}

function onOptionClick(opt, btn) {
    if (answered) return;
    selectedAnswer = opt;
    const all = optionsContainer.querySelectorAll("button");
    all.forEach(b => b.classList.remove("option-selected"));
    if (btn) btn.classList.add("option-selected");
    showConfirm();
}

function showConfirm() {
    if (confirmEl && confirmEl.parentNode) confirmEl.parentNode.removeChild(confirmEl);
    confirmEl = document.createElement("div");
    confirmEl.className = "confirm-box";
    const msg = document.createElement("p");
    msg.textContent = "Are you sure with your answer?";
    const yesBtn = document.createElement("button");
    yesBtn.textContent = "YES";
    yesBtn.className = "confirm-btn yes";
    const noBtn = document.createElement("button");
    noBtn.textContent = "NO";
    noBtn.className = "confirm-btn no";
    confirmEl.appendChild(msg);
    confirmEl.appendChild(yesBtn);
    confirmEl.appendChild(noBtn);
    optionsContainer.appendChild(confirmEl);
    confirmYesBtnEl = yesBtn;
    confirmNoBtnEl = noBtn;
    yesBtn.addEventListener("click", () => confirmYes(yesBtn));
    noBtn.addEventListener("click", () => confirmNo(noBtn));
}

function confirmNo(btn) {
    if (btn) btn.classList.add("confirm-selected");
    if (confirmEl && confirmEl.parentNode) confirmEl.parentNode.removeChild(confirmEl);
    confirmEl = null;
    confirmYesBtnEl = null;
    confirmNoBtnEl = null;
}

function confirmYes(btn) {
    if (answered) return;
    answered = true;
    if (btn) btn.classList.add("confirm-selected");
    if (confirmEl && confirmEl.parentNode) confirmEl.parentNode.removeChild(confirmEl);
    confirmEl = null;
    confirmYesBtnEl = null;

    const correct = questions[current].correct;
    const hasKey = typeof correct === "string" && correct.length > 0;
    let isCorrect = false;

    feedbackEl = document.createElement("div");
    feedbackEl.className = "feedback-box";

    if (hasKey) {
        isCorrect = selectedAnswer === correct;
        if (isCorrect) score += 1;
        try {
            if (isCorrect) {
                correctAudio.currentTime = 0;
                correctAudio.play();
            } else {
                incorrectAudio.currentTime = 0;
                incorrectAudio.play();
            }
        } catch (e) {}
    }

    if (!hasKey) {
        feedbackEl.textContent = "Answer recorded.";
        feedbackEl.className = "feedback-neutral";
    } else {
        feedbackEl.textContent = isCorrect ? "Your answer is correct." : "Your answer is incorrect.";
        feedbackEl.className = isCorrect ? "feedback-correct" : "feedback-incorrect";
    }
    optionsContainer.appendChild(feedbackEl);
    const buttons = optionsContainer.querySelectorAll("button");
    buttons.forEach(b => b.disabled = true);
    nextBtn = document.createElement("button");
    nextBtn.textContent = "Next Question";
    nextBtn.style.marginTop = "10px";
    optionsContainer.appendChild(nextBtn);
    nextBtn.addEventListener("click", () => {
        showLoader();
        setTimeout(() => {
            current += 1;
            renderQuestion();
            hideLoader();
        }, 150);
    });
}

function handleKeyShortcuts(e) {
    if (nameInputEl && startBtnEl && nameInputEl.offsetParent !== null) {
        if (e.key === "Enter") {
            startBtnEl.click();
        }
        return;
    }
    if (confirmEl && confirmEl.offsetParent !== null) {
        if (e.key === "Enter") {
            if (confirmYesBtnEl) confirmYesBtnEl.click();
            return;
        }
        if (e.key === "Escape") {
            if (confirmNoBtnEl) confirmNoBtnEl.click();
            return;
        }
    }
    if (nextBtn && nextBtn.offsetParent !== null) {
        if (e.key === "Enter") {
            nextBtn.click();
            return;
        }
    }
    if (!answered && optionButtons && optionButtons.length > 0) {
        const n = parseInt(e.key, 10);
        if (!isNaN(n) && n >= 1 && n <= optionButtons.length) {
            const idx = n - 1;
            const btn = optionButtons[idx];
            const optText = questions[current].a[idx];
            onOptionClick(optText, btn);
        }
    }
}

showNameForm();

if (backBtn) {
    backBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const href = backBtn.getAttribute("href");
        const ok = window.confirm("Are you sure you want to leave this exam? Your current progress will not be saved.");
        if (ok && href) {
            window.location.href = href;
        }
    });
}

if (nameBadge) {
    nameBadge.style.display = "none";
}

function applyBackground() {
    document.body.style.backgroundImage = "url(../assets/background-images/bg" + bgIndex + ".png)";
}

function updateThemeToggleLabel() {
    const isDark = document.body.classList.contains("dark-mode");
    if (themeToggle) {
        themeToggle.title = isDark ? "Switch to Light" : "Switch to Dark";
        themeToggle.textContent = isDark ? "☀" : "☾";
    }
}

if (bgToggle) {
    bgToggle.addEventListener("click", () => {
        bgIndex = bgIndex % 10 + 1;
        applyBackground();
    });
}

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        updateThemeToggleLabel();
    });
}

applyBackground();
updateThemeToggleLabel();
async function loadExternalQuestions() {
    try {
        const res = await fetch("exam-questions.txt");
        if (res && res.ok) {
            const txt = await res.text();
            const parsed = parseTxtQuestions(txt);
            if (parsed && parsed.length) {
                questions = parsed;
                try {
                    let keyTxt = null;
                    let keyRes = await fetch("answer-key.txt");
                    if (keyRes && keyRes.ok) {
                        keyTxt = await keyRes.text();
                    } else {
                        keyRes = await fetch("exam-questions-answerkey.txt");
                        if (keyRes && keyRes.ok) {
                            keyTxt = await keyRes.text();
                        }
                    }
                    if (keyTxt) applyAnswerKey(questions, keyTxt);
                } catch (_) {}
            }
        }
    } catch (e) {}
}
function parseTxtQuestions(text) {
    // Remove BOM if present
    if (text.charCodeAt(0) === 0xFEFF) {
        text = text.slice(1);
    }
    const lines = text.split(/\r?\n/).map(l => l.trim());
    const qs = [];
    let q = null;
    let opts = [];
    const flush = () => {
        if (q && opts.length) {
            qs.push({ q: q.trim(), a: opts.slice(), correct: null });
        }
        q = null;
        opts = [];
    };
    
    const qRe = /^(\d+)\.\s*(.+)$/;
    const labels = ["A.", "B.", "C.", "D."];

    for (let line of lines) {
        if (!line) continue;
        const qm = line.match(qRe);
        if (qm) {
            flush();
            q = qm[2].trim();
            continue;
        }
        
        // Handle options
        let foundOption = false;
        // Check if the line starts with an option label or contains multiple
        // We look for patterns like "A. text" or " B. text"
        let lineOpts = [];
        let lineHasLabel = false;
        
        labels.forEach((label, idx) => {
            // Label must be at start of line or preceded by whitespace/tab
            let startIdx = line.indexOf(label);
            if (startIdx !== -1) {
                // Check if it's a real label (at start or preceded by space/tab)
                if (startIdx === 0 || /\s/.test(line[startIdx - 1])) {
                    lineHasLabel = true;
                }
            }
        });

        if (lineHasLabel) {
            // Extract options from this line
            let currentLabelIndices = [];
            labels.forEach((label, idx) => {
                let pos = line.indexOf(label);
                if (pos !== -1 && (pos === 0 || /\s/.test(line[pos - 1]))) {
                    currentLabelIndices.push({ label, pos, idx });
                }
            });
            
            // Sort by position
            currentLabelIndices.sort((a, b) => a.pos - b.pos);
            
            for (let i = 0; i < currentLabelIndices.length; i++) {
                let start = currentLabelIndices[i].pos + currentLabelIndices[i].label.length;
                let end = (i + 1 < currentLabelIndices.length) ? currentLabelIndices[i + 1].pos : line.length;
                let optText = line.substring(start, end).trim();
                if (optText) opts.push(optText);
            }
            continue;
        }

        // If it's not a question and not an option, append to current question
        if (q !== null) {
            q += " " + line;
        }
    }
    flush();
    return qs;
}
function applyAnswerKey(qs, keyText) {
    const letters = keyText.split(/\r?\n/).map(l => l.trim().toUpperCase()).filter(Boolean);
    const map = { A: 0, B: 1, C: 2, D: 3 };
    for (let i = 0; i < qs.length && i < letters.length; i++) {
        const idx = map[letters[i]];
        if (idx != null && qs[i].a[idx] != null) {
            qs[i].correct = qs[i].a[idx];
        }
    }
}
document.addEventListener("keydown", handleKeyShortcuts);

function getScoreRecords() {
    try {
        const raw = localStorage.getItem(SCORE_KEY);
        if (!raw) return [];
        const arr = JSON.parse(raw);
        if (Array.isArray(arr)) return arr;
        return [];
    } catch (e) {
        return [];
    }
}

function setScoreRecords(records) {
    try {
        localStorage.setItem(SCORE_KEY, JSON.stringify(records));
    } catch (e) {}
}

function addScoreRecord(name, sc, total) {
    const records = getScoreRecords();
    const pct = total > 0 ? Math.round((sc / total) * 10000) / 100 : 0;
    const rec = {
        name: name || "",
        score: sc,
        total: total,
        percentage: pct,
        datetime: new Date().toISOString()
    };
    records.push(rec);
    setScoreRecords(records);
    return records;
}

function exportToExcel() {
    try {
        const wb = XLSX.utils.book_new();
        const grades = [7, 8, 9, 10];
        
        grades.forEach(g => {
            const key = "g" + g + "_scores";
            const raw = localStorage.getItem(key);
            let records = [];
            if (raw) {
                try {
                    records = JSON.parse(raw);
                } catch (e) {}
            }
            
            // Map records to a flatter format for Excel
            const data = records.map(r => ({
                "Name": r.name,
                "Score": r.score,
                "Total": r.total,
                "Percentage": r.percentage + "%",
                "Date/Time": new Date(r.datetime).toLocaleString()
            }));
            
            const ws = XLSX.utils.json_to_sheet(data);
            XLSX.utils.book_append_sheet(wb, ws, "grade" + g + "-result");
        });
        
        XLSX.writeFile(wb, "examinees-summary-results.xlsx");
    } catch (e) {
        console.error("Excel export failed:", e);
        alert("Failed to export Excel file. Please ensure SheetJS is loaded.");
    }
}

function recordAndOfferDownload() {
    addScoreRecord(studentName, score, questions.length);
    
    const dl = document.createElement("button");
    dl.textContent = "Download Summary Results (Excel)";
    dl.style.marginTop = "12px";
    dl.className = "btn-download"; // Assuming there's a style for it or just button
    dl.addEventListener("click", () => {
        exportToExcel();
    });
    optionsContainer.appendChild(dl);
}
