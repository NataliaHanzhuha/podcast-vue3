import { db } from "../firebase";
import { collection } from "firebase/firestore";
import { useCollection } from "vuefire";

const videos = useCollection(collection(db, "videos"));

// const usersCollection = db.collection('videos')
class VideoDataService {
  async getAll() {
    // const categories = videos.data().map((doc) => ({
    //   id: doc.id,
    //   ...doc.data(),
    // }));

    return videos;

    // console.log(querySnapshot, categories);
    // return [
    //   {
    //     publishedAt: "2023-02-11T22:56:25Z",
    //     channelId: "UCKUpy2JLmINSvfFc_bRSRrg",
    //     title:
    //       "Феномен кохання та нейробіологія закоханості | Подкаст терапія #70",
    //     description:
    //       "Подкаст терапія - це діалоги двох друзів. Спартак - член-кореспондент української академії наук, кандидат психологічних наук. Янович - український актор та комік. Наука досі не може пояснити, як вони зійшлися і чому досі спілкуються. Власне, це єдине, що й хлопці не можуть пояснити. На все інше в подкаст терапії відповіді є.\n\nЗручна навігація по відео:\n00:00 - ромонс: романтичний анонс\n00:50 – закохані люди – божевільні?\n03:46 – п’ять мов кохання\n05:43 – яка мова кохання притаманна Жені? \n09:06 – атрактори уваги\n11:36 – антидепресанти менш ефективні за КПТ\n12:25 – психологічний розбір Карлсона\n13:40 – насилля може стати мовою кохання?\n16:21 - нездорове уявлення про любов\n18:01 – різниця між закоханістю і коханням\n20:46 – метафізика любові \n25:26 – сумісність різних мов кохання \n28:43 – як обирати фото для знайомств\n31:15 – історія про кохання та математика\n33:57 – ти вкрав мій мозок \n38:55 – мозок обирає симетрію\n39:43 – нас приваблює не наш запах\n43:33 – любов і хіть - не антоніми\n49:00 - водій маршрутки та розлади (фантасмагорія)\n50:39 – втрата коханого наближає смерть\n53:25 – кохання діє однаково на всіх\n54:44 – як допомогти самотнім\n\nСлухати подкаст на стрімінгових платформах:\nhttps://clx.by/podcast_terapia\n\nПідписуйтесь на Спартака та Женю в Instagram:\nСуббота: https://instagram.com/spartaksubbota\nЯнович: https://instagram.com/yanovychzhenya\n\n#подкаст_терапія",
    //     thumbnails: {
    //       default: {
    //         url: "https://i.ytimg.com/vi/LEU3cd3vNes/default.jpg",
    //         width: 120,
    //         height: 90,
    //       },
    //       medium: {
    //         url: "https://i.ytimg.com/vi/LEU3cd3vNes/mqdefault.jpg",
    //         width: 320,
    //         height: 180,
    //       },
    //       high: {
    //         url: "https://i.ytimg.com/vi/LEU3cd3vNes/hqdefault.jpg",
    //         width: 480,
    //         height: 360,
    //       },
    //       standard: {
    //         url: "https://i.ytimg.com/vi/LEU3cd3vNes/sddefault.jpg",
    //         width: 640,
    //         height: 480,
    //       },
    //       maxres: {
    //         url: "https://i.ytimg.com/vi/LEU3cd3vNes/maxresdefault.jpg",
    //         width: 1280,
    //         height: 720,
    //       },
    //     },
    //     channelTitle: "Спартак Суббота Психолог",
    //     playlistId: "PLdrsmUK4QNKpok8NL72UH825TBYveuLwt",
    //     position: 1,
    //     resourceId: {
    //       kind: "youtube#video",
    //       videoId: "LEU3cd3vNes",
    //     },
    //     videoOwnerChannelTitle: "Спартак Суббота Психолог",
    //     videoOwnerChannelId: "UCKUpy2JLmINSvfFc_bRSRrg",
    //     timecodes: [
    //       {
    //         description: "ромонс: романтичний анонс",
    //         time: "00:00",
    //         url: "https://youtu.be/LEU3cd3vNes?t=0",
    //         embadedUrl: "https://www.youtube.com/embed/LEU3cd3vNes?start=0",
    //       },
    //       {
    //         description: "закохані люди – божевільні?",
    //         time: "00:50",
    //         url: "https://youtu.be/LEU3cd3vNes?t=50",
    //         embadedUrl: "https://www.youtube.com/embed/LEU3cd3vNes?start=50",
    //       },
    //       {
    //         description: "п’ять мов кохання",
    //         time: "03:46",
    //         url: "https://youtu.be/LEU3cd3vNes?t=226",
    //         embadedUrl: "https://www.youtube.com/embed/LEU3cd3vNes?start=226",
    //       },
    //       {
    //         description: "яка мова кохання притаманна Жені? ",
    //         time: "05:43",
    //         url: "https://youtu.be/LEU3cd3vNes?t=343",
    //         embadedUrl: "https://www.youtube.com/embed/LEU3cd3vNes?start=343",
    //       },
    //       {
    //         description: "атрактори уваги",
    //         time: "09:06",
    //         url: "https://youtu.be/LEU3cd3vNes?t=546",
    //         embadedUrl: "https://www.youtube.com/embed/LEU3cd3vNes?start=546",
    //       },
    //       {
    //         description: "антидепресанти менш ефективні за КПТ",
    //         time: "11:36",
    //         url: "https://youtu.be/LEU3cd3vNes?t=696",
    //         embadedUrl: "https://www.youtube.com/embed/LEU3cd3vNes?start=696",
    //       },
    //       {
    //         description: "психологічний розбір Карлсона",
    //         time: "12:25",
    //         url: "https://youtu.be/LEU3cd3vNes?t=745",
    //         embadedUrl: "https://www.youtube.com/embed/LEU3cd3vNes?start=745",
    //       },
    //       {
    //         description: "насилля може стати мовою кохання?",
    //         time: "13:40",
    //         url: "https://youtu.be/LEU3cd3vNes?t=820",
    //         embadedUrl: "https://www.youtube.com/embed/LEU3cd3vNes?start=820",
    //       },
    //       {
    //         description: "нездорове уявлення про любов",
    //         time: "16:21",
    //         url: "https://youtu.be/LEU3cd3vNes?t=981",
    //         embadedUrl: "https://www.youtube.com/embed/LEU3cd3vNes?start=981",
    //       },
    //       {
    //         description: "різниця між закоханістю і коханням",
    //         time: "18:01",
    //         url: "https://youtu.be/LEU3cd3vNes?t=1081",
    //         embadedUrl: "https://www.youtube.com/embed/LEU3cd3vNes?start=1081",
    //       },
    //       {
    //         description: "метафізика любові ",
    //         time: "20:46",
    //         url: "https://youtu.be/LEU3cd3vNes?t=1246",
    //         embadedUrl: "https://www.youtube.com/embed/LEU3cd3vNes?start=1246",
    //       },
    //       {
    //         description: "сумісність різних мов кохання ",
    //         time: "25:26",
    //         url: "https://youtu.be/LEU3cd3vNes?t=1526",
    //         embadedUrl: "https://www.youtube.com/embed/LEU3cd3vNes?start=1526",
    //       },
    //       {
    //         description: "як обирати фото для знайомств",
    //         time: "28:43",
    //         url: "https://youtu.be/LEU3cd3vNes?t=1723",
    //         embadedUrl: "https://www.youtube.com/embed/LEU3cd3vNes?start=1723",
    //       },
    //       {
    //         description: "історія про кохання та математика",
    //         time: "31:15",
    //         url: "https://youtu.be/LEU3cd3vNes?t=1875",
    //         embadedUrl: "https://www.youtube.com/embed/LEU3cd3vNes?start=1875",
    //       },
    //       {
    //         description: "ти вкрав мій мозок ",
    //         time: "33:57",
    //         url: "https://youtu.be/LEU3cd3vNes?t=2037",
    //         embadedUrl: "https://www.youtube.com/embed/LEU3cd3vNes?start=2037",
    //       },
    //       {
    //         description: "мозок обирає симетрію",
    //         time: "38:55",
    //         url: "https://youtu.be/LEU3cd3vNes?t=2335",
    //         embadedUrl: "https://www.youtube.com/embed/LEU3cd3vNes?start=2335",
    //       },
    //       {
    //         description: "нас приваблює не наш запах",
    //         time: "39:43",
    //         url: "https://youtu.be/LEU3cd3vNes?t=2383",
    //         embadedUrl: "https://www.youtube.com/embed/LEU3cd3vNes?start=2383",
    //       },
    //       {
    //         description: "любов і хіть - не антоніми",
    //         time: "43:33",
    //         url: "https://youtu.be/LEU3cd3vNes?t=2613",
    //         embadedUrl: "https://www.youtube.com/embed/LEU3cd3vNes?start=2613",
    //       },
    //       {
    //         description: "водій маршрутки та розлади (фантасмагорія)",
    //         time: "49:00",
    //         url: "https://youtu.be/LEU3cd3vNes?t=2940",
    //         embadedUrl: "https://www.youtube.com/embed/LEU3cd3vNes?start=2940",
    //       },
    //       {
    //         description: "втрата коханого наближає смерть",
    //         time: "50:39",
    //         url: "https://youtu.be/LEU3cd3vNes?t=3039",
    //         embadedUrl: "https://www.youtube.com/embed/LEU3cd3vNes?start=3039",
    //       },
    //       {
    //         description: "кохання діє однаково на всіх",
    //         time: "53:25",
    //         url: "https://youtu.be/LEU3cd3vNes?t=3205",
    //         embadedUrl: "https://www.youtube.com/embed/LEU3cd3vNes?start=3205",
    //       },
    //       {
    //         description: "як допомогти самотнім",
    //         time: "54:44",
    //         url: "https://youtu.be/LEU3cd3vNes?t=3284",
    //         embadedUrl: "https://www.youtube.com/embed/LEU3cd3vNes?start=3284",
    //       },
    //     ],
    //   },
    // ];
  }
}

export default new VideoDataService();
