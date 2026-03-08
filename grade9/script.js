let questions = [
    {
        q: "Sa teoryang Multiple Intelligences ni Dr. Howard Gardner (1983), ang lahat ng tao ay may angking likas na kakayahan, iba’t iba ang talino o talento. Sa pamimilli ng kurso, dapat mong isaalang-alang kung ano ang paborito o gustong- gusto mong gawin, ano ito?",
        a: ["Hilig", "Talento", "Talino", "Trabaho"],
        correct: "Hilig"
    },
    {
        q: "Sa pagkuha ng kurso, kailangan mong isaalang-alang ang iyong pambihirang biyaya at likas na kakayahan. Ito ay ang iyong __________.",
        a: ["Hilig", "Talento", "Talino", "Trabaho"],
        correct: "Talento"
    },
    {
        q: "Ang mga taong nasa ganitong interes ay mas gustong magtrabaho nang mag isa kaysa gumawa kasama ang iba. May mataas itong impluwensiya at nakatuon sa mga gawaing pang agham. Halimbawa nito ay ang mga ekonomista, programmer, physician, o dentista. Anong uri ng interes ito?",
        a: ["Enterprising", "Conventional", "Investigative", "Social"],
        correct: "Investigative"
    },
    {
        q: "Likas sa mga taong nasa ganitong grupo ang pagiging mapanghikayat, mahusay mangumbinsi ng iba para sa pagkamit ng inaasahan o target goals. Halimbawa dito ay ang mga sales officer, human resource officer, banker, at iba pa. Anong uri ng interes ito?",
        a: ["Enterprising", "Conventional", "Investigative", "Social"],
        correct: "Enterprising"
    },
    {
        q: "Sa paggawa ng Personal na Pahayag ng Misyon sa Buhay ay kailangang isaalang alang ang kraytiryang SMART. Alin sa mga sumusunod ang ibig sabihin ng SMART?",
        a: ["Specific, Measurable, Achievable, Relevant, Time-bound", "Specificiable, Measured, Achievable, Reasonable, Time-bound", "Specific, Measurable, Attainable, Relevant, Time-bound", "Specifiable, Measured, Attainable, Reasonable, Time-bound"],
        correct: "Specific, Measurable, Attainable, Relevant, Time-bound"
    },
    {
        q: "Pangarap mo ang maging nurse dahil gusto mong magtrabaho sa ibang bansa at alam mong “in-demand” ito. Pinipili mo ang STEM dahil sa tingin mo, ito ang akmang strand sa pinapangarap mo. Dahil dito, makikita natin ang isa sa layunin ng Senior High School Program. Saan sa ibaba ang nagpapahayag nito?",
        a: ["Maging handa sa pagpasok ng kolehiyo", "Madagdagan ang kaalaman at kasanayan", "Mapaayos ang sistema ng edukasyon ng bansa", "Magkaroon ng TESDA certificate para makapagtrabaho agad"],
        correct: "Maging handa sa pagpasok ng kolehiyo"
    },
    {
        q: "Ang Senior High School Program ay mayroong apat na tracks na puwedeng pagpilian ng mga mag-aaral depende sa kanilang hilig at talento. Anong track ang nakasentro sa pagaaral ng agham at matematika?",
        a: ["General Academic Strand (GAS)", "Science Technology Engineering and Mathematics (STEM)", "Technical- Vocational (Tech-Voc)", "Humanities and Social Science (HUMMS)"],
        correct: "Science Technology Engineering and Mathematics (STEM)"
    },
    {
        q: "Dala ng pag-usbong ng teknolohiya sa buong mundo, ang mga in-demand na trabaho sa taong 2024 ay may kaugnayan sa Information Technology (IT). Anu-anong mga trabaho ang nakapaloob sa Information Technology?",
        a: ["Chef, waiter, restaurateur", "Civil Engineer, Scientist, Physicist", "Teacher, Bank Manager, Chief Executive Officer (CEO)", "Software Developer, Computer Programmer, Data Analyst"],
        correct: "Software Developer, Computer Programmer, Data Analyst"
    },
    {
        q: "Sa darating na panahon, ikaw naman ang papasok sa mundo ng paggawa. Bilang paghahanda, ano ang dapat mong isaalang-alang upang maging matagumpay ka bilang kabahagi sa mundo ng paggawa?",
        a: ["Ang hilig, talento at kakayahan ng iba", "Ayon sa demand na kailangan sa produkto.", "Ang kursong kukunin ayon sa gusto ng magulang mo.", "Ang benepisyong makukuha para sa sarili, pamilya at lipunan."],
        correct: "Ang benepisyong makukuha para sa sarili, pamilya at lipunan."
    },
    {
        q: "Bilang paghahanda sa pagtatapos, ang pagsaliksik at pagtatanong ang isang magandang hakbang tungo sa pagkamit ng iyong pangarap. Anong salik ng mabuting pagpapasiya ito?",
        a: ["Magkalap ng kaalaman.", "Magnilay sa mismong aksiyon.", "Tayain ang damdamin sa napiling isasagawang pasiya.", "Hingin ang gabay ng Diyos sa isasagawang pagpapasiya."],
        correct: "Magkalap ng kaalaman."
    },
    {
        q: "Bata pa lamang si Cecil ay may interes na sa pagbabasa ng mga educational book, kasabay din nito ang pagguhit at minsang pagsusulat. Lalo niya itong napaunlad sa pagsali sa mga paligsahan sa loob at labas ng paaralan. Kaya sa pagdating ng pagpili ng kurso ay hindi siya nahirapan dahil alam na niya ang magiging linya ng kaniyang propesyon, ang maging Journalist. Alin sa mga sumusunod na pansariling salik ang naging daan upang makamit ni Cecil ang tagumpay ng kaniyang piniling hanapbuhay?",
        a: ["Hilig", "Mithiin", "Kakayahan", "Pagpapahalaga"],
        correct: "Kakayahan"
    },
    {
        q: "Ang isang ekonomista ay nag-aaral at sumusuri ng produksiyon, distribusyon, at pagkonsumo ng mga produkto at serbisyo upang makapagbigay ng solusyon sa mga isyung pang-ekonomiya. Alin sa mga sumusunod na interes napapabilang ang isang ekonomista?",
        a: ["Social", "Artistic", "Realistic", "Investigative"],
        correct: "Investigative"
    },
    {
        q: "Hindi lingid sa kaalaman ni Elmo ang mga naging puhunan ng kaniyang mga magulang sa negosyong ipinundar simula noong bata pa siya hanggang sa kasalukuyan kung kaya sila ngayon ay maginhawa at nakapagtapos lahat ng pag-aaral sa kolehiyo. Siya ang saksi sa kasipagan at pagiging bukas-palad ng kaniyang mga magulang. Anong pansariling salik ang naging gabay ni Elmo sa pagpili ng kurso?",
        a: ["hilig", "kakayahan", "pagpapahalaga", "katayuang pinansyal"],
        correct: "pagpapahalaga"
    },
    {
        q: "Si Danilo ay nasa Baitang 11 na sa darating na pasukan. Bata pa lamang siya ay pangarap na niyang maging isang Social Worker upang makapaglingkod sa bayan. Alin sa sumusunod na Senior High School Strand ang angkop para sa kanya?",
        a: ["General Academic Strand", "Humanities and Social Sciences", "Accountancy, Business and Management", "Science Technology Engineering and Mathematics"],
        correct: "Humanities and Social Sciences"
    },
    {
        q: "Maalab ang puso ni Mark pagdating sa pagtuturo sa kanyang mga estudyante. Para sa kanya, ito ang trabahong inilaan sa kanya ng Diyos. Mahalaga ba na magkaroon ng personal na pahayag ng misyon sa buhay? Bakit?",
        a: ["Oo, dahil ito ang iyong personal na pundasyon tungo sa mataas na pagpapahalaga sa layunin ng buhay.", "Oo, dahil ang iyong misyon ay siyang makatutulong na maabot ang iyong mga pangarap na kumita ng maraming salapi.", "Hindi, dahil lahat tayo ay may kanya-kanyang misyon sa buhay na gusto nating marating tulad ng maging isang pulis o doktor.", "Hindi, dahil walang sinuman ang nakakaalam sa kung anuman ang ating kahihinatnan sa ating hinaharap o sa darating na panahon."],
        correct: "Oo, dahil ito ang iyong personal na pundasyon tungo sa mataas na pagpapahalaga sa layunin ng buhay."
    },
    {
        q: "Si Anna ay nagtatanong sa kanyang pamilya at mga kaibigan na makakatulong sa kanyang pagtatakda ng sariling layunin sa buhay. Ano ang itinutukoy sa hakbang na ito sa pagbuo ng Personal na Pahayag ng Misyon sa Buhay??",
        a: ["Sumangguni sa iba", "Suriin ang iyong sarili", "Tipunin ang mga impormasyon", "Tukuyin ang mga pinahahalagahan"],
        correct: "Sumangguni sa iba"
    },
    {
        q: "Dahil sa patuloy na pagbabago ng pandaigdigang ekonomiya at mga pangangailangan, maraming trabaho ang nagiging in-demand sa lokal at internasyonal na lebel. Alin sa mga sumusunod na trabaho ang may mataas na lokal at global na demand sa kasalukuyan?",
        a: ["Tindero ng kakanin sa palengke", "Manlililok ng tradisyunal na kagamitan", "Health care worker tulad ng nurse o caregiver", "Magsasaka sa maliliit na sakahan sa probinsya"],
        correct: "Health care worker tulad ng nurse o caregiver"
    },
    {
        q: "Iniisip ni Leonidas na kumuha ng strand na konektado sa pagtatayo negosyo. Ngunit, sa kalooban niya, hindi pa siya talaga sigurado sa kukunin niya. Ano ang angkop na gawin ni Leonidas?",
        a: ["Kunin ang Tech-Voc dahil magagamit niya ito sa negosyo na gusto niyang itayo at lalo na sa panahon na kailangan niya ito.", "Kunin ang General Academic Stand (GAS), dahil mahirap ng subukin ang isang strand na hindi naman gusto kahit na ito ang hilig ng pamilya.", "Kunin ang Accountancy, Business and Management (ABM) dahil ito naman talaga ang naaangkop sa kanya dahil ganoon ang hilig ng kanyang pamilya.", "Kunin ang Science, Technology, Engineering and Mathematics (STEM) dahil magaling sa Science at Math si Leonidas at mainam nang kunin ang strand na magaling siya kahit hindi hilig."],
        correct: "Kunin ang General Academic Stand (GAS), dahil mahirap ng subukin ang isang strand na hindi naman gusto kahit na ito ang hilig ng pamilya."
    },
    {
        q: "Si Brenda ay nais na maging isang Journalist ng isang sikat na pamamahayag. Sa trabahong ito, nangangailangan ng mahabang pasensya at angking talino sa pananaliksik. Alin sa mga 21st Century Skills na nasa baba ang dapat linangin ni Brenda?",
        a: ["Pakikibahagi", "Pagkamalikhain", "Pakikipagtalastasan", "Mapanuring pag-iisip"],
        correct: "Mapanuring pag-iisip"
    },
    {
        q: "Si Carla ay naguguluhan kung tatanggapin ba niya ang scholarship sa ibang bansa o manatili sa kanilang bayan upang tumulong sa negosyo ng kanilang pamilya. Upang matiyak na tama ang kanyang desisyon, naglaan siya ng oras upang manalangin at humingi ng gabay sa Diyos bago magpasiya. Alin sa mga sumusunod ang salik ng mabuting pagpapasiya na ipinakita ni Carla?",
        a: ["Magkalap ng kaalaman.", "Magnilay sa mismong aksiyon.", "Tayain ang damdamin sa napiling isasagawang pasiya.", "Hingin ang gabay ng Diyos sa isasagawang pagpapasiya."],
        correct: "Hingin ang gabay ng Diyos sa isasagawang pagpapasiya."
    },
    {
        q: "Ano ang nais ni Harold na maganap sa kanyang pagiging isang guro sa hinaharap? (Base sa kwento: Harold, Grade 9)",
        a: ["Maging aktibo sa anumang gawain sa paaralan", "Maging abala sa araw-araw upang maging maunlad sa buhay", "Makatulong sa mga kabataang walang kakayahang makapag-aral", "Maging pursigido, determinado sa pagsasagawa ng mga naisin bilang isang guro"],
        correct: "Makatulong sa mga kabataang walang kakayahang makapag-aral"
    },
    {
        q: "Ang mithiin ba ni Harold ay naghahangad ng Kabutihang Panlahat?",
        a: ["Oo, dahil ito ay may layuning makapag-abot ng tulong sa kapuwa.", "Oo, dahil isinasa-alang-alng niya ang sarili niyang kapakanan.", "Hindi, dahil ito ay isang paraan lamang niya ito para kumita ng pera.", "Hindi, dahil naniniwala siya na kapag ginawa niya ito ay makukuha niya ang atensyon ng iba."],
        correct: "Oo, dahil ito ay may layuning makapag-abot ng tulong sa kapuwa."
    },
    {
        q: "Sa araw na ikaw ay maging kasapi na ng mundo ng paggawa, kailangan ang mainam na pagpapasiya. Alin sa sumusunod ang maaari mong maging batayan sa pagpili ng kurso at magkaroon kaagad ng trabaho?",
        a: ["Mga trabahong sa Pilipinas lang mayroon.", "Mga trabahong hindi ganoon kahirap gawin.", "Trabahong tugma sa iyong talino at kasanayan.", "Mga trabahong sikat sa labas ng ating bansa."],
        correct: "Trabahong tugma sa iyong talino at kasanayan."
    },
    {
        q: "Ang “life skills” ay mahalaga dahil tinutulungan nito ang isang tao na harapin ang mga hamon sa buhay nang may kumpiyansa, kakayahan, at epektibong pagdedesisyon. Kung nais mong maging isang abogado, anong life skills ang lubos mong magagamit?",
        a: ["pagkamalikhain", "pakikipagtalastasan", "kasanayan sa pakikipagkapwa", "Kasanayan sa pagkalap at pagproseso ng impormasyon"],
        correct: "pakikipagtalastasan"
    },
    {
        q: "Si Marco ay nasa Baitang 9 na gustong maging mekaniko dahil hilig niya ang pagkukumpuni ng mga makina. Gayunpaman, inalok siya ng mga kaibigan na kumuha ng academic track na STEM dahil sabay-sabay silang mag-aaral. Upang makapagdesisyon, inalam ni Marco ang mga kursong inaalok sa technical-vocational track at pinag-isipan kung alin ang mas makakatulong sa kanyang pangarap. Kung ikaw si Marco, paano mo maipapakita ang kahalagahan ng sistematikong pagpili ng track na kukunin?",
        a: ["Sumunod sa kagustuhan ng mga kaibigan upang hindi mapag-isa.", "Piliin ang kursong may pinakamadaling requirements upang mas bibilis makatapos.", "Ipagpaliban ang desisyon at maghintay na lamang ng payo mula sa mga magulang.", "Tukuyin ang iyong interes, alamin ang mga track na sumusuporta rito, at suriin ang mga oportunidad sa hinaharap."],
        correct: "Tukuyin ang iyong interes, alamin ang mga track na sumusuporta rito, at suriin ang mga oportunidad sa hinaharap."
    },
    {
        q: "Ang mataas na demand para sa mga skilled worker tulad ng mekaniko sa lokal at global na industriya ay nagbibigay ng maraming oportunidad. Kung ikaw ay interesado sa teknikal-bokasyonal na kurso tulad ng automotive servicing, ano ang dapat mong gawin upang masigurong tama ang iyong desisyon?",
        a: ["Maghintay ng payo mula sa iba bago magdesisyon sa iyong pipiliing kurso.", "Sumama sa mga kaibigan na kukuha ng ibang kurso upang hindi mahiwalay sa kanila.", "Alamin iyong interes, suriin ang demand para sa mekaniko, at tukuyin kung paano ito makatutulong sa pangarap mo.", "Piliin ang kursong pinakamadali at pinakamabilis tapusin kahit hindi ito tugma sa lokal at global na demand ng paggawa."],
        correct: "Alamin iyong interes, suriin ang demand para sa mekaniko, at tukuyin kung paano ito makatutulong sa pangarap mo."
    },
    {
        q: "Si Andrea ay mahilig sa graphic design at nalaman niyang mataas ang demand nito sa lokal at global na industriya. Gayunpaman, nais ng kanyang mga magulang na kumuha siya ng kursong business administration dahil ito raw ang mas praktikal na piliin. Paano makakagawa si Andrea ng tamang desisyon na tumutugma sa pansariling salik at sa lokal at global na demand?",
        a: ["Iwasan ang pag-aaral ng graphic design dahil mas mahirap makahanap ng trabaho sa ibang bansa.", "Maghanap ng trabaho kaagad upang hindi na kailangang pumili ng kurso o isaalang-alang ang global demand.", "Sundin ang payo ng kanyang mga magulang kahit hindi ito ang kanyang interes upang makahanap agad ng trabaho.", "Piliin ang kursong graphic design dahil ito ang kanyang hilig, at magsaliksik kung paano ito akma sa mga oportunidad sa lokal at global na industriya."],
        correct: "Piliin ang kursong graphic design dahil ito ang kanyang hilig, at magsaliksik kung paano ito akma sa mga oportunidad sa lokal at global na industriya."
    },
    {
        q: "Si Mia ay nangangarap maging isang civil engineer balang araw. Sa pagpili ng track o strand sa senior high school, gusto niyang tiyakin na ang kanyang desisyon ay makatutulong sa pagkamit ng kanyang pangarap. Ano ang nararapat gawin ni Mia upang masigurong tama ang kanyang pagpapasiya?",
        a: ["Pag-aralan ang mga track o strand na maghahanda sa kursong engineering at isaalang-alang ang interes at layunin.", "Sumama sa track o strand na pinili ng karamihan sa kanyang mga kaklase o kaibigan upang hindi mapag-isa sa kolehiyo.", "Pumili ng track o strand na pinakamadali o pinakamabilis makumpleto kahit hindi naman ito tugma sa minimithi ng sariling kalooban.", "Maghintay na lamang ng payo mula sa mga guro, magulang, kaibigan o sa kahit kaninong pinagkakatiwalaan bago magdesisyon sa gagawin."],
        correct: "Pag-aralan ang mga track o strand na maghahanda sa kursong engineering at isaalang-alang ang interes at layunin."
    },
    {
        q: "Si Paolo ay mahilig sa teknolohiya at pangarap niyang maging isang software developer. Nalaman niyang mataas ang demand para sa mga IT professionals sa Pilipinas at ibang bansa. Gayunpaman, nais ng kanyang mga magulang na kumuha siya ng kursong may kaugnayan sa negosyo dahil ito ang kanilang tradisyon sa pamilya. Paano makapagpapasiya si Paolo ng tamang kurso na naaayon sa kanyang kagustuhan, pansariling salik, at lokal at global na demand?",
        a: ["Ipagpaliban ang desisyon at maghintay ng tamang panahon upang makapili nang mas madali.", "Maghanap ng kursong madaling tapusin para hindi siya mahirapan, kahit hindi ito ang kanyang interes.", "Piliin ang kursong IT na tugma sa kanyang interes at alamin ang mga oportunidad sa lokal at global na industriya.", "Sundin ang kagustuhan ng mga magulang niya upang mapanatili ang kanilang tradisyon kahit hindi ito ang kanyang hilig."],
        correct: "Piliin ang kursong IT na tugma sa kanyang interes at alamin ang mga oportunidad sa lokal at global na industriya."
    },
    {
        q: "Si Ana ay mahilig magluto at gustong magtayo ng sariling restaurant. Iniisip niyang kumuha ng culinary course, ngunit nagdadalawang-isip dahil gusto rin niyang subukan ang STEM. Anong paraan ang gagawin ni Ana sa pagpili ng kurso?",
        a: ["Alamin ang mga oportunidad sa culinary field at suriin kung paano ito tumutugma sa kanyang hilig at layunin.", "Sundin ang opinyon ng ibang tao tulad ng mga kaibigan at guro, kahit na hindi ito ang kursong tumutugma sa kanyang tunay na interes.", "Pumili ng kursong pinakamadaling tapusin upang hindi magkaroon ng maraming pagsubok at makapag-focus sa ibang mga bagay na hindi nauugnay sa kurso.", "Piliin ang STEM kahit hindi ito ang kanyang hilig, dahil ito ang pinapayo ng mga magulang at mas maraming oportunidad sa larangan ng agham at teknolohiya."],
        correct: "Alamin ang mga oportunidad sa culinary field at suriin kung paano ito tumutugma sa kanyang hilig at layunin."
    },
    {
        q: "Bilang mag-aaral, paano ka makatutulong sa pag-unlad ng ekonomiya ng ating bansa?",
        a: ["sa pamamagitan ng pagsunod kung ano ang utos ng mga nakatatanda", "sa pamamagitan ng pag-aaral ng mabuti para sa magandang kinabukasan", "sa pamamagitan ng pagpapanatili kung ano ang nasa iyong isipan upang aasenso sa buhay", "sa pamamagitan ng pag-asa sa tulong ng gobyerno"],
        correct: "sa pamamagitan ng pag-aaral ng mabuti para sa magandang kinabukasan"
    },
    {
        q: "Si Hannah ay nagsumikap sa kaniyang pag-aaral at ng kalauna’y naging isang ganap na doktor. Nakadadama siya ng labis na kasiyahan sa kanyang panggagamot. Madalas rin siyang nagsasagawa ng mga medical missions sa mga probinsya upang matulungan ang mga kapuspalad. Bakit mahalagang magkaroon ng personal na pahayag ng misyon sa buhay?",
        a: ["dahil ito ang iyong personal na kredo tungo sa mataas na pagpapahalaga sa layunin ng buhay.", "dahil ang iyong misyon ay siyang makatutulong na maabot o makamit ang iyong mga pangarap na yumaman.", "dahil hindi natin alam kung ano ang ating kahihinatnan sa pag-ikot ng mundo.", "dahil lahat tayo ay may kanya-kanyang misyon sa buhay na gusto nating marating."],
        correct: "dahil ito ang iyong personal na kredo tungo sa mataas na pagpapahalaga sa layunin ng buhay."
    },
    {
        q: "Madalas na tinitingnan ni Marcelo ang kanyang journal upang makita ang kanyang nabuong mga layunin o misyon sa buhay. Ginagamit niya ito bilang gabay sa mga hakbangin o kilos na kanyang gagawin sa kanyang buhay. Alin sa mga sumusunod na kahalagahan ng PPMB ang naipapakita ni Marcelo?",
        a: ["Nakabubuo ng pagkakakilanlan sa sarili", "Katuwang ang PPMB sa paglikha ng mga desisyon sa buhay", "Itinutulak ang tao upang maging mapanagutan sa kanyang mga kilos.", "Nakatutulong sa pagkakaroon ng tuon ng tao sa makabuluhang mga bagay."],
        correct: "Nakatutulong sa pagkakaroon ng tuon ng tao sa makabuluhang mga bagay."
    },
    {
        q: "Ang kabutihang panlahat ay tumutukoy sa kolektibong kagalingan at kaunlaran ng bawat miyembro ng isang lipunan, kung saan lahat ay nakikinabang at natutugunan ang kanilang pangunahing pangangailangan. Alin sa mga sumusunod na sitwasyon ang tumutukoy sa pag-abot sa kabutihang panlahat?",
        a: ["Si Jerry ay nagtatakda ng kanyang mga mithiin para sa kanyang sariling kapakanan.", "Si Anna ay madalas mag-ensayo upang mapaunlad ang kanyang talento sa pagsayaw.", "Si Kimpy ay nag-aaral ng mabuti upang matupad ang kanyang pangarap na maging isang accountant.", "Si Emily ay nagdesisyon na makilahok sa pagbabahagi ng relief goods sa mga nasalanta ng bagyo sa kanilang lugar."],
        correct: "Si Emily ay nagdesisyon na makilahok sa pagbabahagi ng relief goods sa mga nasalanta ng bagyo sa kanilang lugar."
    },
    {
        q: "Sa pagpili ng kurso, mahalagang suriin ang iba’t ibang aspeto tulad ng hilig, kakayahan, at pagpapahalaga. Paano makatutulong ang pagbuo ng Personal na Pahayag ng Misyon sa paggawa ng desisyon na makabubuti sa sarili at iba?",
        a: ["Sa pagbibigay-diin sa ispirituwal na aspeto bilang gabay sa lahat ng desisyon.", "Sa pagtutok lamang sa pansariling kapakanan upang mabilis na makamit ang tagumpay.", "Sa pagtiyak na ang desisyon ay makabubuti hindi lamang para sa sarili kundi pati na rin sa kapuwa at lipunan.", "Sa pagtuon lamang sa kapakanan ng pamayanan o komunidad nang walang kaugnayan sa pansariling layunin."],
        correct: "Sa pagtiyak na ang desisyon ay makabubuti hindi lamang para sa sarili kundi pati na rin sa kapuwa at lipunan."
    },
    {
        q: "Bakit mahalaga para sa mga mag-aaral na magkaroon ng sapat na impormasyon tungkol sa mga trabahong in-demand sa pagpili ng kanilang kurso?",
        a: ["Upang makapili ng kurso na magbibigay lamang ng mataas na sahod, kahit hindi nila ito gusto.", "Upang magarantiya na magiging sikat sila sa lipunan, hindi alintana ang kahalagahan ng trabaho.", "Upang sundin ang mga kurso na pinipili ng kanilang mga magulang, hindi binibigyan ng pansin ang pangangailangan sa merkado ng trabaho.", "Upang magtagumpay sa kanilang karera at makatulong sa pag-unlad ng ekonomiya ng bansa sa pamamagitan ng pag-pili ng kursong akma sa pangangailangan ng merkado."],
        correct: "Upang magtagumpay sa kanilang karera at makatulong sa pag-unlad ng ekonomiya ng bansa sa pamamagitan ng pag-pili ng kursong akma sa pangangailangan ng merkado."
    },
    {
        q: "Bakit mahalaga para sa isang mag-aaral na bumuo ng profile ng mga trabahong may mataas na lokal at global na demand, ?",
        a: ["Upang maghanap ng trabaho na walang kakailanganing kasanayan at mas madali itong makuha.", "Upang makapili ng trabaho na magbibigay lamang ng mataas na sahod, hindi binibigyan pansin ang mga talento at pagpapahalaga.", "Upang mapili ang mga trabahong may mataas na demand, na akma sa kanilang kakayahan at mga layunin sa buhay, at magdudulot ng personal at pang-ekonomiyang tagumpay.", "Upang sundin ang mga trabaho na pinili ng kanilang mga pamilya at mga kaibigan na siyang nakapagpapasaya sa mga taong nakapalibot kahit hindi ito tugma sa kanilang interes at kakayahan."],
        correct: "Upang mapili ang mga trabahong may mataas na demand, na akma sa kanilang kakayahan at mga layunin sa buhay, at magdudulot ng personal at pang-ekonomiyang tagumpay."
    },
    {
        q: "Bakit mahalaga ang sistematikong pagpili ng kurso, negosyo, o hanapbuhay para sa isang indibidwal?",
        a: ["Upang matukoy ang pinakamataas na sahod at magtagumpay sa anumang larangan.", "Upang sundin ang mga opinyon ng iba at magtagumpay sa mga kursong popular lamang sa lipunan.", "Upang makapili ng kurso o hanapbuhay na madaling pasukin at hindi na kailangang mag-isip ng masyadong malalim.", "Upang makamit ang personal na tagumpay at kaligayahan sa pamamagitan ng pagtutok sa mga kursong o hanapbuhay na akma sa iyong mga interes, kakayahan, at layunin sa buhay."],
        correct: "Upang makamit ang personal na tagumpay at kaligayahan sa pamamagitan ng pagtutok sa mga kursong o hanapbuhay na akma sa iyong mga interes, kakayahan, at layunin sa buhay."
    },
    {
        q: "Paano makakatulong ang pagkakaroon ng personal na pahayag ng misyon sa buhay sa isang tao upang maging natatanging nilalang na kumikilos nang mapanagutan tungo sa kabutihang panlahat?",
        a: ["Ang personal na pahayag ng misyon ay para sa sariling tagumpay, ngunit hindi isinasaalang-alang ang iba.", "Tumutulong itong magtakda ng layunin para sa tagumpay, ngunit hindi ito nakakatulong sa pagpapasiyakabutihang panlahat.", "Nagbibigay ito ng malinaw na direksyon o pundasyon para sa tagumpay at kabutihang panlahat, isinasaalang-alang ang epekto sa iba.", "Nakatutok lamang sa pagpapabuti ng sarili at sa personal na tagumpay at pagpapabuti ng sarili, nang hindi isinasaalang-alang ang epekto sa iba."],
        correct: "Nagbibigay ito ng malinaw na direksyon o pundasyon para sa tagumpay at kabutihang panlahat, isinasaalang-alang ang epekto sa iba."
    },
    {
        q: "Paano makakatulong ang pahayag ng misyon ni Maria sa paggawa ng desisyon tungkol sa proyekto o sa mga pag-aaral?",
        a: ["Magdudulot ito ng stress dahil baka mawalan siya ng tamang desisyon sa proyekto.", "Tutulungan siyang piliin ang opsyong may personal na benepisyo para sa kanyang karera.", "Tutulungan siyang piliin ang opsyong makakatugon sa kanyang layuning makatulong sa kabataan at komunidad.", "Hindi ito makakatulong sa kanya at lalo na sa ibang tao dahil hindi ito naaangkop sa paggawa ng desisyon tungkol sa pag-aaral."],
        correct: "Tutulungan siyang piliin ang opsyong makakatugon sa kanyang layuning makatulong sa kabataan at komunidad."
    },
    {
        q: "Si Juan ay nahihirapan pumili ng kurso sa kolehiyo. Naghahanap siya ng impormasyon tungkol sa mga trabahong in-demand sa Pilipinas at ibang bansa. Paano makakatulong ang impormasyong ito sa kanyang desisyon?",
        a: ["Makakatulong ito, pero hindi siya magkakaroon ng trabaho kung hindi niya susundin ang gusto ng pamilya.", "Makakatulong ito sa pagpili ng kursong sikat, pero hindi nito isinasaalang-alang ang demand sa trabaho.", "Makakatulong ito sa pagpili ng kursong in-demand, na magbibigay ng mas mataas na tsansa ng trabaho at makatutulong sa bansa.", "Hindi ito makakatulong dahil ang pagpili ng kurso, track o strand ay nakabatay lamang sa interes niya at hindi ng kursong in-demand."],
        correct: "Makakatulong ito sa pagpili ng kursong in-demand, na magbibigay ng mas mataas na tsansa ng trabaho at makatutulong sa bansa."
    },
    {
        q: "Si Mark ay mahilig sa teknolohiya at programming. Gusto niyang makahanap ng trabahong in-demand sa lokal at global na merkado. Paano makakatulong ang pagbubuo ng profile ng mga trabahong in-demand sa kanyang karera?",
        a: ["Tutulungan siyang magtakda ng layunin na hindi akma sa kanyang interes at kakayahan.", "Tutulungan siyang mag-focus sa trabahong may mataas na sahod, kahit hindi tugma sa kanyang talento.", "Tutulungan siyang mag-focus sa trabaho batay sa sahod at katanyagan, kahit hindi ito tamang basehan sa pagpili.", "Tutulungan siyang pumili ng trabahong tugma sa kanyang talento at kakayahan, na magdudulot ng tagumpay at ambag sa ekonomiya."],
        correct: "Tutulungan siyang pumili ng trabahong tugma sa kanyang talento at kakayahan, na magdudulot ng tagumpay at ambag sa ekonomiya."
    },
    {
        q: "Si Anna ay mahilig sa sining at graphic design. Pinag-iisipan niya kung mag-aaral ng Fine Arts o teknikal-bokasyonal na kurso sa digital marketing. Paano makakatulong ang pagsusuri ng kanyang talento, kakayahan, at lokal/global na demand sa pagpili ng kurso?",
        a: ["Matulungan siyang pumili ng kursong tugma sa talento at demand, para magtagumpay.", "Hindi ito makakatulong dahil mas mahalaga ang opinyon ng pamilya, kaklase at kaibigan.", "Pipili siya batay sa pinakamataas na sahod, hindi isinasaalang-alang ang interes niya at ng iba.", "Pipili siya ng kursong mataas ang demand, pero maaaring hindi naman siya masiyahan sa napili."],
        correct: "Matulungan siyang pumili ng kursong tugma sa talento at demand, para magtagumpay."
    },
    {
        q: "Si Lara ay mahilig sa agham at teknolohiya at nais magtayo ng negosyo sa renewable energy, ngunit gusto ng kanyang pamilya na magtulungan siya sa family business na hindi tugma sa kanyang interes. Paano makakatulong ang pagtutugma ng kanyang talento at interes sa lokal at global na demand sa kanyang desisyon?",
        a: ["Pumili ng karera na walang kinalaman sa kanyang talento upang matugunan ang pamilya.", "Magdesisyon batay lamang sa pinakamadaling opsyon, nang hindi isinasaalang-alang ang epekto nito.", "Maipaliwanag sa pamilya ang halaga ng renewable energy, na magbibigay ng tagumpay at benepisyo sa ekonomiya.", "Magpatuloy lamang sa negosyo ng pamilya upang maiwasan ang panganib at stress ng bagong negosyo pati na ang mahusgahan ng kapamilya."],
        correct: "Maipaliwanag sa pamilya ang halaga ng renewable energy, na magbibigay ng tagumpay at benepisyo sa ekonomiya."
    },
    {
        q: "Si Mia ay mahilig sa teknolohiya at nais mag-aral ng Computer Science, ngunit nagdadalawang-isip kung pipiliin ang STEM o ABM na nais ng kanyang mga magulang. Paano makakatulong ang tamang pagpili ng track sa Senior High School sa kanyang mithiin?",
        a: ["Makakatulong ito kay Mia na magdesisyon ayon sa kanyang interes at mga layunin sa buhay.", "Makakatulong ito kay Mia na magpatuloy sa ABM track, kahit hindi ito ang kanyang gusto.", "Makakatulong ito kay Mia na magdesisyon batay lamang sa kung anong track ang pinili ng karamihan.", "Makakatulong ito kay Mia na sundin ang kagustuhan ng kanyang mga magulang, kahit hindi ito ang kanyang interes."],
        correct: "Makakatulong ito kay Mia na magdesisyon ayon sa kanyang interes at mga layunin sa buhay."
    },
    {
        q: "Alin sa mga sumusunod na gawain ang pinakaangkop upang mapatunayan na tugma ang iyong personal na salik sa mga pangangailangan ng kursong akademiko, teknikal-bokasyonal, sining at isports, o negosyo na iyong pipiliin?",
        a: ["Bumuo ng timeline ng mga hakbang upang maihanda ang sarili para sa napiling kurso.", "Sumulat ng sanaysay tungkol sa mga hamon sa napiling kurso at ang epekto nito sa iyong pag-unlad.", "Magdisenyo ng presentasyon tungkol sa lokal at global na oportunidad sa kurso at ang iyong mga kakayahan.", "Gumawa ng infographics na nagpapakita ng ugnayan ng iyong talento, hilig, at layunin sa mga oportunidad ng kurso."],
        correct: "Gumawa ng infographics na nagpapakita ng ugnayan ng iyong talento, hilig, at layunin sa mga oportunidad ng kurso."
    },
    {
        q: "Inatasan kayo ng inyong guro na gumawa ng Personal na Pahayag ng Misyon sa Buhay. Sinabi niya na ito ay dapat magpakita ng inyong layunin, pinahahalagahan, at plano sa hinaharap. Samantala, si Juan ay idinaan sa pag-titiktok ang panuto ng kaniyang guro. Paano mo maipapaliwanag ang ginawa ni Juan?",
        a: ["Siya ay gumawa ng isang collage na nagpapakita ng iyong mga interes, layunin, at pinahahalagahan.", "Siya ay gumagawa ng talumpati ng kaniyang Personal na Pahayag ng Misyon sa Buhay.", "Siya ay nag-record ng isang maikling video na nagpapaliwanag ng kaniyang Personal na Pahayag ng Misyon sa Buhay.", "Siya ay nagsusulat ng kaniyang Personal na Pahayag ng Misyon sa Buhay"],
        correct: "Siya ay nag-record ng isang maikling video na nagpapaliwanag ng kaniyang Personal na Pahayag ng Misyon sa Buhay."
    },
    {
        q: "Si Carla ay may pangarap sa buhay kaya minabuti niyang magpursigi at dinagdagan ang kaniyang pagsisikap sa pagpili ng kursong naayon sa kaniyang interes at abilidad. Pangatwiranan kung paano nakatulong ang pagsisikap ni Carla sa pagpili ng kurso sa pagkamit ng kanyang pangarap sa buhay?",
        a: ["Ang pagsisikap ni Carla sa pagpili ng kurso ay hindi nakatulong sa pagkamit ng kanyang pangarap dahil mas mahalaga ang pagkakaroon ng magandang koneksyon sa industriya.", "Ang pagsisikap ni Carla ay nakatulong sa pagkamit ng kanyang pangarap dahil nagkaroon siya ng maraming kaibigan sa paaralan na nagbigay sa kanya ng suporta.", "Ang pagsisikap ni Carla ay nakatulong sa pagkamit ng kanyang pangarap dahil nakakuha siya ng mataas na marka sa entrance exam.", "Ang pagsisikap ni Carla sa pagpili ng kurso ay nakatulong sa pagkamit ng kanyang pangarap dahil nagkaroon siya ng matibay na pundasyon sa kanyang larangan, na nagbigay sa kanya ng kumpiyansa at kakayahan na magtagumpay sa kanyang napiling karera."],
        correct: "Ang pagsisikap ni Carla sa pagpili ng kurso ay nakatulong sa pagkamit ng kanyang pangarap dahil nagkaroon siya ng matibay na pundasyon sa kanyang larangan, na nagbigay sa kanya ng kumpiyansa at kakayahan na magtagumpay sa kanyang napiling karera."
    },
    {
        q: "Malapit nang magtapos si Luis sa Senior High School at nais niyang magpasiya kung anong kursong akademiko ang kukunin. Ano ang pinakamahusay na paraan upang matulungan siya sa kanyang desisyon?",
        a: ["Magtayo ng online portfolio na nagpapakita ng kanyang talento.", "Lumikha ng listahan ng mga kursong hilig niya at magsaliksik muna.", "Sumali sa mga workshop tungkol sa kurso at ng mga job requirements.", "Mag-organisa ng focus group para sa feedback sa kanyang mga kursong interes."],
        correct: "Lumikha ng listahan ng mga kursong hilig niya at magsaliksik muna."
    },
    {
        q: "Si Lara ay gustong magdesisyon kung dapat ba siyang kumuha ng teknikal-bokasyonal na kurso o magtuloy sa kolehiyo. Gusto niyang makahanap ng isang pamamaraan upang tukuyin ang tamang kurso batay sa kanyang mga personal na interes at ang pangangailangan sa merkado. Ano ang pinakamagandang hakbang na maaari niyang gawin?",
        a: ["Sumulat ng isang personal na blog tungkol sa mga kursong gusto niyang kunin at ang mga opportunities na dala ng mga ito.", "Gumawa ng isang pro at con list para sa bawat kurso at ikumpara ang mga ito batay sa mga lokal at global na demand sa trabaho.", "Mag-imbita ng mga eksperto mula sa iba’t ibang larangan upang magbigay ng mga insight tungkol sa mga kursong may mataas na demand.", "Lumikha ng isang visual na mapa na magpapakita ng koneksyon sa pagitan ng kanyang mga interes at mga mayroon na kurso sa merkado."],
        correct: "Gumawa ng isang pro at con list para sa bawat kurso at ikumpara ang mga ito batay sa mga lokal at global na demand sa trabaho."
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
const SCORE_KEY = "g9_scores";
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
