let questions = [
    {
        q: "Si Jasmine at Ethan, magkasintahan at matagal nang magkaibigan, ay nagdiwang ng kanilang anibersaryo sa isang restaurant. Pagkatapos ng kanilang dinner, nagpunta sila sa apartment ni Ethan, at doon nangyari ang hindi dapat ginawa ng magkasintahan dahil hindi pa sila kasal. Ano ang isyung tinutukoy dito?",
        a: ["Pre-marital sex", "Paninirang puri", "Pang-aabusong sekswal", "Pagkasira ng relasyon ng nagmamahalan"],
        correct: "Pre-marital sex"
    },
    {
        q: "Ang euthanasia ay isang gawain na nagtutulak sa pagpapahintulot na wakasan ang buhay ng isang tao na may malubhang sakit. Alin sa mga sumusunod ang taliwas sa kasagraduhan ng buhay?",
        a: ["Pagtulong sa pagpapagaling ng may sakit", "Pagbibigay ng dignidad sa bawat tao", "Pagwawakas ng buhay ng isang tao ng walang pahintulot", "Pagtulong sa isang tao upang maghilom at magpatuloy sa buhay"],
        correct: "Pagwawakas ng buhay ng isang tao ng walang pahintulot"
    },
    {
        q: "Sa isang proyekto, sinumbong ni Carlos ang paggamit ng mga plastic sa kanilang paaralan. Napansin niyang ang sobrang paggamit ng plastic ay nagdudulot ng mga problema sa kalikasan, tulad ng polusyon. Ano ang isa sa mga isyu na nauugnay sa pangangalaga ng kapaligiran?",
        a: ["Pagtanggal ng mga programang pangkalusugan.", "Pagsasagawa ng mga seminar tungkol sa teknolohiya.", "Pagtulong sa pamahalaan na makapagpatayo ng pabrika.", "Pagtangkilik sa mga natural na materyales at pagbabawas ng plastic."],
        correct: "Pagtangkilik sa mga natural na materyales at pagbabawas ng plastic."
    },
    {
        q: "Si Anzel ay inalok ng isang hindi niya kilalang tao online na magpadala ng mga larawan kapalit ng pera. Ano ang isyu na maituturing sa ganitong sitwasyon?",
        a: ["Plagiarism", "Cybercrime", "Sexual abuse", "Fortune-telling"],
        correct: "Cybercrime"
    },
    {
        q: "Ang pagpapalaganap ng mga malalaswang larawan o bidyo ay nagdudulot ng paglabag sa dignidad ng tao at maaaring magdulot ng masamang impluwensya sa lipunan. Ano ang tawag sa ganitong gawain?",
        a: ["Cyberbullying", "Pornograpiya", "Pang-aabuso", "Prostiusyon"],
        correct: "Pornograpiya"
    },
    {
        q: "Si Ben na 16 na taong gulang, ay nag-upload ng mga pribadong larawan ng kanyang sarili sa isang website kapalit ng bayad mula sa mga subscriber. Ginagawa niya ito upang kumita ng pera habang nag-aaral. Ano ang tumutukoy sa mahahalay na palabas, larawan o babasahin na may layunin na pukawin ang sekswal na pagnanasa ng tao?",
        a: ["Sekswalidad", "Pornograpiya", "Prostitusyon", "Senswalidad"],
        correct: "Pornograpiya"
    },
    {
        q: "Sa pagdami ng mga online platforms at social media, mas naging madali ang pagkuha sa mga impormasyon. Alin sa mga ito ang paggalang sa dignidad at sekswalidad ng tao?",
        a: ["Pagtuturo ng wastong pagpapahalaga sa sekswalidad", "Pagpapalaganap ng mga malalaswang larawan at palabas", "Paggalang sa desisyon ng iba tungkol sa kanilang pagkatao", "Pagkilala sa karapatan ng tao na pumili ng kaniyang kasarian"],
        correct: "Pagtuturo ng wastong pagpapahalaga sa sekswalidad"
    },
    {
        q: "Si Jane, isang empleyado sa isang kompanya, ay nakapansin ng mga depektibong produkto na ipinagbibili nang hindi nire-report. Nagdesisyon siyang magsumbong sa mga awtoridad upang protektahan ang mga konsyumer, kahit na maaaring mawalan siya ng trabaho. Anong akto sa isyu ng katotohanan ang pagsisiwalat mula sa tao na karaniwan ay empleyado ng isang kompanya?",
        a: ["Theft", "Piracy", "Plagiarism", "Whistleblowing"],
        correct: "Whistleblowing"
    },
    {
        q: "Ang aborsyon ay isang kontrobersyal na usapin sa lipunan. Bakit ito itinuturing na taliwas sa kasagraduhan ng buhay?",
        a: ["Nagiging sanhi ito ng paglaganap ng kahirapan", "Nilalabag nito ang karapatan ng tao na ipanganak", "Lumilikha ito ng hindi pagkakaunawaan sa komunidad", "Pinipigilan nito ang magulang na magtaguyod ng pamilya"],
        correct: "Nilalabag nito ang karapatan ng tao na ipanganak"
    },
    {
        q: "Maraming kaso ng extrajudicial killings (EJK) ang naitala sa nakaraang taon, ang karamihan sa mga pagtay ay nauugnay sa pinababawal na droga. Bakit sinasabing salungat ito sa kasagraduhan ng buhay?",
        a: ["Pinapalakas nito ang pagkakaisa ng mga mamamayan sa komunidad", "Ipinapakita nito ang kawalang disiplina ng mga mamamayan sa batas", "Hindi ito nagbibigay ng tamang proseso para mapatunayan ang kasalanan ng tao", "Nagdudulot ito ng takot at kawalan ng tiwala ng mga tao, mahirap man o mayaman, sa pamahalaan"],
        correct: "Hindi ito nagbibigay ng tamang proseso para mapatunayan ang kasalanan ng tao"
    },
    {
        q: "Sa isang pahayag, binigyang-diin ng isang relihiyosong grupo na ang pagpapalaglag (abortion) ay isang paglabag sa kasagraduhan ng buhay. Ano ang moral na batayan ng ganitong pananaw?",
        a: ["Ang buhay ay banal at galing sa Diyos.", "Ang lahat ng tao ay may karapatan sa kalayaan.", "Ang pagpapalaglag ay labag sa batas ng lipunan.", "Ang mga magulang ay dapat na maging responsable."],
        correct: "Ang buhay ay banal at galing sa Diyos."
    },
    {
        q: "Si Mayor Cruz ay napansin ang pagbaba ng tiwala ng mga tao sa kaniyang pamumuno dahil sa maling paggamit ng pondo ng bayan. Ano ang pangunahing epekto ng hindi wastong paggamit ng pondo ng bayan sa lipunan?",
        a: ["Pagpapabuti ng ekonomiya ng bansa", "Pagkakaroon ng malinis na kapaligiran", "Pagkakaroon ng tiwala ng mamamayan sa pamahalaan", "Pagkakaroon ng kahirapan at kawalan ng serbisyo publiko"],
        correct: "Pagkakaroon ng kahirapan at kawalan ng serbisyo publiko"
    },
    {
        q: "Si Mayor Carlos ay ginamit ang pondo ng bayan upang magpatayo ng sariling resort sa halip na ayusin ang sirang daan sa kanilang lugar. Paano mo ilalarawan ang ginawa ni Mayor Carlos?",
        a: ["Kawalan ng malasakit sa tao", "Pag-abuso sa kapangyarihan", "Maayos na paggamit ng yaman ng bayan", "Makatarungan sapagkat siya ang namumuno"],
        correct: "Pag-abuso sa kapangyarihan"
    },
    {
        q: "Maraming tao ang napipilitang pumasok sa prostitusyon dahil sa mga sitwasyong mahirap pagtagumpayan, kaya’t may mga aspeto ng paglabag sa dignidad ng tao at pagkakaroon ng hindi makatarungang kalagayan. Alin sa mga sumusunod ang nagpapatunay na ang prostitusyon ay mapagsamantala?",
        a: ["Nakapagbibigay aliw ito sa mga tao", "Nakatutulong ito sa mga nangangailangan", "Nakapagbibigay ligaya sa mga taong may gusto nito", "Ang taong bumibili ay pinakikinabangan ang kahinaan ng taong sangkot dito"],
        correct: "Ang taong bumibili ay pinakikinabangan ang kahinaan ng taong sangkot dito"
    },
    {
        q: "Sa kasalukuyang panahon, ang madaling pag-access sa internet at mga online platforms ay nagdudulot ng pagbabago sa mga personal na relasyon, mga pag-uugali, at mga pananaw sa sekswalidad. Ano ang epekto ng pornograpiya sa tao?",
        a: ["Maaaring magbago ang asal ng tao at pananaw sa sekswalidad.", "Magiging responsable patungkol sa gawaing sekswal", "Magkakaroon ng mas maraming kaibigan", "Makapaghihikayat ng kapwa upang manood ng malalaswang palabras"],
        correct: "Maaaring magbago ang asal ng tao at pananaw sa sekswalidad."
    },
    {
        q: "Nagbahagi si Kyla ng isang kwento sa social media na sinasabi niyang totoong nangyari sa kanya, ngunit ito pala ay kathang-isip lamang upang makakuha ng simpatiya mula sa ibang tao. Sa sitwasyon ni Kyla alin sa mga sumsunod ang isyung kaugnay sa ginagawa niya?",
        a: ["Plagiarism", "Panghuhula o fortune telling", "Pagsasabi ng totoo para sa kabutihan", "Kawalan ng paggalang sa katotohanan"],
        correct: "Kawalan ng paggalang sa katotohanan"
    },
    {
        q: "Si Larafe ay nagkaroon ng pagkakataon na maging tagapagsalita sa isang programa sa kanilang paaralan. Habang naghahanda ng kanyang talumpati, napansin niya na ang karamihan sa mga impormasyong nakuha niya mula sa internet ay walang sapat na ebidensiya o hindi kapanipaniwala. Ano ang kilos na tamang gawin ni Larafe upang maitaguyod ang katotohanan?",
        a: ["Iwasan ang pagsasalita at huwag nang maghanda ng talimpati", "Gamitin ang mga nakuha niyang impormasyon kahit walang ebidensiya.", "Gumawa ng sarili impormasyon para mapunan ang kakulangan na datos.", "Maghanap ng mas maasahang mapagkukunan ng impormasyon bago magsalita."],
        correct: "Maghanap ng mas maasahang mapagkukunan ng impormasyon bago magsalita."
    },
    {
        q: "Ang inyong paaralan ay naglunsad ng proyekto para sa pagtatanim ng puno upang mapangalagaan ang kalikasan. Ano ang pinakamainam na gawin upang makatulong sa proyekto?",
        a: ["Maghintay na lang na matapos ang proyekto ng iba.", "Iwanan ang proyekto dahil abala ito sa oras ng pag-aaral.", "Himukin ang mga kamag-aral na sumali at magtanim ng puno.", "Magtanim ng puno sa bahay at huwag nang makisali sa proyekto."],
        correct: "Himukin ang mga kamag-aral na sumali at magtanim ng puno."
    },
    {
        q: "Si Carlos, isang lider ng komunidad, ay napansin na ang kanilang lokal na pamahalaan ay hindi maayos na nagpapatupad ng mga patakaran sa pangangalaga ng kalikasan, tulad ng tamang pagtatapon ng basura at mga programa sa reforestation. Ano ang nararapat na hakbang na maaari niyang gawin upang matulungan ang komunidad na mapabuti ang pangangalaga sa kalikasan?",
        a: ["Maghintay na lamang na kumilos ang mga awtoridad sa mga isyu sa kalikasan.", "Magtayo ng negosyo na may kinalaman sa pangangalaga sa kalikasan upang kumita.", "Magtago ng mga impormasyon tungkol sa mga problema sa kalikasan upang hindi mag-alala ang mga tao.", "Magdaos ng isang pagpupulong upang hikayatin ang mga miyembro ng komunidad na sumunod sa mga patakaran."],
        correct: "Magdaos ng isang pagpupulong upang hikayatin ang mga miyembro ng komunidad na sumunod sa mga patakaran."
    },
    {
        q: "Si Ana ay laging naririnig na tinutukso ang kanyang kaibigan tungkol sa hitsura nito. Alam ni Ana na mali ito at gusto niyang itama ang kanyang kaibigan. Paano mo ipapakita ang paggalang sa dignidad ng tao sa sitwasyong ito?",
        a: ["Sasabihin kay Ana na magtago at huwag makialam.", "Hahayaan na lang si Ana at hindi na magsasalita tungkol sa isyu.", "Sasabihin kay Ana na huwag makialam at magpatawad sa kaibigan.", "Makikipagtulungan kay Ana upang ipagtanggol ang kanyang kaibigan at magsalita laban sa pang-aapi."],
        correct: "Makikipagtulungan kay Ana upang ipagtanggol ang kanyang kaibigan at magsalita laban sa pang-aapi."
    },
    {
        q: "Nakita ni Bea ang isang kaklase niyang nagsasagawa ng hindi tamang pag-uugali sa isang bata sa kanilang komunidad. Ano ang pinakamahalagang hakbang na dapat gawin ni Bea upang maprotektahan ang dignidad ng bata at mapigilan ang pang-aabuso?",
        a: ["Tiyaking hindi siya makikialam at hayaan na lamang na mangyari ito.", "Magtago ng mga ebidensya ng pangyayari para sa kanyang personal na gamit.", "Ipagbigay-alam sa guro at mga awtoridad ang insedente upang magawan ng tamang asksyon.", "I-report ang insedente sa social media upang makakuha ng mga opinyon mula sa ibang tao."],
        correct: "Ipagbigay-alam sa guro at mga awtoridad ang insedente upang magawan ng tamang asksyon."
    },
    {
        q: "Si Jun ay madalas magbahagi ng balita mula sa social media na hindi niya sinisiguradong totoo. Isang araw, nakatanggap siya ng reklamo mula sa mga kaibigan dahil sa maling impormasyon na ikinakalat niya. Ano ang tamang hakbang na dapat niyang gawin?",
        a: ["Mag-sorry at itama ang maling impormasyon.", "Itago ang post at hiwag nang magbigay ng pahayag.", "I-block ang mga nagreklamo at huwag magpaliwanag.", "Patuloy na magbahagi ng balita nang hindi sinusuri ang nilalaman ng balita."],
        correct: "Mag-sorry at itama ang maling impormasyon."
    },
    {
        q: "Si Marco ay nakatanggap ng mensahe mula sa isang kaibigan na may mga paratang laban sa isang guro. Hindi pa na-verify ni Marco kung tama ang mga paratang, ngunit nais niyang ipaalam sa iba. Ano ang nararapat niyang gawin bago kumalat ang balita?",
        a: ["Ipagpatuloy ang pagpapasa ng menshe sa iba.", "Ipagpaliban na lang ito at huwag na lang pansinin.", "I-share ito sa social media upang malaman ng marami.", "I-verify muna ang impormasyon sa pamamagitan ng ibang mapagkakatiwalaang tao o sanggunian."],
        correct: "I-verify muna ang impormasyon sa pamamagitan ng ibang mapagkakatiwalaang tao o sanggunian."
    },
    {
        q: "Habang ginagawa ni Anna ang kanyang research paper, nahirapan siyang humanap ng tamang datos para sa isang bahagi ng kanyang proyekto. Sa halip na maghanap pa, naisip niyang baguhin ang datos upang mapunan ang kakulangan. Ano ang dapat gawin ni Anna upang maipakita ang paggalang sa katotohanan?",
        a: ["Ituloy ang gawaing pagbabago sa datos upang matapos ang proyekto.", "Gumamit ng mga datos mula sa ibang proyekto kahit walang pahintulot ng may-akda.", "Palitan ang topic ng kanyang research upang hindi na kailangang magsaliksik ng mahirap na datos.", "Ipaalam sa guro ang kanyang suliranin at humingi ng karagdagang oras upang mahanap ang tamang datos."],
        correct: "Ipaalam sa guro ang kanyang suliranin at humingi ng karagdagang oras upang mahanap ang tamang datos."
    },
    {
        q: "Sa kanilang klase, napansin ni Sarah na ang ilang kaklase niya ay nangongopya sa pagsusulit. Alam niyang hindi tama ang kanilang ginagawa, ngunit nahihirapan siyang magdesisyon kung ano ang dapat gawin. Ano ang pinakamainam na hakbang na maaari niyang gawin upang maisulong ang pagiging tapat at mapanagutan?",
        a: ["Sumali sa pandaraya upang hindi siya maiba sa grupo.", "Mag-report agad sa guro nang walang paunang babala sa mga kaklase.", "Huwag na lamang pansinin ang ginagawa ng mga kaklase upang iwasan ang gulo.", "Sabihin sa mga kaklase na ang pandaraya ay mali at ipaliwanag ang kahalagahan ng katapatan."],
        correct: "Sabihin sa mga kaklase na ang pandaraya ay mali at ipaliwanag ang kahalagahan ng katapatan."
    },
    {
        q: "Habang gumagawa ng group project sina Mark at ang kanyang mga kaklase, napansin niya na ang isang miyembro ng grupo ay gumagamit ng pekeng datos para mabilis nilang matapos ang kanilang proyekto. Ano ang dapat gawin ni Mark upang maisabuhay ang paggalang sa katotohanan?",
        a: ["Pabayaan na lamang ito dahil matatapos naman ang proyekto.", "Sabihin sa miyembro na palitan ang datos ng totoo bago ito ipasa.", "Isumbong agad sa guro nang hindi sinasabi sa grupo ang problema.", "Ayusin na lamang ni Mark ang datos nang mag-isa at huwag nang magsabi sa grupo."],
        correct: "Sabihin sa miyembro na palitan ang datos ng totoo bago ito ipasa."
    },
    {
        q: "Napansin ni Gina na maraming maling impormasyon ang kumakalat sa kanilang group chat tungkol sa isang lokal na proyekto sa barangay. Ano ang nararapat niyang gawin upang maipakita ang paggalang sa katotohanan?",
        a: ["Magbigay ng opinyon na makadaragdag sa usapan.", "Manahimik na lamang upang iwasan ang diskusyon.", "Ibahagi ang maling impormasyon upang makita ng iba.", "Maghanap ng tamang impormasyon at itama ang maling balita."],
        correct: "Maghanap ng tamang impormasyon at itama ang maling balita."
    },
    {
        q: "Sa isang ospital, nagdesisyon ang pamilya ng isang pasyente na alisin na ang life support dahil sa kawalan ng pag-asang gumaling ito ayon sa mga doktor. Bagamat legal ang desisyon, nagkaroon ng debate sa moralidad nito sa kanilang komunidad. Paano masusuri ang desisyon ng pamilya batay sa kasagraduhan ng buhay?",
        a: ["Tama, dahil karapatan ng pamilya na magdesisyon para sa pasyente.", "Mali, dahil ang buhay ay mahalagang kaloob na dapat protektahan anuman ang kalagayan.", "Tama, dahil isinasaalang-alang nito ang dignidad ng pasyente at para mawala ang pagdurusa.", "Ang desisyon ay nakadepende sa paniniwala ng pamilya at hindi maaaring husgahan ng iba."],
        correct: "Mali, dahil ang buhay ay mahalagang kaloob na dapat protektahan anuman ang kalagayan."
    },
    {
        q: "Ang mga mag-aaral sa ika-10 baitang ay tinatalakay ang isyu ng iligal na pagtotroso sa kanilang araling panlipunan. Napansin ni Carla na bagama’t alam ng kanilang barangay opisyal ang tungkol dito, wala itong ginagawang aksyon. Paano mailalarawan ang sitwasyon ng barangay opisyal?",
        a: ["Pagbibigay ng suporta sa kabuhayan ng mga residente.", "Pagpapakita ng neutralidad sa mga isyung pampamayanan.", "Pagkakaroon ng kapabayaan sa tungkulin at kapangyarihan.", "Tamang paggamit ng kapangyarihan para sa ikabubuti ng lahat."],
        correct: "Pagkakaroon ng kapabayaan sa tungkulin at kapangyarihan."
    },
    {
        q: "Ang isang grupo ng mga mag-aaral ay naatasang maglinis ng isang parke bilang bahagi ng kanilang proyekto. Napansin nila na ang kanilang lider ay nagbigay ng utos na itapon na lamang sa ilog ang mga nakalap na basura upang mabilis na matapos ang trabaho. Ano ang pinakamahusay na gawin ng grupo sa ganitong sitwasyon?",
        a: ["Sundin ang lider upang hindi na magkaroon ng argumento.", "Tawagan ang kanilang guro upang ipaalam ang sitwasyon.", "Mag-isip ng alternatibong paraan para maayos na ma-dispose ang basura.", "Huwag makialam at hayaan ang lider ang magdesisyon."],
        correct: "Mag-isip ng alternatibong paraan para maayos na ma-dispose ang basura."
    },
    {
        q: "Isang lungsod ang nagpatupad ng proyekto para sa pagtatanim ng mga puno, ngunit napag-alaman na ginagamit ito ng ilang opisyal upang kumuha ng sobrang pondo para sa kanilang pansariling interes. Ano ang epekto ng ganitong kilos sa kaayusan, kaunlaran, at kabutihang panlahat?",
        a: ["Nagpapakita ito ng dedikasyon ng mga opisyal sa pangangalaga sa kalikasan.", "Nakakatulong ito upang maipakita ang halaga ng kalikasan sa mga residente.", "Nagdudulot ito ng kawalan ng tiwala sa pamahalaan at sa layunin ng proyekto.", "Nagpapalakas ito ng ugnayan ng pamahalaan at ng mga ordinaryong mamamayan."],
        correct: "Nagdudulot ito ng kawalan ng tiwala sa pamahalaan at sa layunin ng proyekto."
    },
    {
        q: "Sa isang munisipyo, nalaman ng mga residente na hindi tamang naipapamahagi ang pondo para sa proyekto ng pangangalaga sa kapaligiran. Sa halip, napunta ito sa mga proyektong pansarili ng ilang opisyal. Ano ang tamang pagsusuri sa isyung ito?",
        a: ["Dapat tanggapin ng mga residente ang sitwasyon dahil may ibang proyekto naman.", "Ang problema ay walang epekto dahil hindi naman nagreklamo ang ibang residente.", "Mas mahalaga ang mga personal na proyekto kaysa sa pangangalaga ng kapaligiran.", "Ang maling paggamit ng pondo ay nagpapakita ng kawalan ng pananagutan ng mga opisyal."],
        correct: "Ang maling paggamit ng pondo ay nagpapakita ng kawalan ng pananagutan ng mga opisyal."
    },
    {
        q: "Sa isang programa ng gobyerno, inilunsad ang kampanya laban sa diskriminasyon batay sa kasarian at dignidad. Habang nagaganap ang programa, napansin ni Liza na may mga patalastas na naglalaman ng mapanirang representasyon ng kababaihan. Ano ang pinakanaaangkop na pagsusuri sa sitwasyon?",
        a: ["Ang mga patalastas ay paraan ng pagpapakita ng suporta sa kampanya.", "Ang mga patalastas ay nagpapakita ng kontradiksyon sa layunin ng kampanya.", "Dapat pabayaan na lang ang mga patalastas dahil hindi ito nakakaapekto sa programa.", "Hindi mahalaga ang mga patalastas dahil ang kampanya ay nakatuon sa diskriminasyon."],
        correct: "Ang mga patalastas ay nagpapakita ng kontradiksyon sa layunin ng kampanya."
    },
    {
        q: "Si Clariza, isang mag-aaral, ay nakakakita ng mga kasamahan niyang kabataan na hindi nila pinapansin ang mga isyung may kinalamang sa child protection at human trafficking. Paano niya masusuri na ang tamang hakbang ay pagpapalaganap ng edukasyon at pagbibigay pansin sa mga isyung ito?",
        a: ["Iwasan ang mga isyung ito at magfocus na lamang sa mga personal na aktibidad at proyekto.", "Dapat siyang maging tahimik na lamang at maghihintay na lang ng pagkakataon para sa ibang tao na magbigay ng solusyon.", "Magbigay ng kritisismo sa mga hindi nakakaalam ng isyung ito sa halip na magtulungan upang magpalaganap ang tamang kaalaman.", "Dapat siyang magbigay ng kaalaman at magsagawa ng mga aktibidad na magtutok sa mga isyung io, tulad ng mga seminar o mga outreach programs, upang magbigay kaalaman sa mga Kabataan at komunidad."],
        correct: "Dapat siyang magay ng kaalaman at magsagawa ng mga aktibidad na magtutok sa mga isyung ito, tulad ng mga seminar o mga outreach programs, upang magbigay kaalaman sa mga Kabataan at komunidad."
    },
    {
        q: "Sa klase ni Ginoong Sandoval, tinalakay ang tungkol sa intelekwal na pagnanakaw o intellectual piracy. Binanggit ni Kimmie na nakakuha siya ng libreng pelikula online na hindi niya binabayan dahin sinabi ng kaibigan niya na okay lang daw ito basta hindi ibebenta. Ano ang pinakamainam na posisyon tungkol sa ganitong isyu?",
        a: ["Dapat hikayatin pa ni Kimmie ang iba na magdownload para makatipid.", "Walang mal isa ginawa ni Kimmie dahil uso naman ang ganitong gawain sa panahon ngayon.", "Tama ang ginagawa ni Kimmie dahil hindi naman niya ginamit ang pelikula sa Negosyo.", "Mali ang ginawa ni Kimmie dahil ang pagkuha ng materyales na hindi pinahihintulutan ay isang anyo ng intellectual piracy."],
        correct: "Mali ang ginawa ni Kimmie dahil ang pagkuha ng materyales na hindi pinahihintulutan ay isang anyo ng intellectual piracy."
    },
    {
        q: "May panukalang batas na naglalayong gawing legal ang euthanasia o mercy killing sa isang bansa. Ipinakita sa iyo ang iba't ibang opinyon mula sa mga eksperto, relihiyosong lider, at mga doktor tungkol sa usaping ito. Bilang mag-aaral, paano mo masusuri ang panukalang ito batay sa kasagraduhan ng buhay?",
        a: ["Suportahan ang desisyon ng karamihan dahil ito ang praktikal na solusyon.", "Tanggapin ang panukalang batas dahil layunin nitong bawasan ang pagdurusa.", "Timbangin ang mga argumento mula sa iba't ibang pananaw upang makabuo ng opinion.", "Tanggihan ang panukalang batas dahil salungat ito sa likas na karapatan ng tao na mabuhay."],
        correct: "Tanggihan ang panukalang batas dahil salungat ito sa likas na karapatan ng tao na mabuhay."
    },
    {
        q: "Isang malapit na kaibigan ang nagbukas ng kanyang plano na sumailalim sa pagpapalaglag (aborsyon) dahil sa hindi pa siya handang magkaanak. Anong paninindigan ang pinakamainam na ipayo mo sa kanya batay sa kasagraduhan ng buhay?",
        a: ["Iwasan ang pakialaman ang kanyang desisyon dahil ito ay personal na isyu.", "Suportahan siya dahil ito ang sa tingin niya ang tama para sa kanyang sitwasyon.", "Hilingin sa kanya na kausapin ang iba pang tao upang makakuha ng suporta para sa kanyang desisyon.", "Ipaliwanag sa kanya na ang pagpapalaglag ay salungat sa kasagraduhan ng buhay at magbigay ng alternatibong solusyon."],
        correct: "Ipaliwanag sa kanya na ang pagpapalaglag ay salungat sa kasagraduhan ng buhay at magbigay ng alternatibong solusyon."
    },
    {
        q: "Ang isang lokal na pamahalaan ay nagplano ng isang proyekto na magbibigay ng malaking benepisyo sa ekonomiya ng bayan, ngunit may posibilidad itong makasira sa kalikasan at magdulot ng pagkalbo ng kagubatan. Ano ang pinakamainam na hakbang na dapat gawin upang mapanatili ang balanseng pag-unlad at pangangalaga sa kalikasan?",
        a: ["Magpatuloy sa proyekto nang walang pagbabago.", "Itigil ang proyekto upang maiwasan ang anumang epekto sa kalikasan.", "Ulitin ang proyekto upang maisama ang mga hakbang na magpoprotekta sa kalikasan.", "Magbigay ng mga insentibo sa lahat ng mga tao upang hindi sila magprotesta laban sa proyekto."],
        correct: "Ulitin ang proyekto upang maisama ang mga hakbang na magpoprotekta sa kalikasan."
    },
    {
        q: "Sa isang bayan, may proyekto ang lokal na pamahalaan na naglalayong magtanim ng mga puno upang labanan ang epekto ng pagbabago ng klima. Ngunit, may mga residente na hindi pabor sa proyekto dahil sa takot na mawalan ng mga kabuhayan sa pagsasaka. Ano ang pinakamainam na hakbang na maaaring gawin ng pamahalaan upang matugunan ang isyung ito?",
        a: ["Ipatupad ang proyekto at magbigay ng multa sa mga tumututol.", "Magpatuloy sa proyekto nang walang konsultasyon sa mga residente.", "Itigil ang proyekto upang mapanatili ang mga kabuhayan ng mga residente.", "Isama ang mga residente sa pagpaplano ng proyekto at magbigay ng alternatibong kabuhayan."],
        correct: "Isama ang mga residente sa pagpaplano ng proyekto at magbigay ng alternatibong kabuhayan."
    },
    {
        q: "Si Maria ay may isang kaklase na nagsabing hindi siya naniniwala na may karapatan ang lahat ng tao sa pantay-pantay na paggalang. Ano ang pinakamainam na hakbang na maaari niyang gawin upang matulungan ang kanyang kaklase na maunawaan ang kahalagahan ng paggalang sa dignidad ng bawat tao?",
        a: ["I-ignore na lang siya at magpatuloy sa araw-araw nang walang aksyon.", "Sabihin sa kanya na mali ang kanyang opinyon at wala nang ibang dapat pag-usapan.", "Makipag-argumento nang magaspang upang mapilitang baguhin ang kanyang pananaw.", "Pakinggan ang kanyang opinyon at ipaliwanag kung bakit mahalaga ang paggalang sa dignidad ng tao."],
        correct: "Pakinggan ang kanyang opinyon at ipaliwanag kung bakit mahalaga ang paggalang sa dignidad ng tao."
    },
    {
        q: "Sa isang talakayan tungkol sa child protection, sinabi ni Addie na mahalagang maunawaan ng mga Kabataan ang kanilang mga Karapatan upang maiwasa ang pang-aabuso. Gayunpaman, may nagtanong kung paano ito maisulong kung may mga lugar na kulang sa edukasyon tungkol dito. Ano ang tamang posisyon upang tugunan ang isyung ito?",
        a: ["Maghintay na lamang sa mga institusyon na maglaan ng tulong para sa ganitong isyu.", "Limitahan ang diskusyon tungkol saisyung ito sa mga lugar na may maayos na Sistema sa edukasyon.", "Maglunsad ng isang social media campaign na nakatuon lamang sa mga lugar na may sapat na kaalaman sa child protection.", "Magbigay ng accessible na mga resources tulad ng posters at leaflets sa mga paaralan upang ipalaganap ang kaalaman tungkol sa child protection."],
        correct: "Magbigay ng accessible na mga resources tulad ng posters at leaflets sa mga paaralan upang ipalaganap ang kaalaman tungkol sa child protection."
    },
    {
        q: "Si Paulo ay nagsagawa ng isang proyekto tungkol sa mga proyekto ng sexual abuse sa mga Kabataan. Sa kanyang pagsasaliksik, nakatagpo siya ng ilang artikulo na naglalaman ng hindi totoo o hindi napatunayan na impormasyon. Sa pag-aayos ng kanyang proyekto, ano ang pinakamahalagang hakbang na dapat gawin ni Paulo upang tiyakin na ang kanyang proyekto ay makatarungan at wasto?",
        a: ["Gumamit ng mga artikulo at itago na lang ang hindi tiyak na impormasyon.", "Gamitin ang mga artikulo kahit hindi napatunayan upang mapabilis ang paggawa ng proyekto. ", "Iwasan ang mga artikulo na walang sapat na basehan at maghanap ng mga maasahang pagkukunan.", "Kopyahin na lang ang mga artikulo at magbigay ng kredito sa mga ito nang hindi na kinokonsidera ang katotohanan."],
        correct: "Iwasan ang mga artikulo na walang sapat na basehan at maghanap ng mga maasahang pagkukunan."
    },
    {
        q: "Si Rafael, bilang isang lider ng isang organisasyon, ay nakatanggap ng dalawang ulat tungkol sa kalikasan mula sa dalawang miyembro ng kanyang grupo. Ang isang ulat ay nagsasaad ng positibong epekto ng isang proyekto, habang ang isa naman ay nagsasabing may negatibong epekto ito sa kalikasan. Ano ang pinakamainam na hakbang na dapat gawin ni Rafael upang matiyak ang katotohanan ng mga ulat?",
        a: ["Paniwalaan ang negatibong ulat at itigil na ang proyekto.", "Paniwalaan ang positibong ulat at isagawa ang mga rekomendasyon nito.", "I-ignore ang dalawang ulat at magpatuloy na lang sa proyekto nang walang pagsusuri.", "Surin at ihambing ang parehong ulat gamit ang mga mapagkakatiwalaang impormasyon at eksperto bago magdesisyon."],
        correct: "Surin at ihambing ang parehong ulat gamit ang mga mapagkakatiwalaang impormasyon at eksperto bago magdesisyon."
    },
    {
        q: "Si Luis ay nakakita ng isang viral post na naglalaman ng pekeng impormasyon tungkol sa kalusugan. Ano ang pinakamainam na desisyon na dapat niyang gawin upang suriin ang pagiging totoo ng post?",
        a: ["I-ignore na lang ang post at huwag nang makialam.", "I-like ang post dahil ito ay may maraming likes at shares.", "I-share ang post upang makilala siya bilang may malasakit sa kalusugan.", "I-verify ang impormasyon gamit ang mga mapagkakatiwalaang pinagkukunan bago magbigay ng opinyon."],
        correct: "I-verify ang impormasyon gamit ang mga mapagkakatiwalaang pinagkukunan bago magbigay ng opinyon."
    },
    {
        q: "Ang pagmamahal sa buhay ay maipapakita sa iba't ibang paraan, tulad ng paggamit ng sining, pagsulat, at aktibong pakikilahok sa mga gawain na nagpapahalaga sa kasagraduhan ng buhay. Paano mo maipapakita ang iyong paninindigan sa pagmamahal sa buhay sa pamamagitan ng paglikha ng isang proyekto?",
        a: ["Magsulat ng isang sanaysay tungkol sa kahalagahan ng buhay.", "Mag-organisa ng isang seminar tungkol sa tamang pagtatapon ng basura.", "Gumawa ng isang video na nagpapakita ng masamang epekto ng maling pagtatapon ng basura.", "Magsagawa ng isang kampanya na naghihikayat sa mga tao na magkaroon ng mas malalim na pagpapahalaga sa kalikasan."],
        correct: "Magsulat ng isang sanaysay tungkol sa kahalagahan ng buhay."
    },
    {
        q: "Si Robinson ay isang aktibong miyembro ng kanilang komunidad at nais niyang magsalita tungkol sa mga isyung may kaugnayan sa mga gawaing taliwas sa kasagraduhan ng buhay, tulad ng aborsyon at euthanasia. Gamit ang kanyang kakayahan, ano ang pinakamainam na proyekto na buuin upang maipahayag ang kanyang pananaw tungkol sa mga gawaing ito na makapagbibigay ng positibong epekto at makahikayat ng iba na makilahok sa usapin?",
        a: ["Magsagawa ng isang petisyon upang ipagbawal ang aborsyon at euthanasia sa kanilang komunidad.", "Maglunsad ng isang art exhibit na naglalarawan ng mga epekto ng aborsyon at euthanasia sa buhay ng tao upang mapukaw ang interes ng komunidad.", "Magdaos ng isang seminar kung saan tatalakayin ang mga legal na aspeto ng aborsyon at euthanasia upang malaman ng mga tao ang kanilang mga karapatan.", "Mag-organisa ng isang talakayan o forum upang maipahayag ang kanyang opinyon, makinig sa iba pang mga pananaw, at magbigay ng solusyon na nakabatay sa moralidad at kasagraduhan ng buhay."],
        correct: "Mag-organisa ng isang talakayan o forum upang maipahayag ang kanyang opinyon, makinig sa iba pang mga pananaw, at magbigay ng solusyon na nakabatay sa moralidad at kasagraduhan ng buhay."
    },
    {
        q: "Sa isang komunidad, maraming isyu na nauugnay sa maling paggamit ng kapangyarihan ng mga lider at kapabayaan sa pangangalaga sa kalikasan. Nais ng isang grupo ng kabataan na maglunsad ng isang proyekto upang malutas ang mga problemang ito. Batay sa mga isyung napag-alaman , anong proyekto ang maaaring simulan ng grupo upang matugunan ang mga isyung ito at magkaroon ng malaking epekto sa komunidad.",
        a: ["Maglunsad ng isang community clean-up drive upang ipakita ang kanilang pagmamalasakit sa kalikasan at paghikayat sa iba.", "Maglunsad ng isang art exhibit na magpapakita ng mga epekto ng hindi tamang paggamit ng kapangyarihan at pangangalaga sa kalikasan.", "Mag-organisa ng isang forum na magtatalakay ng mga epekto ng maling paggamit ng kapangyarihan at pagpapabaya sa kalikasan, at magbigay ng mga solusyon.", "Magdaos ng isang seminar na magtuturo sa mga tao kung paano mag-report ng mga isyung kaugnay sa kapangyarihan at pangangalaga sa kalikasan sa mga awtoridad."],
        correct: "Mag-organisa ng isang forum na magtatalakay ng mga epekto ng maling paggamit ng kapangyarihan at pagpapabaya sa kalikasan, at magbigay ng mga solusyon."
    },
    {
        q: "Bilang isang lider ng kanilang klase, si Mylene ay nagnanais na itaguyod ang pagiging tapat at mapanagutan sa kanilang komunidad sa pamamagitan ng isang proyekto. Nais niyang magtulungan ang mga kabataan upang maiwasan ang pagpapakalat ng maling impormasyon. Dahil mulat si Mylene sa mga isyung tungkol sa kawalan ng paggalang sa katotohanan, ano ang magiging pinakaepektibong proyekto na maaari niyang gawin upang magsimula ng isang kilusan laban sa fake news at maling impormasyon?",
        a: ["Magdaos ng isang debate tungkol sa mga epekto ng maling impormasyon at fake news sa komunidad.", "Mag-organisa ng isang contest ng mga art work na may temang \"Tapat na Pagpapakalat ng Impormasyon\".", "Maglunsad ng isang kampanya sa paaralan na magbibigay ng mga workshop at seminar kung paano suriin ang mga pinagkukunan ng impormasyon.", "Gumawa ng isang series ng mga public service announcement (PSA) na magtuturo sa mga kabataan kung paano mag-check ng facts bago maniwala sa isang balita."],
        correct: "Gumawa ng isang series ng mga public service announcement (PSA) na magtuturo sa mga kabataan kung paano mag-check ng facts bago maniwala sa isang balita."
    },
    {
        q: "Upang mapataas ang kamalayan ng mga kabataan tungkol sa tamang paggamit ng mga likha at intellectual property, nagpasya si Angelo na maglunsad ng isang proyekto sa paaralan. Paano niya bubuuin ang isang programa na makakatulong upang maprotektahan ang mga likha ng mga estudyante at matutunan nilang magbigay galang sa karapatang-ari?",
        a: ["Magdaos ng isang sports fest na may temang \"Copyright Awareness\".", "Gumawa ng isang documentary film tungkol sa mga sikat na kaso ng copyright infringement sa bansa.", "Maglunsad ng isang online survey upang malaman ang mga kaalaman ng mga estudyante tungkol sa copyright.", "Magtakda ng isang araw ng \"Intellectual Property Awareness\" kung saan tuturuan ang mga estudyante kung paano magsimula ng kanilang sariling copyright-protected na proyekto."],
        correct: "Gumawa ng isang documentary film tungkol sa mga sikat na kaso ng copyright infringement sa bansa."
    },
    {
        q: "Natutunan ni Celso na ang mga batas ukol sa intellectual property at nakaramdam ng responsibilidad na ipaliwanag ito sa kanyang buong klase. Upang maiwasan ang mga paglabag sa copyright law, ano ang ibubuo nya na  proyekto o kampanya sa paaralan na magtuturo ng tamang paggamit ng mga likha at intellectual property?",
        a: ["Magdaos ng isang seminar tungkol sa karapatang-ari at mga parusa sa mga lumalabag.", "Gumawa ng mga poster at pamamahagi ng mga impormasyon sa mga estudyante tungkol sa copyright.", "Mag-organisa ng isang contest sa paggawa ng mga orihinal na proyekto na walang paglabag sa copyright.", "Magtayo ng isang online/social forum kung saan maaaring magtanong ang mga estudyante tungkol sa copyright."],
        correct: "Magtayo ng isang online/social forum kung saan maaaring magtanong ang mga estudyante tungkol sa copyright."
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
const SCORE_KEY = "g10_scores";
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
        let lineHasLabel = false;
        labels.forEach((label) => {
            let startIdx = line.indexOf(label);
            if (startIdx !== -1 && (startIdx === 0 || /\s/.test(line[startIdx - 1]))) {
                lineHasLabel = true;
            }
        });

        if (lineHasLabel) {
            let currentLabelIndices = [];
            labels.forEach((label, idx) => {
                let pos = line.indexOf(label);
                if (pos !== -1 && (pos === 0 || /\s/.test(line[pos - 1]))) {
                    currentLabelIndices.push({ label, pos, idx });
                }
            });
            
            currentLabelIndices.sort((a, b) => a.pos - b.pos);
            
            for (let i = 0; i < currentLabelIndices.length; i++) {
                let start = currentLabelIndices[i].pos + currentLabelIndices[i].label.length;
                let end = (i + 1 < currentLabelIndices.length) ? currentLabelIndices[i + 1].pos : line.length;
                let optText = line.substring(start, end).trim();
                if (optText) opts.push(optText);
            }
            continue;
        }

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
    dl.className = "btn-download";
    dl.addEventListener("click", () => {
        exportToExcel();
    });
    optionsContainer.appendChild(dl);
}
