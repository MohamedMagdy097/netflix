import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tv-details',
  templateUrl: './tv-details.component.html',
  styleUrls: ['./tv-details.component.css']
})
export class TvDetailsComponent implements OnInit {
    base_path:string = "https://image.tmdb.org/t/p/original";

    allTv:any[] = [
        {
          adult: false,
          backdrop_path: "/vanNED66ty4Kc45IMcGI7edQBwH.jpg",
          id: 211684,
          name: "The Walking Dead: Daryl Dixon",
          original_language: "en",
          original_title: "The Walking Dead: Daryl Dixon",
          overview: "Daryl washes ashore in France and struggles to piece together how he got there and why. The series tracks his journey across a broken but resilient France as he hopes to find a way back home. As he makes the journey, though, the connections he forms along the way complicate his ultimate plan.",
          poster_path: "/kdM24KINoAVK9wjCtDJCkdffEpc.jpg",
          media_type: "tv",
          genre_ids: [
            10765,
            10759
          ],
          popularity: 549.226,
          release_date: "2023-09-10",
          vote_average: 9.244,
          vote_count: 45,
          origin_country: [
            "US"
          ]
        },
        {
          adult: false,
          backdrop_path: "/ujkaUfypsQUkdBfCbVFXozKua3H.jpg",
          id: 114461,
          name: "Ahsoka",
          original_language: "en",
          original_title: "Ahsoka",
          overview: "Former Jedi Knight Ahsoka Tano investigates an emerging threat to a vulnerable galaxy.",
          poster_path: "/laCJxobHoPVaLQTKxc14Y2zV64J.jpg",
          media_type: "tv",
          genre_ids: [
            10765,
            10759
          ],
          popularity: 876.324,
          release_date: "2023-08-22",
          vote_average: 8,
          vote_count: 171,
          origin_country: [
            "US"
          ]
        },
        {
          adult: false,
          backdrop_path: "/aRKQdF6AGbhnF9IAyJbte5epH5R.jpg",
          id: 111110,
          name: "ONE PIECE",
          original_language: "en",
          original_title: "ONE PIECE",
          overview: "With his straw hat and ragtag crew, young pirate Monkey D. Luffy goes on an epic voyage for treasure in this live-action adaptation of the popular manga.",
          poster_path: "/rVX05xRKS5JhEYQFObCi4lAnZT4.jpg",
          media_type: "tv",
          genre_ids: [
            10759,
            10765
          ],
          popularity: 1433.453,
          release_date: "2023-08-31",
          vote_average: 8.3,
          vote_count: 455,
          origin_country: [
            "US"
          ]
        },
        {
          adult: false,
          backdrop_path: "/a6ptrTUH1c5OdWanjyYtAkOuYD0.jpg",
          id: 37854,
          name: "One Piece",
          original_language: "ja",
          original_title: "ワンピース",
          overview: "Years ago, the fearsome Pirate King, Gol D. Roger was executed leaving a huge pile of treasure and the famous \"One Piece\" behind. Whoever claims the \"One Piece\" will be named the new King of the Pirates.\n\nMonkey D. Luffy, a boy who consumed a \"Devil Fruit,\" decides to follow in the footsteps of his idol, the pirate Shanks, and find the One Piece. It helps, of course, that his body has the properties of rubber and that he's surrounded by a bevy of skilled fighters and thieves to help him along the way.\n\nLuffy will do anything to get the One Piece and become King of the Pirates!",
          poster_path: "/fcXdJlbSdUEeMSJFsXKsznGwwok.jpg",
          media_type: "tv",
          genre_ids: [
            10759,
            35,
            16
          ],
          popularity: 235.676,
          release_date: "1999-10-20",
          vote_average: 8.724,
          vote_count: 4000,
          origin_country: [
            "JP"
          ]
        },
        {
          adult: false,
          backdrop_path: "/y0ZuGEbK4AXppwYnN41LJ7q2nzh.jpg",
          id: 229221,
          name: "Dear Child",
          original_language: "de",
          original_title: "Liebes Kind",
          overview: "A mysterious woman's escape from her harrowing captivity points investigators toward the dark truth behind an unsolved disappearance 13 years earlier.",
          poster_path: "/bBj5EsnoClhEhnspe4YTV6Gs624.jpg",
          media_type: "tv",
          genre_ids: [
            80,
            18,
            9648
          ],
          popularity: 279.853,
          release_date: "2023-09-07",
          vote_average: 7.5,
          vote_count: 26,
          origin_country: [
            "DE"
          ]
        },
        {
          adult: false,
          backdrop_path: "/kjUcLbTOtEnZh4D6tZ88RNK6dc3.jpg",
          id: 229962,
          name: "Burning Body",
          original_language: "es",
          original_title: "El cuerpo en llamas",
          overview: "When a police officer is murdered and set on fire, all eyes focus on two other agents: his girlfriend and her lover.",
          poster_path: "/ttUAM6vZ7IhLfEFeBtWKVom3LVQ.jpg",
          media_type: "tv",
          genre_ids: [
            18,
            9648
          ],
          popularity: 338.241,
          release_date: "2023-09-08",
          vote_average: 6.769,
          vote_count: 13,
          origin_country: [
            "ES"
          ]
        },
        {
          adult: false,
          backdrop_path: "/1Q7HS0d3gGsN5MOI4all8zYU0gq.jpg",
          id: 232125,
          name: "I Am Groot",
          original_language: "en",
          original_title: "I Am Groot",
          overview: "There’s no guarding the galaxy from this mischievous toddler! Get ready as Baby Groot takes center stage in his very own collection of shorts, exploring his glory days growing up and getting into trouble among the stars.",
          poster_path: "/3QfQYECgu6DX5UUWCBvv1Fl0BAJ.jpg",
          media_type: "tv",
          genre_ids: [
            16,
            35,
            10751,
            10765
          ],
          popularity: 130.442,
          release_date: "2022-08-10",
          vote_average: 7.678,
          vote_count: 87,
          origin_country: [
            "US"
          ]
        },
        {
          adult: false,
          backdrop_path: "/nCRDun2QuNyzaLl6MqFztaQgcQe.jpg",
          id: 131992,
          name: "The Changeling",
          original_language: "en",
          original_title: "The Changeling",
          overview: "Apollo and Emma's love story is a fairy tale—until Emma mysteriously vanishes. Bereft, Apollo finds himself on a death-defying odyssey through a New York City he didn't know existed.",
          poster_path: "/5VlYgwYUEHZUPavCBol2WgIECwc.jpg",
          media_type: "tv",
          genre_ids: [
            9648,
            18,
            10765
          ],
          popularity: 195.769,
          release_date: "2023-09-07",
          vote_average: 8.833,
          vote_count: 18,
          origin_country: [
            "US"
          ]
        },
        {
          adult: false,
          backdrop_path: "/rqbCbjB19amtOtFQbb3K2lgm2zv.jpg",
          id: 1429,
          name: "Attack on Titan",
          original_language: "ja",
          original_title: "進撃の巨人",
          overview: "Several hundred years ago, humans were nearly exterminated by Titans. Titans are typically several stories tall, seem to have no intelligence, devour human beings and, worst of all, seem to do it for the pleasure rather than as a food source. A small percentage of humanity survived by walling themselves in a city protected by extremely high walls, even taller than the biggest Titans. Flash forward to the present and the city has not seen a Titan in over 100 years. Teenage boy Eren and his foster sister Mikasa witness something horrific as the city walls are destroyed by a Colossal Titan that appears out of thin air. As the smaller Titans flood the city, the two kids watch in horror as their mother is eaten alive. Eren vows that he will murder every single Titan and take revenge for all of mankind.",
          poster_path: "/8C5gYahMFmzHKGNID8QrG5t25WU.jpg",
          media_type: "tv",
          genre_ids: [
            10765,
            16,
            10759
          ],
          popularity: 96.794,
          release_date: "2013-04-07",
          vote_average: 8.656,
          vote_count: 5456,
          origin_country: [
            "JP"
          ]
        },
        {
          adult: false,
          backdrop_path: "/xVMVIetkeKgdqKmROK1tBjxivYG.jpg",
          id: 90282,
          name: "The Morning Show",
          original_language: "en",
          original_title: "The Morning Show",
          overview: "A behind-the-scenes look at the lives of the people who help America wake up in the morning, exploring the unique challenges faced by the men and women who carry out this daily televised ritual.",
          poster_path: "/oTfAheayTCWoselYuty8D6Lem2t.jpg",
          media_type: "tv",
          genre_ids: [
            18
          ],
          popularity: 109.332,
          release_date: "2019-11-01",
          vote_average: 7.913,
          vote_count: 524,
          origin_country: [
            "US"
          ]
        },
        {
          adult: false,
          backdrop_path: "/2jcQ11nMT2st6o87QdRRHTWHl5u.jpg",
          id: 196474,
          name: "A Time Called You",
          original_language: "ko",
          original_title: "너의 시간 속으로",
          overview: "A grieving woman magically travels through time to 1998, where she meets a man with an uncanny resemblance to her late love. (Korean remake of Taiwanese drama “Someday Or One Day”)",
          poster_path: "/txBJvZ7cComCxoolgyedsxIyHKF.jpg",
          media_type: "tv",
          genre_ids: [
            18,
            9648
          ],
          popularity: 132.239,
          release_date: "2023-09-08",
          vote_average: 8.333,
          vote_count: 12,
          origin_country: [
            "KR"
          ]
        },
        {
          adult: false,
          backdrop_path: "/jAz9AZpznu3ELhUp1XiMEeQv2Se.jpg",
          id: 93544,
          name: "Top Boy",
          original_language: "en",
          original_title: "Top Boy",
          overview: "Two seasoned drug dealers return to the gritty street of London, but their pursuit of money and power is threatened by a young and ruthless hustler.",
          poster_path: "/7Kk3gRMypBHX6gHqbMaa1gXPycn.jpg",
          media_type: "tv",
          genre_ids: [
            80,
            18
          ],
          popularity: 170.734,
          release_date: "2019-09-13",
          vote_average: 8.145,
          vote_count: 76,
          origin_country: [
            "GB"
          ]
        },
        {
          adult: false,
          backdrop_path: "/qtfMr08KQsWXnCHY0a96N8NpQ2l.jpg",
          id: 30984,
          name: "Bleach",
          original_language: "ja",
          original_title: "BLEACH",
          overview: "For as long as he can remember, Ichigo Kurosaki has been able to see ghosts. But when he meets Rukia, a Soul Reaper who battles evil spirits known as Hollows, he finds his life is changed forever. Now, with a newfound wealth of spiritual energy, Ichigo discovers his true calling: to protect the living and the dead from evil.",
          poster_path: "/2EewmxXe72ogD0EaWM8gqa0ccIw.jpg",
          media_type: "tv",
          genre_ids: [
            10759,
            16,
            10765
          ],
          popularity: 428.63,
          release_date: "2004-10-05",
          vote_average: 8.401,
          vote_count: 1586,
          origin_country: [
            "JP"
          ]
        },
        {
          adult: false,
          backdrop_path: "/sEKwdnrnO3I1DE98zYG7HLA2wEI.jpg",
          id: 231340,
          name: "The Killing Kind",
          original_language: "en",
          original_title: "The Killing Kind",
          overview: "Barrister Ingrid Lewis defends John Webster against stalking charges, only for Webster to turn on her.",
          poster_path: "/k5fMpRm7EghsT4hTM4EGwuqsGQ5.jpg",
          media_type: "tv",
          genre_ids: [
            18
          ],
          popularity: 53.698,
          release_date: "2023-09-07",
          vote_average: 10,
          vote_count: 2,
          origin_country: [
            "GB"
          ]
        },
        {
          adult: false,
          backdrop_path: "/9JpYfnBOu5l9oBKvIZQovOXi8sy.jpg",
          id: 107113,
          name: "Only Murders in the Building",
          original_language: "en",
          original_title: "Only Murders in the Building",
          overview: "Three strangers share an obsession with true crime and suddenly find themselves wrapped up in one.",
          poster_path: "/yhx6PnU3L2a6FnEFGOlBKTZ8TSD.jpg",
          media_type: "tv",
          genre_ids: [
            35,
            9648,
            80
          ],
          popularity: 485.49,
          release_date: "2021-08-31",
          vote_average: 8.463,
          vote_count: 1098,
          origin_country: [
            "US"
          ]
        },
        {
          adult: false,
          backdrop_path: "/oahCTL082gwu6fYrxEOBe546uvB.jpg",
          id: 71914,
          name: "The Wheel of Time",
          original_language: "en",
          original_title: "The Wheel of Time",
          overview: "Follow Moiraine, a member of the shadowy and influential all-female organization called the “Aes Sedai” as she embarks on a dangerous, world-spanning journey with five young men and women. Moiraine believes one of them might be the reincarnation of an incredibly powerful individual, whom prophecies say will either save humanity or destroy it.",
          poster_path: "/ihBi24EIr5kwAeY2PqmsgAcCj4n.jpg",
          media_type: "tv",
          genre_ids: [
            10765,
            18
          ],
          popularity: 978.075,
          release_date: "2021-11-18",
          vote_average: 7.739,
          vote_count: 1762,
          origin_country: [
            "US"
          ]
        },
        {
          adult: false,
          backdrop_path: "/pMCvRynXABgLBMKHYa2UXjTBMsU.jpg",
          id: 615,
          name: "Futurama",
          original_language: "en",
          original_title: "Futurama",
          overview: "The adventures of a late-20th-century New York City pizza delivery boy, Philip J. Fry, who, after being unwittingly cryogenically frozen for one thousand years, finds employment at Planet Express, an interplanetary delivery company in the retro-futuristic 31st century.",
          poster_path: "/7RRHbCUtAsVmKI6FEMzZB6Re88P.jpg",
          media_type: "tv",
          genre_ids: [
            16,
            35,
            10765
          ],
          popularity: 609.071,
          release_date: "1999-03-28",
          vote_average: 8.396,
          vote_count: 2853,
          origin_country: [
            "US"
          ]
        },
        {
          adult: false,
          backdrop_path: "/gmECX1DvFgdUPjtio2zaL8BPYPu.jpg",
          id: 95479,
          name: "Jujutsu Kaisen",
          original_language: "ja",
          original_title: "呪術廻戦",
          overview: "Yuji Itadori is a boy with tremendous physical strength, though he lives a completely ordinary high school life. One day, to save a classmate who has been attacked by curses, he eats the finger of Ryomen Sukuna, taking the curse into his own soul. From then on, he shares one body with Ryomen Sukuna. Guided by the most powerful of sorcerers, Satoru Gojo, Itadori is admitted to Tokyo Jujutsu High School, an organization that fights the curses... and thus begins the heroic tale of a boy who became a curse to exorcise a curse, a life from which he could never turn back.",
          poster_path: "/hFWP5HkbVEe40hrXgtCeQxoccHE.jpg",
          media_type: "tv",
          genre_ids: [
            16,
            10759,
            10765
          ],
          popularity: 503.643,
          release_date: "2020-10-03",
          vote_average: 8.559,
          vote_count: 2751,
          origin_country: [
            "JP"
          ]
        },
        {
          adult: false,
          backdrop_path: "/2OMB0ynKlyIenMJWI2Dy9IWT4c.jpg",
          id: 1399,
          name: "Game of Thrones",
          original_language: "en",
          original_title: "Game of Thrones",
          overview: "Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war. All while a very ancient evil awakens in the farthest north. Amidst the war, a neglected military order of misfits, the Night's Watch, is all that stands between the realms of men and icy horrors beyond.",
          poster_path: "/1XS1oqL89opfnbLl8WnZY1O1uJx.jpg",
          media_type: "tv",
          genre_ids: [
            10765,
            18,
            10759
          ],
          popularity: 748.527,
          release_date: "2011-04-17",
          vote_average: 8.441,
          vote_count: 21749,
          origin_country: [
            "US"
          ]
        },
        {
          adult: false,
          backdrop_path: "/7NNNXo0qG2SqH4JoG7GPvJ2hzes.jpg",
          id: 93740,
          name: "Foundation",
          original_language: "en",
          original_title: "Foundation",
          overview: "Follow a band of exiles on their monumental journey to save humanity and rebuild civilization amid the fall of the Galactic Empire.",
          poster_path: "/1AZERr7KEJBpcchQ6vFcbUUC0Zw.jpg",
          media_type: "tv",
          genre_ids: [
            10765,
            18
          ],
          popularity: 375.147,
          release_date: "2021-09-24",
          vote_average: 7.9,
          vote_count: 940,
          origin_country: [
            "IE"
          ]
        }
    ];

    selectedtv = {
        adult: false,
          backdrop_path: "/vanNED66ty4Kc45IMcGI7edQBwH.jpg",
          id: 211684,
          name: "The Walking Dead: Daryl Dixon",
          original_language: "en",
          original_title: "The Walking Dead: Daryl Dixon",
          overview: "Daryl washes ashore in France and struggles to piece together how he got there and why. The series tracks his journey across a broken but resilient France as he hopes to find a way back home. As he makes the journey, though, the connections he forms along the way complicate his ultimate plan.",
          poster_path: "/kdM24KINoAVK9wjCtDJCkdffEpc.jpg",
          media_type: "tv",
          genre_ids: [
            10765,
            10759
          ],
          popularity: 549.226,
          release_date: "2023-09-10",
          vote_average: 9.244,
          vote_count: 45,
          origin_country: [
            "US"
          ]
    };

    constructor(private route:ActivatedRoute) {
    }
    ngOnInit(): void {
        let id = parseInt(this.route.snapshot.paramMap.get('id')!);
        console.log(id);
        this.selectedtv = this.allTv.find((movie)=> movie.id == id);
    }
    
}
