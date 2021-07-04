const Discord = require("discord.js")
module.exports = {
name:'nice',
execute(message,args,PREFIX){
  if(message.author.id === '563263190147006464'){
msgs = [
`Zindagi ke kuch lamhe yaadgar hote hain,Yadoon mein kuch log khass hote hain,Yu to woh door hote hain nazaron se,Par unke ehsaas dil ke paas hote hain..`,
`Teri har nakami ko kamyabi me badal dunga,Tere har sapno ko haqeekat me badal dunga,Aye dost hum khuda se dua aisi karenge..ki tere har gham ko khusi me badal denge..`,
`Kuch Rishtey Uparwaala Banaata hai,Kuch Rishte Log Banaate hain,Par wo, log Bahut Khaas Hote hain,Jo Bina Rishte ke Koi Rishta Nibhate hain..`,
`Zindagi ne mujhe bahut kuch sikhaya Thanhayi mein jeena sikhaya,Pyar ko chupana sikhaya, Doston se haske milna sikhaya,Aur man hi man rona sikhaya,Ab  kya kahunZindagi ne bahut kuch sikhaya Magar jeena nahin sikhaya`,
`Dost dost na raha, pyaar pyaar naa rahaJis pai bi aitbaar kiya, wo bewafa nikla,Jinke sath dost ban raha, wo dushman nikla,mera dost hi mera pyar le udha !!!`,
`Mujhe to apno ne loota ..!gairo main kaha dum tha .!apni kashti wahi doobi .!jaha pyar karne walo ka hujoom tha..!`,
`a, Dil me hai Naam tumhara, Har yaad me hai chehra tumhara Sath nahi to kya huva, Zindagi bhar dosti nibhane ka wa`,
`Koi hasaae to has lete hai,Dil mein dard ho to ro lete hai,Neend waise bhi kam aati hai,Par sapno mein tum aaogi,Yeh soch ke so lete hai.`,
`Bekhudi ki zindagi hum jiya nahi karte,jaam dusro se chinkar piya nahi karte,unko mohobbat he to aakar izhar karewarna hum kisika picha nahi karte.Keval Khona`,
`Tuta dil ki dua bhi baddua ban jate hai.har pal fir unki yaad setati hai.rota hai dil har din har pal.aur zindagi maut se badtar nazer ate hai.`,
`Na maro sanam bewafa ke liye, Do gaaz zameen nahi milegi dafan hone ke liye, Marna hain toh maro watan ke liye, Hasina bhi dupatta utar degi tere k`,
`Zindagi hai kuch pal ki baki abhi..In palo ko mere sath tum guzar lo..Kal ka na karao intezar tum..Aaj mila hai mauka mera hath tham lo.`,
`Nagahen aapki pehchan hai hamari,Muskarahat aapki shan hai hamari,Karna hifazat tum apni,Sanse aapki jaan hain hamari..`,
`Aaj Mausam Kuchh Naya Rang Le Ke Aaya Hai,
Barish Mein Halki Si Dhoop Le Ke Aaya Hai,
Ek Baat Samajh Mein Nahi Aati Daya Ke,
Aakhir Qatil Ne Hathiyar Kahan Chhupaya Hai?`,
`Hum Dua Karenge Khuda Se Ke,
Khushiyon Se Bhar De Woh Aapki Jholi,
Daya Koyi Bhi Inmein Se Agar Hoshiyari Dikhaye,
Toh Turant Mar Dena Use Goli.`,
 `Tanhayi Mein Sataati Hai Uski Yaad Aise,
 Chale Aate Hain Aankhon Mein Aansu Jaise,
 Daya Jara Pata Toh Lagao Ke Yeh,
 Munni Badnaam Huyi Toh Huyi Kaise?`,
`Ab Toh Ghabara Ke Yeh Kehte Hain Ke Mar Jayenge,
Mar Ke Bhi Chain Na Paaya Toh Kidhar Jayenge.

Tum Ne Thehrayi Agar Gair Ke Ghar Jaane Ki,
Toh Iraade Yahan Kuchh Aur Thahar Jayenge.

Ham Nahin Woh Jo Karein Khoon Ka Daava Tujh Par,
Balqi Poochhega Khuda Bhi Toh Mukar Jayenge.

Aag Dozakh Ki Bhi Ho Jayegi Pani Pani,
Jab Yeh Aasi Arq-E-Sharm Se Tar Jayenge.`,
 `Abhi Jameer Mein Thodi Si Jaan Baaki Hai,
 Abhi Hamara Koyi Imtehaan Baaki Hai.
 
 Hamare Ghar Ko To Ujde Huye Jamana Hua,
 Magar Suna Hai Abhi Woh Makan Baaki Hai.
 
 Hamari Unse Jo Thi Baat Woh Khatam Huyi,
 Magar Khamosh Sa Kuchh Darmiyan Baaki Hai.`,
`Din Ki Roshni Khwabon Ko Banane Mein Gujar Gayi,
Raat Ki Neend Bachche Ko Sulane Mein Gujar Gayi,
Jis Ghar Mein Mere Naam Ki Takhti Bhi Nahi Hai,
Saari Umar Uss Ghar Ko Banane Mein Gujar Gayi.`,
 `Phool Isliye Achhe Hain Ki Khushbu Ka Paigam Dete Hain,
Kaante Islite Achhe Hai Ki Daaman Thaam Lete Hain,
Dost Isliye Achhe Hain Ki Woh Mujh Par Jaan Dete Hain,
Aur Dushmano Ko Main Kaise Kharab Keh Doon...
Woh Hi Toh Hain Ho Mehfil Mein Mera Naam Lete Hain.`,
 `Sare Bajaar Niklun Toh Aawargi Ki Tohmat,
 Tanhaayi Mein Baithhu Toh Ilzam-E-Mohabbat.
 Na Shakhon Ne Di Panah, Na Hawaon Ne Bakhsha,
Woh Patta Aawara Na Banta Toh Aur Kya Karta.`,
 `Ajeeb Mithaas Hai Mujh Gareeb Ke Khoon Me Bhi,
 Jise Bhi Mauka Milta Hai Woh Peeta Zaroor Hai.
 
 Sula Diya Maa Ne Bhukhe Bachche Ko Ye Keh Kar,
 Pariyan Aayengi Sapno Mein Rotiyan Lekar.`,
]


const randomshayaris = msgs[Math.floor(Math.random() * msgs.length)]
const embedshayaris = new Discord.MessageEmbed()
.setColor('RANDOM')
.setDescription(randomshayaris)
.setFooter('Shayaris form shayaribazar.com')
message.channel.send(embedshayaris) 
message.delete({timeout: 10})

}
}}